import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalDivider extends Schema.Component {
  collectionName: 'components_global_dividers';
  info: {
    displayName: 'Divider';
    icon: 'layer';
    description: '';
  };
  attributes: {};
}

export interface HomepageOpenSourceProject extends Schema.Component {
  collectionName: 'components_homepage_open_source_projects';
  info: {
    displayName: 'OpenSource Project';
    icon: 'earth';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    url: Attribute.String;
  };
}

export interface HomepageOpenSource extends Schema.Component {
  collectionName: 'components_homepage_open_sources';
  info: {
    displayName: 'Open Source';
    icon: 'code';
  };
  attributes: {
    title: Attribute.String;
    sideNote: Attribute.Text;
    description: Attribute.Text;
    projects: Attribute.Component<'homepage.open-source-project', true>;
  };
}

export interface HomepageProjects extends Schema.Component {
  collectionName: 'components_homepage_projects';
  info: {
    displayName: 'Projects';
    icon: 'lightbulb';
  };
  attributes: {
    title: Attribute.String;
    projects: Attribute.Relation<
      'homepage.projects',
      'oneToMany',
      'api::project.project'
    >;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ProjectSkill extends Schema.Component {
  collectionName: 'components_project_skills';
  info: {
    displayName: 'Skill';
    icon: 'cube';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface ProjectVideo extends Schema.Component {
  collectionName: 'components_project_videos';
  info: {
    displayName: 'Video';
    icon: 'play';
  };
  attributes: {
    title: Attribute.String;
    embed: Attribute.Text & Attribute.CustomField<'plugin::oembed.oembed'>;
    description: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.divider': GlobalDivider;
      'homepage.open-source-project': HomepageOpenSourceProject;
      'homepage.open-source': HomepageOpenSource;
      'homepage.projects': HomepageProjects;
      'links.link': LinksLink;
      'project.skill': ProjectSkill;
      'project.video': ProjectVideo;
    }
  }
}
