import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import type { technologieType } from "../../../../server/src/Definitions/TechnologieType";
import "../../assets/styles/technologie.css";

export default function Technologies() {
  const [tech, setTech] = useState<technologieType[]>([]);

  const categories = [...new Set(tech.map((item) => item.t_categories))];
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined,
  );

  const filteredSkills = selectedCategory
    ? tech.filter((item) => item.t_categories === selectedCategory)
    : [];

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/competences`)
      .then((response) => response.json())
      .then((data: technologieType[]) => {
        setTech(data);
      });
  }, []);

  return (
    <>
      <Element name="technologies">
        <section>
          <header className="technologie_section">Compétences</header>
          <section>
            <div className="button_container">
              {categories.map((cat) => (
                <button
                  className="button_categories"
                  type="button"
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {filteredSkills.map((item) => (
              <>
                <section key={item.id} className="techno_container">
                  <section key={item.id} className="section_techno">
                    <span>
                      <img src={item.t_logo} alt={item.t_name} />
                      <p className="tech">{item.t_name}</p>
                    </span>
                    <p className="tech">{item.t_name}</p>
                    <p className="tech">{item.t_name}</p>
                  </section>
                </section>
              </>
            ))}
          </section>
        </section>
      </Element>
    </>
  );
}
