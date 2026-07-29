import m from "mithril";
import "beercss";
import "material-dynamic-colors";

import { DB_NAME, DB_STORE_NAME } from "./constants";

import { InstancesView } from "./views/instance/InstancesView";
import { GameView } from "./views/game/GameView";
import { GameLogView } from "./views/game/GameLogView";
import { VersionsView } from "./views/version/VersionsView";
import { InstanceEditView } from "./views/instance/InstanceEditView";
import { VersionEditView } from "./views/version/VersionEditView";
import { AccountsView } from "./views/account/AccountsView";
import { SettingsView } from "./views/misc/SettingsView";
import { AboutView } from "./views/misc/AboutView";
import { FileHelper } from "./libs/helpers/FileHelper";

var root = document.body

FileHelper.initDB(DB_NAME, DB_STORE_NAME);

m.route(root, "/instances", {
    "/instances": InstancesView,
    "/instance/edit": InstanceEditView,

    "/versions": VersionsView,
    "/version/edit": VersionEditView,

    "/accounts": AccountsView,

    "/game/:uuid": GameView,
    "/game/log/:uuid": GameLogView,

    "/settings": SettingsView,
    "/about": AboutView
});