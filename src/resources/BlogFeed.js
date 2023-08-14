import _map from 'lodash.map'

export default {
  feed() {
    return {
      path: '/objects',
      resolve: (response, mappers) => {
        let _posts = _map(response.objects, function (i) {
          if (i.type === 'posts') {
            let entry = Object.entries(i)
            console.log(entry);
            let temp = {
              title: i.title,
              image: i.metadata.image.imgix_url,
              published: i.created_at,
              author: i.metadata.author,
              id: i.slug
            };
            return temp;
          }
        })
        return mappers.pipe(_posts)
      }
    }
  }
}
