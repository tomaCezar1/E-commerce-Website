import BlogPageCard from '../BlogPageCard'

function BlogDetailsPage(): JSX.Element {
  return (
    <>
      <div className="blog-details-container">
        <div style={{width: '669px'}}>
          <div className="blog-card-title-flex">
            <h1 className="blog-details-title">Titlul</h1>
            <p className="blog-card-date blog-details-date">03.12.2020</p>
          </div>
          <div className="blog-details-content-container">
          <p className="blog-details-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
            bibendum eu vulputate congue vestibulum. Sed pellentesque id
            volutpat diam phasellus. Sit elit pulvinar mattis purus gravida eget
            et tellus. Lacinia nec neque, ipsum leo nisl vitae libero quis.
            Amet, tincidunt neque cursus vestibulum tristique.
          </p>
          <img
            src="https://cdn.incoden.com/Diferite/not-found.png"
            alt="img"
            className="blog-details-img"
          />
          <p className="blog-details-text">
            pOrci quam amet ac in semper. Cursus dolor rhoncus suspendisse
            habitant lobortis eget arcu aliquet quam. Sed sapien blandit libero,
            praesent. Porta tempus sit ultricies feugiat. Urna cursus amet
            integer commodo diam nibh sit massa lacinia. Tortor euismod eros
            arcu malesuada neque in. Et quam ipsum enim leo duis vitae. Iaculis
            libero sed urna sapien. Est ipsum fames pellentesque ultricies nulla
            in.
            <br />
            <br />
            Eu nulla sed vivamus sagittis in. Elementum fermentum id auctor sed.
            Nibh libero dictumst tempor a, tellus, volutpat id lectus. Nibh
            dignissim justo lacus, arcu ut. Vel sociis dui facilisis in in
            adipiscing. Nisi, eros, amet lacus, vitae. Nunc, a vel sed augue.
            Dui turpis aenean suspendisse amet. Vestibulum facilisi in gravida
            quis nulla sollicitudin. Tortor vel imperdiet sit interdum in dui ut
            urna, amet. Et id purus viverra vulputate a. Mus enim faucibus
            placerat
            <br />
            <br />
            facilisis enim feugiat. Felis ut rutrum eget aliquet suspendisse.
            Nullam risus bibendum est, etiam lectus est aliquam odio. Id lectus
            vitae, velit, lorem. Egestas turpis ac vestibulum cras pulvinar.
            Integer faucibus rhoncus enim velit ut odio vitae lectus. Eu erat
            nulla volutpat quam eget sit quam. Tortor, sapien nam amet,
            elementum ac convallis amet eget leo. Malesuada sed et sit nibh
            dignissim sit ac semper accumsan.
          </p>

          <img
            src="https://cdn.incoden.com/Diferite/not-found.png"
            alt="img"
            className="blog-details-second-img"
          />

          <p className="blog-details-text">
            pOrci quam amet ac in semper. Cursus dolor rhoncus suspendisse
            habitant lobortis eget arcu aliquet quam. Sed sapien blandit libero,
            praesent. Porta tempus sit ultricies feugiat. Urna cursus amet
            integer commodo diam nibh sit massa lacinia. Tortor euismod eros
            arcu malesuada neque in. Et quam ipsum enim leo duis vitae. Iaculis
            libero sed urna sapien. Est ipsum fames pellentesque ultricies nulla
            in.
            <br />
            <br />
            Eu nulla sed vivamus sagittis in. Elementum fermentum id auctor sed.
            Nibh libero dictumst tempor a, tellus, volutpat id lectus. Nibh
            dignissim justo lacus, arcu ut. Vel sociis dui facilisis in in
            adipiscing. Nisi, eros, amet lacus, vitae. Nunc, a vel sed augue.
            Dui turpis aenean suspendisse amet. Vestibulum facilisi in gravida
            quis nulla sollicitudin. Tortor vel imperdiet sit interdum in dui ut
            urna
          </p>
        </div>
        </div>
      </div>
      <h1 className="blog-details-title" style={{ marginBottom: '32px' }}>
        Alte Stiri
      </h1>
      <div className="blog-details-cards-flex">
        <BlogPageCard />
        <BlogPageCard />
        <BlogPageCard />
      </div>
    </>
  )
}

export default BlogDetailsPage
