/* eslint-disable */
const $ = window.$;

function sticky() {
  const
    el = $(document).find('.product-result'),
    elShadowExists = el.next('.product-result__shadow').length;

  if (!el.length) return;

  let
    elShadow,
    stickPoint;

  if (!elShadowExists) {
    elShadow = $('<div class="product-result__shadow"></div>').insertAfter(el);
  } else {
    elShadow = el.next('.product-result__shadow');
  }

  function calculateStickPoint () {
    const
      calcEl = el.hasClass('is-sticky') ? elShadow : el;

    return calcEl.position('html').top + calcEl.outerHeight() + 14;
  }

  // Set shadow height
  function elHeight() {
    elShadow.height(el.outerHeight());
    el.removeClass('is-sticky');
    stickPoint = calculateStickPoint();

    if (stickPoint > ($(window).scrollTop() + $(window).height())) {
      el.addClass('is-sticky');
    }
  }

  elHeight();
  $(window).resize(elHeight);

  $(window).scroll(function () {
    stickPoint = calculateStickPoint();

    if ($(window).scrollTop() + $(window).height() < stickPoint) {
      if (!el.hasClass('is-sticky')) el.addClass('is-sticky');
    } else {
      if (el.hasClass('is-sticky')) el.removeClass('is-sticky');
    }
  });
}

function clickOnButton() {
  $(document).on('click', '.Button_submit-button:not(.is-sent)', function () {
    $(this).closest('.product-result').addClass('is-active');
  });
}

export function productResult () {
  sticky();
  clickOnButton();
}
/* eslint-enable */
