import { types } from "mobx-state-tree";

export const Viewer = types
    .model('Viewer', {
        name:types.optional(types.string, '')
    })
    .views(self => ({
        get_user: function(){
            return self.name
        }
    }))
    .actions(self => ({
        set_user: function (name) {
            self.name = name
        }
    }))