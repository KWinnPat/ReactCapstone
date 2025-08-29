import React from "react";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselArrows";
import useEmblaCarousel from "embla-carousel-react";
import ProductCard from "../ProductCard";

import { useFilterSortProducts } from "../../helpers/hooks/filterSortProducts";

const EmblaCarousel = (filter, props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const { filteredSortedProducts } = useFilterSortProducts(filter.filter);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {Object.entries(filteredSortedProducts).map(([key, value]) => (
            <div className="embla__slide" key={key}>
              <div className="embla__slide__number">
                <ProductCard product={value} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
