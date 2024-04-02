import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalDivider extends Schema.Component {
  collectionName: 'components_global_dividers';
  info: {
    displayName: 'Divider';
    icon: 'layer';
    description: '';
  };
  attributes: {
    divider: Attribute.String & Attribute.DefaultTo<'This is a simple divider'>;
  };
}

export interface GlobalLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface HomepageContact extends Schema.Component {
  collectionName: 'components_homepage_contacts';
  info: {
    displayName: 'Contact';
    icon: 'user';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'global.link', true>;
    title: Attribute.String &
      Attribute.CustomField<
        'plugin::bold-title-editor.title',
        {
          output: 'html';
        }
      >;
  };
}

export interface HomepageHeroAdjective extends Schema.Component {
  collectionName: 'components_homepage_hero_adjectives';
  info: {
    displayName: 'Hero Adjective';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    color1: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
    color2: Attribute.String &
      Attribute.Required &
      Attribute.CustomField<'plugin::color-picker.color'>;
    effect: Attribute.Enumeration<['wave', 'shake', 'blurry']> &
      Attribute.Required &
      Attribute.DefaultTo<'wave'>;
  };
}

export interface HomepageHero extends Schema.Component {
  collectionName: 'components_homepage_heroes';
  info: {
    displayName: 'Hero';
    icon: 'layer';
    description: '';
  };
  attributes: {
    beforeName: Attribute.String;
    name: Attribute.String;
    afterName: Attribute.String;
    beforeAdj: Attribute.String;
    vowelPrefix: Attribute.String;
    afterAdj: Attribute.String;
    adjectives: Attribute.Component<'homepage.hero-adjective', true>;
  };
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
    description: '';
  };
  attributes: {
    sideNote: Attribute.Text;
    description: Attribute.Text;
    projects: Attribute.Component<'homepage.open-source-project', true>;
    title: Attribute.String &
      Attribute.CustomField<
        'plugin::bold-title-editor.title',
        {
          output: 'html';
        }
      >;
  };
}

export interface HomepageProjects extends Schema.Component {
  collectionName: 'components_homepage_projects';
  info: {
    displayName: 'Projects';
    icon: 'lightbulb';
    description: '';
  };
  attributes: {
    projects: Attribute.Relation<
      'homepage.projects',
      'oneToMany',
      'api::project.project'
    >;
    title: Attribute.String &
      Attribute.CustomField<
        'plugin::bold-title-editor.title',
        {
          output: 'html';
        }
      >;
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
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    embed: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.divider': GlobalDivider;
      'global.link': GlobalLink;
      'homepage.contact': HomepageContact;
      'homepage.hero-adjective': HomepageHeroAdjective;
      'homepage.hero': HomepageHero;
      'homepage.open-source-project': HomepageOpenSourceProject;
      'homepage.open-source': HomepageOpenSource;
      'homepage.projects': HomepageProjects;
      'project.skill': ProjectSkill;
      'project.video': ProjectVideo;
    }
  }
}
