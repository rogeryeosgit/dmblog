import _map from 'lodash.map'

export default {
  feed() {
    return {
      path: '/objects',
      resolve: (response, mappers) => {
        let _posts = _map(response.objects, function(i) {
          console.log('This is i:' + i);
          let temp = {
            title: i.title,
            image: i.metadata.image.imgix_url,
            published: i.created_at,
            author: i.metadata.author.title,
            id: i.slug
          };
          return temp;
        })
        return mappers.pipe(_posts)
      }
    }
  }
}
