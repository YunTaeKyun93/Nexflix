import React, { useEffect, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { movieActions } from "../redux/reducers/movieReducer";
import { useDispatch } from "react-redux";

//년도필터에 쓰이는 범위슬라이더

const Slider = ({ min, max }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };

  useEffect(() => {
    dispatch(
      movieActions.getFiltering({
        minValue: minValue,
        maxValue: maxValue,
      })
    );
  }, [minValue, maxValue]);

  return (
    <div className="App">
      <div className="slider-ex">
        From: <span>{minValue}</span> - To: <span>{maxValue}</span>
      </div>
      <MultiRangeSlider
        min={min}
        max={max}
        step={1}
        ruler={false}
        label={false}
        preventWheel={false}
        minValue={minValue}
        maxValue={maxValue}
        onInput={(e) => {
          handleInput(e);
        }}
      />
    </div>
  );
};

export default Slider;
