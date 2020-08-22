import { types, flow } from "mobx-state-tree";
import { auth } from "../../components/auth/auth";
import { Viewer } from "./viewerModel";

export const AuthModel = types
    .model('AuthModel', {
        isLoggedIn:false,
        isError:false,
        isLoading:false,
        viewer:types.optional(Viewer, {})
    })
    .actions(self => ({
        loginReq:flow(function *({ email, password }) {
            try {
                self.loadingStart();
                const res = yield auth.login({ email, password });
                const resData = res.data;
                self.setUserData(resData);
                self.loadingEnd(resData)
            }catch (e) {
                self.errorReq(e)
            }
        }),
        registerReq:flow(function *(values) {
            try {
                self.loadingStart();
                const res = yield auth.register(values);
                const resData = res.data;
                self.setUserData(resData);
                self.loadingEnd(resData)
            }catch (e) {
                self.errorReq(e)
            }
        }),
        getUser:flow(function *() {
            const token = auth.getTokenFromStorage();
            // if (!token) return
            try {
                self.loadingStart();
                const res = yield auth.getUser(token);
                const resData = res.data;
                self.setUserData({
                    displayName:resData.users[0].displayName ,
                    idToken:token
                });
                self.loadingEnd(resData)
            }catch (e) {
                self.errorReq(e)
            }
        }),
        logOut:function(){
          localStorage.removeItem('token');
          self.isLoggedIn = false;
          auth.token = ''
        },
        setViewer:function(name){
              self.viewer.set_user(name)
        },
        loadingStart:function () {
            self.isError=false;
            self.isLoading=true;
        },
        loadingEnd:function () {
            self.isError=false;
            self.isLoading=false;
            self.isLoggedIn=true;
            console.log(auth)
        },
        errorReq:function (e) {
            console.log(e)
            self.isError=true;
            self.isLoading=false;
        },
        setUserData:function ({displayName, idToken}) {
            auth.setToken(idToken);
            auth.setTokenToStorage(idToken);
            self.setViewer(displayName)
        }
    }));