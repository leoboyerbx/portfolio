/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import ckeditor from "@ckeditor/strapi-plugin-ckeditor/strapi-admin";
import boldTitleEditor from "@ef2/strapi-plugin-bold-title-editor/strapi-admin";
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import colorPicker from "@strapi/plugin-color-picker/strapi-admin";
import graphql from "@strapi/plugin-graphql/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import slug from "custom-slug/strapi-admin";
import oembed from "strapi-plugin-oembed/strapi-admin";
import previewButton from "strapi-plugin-preview-button/strapi-admin";
import translate from "strapi-plugin-translate/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    ckeditor: ckeditor,
    "bold-title-editor": boldTitleEditor,
    "strapi-cloud": strapiCloud,
    "color-picker": colorPicker,
    graphql: graphql,
    i18n: i18N,
    "users-permissions": usersPermissions,
    slug: slug,
    oembed: oembed,
    "preview-button": previewButton,
    translate: translate,
  },
});
