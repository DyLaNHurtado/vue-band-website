<template>
  <div class="biography">
    <h1 class="title">Biography</h1>
    <div class="container">
      <div class="summary">
          <img src="/src/assets/logo.svg"/>
          <div class="text-container">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quod natus deserunt repellendus aliquid repellat ullam voluptates, quisquam odit rerum?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo debitis minus possimus nobis esse, eius praesentium aspernatur nihil ea dolor asperiores blanditiis eligendi sapiente dignissimos labore doloribus repellat magnam. Pariatur repellat molestiae nemo quod illo quae et laboriosam, voluptatum non expedita earum! Ab beatae repellat nisi maiores quidem ratione, numquam nesciunt pariatur ipsam eaque deleniti repudiandae ea reprehenderit fugit autem magni! Dolor, eos dignissimos doloremque hic ut totam molestias quidem vel rem? Sapiente exercitationem, placeat corrupti nulla reiciendis dicta reprehenderit quisquam quibusdam deleniti tenetur et quasi nihil delectus assumenda aliquam necessitatibus vero aspernatur praesentium! Consequuntur voluptatem eveniet itaque quo nesciunt magnam maiores eius expedita ipsam quis repellendus, blanditiis deleniti dicta commodi dolorum sint reprehenderit, ad debitis! Quod libero praesentium animi quis repellendus saepe, numquam iure, esse consequatur, voluptate delectus eum veritatis atque nostrum minus nobis vero cupiditate repudiandae nesciunt alias voluptas in eaque error? Corporis possimus alias, quam quisquam eveniet tempora itaque velit sed unde ea expedita vero nesciunt molestiae, aut maxime accusamus delectus voluptates veritatis ab placeat est accusantium, dolor nostrum ex. Illo aperiam molestiae, nisi corporis sit unde eligendi hic fugiat quam voluptatibus amet obcaecati veniam, quae omnis sequi perspiciatis iusto perferendis! Mollitia, at eligendi esse quos incidunt impedit blanditiis dolorum? Sapiente pariatur illo dolores. Voluptates maxime quia recusandae iure facere veritatis vitae, aperiam, in explicabo architecto sint quasi, perspiciatis amet quisquam numquam nobis pariatur soluta debitis magnam? Aliquid omnis quae nostrum ad sint corrupti tempore saepe est nemo, repudiandae quidem, veritatis cumque maxime, in architecto numquam eum. Nulla quo ut fugiat tenetur minima inventore in praesentium sapiente eveniet ipsum nobis molestiae numquam repellat amet dolor reiciendis velit omnis iste esse, obcaecati aut odio. Nemo, sit vero cupiditate officia molestiae qui ratione modi nisi eligendi magni aliquam vitae dignissimos laboriosam, non voluptatem? Id maxime quae quaerat quisquam aperiam et voluptas iusto consectetur corporis exercitationem voluptate sequi delectus provident illo voluptates eveniet, ducimus qui blanditiis similique ea dolor distinctio? Qui minima sint repellat ratione in nemo libero doloribus nihil nam aperiam eaque accusantium ipsam ducimus ea totam, ad maxime. Quis magnam unde eum quo eaque eligendi mollitia. Odio sint, aliquam a nulla aut tenetur fugit possimus blanditiis distinctio dolore assumenda! Adipisci, debitis harum. Iusto, quos. Quia, corporis provident sunt, saepe harum dolorum iure doloremque ullam delectus fugiat deserunt nemo dolor necessitatibus doloribus magni debitis ipsa. Exercitationem vitae numquam ab animi at autem in molestiae consequatur ad, ipsa, adipisci laboriosam deleniti veniam magnam voluptas dignissimos fugit blanditiis quo voluptatibus. Repellendus aliquam harum similique deserunt aliquid minus vel tempore magnam aspernatur accusamus, iure perspiciatis blanditiis, praesentium reprehenderit impedit rem! Provident iste deserunt nam aperiam autem maiores neque distinctio, soluta voluptatem? Facere, officia. Dolorum sit tempora illo doloribus omnis exercitationem, quaerat maiores nobis quasi ipsum ad deleniti eos inventore eius odio quia, nihil quis. A alias earum blanditiis nam, quis inventore doloribus debitis odit explicabo delectus molestias est nesciunt expedita perspiciatis! Optio doloremque illo dolorem eaque tempore pariatur voluptates asperiores autem voluptatem exercitationem quos unde cumque rem voluptatum, ab architecto aperiam, repudiandae quisquam a labore laudantium iure sunt illum obcaecati? Id, quidem sint numquam, quam, quasi dolorem aliquam nobis nisi nesciunt facilis ipsum sunt! Maxime, voluptatem recusandae excepturi natus harum voluptate expedita sequi deserunt blanditiis odit ea illo distinctio nihil quam fuga quibusdam itaque error dolorem! Iste, eligendi. Iste iusto eligendi sed eos fuga. Corporis et eveniet debitis esse eligendi tempore temporibus dolores ab sed dolorum magni natus fugit, necessitatibus, beatae maxime excepturi? Quaerat perferendis eum aspernatur facilis rem voluptas minima quidem autem veniam, iusto tempore praesentium at omnis optio, aperiam voluptatem cum excepturi. Architecto incidunt tempora minus a corporis assumenda dolores.
            </p>
            <p class="author">Autor: Dylan Hurtado López</p>

          </div>
      </div>
        
    </div>
  </div>
</template>

<style scoped>
  .biography {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    padding-top: 5rem;
  }

  .container{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
  .summary{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 70%;
    background-color: gray;
  }

  img{
    max-height: 400px;
    width: 100%;
    background-color: aliceblue;
    background-size: contain;
    
  }
  .text-container{
    border-top: 4px solid var(--color-border);
    padding: 2em;
  }
  .author{
    font-weight: 300;
    text-align: end;
  }

  @media only screen and (max-width: 900px) {
    .summary{
      width: 100%;
    }
  }

</style>
