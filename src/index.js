import m from "mithril";
import "beercss";
import "material-dynamic-colors";

import { InstancesView } from "./views/instance/InstancesView";
import { GameView } from "./views/game/GameView";
import { GameLogView } from "./views/game/GameLogView";
import { VersionsView } from "./views/version/VersionsView";
import { InstanceEditView } from "./views/instance/InstanceEditView";
import { VersionEditView } from "./views/version/VersionEditView";
import { ProfilesView } from "./views/profile/ProfilesView";
import { SettingsView } from "./views/misc/SettingsView";
import { AboutView } from "./views/misc/AboutView";

var root = document.body

m.route(root, "/instances", {
    "/instances": InstancesView,
    "/instance/edit": InstanceEditView,

    "/versions": VersionsView,
    "/version/edit": VersionEditView,

    "/profiles": ProfilesView,

    "/game": GameView,
    "/game/log": GameLogView,

    "/settings": SettingsView,
    "/about": AboutView
});