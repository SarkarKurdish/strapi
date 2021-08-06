const data = {
  components: {
    'default.closingperiod': {
      uid: 'default.closingperiod',
      category: '',
      schema: {
        icon: 'angry',
        name: 'closingperiod',
        description: '',
        connection: 'default',
        collectionName: 'components_closingperiods',
        attributes: [
          {
            name: 'label',
            type: 'string',
          },

          {
            name: 'start_date',
            type: 'date',
            required: true,
          },
          {
            name: 'end_date',
            type: 'date',
            required: true,
          },
          {
            name: 'media',
            type: 'media',
            multiple: false,
            required: false,
          },
          { name: 'dish', component: 'default.dish', type: 'component' },
        ],
      },
    },
    'default.dish': {
      uid: 'default.dish',
      category: 'default',
      schema: {
        icon: 'book',
        name: 'dish',
        description: '',
        connection: 'default',
        collectionName: 'components_dishes',
        attributes: [
          {
            name: 'name',
            type: 'string',
            required: true,
            default: 'My super dish',
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'price',
            type: 'float',
          },
          {
            name: 'picture',
            type: 'media',
            multiple: false,
            required: false,
          },
          {
            name: 'very_long_description',
            type: 'richtext',
          },
          {
            name: 'category',
            relation: 'oneToOne',
            target: 'api::category.category',
            targetAttribute: null,
            type: 'relation',
          },
        ],
      },
    },
    'default.openingtimes': {
      uid: 'default.openingtimes',
      category: 'default',
      schema: {
        icon: 'calendar',
        name: 'openingtimes',
        description: '',
        connection: 'default',
        collectionName: 'components_openingtimes',
        attributes: [
          {
            name: 'label',
            type: 'string',
            required: true,
            default: 'something',
          },
          {
            name: 'time',
            type: 'string',
          },
        ],
      },
    },
    'default.restaurantservice': {
      uid: 'default.restaurantservice',
      category: 'default',
      schema: {
        icon: 'strapi',
        name: 'restaurantservice',
        description: '',
        connection: 'default',
        collectionName: 'components_restaurantservices',
        attributes: [
          {
            name: 'name',
            type: 'string',
            required: true,
            default: 'something',
          },
          {
            name: 'media',
            type: 'media',
            multiple: false,
            required: false,
          },
          { name: 'is_available', type: 'boolean', required: true, default: true },
        ],
      },
    },
  },
  contentTypes: {
    'plugin::myplugin.test': {
      uid: '',
      plugin: 'myplugin',
      schema: {
        name: 'test',
        description: '',
        connection: 'default',
        collectionName: 'myplugin_test',
        attributes: [
          {
            name: 'type',
            type: 'string',
            required: true,
            unique: true,
            configurable: true,
          },
        ],
      },
    },
    'plugin::users-permissions.role': {
      uid: 'plugin::users-permissions.role',
      plugin: 'users-permissions',
      schema: {
        name: 'role',
        description: '',
        connection: 'default',
        collectionName: '',
        attributes: [
          {
            name: 'name',
            type: 'string',
            minLength: 3,
            required: true,
            configurable: false,
          },
          { type: 'string', configurable: false, name: 'description' },
          { name: 'type', type: 'string', unique: true, configurable: false },
          {
            name: 'permissions',
            relation: 'oneToMany',
            target: 'plugin::users-permissions.permission',
            plugin: 'users-permissions',
            targetAttribute: 'role',
            configurable: false,
            type: 'relation',
          },
          {
            name: 'users',
            relation: 'oneToMany',
            target: 'plugin::users-permissions.user',
            plugin: 'users-permissions',
            type: 'relation',
            targetAttribute: 'role',
          },
        ],
      },
    },
    'api::address.address': {
      uid: 'api::address.address',
      schema: {
        name: 'address',
        description: '',
        connection: 'default',
        collectionName: '',
        attributes: [
          { name: 'geolocation', type: 'json', required: true },
          { name: 'city', type: 'string', required: true },
          { name: 'postal_coder', type: 'string' },
          {
            name: 'category',
            relation: 'oneToOne',
            target: 'api::category.category',
            targetAttribute: null,
            type: 'relation',
          },
          { name: 'cover', type: 'media', multiple: false, required: false },
          { name: 'images', type: 'media', multiple: true, required: false },
          { name: 'full_name', type: 'string', required: true },
        ],
      },
    },
    'api::menusection.menusection': {
      uid: 'api::menusection.menusection',
      schema: {
        name: 'menusection',
        description: '',
        connection: 'default',
        collectionName: '',
        attributes: [
          { name: 'name', type: 'string', required: true, minLength: 6 },
          {
            name: 'dishes',
            component: 'default.dish',
            type: 'component',
            repeatable: true,
          },
          {
            name: 'menu',
            relation: 'manyToOne',
            target: 'api::menu.menu',
            targetAttribute: 'menusections',
            type: 'relation',
          },
        ],
      },
    },
    'api::country.country': {
      uid: 'api::country.country',
      schema: {
        name: 'country',
        description: '',
        connection: 'default',
        collectionName: '',
        attributes: [
          { name: 'name', type: 'string', required: true, minLength: 3 },
          { name: 'code', type: 'string', maxLength: 3, unique: true, minLength: 2 },
        ],
      },
    },
    'plugin::users-permissions.user': {
      uid: 'plugin::users-permissions.user',
      plugin: 'users-permissions',
      schema: {
        name: 'users',
        description: '',
        connection: 'default',
        collectionName: '',
        attributes: [
          {
            name: 'username',
            type: 'string',
            minLength: 3,
            unique: true,
            configurable: false,
            required: true,
          },
          {
            name: 'email',
            type: 'email',
            minLength: 6,
            configurable: false,
            required: true,
          },
          { name: 'provider', type: 'string', configurable: false },
          {
            name: 'password',
            type: 'password',
            minLength: 6,
            configurable: false,
            private: true,
          },
          {
            name: 'resetPasswordToken',
            type: 'string',
            configurable: false,
            private: true,
          },
          { name: 'confirmed', type: 'boolean', default: false, configurable: false },
          { name: 'blocked', type: 'boolean', default: false, configurable: false },
          {
            name: 'role',
            relation: 'manyToOne',
            target: 'plugin::users-permissions.role',
            plugin: 'users-permissions',
            targetAttribute: 'users',
            type: 'relation',
          },
          { name: 'picture', type: 'media', multiple: false, required: false },
        ],
      },
    },
    'api::review.review': {
      uid: 'api::review.review',
      schema: {
        name: 'review',
        description: '',
        connection: 'default',
        collectionName: '',
        attributes: [
          { name: 'comment', type: 'text', required: true },
          { name: 'rating', type: 'integer', required: true, min: 1, max: 5 },
          {
            name: 'likes',
            relation: 'oneToMany',
            target: 'api::like.like',
            targetAttribute: 'review',
            type: 'relation',
          },
          {
            name: 'author',
            relation: 'oneToOne',
            target: 'plugin::users-permissions.user',
            targetAttribute: null,
            plugin: 'users-permissions',
            type: 'relation',
          },
          {
            name: 'restaurant',
            relation: 'oneToOne',
            target: 'api::restaurant.restaurant',
            targetAttribute: null,
            type: 'relation',
          },
        ],
      },
    },
    'api::like.like': {
      uid: 'api::like.like',
      schema: {
        name: 'like',
        description: '',
        connection: 'default',
        collectionName: '',
        attributes: [
          {
            name: 'author',
            relation: 'oneToOne',
            target: 'plugin::users-permissions.user',
            targetAttribute: null,
            plugin: 'users-permissions',
            type: 'relation',
          },
          {
            name: 'review',
            relation: 'manyToOne',
            target: 'api::review.review',
            targetAttribute: 'likes',
            type: 'relation',
          },
        ],
      },
    },
    'api::category.category': {
      uid: 'api::category.category',
      schema: {
        name: 'category',
        description: '',
        connection: 'default',
        collectionName: '',
        attributes: [{ name: 'name', type: 'string' }],
      },
    },
    'plugin::users-permissions.permission': {
      uid: 'plugin::users-permissions.permission',
      plugin: 'users-permissions',
      schema: {
        name: 'permission',
        description: '',
        connection: 'default',
        collectionName: '',
        attributes: [
          { name: 'type', type: 'string', required: true, configurable: false },
          { name: 'controller', type: 'string', required: true, configurable: false },
          { name: 'action', type: 'string', required: true, configurable: false },
          { name: 'enabled', type: 'boolean', required: true, configurable: false },
          { name: 'policy', type: 'string', configurable: false },
          {
            name: 'role',
            relation: 'manyToOne',
            target: 'plugin::users-permissions.role',
            plugin: 'users-permissions',
            targetAttribute: 'permissions',
            type: 'relation',
          },
        ],
      },
    },
    'api::menu.menu': {
      uid: 'api::menu.menu',
      schema: {
        name: 'menu',
        description: '',
        connection: 'default',
        collectionName: '',
        attributes: [
          { name: 'description', type: 'text' },
          {
            name: 'menusections',
            relation: 'oneToMany',
            target: 'api::menusection.menusection',
            targetAttribute: 'menu',
            type: 'relation',
          },
          {
            name: 'restaurant',
            relation: 'oneToOne',
            target: 'api::restaurant.restaurant',
            targetAttribute: 'menu',
            type: 'relation',
          },
        ],
      },
    },
    'api::restaurant.restaurant': {
      uid: 'api::restaurant.restaurant',
      schema: {
        name: 'restaurant',
        description: '',
        connection: 'default',
        collectionName: '',
        attributes: [
          {
            name: 'price_range',
            enum: ['very_cheap', 'cheap', 'average', 'expensive', 'very_expensive'],
            type: 'enumeration',
          },
          {
            name: 'closing_period',
            component: 'default.closingperiod',
            type: 'component',
          },
          { name: 'name', maxLength: 50, required: true, minLength: 5, type: 'string' },
          {
            name: 'address',
            relation: 'oneToOne',
            target: 'api::address.address',
            targetAttribute: null,
            type: 'relation',
          },
          { name: 'cover', type: 'media', multiple: false, required: false },
          { name: 'images', type: 'media', multiple: true, required: false },
          { name: 'short_description', type: 'text' },
          { name: 'since', type: 'date' },
          {
            name: 'categories',
            relation: 'oneToMany',
            target: 'api::category.category',
            targetAttribute: null,
            type: 'relation',
          },
          { name: 'description', type: 'richtext', required: true },
          {
            name: 'services',
            component: 'default.restaurantservice',
            repeatable: true,
            type: 'component',
          },
          {
            name: 'menu',
            nature: 'oneToOne',
            target: 'api::menu.menu',
            dominant: false,
            targetAttribute: 'restaurant',
            unique: false,
          },
          {
            name: 'opening_times',
            component: 'default.openingtimes',
            type: 'component',
            repeatable: true,
            min: 1,
            max: 10,
          },
          {
            name: 'dz',
            type: 'dynamiczone',
            components: [
              'default.closingperiod',
              'default.dish',
              'default.openingtimes',
              'default.restaurantservice',
            ],
          },
        ],
      },
    },
    'api::homepage.homepage': {
      uid: 'api::homepage.homepage',
      schema: {
        name: 'homepage',
        attributes: [
          { name: 'title', type: 'string' },
          { name: 'description', type: 'string' },
          { name: 'homepageuidfield', type: 'uid', targetField: 'description' },
        ],
      },
    },
  },
};

export default data;
