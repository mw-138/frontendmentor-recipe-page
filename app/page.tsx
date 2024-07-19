import HeaderImage from "@/public/image-omelette.jpeg";
import Image from "next/image";
import { Young_Serif } from "next/font/google";

const youngSerif = Young_Serif({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main>
      <article>
        <Image
          src={HeaderImage}
          width={0}
          height={0}
          alt="omelette"
          className="lg:rounded-lg w-full"
        />

        <section className="space-y-8">
          <h1 className={youngSerif.className}>Simple Omelette Recipe</h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </section>

        <section className="bg-rose-50 p-4 rounded-lg">
          <h2 className="text-rose-800 text-[20px] pb-2">Preparation time</h2>
          <ul>
            <li>
              <strong>Total</strong>: Approximately 10 minutes
            </li>
            <li>
              <strong>Preparation</strong>: 5 minutes
            </li>
            <li>
              <strong>Cooking</strong>: 5 minutes
            </li>
          </ul>
        </section>

        <section>
          <h2 className={youngSerif.className}>Ingredients</h2>
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </section>

        <hr />

        <section>
          <h2 className={youngSerif.className}>Instructions</h2>
          <ol>
            <li>
              <strong>Beat the eggs</strong>: In a bowl, beat the eggs with a
              pinch of salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <strong>Heat the pan</strong>: Place a non-stick frying pan over
              medium heat and add butter or oil.
            </li>
            <li>
              <strong>Cook the omelette</strong>: Once the butter is melted and
              bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
              coat the surface.
            </li>
            <li>
              <strong>Add fillings (optional)</strong>: When the eggs begin to
              set at the edges but are still slightly runny in the middle,
              sprinkle your chosen fillings over one half of the omelette.
            </li>
            <li>
              <strong>Fold and serve</strong>: As the omelette continues to
              cook, carefully lift one edge and fold it over the fillings. Let
              it cook for another minute, then slide it onto a plate.
            </li>
            <li>
              <strong>Enjoy</strong>: Serve hot, with additional salt and pepper
              if needed.
            </li>
          </ol>
        </section>

        <hr />

        <section>
          <h2 className={youngSerif.className}>Nutrition</h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table border={0} cellPadding={5} cellSpacing={5}>
            <tbody>
              {[
                ["Calories", "277kcal"],
                ["Carbs", "0g"],
                ["Protein", "20g"],
                ["Fat", "22g"],
              ].map((element: string[], index: number) => (
                <tr key={index}>
                  <th>{element[0]}</th>
                  <td>{element[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </article>
    </main>
  );
}
