/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFeideCredentials = /* GraphQL */ `
  query GetFeideCredentials($code: String, $redirect_uri: String) {
    getFeideCredentials(code: $code, redirect_uri: $redirect_uri) {
      access_token
      token_type
      expires_in
      scope
      id_token
    }
  }
`;
export const importRemoteDb = /* GraphQL */ `
  query ImportRemoteDb($GraphQLendpoint: String, $GraphQLAPI_KEY: String) {
    importRemoteDb(
      GraphQLendpoint: $GraphQLendpoint
      GraphQLAPI_KEY: $GraphQLAPI_KEY
    ) {
      success
    }
  }
`;
export const getManager = /* GraphQL */ `
  query GetManager($id: ID!) {
    getManager(id: $id) {
      id
      name
      email
      createdAt
      updatedAt
      license {
        id
        eier
        gyldigFraDato
        aktiv
        ressursnummer
        institusjonsType
        kontaktperson
        kontaktpersonEpost
        adresse
        postnummer
        sted
        brukerantall
        betalt
        managers {
          nextToken
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const listManagers = /* GraphQL */ `
  query ListManagers(
    $filter: ModelManagerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listManagers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        createdAt
        updatedAt
        license {
          id
          eier
          gyldigFraDato
          aktiv
          ressursnummer
          institusjonsType
          kontaktperson
          kontaktpersonEpost
          adresse
          postnummer
          sted
          brukerantall
          betalt
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getLicenseUser = /* GraphQL */ `
  query GetLicenseUser($id: ID!) {
    getLicenseUser(id: $id) {
      id
      ownerOrgNumber
      StartDate
      isGroupLicenseUser
      yourRef
      contactPerson
      contactPersonEmail
      endUserQuantity
      skolekode
      activeInvoiceId
      issueDate
      dueDate
      orderReference
      customerName
      outstandingBalance
      createdAt
      updatedAt
    }
  }
`;
export const listLicenseUsers = /* GraphQL */ `
  query ListLicenseUsers(
    $filter: ModelLicenseUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLicenseUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ownerOrgNumber
        StartDate
        isGroupLicenseUser
        yourRef
        contactPerson
        contactPersonEmail
        endUserQuantity
        skolekode
        activeInvoiceId
        issueDate
        dueDate
        orderReference
        customerName
        outstandingBalance
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLicense = /* GraphQL */ `
  query GetLicense($id: ID!) {
    getLicense(id: $id) {
      id
      eier
      gyldigFraDato
      aktiv
      ressursnummer
      institusjonsType
      kontaktperson
      kontaktpersonEpost
      adresse
      postnummer
      sted
      brukerantall
      betalt
      managers {
        items {
          id
          name
          email
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLicenses = /* GraphQL */ `
  query ListLicenses(
    $filter: ModelLicenseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLicenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        eier
        gyldigFraDato
        aktiv
        ressursnummer
        institusjonsType
        kontaktperson
        kontaktpersonEpost
        adresse
        postnummer
        sted
        brukerantall
        betalt
        managers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      rank
      name
      slug
      type
      createdAt
      updatedAt
      videos {
        items {
          id
          categoryId
          awsId
          title
          slug
          createdAt
          posterTime
          published
          fileName
          type
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rank
        name
        slug
        type
        createdAt
        updatedAt
        videos {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listCategoryByRank = /* GraphQL */ `
  query ListCategoryByRank(
    $slug: String
    $rank: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategoryByRank(
      slug: $slug
      rank: $rank
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        rank
        name
        slug
        type
        createdAt
        updatedAt
        videos {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
      id
      categoryId
      awsId
      title
      slug
      createdAt
      posterTime
      published
      fileName
      type
      updatedAt
      category {
        id
        rank
        name
        slug
        type
        createdAt
        updatedAt
        videos {
          nextToken
        }
      }
      chapters {
        items {
          id
          videoId
          title
          start
          posterTime
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        categoryId
        awsId
        title
        slug
        createdAt
        posterTime
        published
        fileName
        type
        updatedAt
        category {
          id
          rank
          name
          slug
          type
          createdAt
          updatedAt
        }
        chapters {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const videoByCategoryId = /* GraphQL */ `
  query VideoByCategoryId(
    $categoryId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VideoByCategoryId(
      categoryId: $categoryId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        categoryId
        awsId
        title
        slug
        createdAt
        posterTime
        published
        fileName
        type
        updatedAt
        category {
          id
          rank
          name
          slug
          type
          createdAt
          updatedAt
        }
        chapters {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const videoBySlug = /* GraphQL */ `
  query VideoBySlug(
    $slug: String
    $sortDirection: ModelSortDirection
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    VideoBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        categoryId
        awsId
        title
        slug
        createdAt
        posterTime
        published
        fileName
        type
        updatedAt
        category {
          id
          rank
          name
          slug
          type
          createdAt
          updatedAt
        }
        chapters {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getChapter = /* GraphQL */ `
  query GetChapter($id: ID!) {
    getChapter(id: $id) {
      id
      videoId
      title
      start
      posterTime
      createdAt
      updatedAt
      video {
        id
        categoryId
        awsId
        title
        slug
        createdAt
        posterTime
        published
        fileName
        type
        updatedAt
        category {
          id
          rank
          name
          slug
          type
          createdAt
          updatedAt
        }
        chapters {
          nextToken
        }
      }
    }
  }
`;
export const listChapters = /* GraphQL */ `
  query ListChapters(
    $filter: ModelChapterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChapters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        videoId
        title
        start
        posterTime
        createdAt
        updatedAt
        video {
          id
          categoryId
          awsId
          title
          slug
          createdAt
          posterTime
          published
          fileName
          type
          updatedAt
        }
      }
      nextToken
    }
  }
`;
