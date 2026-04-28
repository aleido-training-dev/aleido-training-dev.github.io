define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("component", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__header "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":5,"column":30},"end":{"line":5,"column":54}}}))
    + "__header\" id=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":5,"column":68},"end":{"line":5,"column":75}}}) : helper)))
    + "-header\">\n  <div class=\"component__header-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":6,"column":38},"end":{"line":6,"column":62}}}))
    + "__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":12,"column":11}}})) != null ? stack1 : "")
    + "\n    "
    + alias3(((helper = (helper = lookupProperty(helpers,"component_description") || (depth0 != null ? lookupProperty(depth0,"component_description") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"component_description","hash":{},"data":data,"loc":{"start":{"line":14,"column":4},"end":{"line":14,"column":29}}}) : helper)))
    + "\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"mobileBody") : depth0),{"name":"any","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":22,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),(depth0 != null ? lookupProperty(depth0,"mobileInstruction") : depth0),{"name":"any","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":31,"column":12}}})) != null ? stack1 : "")
    + "\n  </div>\n</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__title "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":9,"column":33},"end":{"line":9,"column":57}}}))
    + "__title\">\n      <div class=\"component__title-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":10,"column":41},"end":{"line":10,"column":65}}}))
    + "__title-inner js-heading\"></div>\n    </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__body "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":17,"column":32},"end":{"line":17,"column":56}}}))
    + "__body\">\n      <div class=\"component__body-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":18,"column":40},"end":{"line":18,"column":64}}}))
    + "__body-inner\">\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":8},"end":{"line":19,"column":26}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__instruction "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":25,"column":39},"end":{"line":25,"column":63}}}))
    + "__instruction\">\n      <span class=\"icon\" aria-hidden=\"true\"></span>\n      <div class=\"component__instruction-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":27,"column":47},"end":{"line":27,"column":71}}}))
    + "__instruction-inner\">\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":28,"column":8},"end":{"line":28,"column":33}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"component_description") || (depth0 != null ? lookupProperty(depth0,"component_description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"component_description","hash":{},"data":data,"loc":{"start":{"line":36,"column":0},"end":{"line":36,"column":25}}}) : helper)))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":37,"column":8}}})) != null ? stack1 : "");
},"useData":true}));

this["Handlebars"]["templates"]["article"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"article__header\">\n    <div class=\"article__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":14,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"article__title\">\n        <div class=\"article__title-inner js-heading\"></div>\n      </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"article__body\">\n        <div class=\"article__body-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"article__instruction\">\n        <div class=\"article__instruction-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":35}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"article__inner\">\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":34,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"block__container\">\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["block"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"block__header\">\n    <div class=\"block__header-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":14,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"block__title\">\n        <div class=\"block__title-inner js-heading\"></div>\n      </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"block__body\">\n        <div class=\"block__body-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"block__instruction\">\n        <div class=\"block__instruction-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":35}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div class=\"block__inner\">\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":34,"column":10}}})) != null ? stack1 : "")
    + "\n  <div class=\"component__container\">\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["buttons"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "  <div class=\"js-answer-live-region aria-label\" aria-live=\"assertive\" aria-atomic=\"true\"></div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":15,"column":110},"end":{"line":15,"column":271}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_globals"))) && lookupProperty(stack1,"_accessibility"))) && lookupProperty(stack1,"_ariaLabels"))) && lookupProperty(stack1,"answeredCorrectly")), depth0));
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_globals"))) && lookupProperty(stack1,"_accessibility"))) && lookupProperty(stack1,"_ariaLabels"))) && lookupProperty(stack1,"answeredIncorrectly")), depth0));
},"8":function(container,depth0,helpers,partials,data) {
    return "<div class=\"btn__display js-display-attempts\">\n  <div class=\"btn__display-inner js-insert-attempts-string\" aria-live=\"assertive\">\n  </div>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"btn__response-container\">\n\n  <div class=\"btn__marking js-btn-marking u-display-none\">\n    <div class=\"icon\" aria-hidden=\"true\"></div>\n  </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_canShowModelAnswer") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":9,"column":9}}})) != null ? stack1 : "")
    + "\n  <button class=\"btn-text btn__action js-btn-action\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_submit") : stack1)) != null ? lookupProperty(stack1,"ariaLabel") : stack1), depth0))
    + "\">\n    "
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_submit") : stack1)) != null ? lookupProperty(stack1,"buttonText") : stack1), depth0)) != null ? stack1 : "")
    + "\n  </button>\n  \n  <span class=\"js-btn-marking-label aria-label u-display-none\">"
    + ((stack1 = (lookupProperty(helpers,"all")||(depth0 && lookupProperty(depth0,"all"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),(depth0 != null ? lookupProperty(depth0,"_canShowMarking") : depth0),{"name":"all","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":63},"end":{"line":15,"column":279}}})) != null ? stack1 : "")
    + "</span>\n\n  <button class=\"btn-text btn__feedback js-btn-feedback is-disabled\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_showFeedback") : stack1)) != null ? lookupProperty(stack1,"ariaLabel") : stack1), depth0))
    + "\" aria-disabled=\"true\">\n    "
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_showFeedback") : stack1)) != null ? lookupProperty(stack1,"buttonText") : stack1), depth0)) != null ? stack1 : "")
    + "\n  </button>\n\n</div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_shouldDisplayAttempts") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":0},"end":{"line":29,"column":7}}})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["drawer"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"drawer__inner\">\n\n  <span id=\"drawer-heading\" class=\"aria-label\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"drawer") : stack1), depth0))
    + "</span>\n\n  <div class=\"drawer__toolbar\">\n\n    <div class=\"drawer__back\">\n      <button class=\"btn-icon drawer__btn drawer__back-btn js-drawer-back-btn\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\">\n        <span class=\"icon\" aria-hidden=\"true\"></span>\n      </button>\n    </div>\n\n    <div class=\"drawer__close\">\n      <button class=\"btn-icon drawer__btn drawer__close-btn js-drawer-close-btn\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closeDrawer") : stack1), depth0))
    + "\">\n        <span class=\"icon\" aria-hidden=\"true\"></span>\n      </button>\n    </div>\n\n  </div>\n\n  <div class=\"drawer__holder js-drawer-holder\"></div>\n\n  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":23,"column":2},"end":{"line":23,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["drawerItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"className") || (depth0 != null ? lookupProperty(depth0,"className") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"className","hash":{},"data":data,"loc":{"start":{"line":2,"column":68},"end":{"line":2,"column":81}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <span class=\"drawer__menu-title drawer__item-title\">\n      <span class=\"drawer__menu-title-inner drawer__item-title-inner\">\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\n      </span>\n    </span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <span class=\"drawer__menu-body drawer__item-body\">\n      <span class=\"drawer__menu-body-inner drawer__item-body-inner\">\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":15,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\n      </span>\n    </span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"drawer__menu-inner drawer__item-inner\">\n  <button class=\"drawer__menu-btn drawer__item-btn"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"className") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":50},"end":{"line":2,"column":88}}})) != null ? stack1 : "")
    + "\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":10,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":18,"column":11}}})) != null ? stack1 : "")
    + "\n  </button>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["heading"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isOptional") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":11,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isComplete") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":11,"column":4}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"complete") : stack1), depth0))
    + ".&nbsp;\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"incomplete") : stack1), depth0))
    + ".&nbsp;\n    ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":15,"column":2},"end":{"line":15,"column":28}}})) != null ? stack1 : "")
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n\n<div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":3,"column":9},"end":{"line":3,"column":16}}}) : helper)))
    + "-heading\" class=\"js-heading-inner\" role=\"heading\" aria-level=\""
    + alias4((lookupProperty(helpers,"a11y_aria_level")||(depth0 && lookupProperty(depth0,"a11y_aria_level"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_id") : depth0),(depth0 != null ? lookupProperty(depth0,"_type") : depth0),(depth0 != null ? lookupProperty(depth0,"_ariaLevel") : depth0),{"name":"a11y_aria_level","hash":{},"data":data,"loc":{"start":{"line":3,"column":78},"end":{"line":3,"column":118}}}))
    + "\">\n  <span class=\"aria-label js-a11y-completion-description\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isA11yCompletionDescriptionEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(2, data, 0),"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":13,"column":9}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isBackwardCompatible") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":16,"column":9}}})) != null ? stack1 : "")
    + "  </span>\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isBackwardCompatible") : depth0),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":2},"end":{"line":20,"column":13}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["loading"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loading js-loading\">\n  <div class=\"loading__inner\">\n    <div class=\"loading__logo\"></div>\n    <div class=\"course__loading-alt\"></div>\n    <div class=\"course__title\">\n      <h2></h2>\n    </div>\n    <div class=\"course__sub-title\">\n      <h5></h5>\n      <div id='course__title-sub-title' aria-level='5' aria-role='heading'></div>\n    </div>\n    <div class=\"loading__image\">\n      <h3>Loading...</h3>\n    </div>\n  </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["nav"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <button name=\"skipButton\" class=\"btn-icon nav__btn nav__skip-btn show-label\" data-event=\"skipNavigation\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"skipNavigation") : stack1), depth0))
    + "\" data-order=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_navigation") : stack1)) != null ? lookupProperty(stack1,"_skipButton") : stack1)) != null ? lookupProperty(stack1,"_navOrder") : stack1), depth0))
    + "\">\n    <span class='nav__btn-label' aria-hidden=\"true\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"skipNavigationText") : stack1), depth0))
    + "</span>\n  </button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"nav__spacer\" aria-hidden=\"true\" data-order=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_navOrder") || (depth0 != null ? lookupProperty(depth0,"_navOrder") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_navOrder","hash":{},"data":data,"loc":{"start":{"line":20,"column":60},"end":{"line":20,"column":73}}}) : helper)))
    + "\"></div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_config") : depth0)) != null ? lookupProperty(stack1,"_drawer") : stack1)) != null ? lookupProperty(stack1,"_position") : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    return "auto";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_config") : depth0)) != null ? lookupProperty(stack1,"_drawer") : stack1)) != null ? lookupProperty(stack1,"_iconClass") : stack1), depth0));
},"11":function(container,depth0,helpers,partials,data) {
    return "icon-list";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <span class='nav__btn-label' aria-hidden=\"true\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"navigationDrawer") : stack1), depth0))
    + "</span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n"
    + alias4(((helper = (helper = lookupProperty(helpers,"import_adapt") || (depth0 != null ? lookupProperty(depth0,"import_adapt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_adapt","hash":{},"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":3,"column":16}}}) : helper)))
    + "\n\n<div class=\"nav__inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_accessibility") : depth0)) != null ? lookupProperty(stack1,"_isSkipNavigationEnabled") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":12,"column":9}}})) != null ? stack1 : "")
    + "\n  <button name=\"backButton\" class=\"btn-icon nav__btn nav__back-btn js-nav-back-btn u-display-none\" data-event=\"backButton\" aria-label=\""
    + alias4(alias5(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\" data-tooltip-id=\"back\" role=\"link\" data-order=\""
    + alias4(alias5(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_navigation") : stack1)) != null ? lookupProperty(stack1,"_backButton") : stack1)) != null ? lookupProperty(stack1,"_navOrder") : stack1), depth0))
    + "\">\n    <span class=\"icon\" aria-hidden=\"true\"></span>\n    <span class='nav__btn-label' aria-hidden=\"true\">"
    + alias4(alias5(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "</span>\n  </button>\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_navigation") : stack1)) != null ? lookupProperty(stack1,"_spacers") : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":2},"end":{"line":21,"column":11}}})) != null ? stack1 : "")
    + "\n  <button name=\"drawer\" class=\"btn-icon nav__btn nav__drawer-btn js-nav-drawer-btn is-position-"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_config") : depth0)) != null ? lookupProperty(stack1,"_drawer") : stack1)) != null ? lookupProperty(stack1,"_position") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":23,"column":95},"end":{"line":23,"column":176}}})) != null ? stack1 : "")
    + "\" data-event=\"toggleDrawer\" aria-expanded=\"false\" aria-label=\""
    + alias4(alias5(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"navigationDrawer") : stack1), depth0))
    + "\" data-order=\""
    + alias4(alias5(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_drawer") : stack1)) != null ? lookupProperty(stack1,"_navOrder") : stack1), depth0))
    + "\" data-tooltip-id=\"drawer\">\n    <span class=\"icon "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_config") : depth0)) != null ? lookupProperty(stack1,"_drawer") : stack1)) != null ? lookupProperty(stack1,"_iconClass") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data,"loc":{"start":{"line":24,"column":22},"end":{"line":24,"column":110}}})) != null ? stack1 : "")
    + "\" aria-hidden=\"true\"></span>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"Adapt") : depth0)) != null ? lookupProperty(stack1,"course") : stack1)) != null ? lookupProperty(stack1,"_navigation") : stack1)) != null ? lookupProperty(stack1,"_showLabel") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":4},"end":{"line":27,"column":11}}})) != null ? stack1 : "")
    + "  </button>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notify"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"notify__container-inner\">\n  <div class=\"notify__popup-container\"></div>\n  <div class=\"notify__push-container a11y-ignore\" aria-live=\"assertive\" aria-atomic=\"true\"></div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notifyPopup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias1(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data,"loc":{"start":{"line":4,"column":26},"end":{"line":4,"column":34}}}) : helper)))
    + "=\""
    + alias1(container.lambda(depth0, depth0))
    + "\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":4,"column":122},"end":{"line":4,"column":134}}}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    return " has-image";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " align-image-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_imageAlignment") || (depth0 != null ? lookupProperty(depth0,"_imageAlignment") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_imageAlignment","hash":{},"data":data,"loc":{"start":{"line":4,"column":215},"end":{"line":4,"column":234}}}) : helper)));
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__icon\">\n          <div class=\"icon"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"prompt",{"name":"equals","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":26},"end":{"line":12,"column":73}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"alert",{"name":"equals","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":73},"end":{"line":12,"column":118}}})) != null ? stack1 : "")
    + "\" aria-hidden=\"true\"></div>\n        </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return " is-prompt";
},"12":function(container,depth0,helpers,partials,data) {
    return " is-alert";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__title"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isAltTitle") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":33},"end":{"line":17,"column":69}}})) != null ? stack1 : "")
    + "\" id=\"notify-heading\">\n          <div class=\"notify__title-inner\" role=\"heading\" aria-level=\""
    + container.escapeExpression((lookupProperty(helpers,"a11y_aria_level")||(depth0 && lookupProperty(depth0,"a11y_aria_level"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_id") : depth0),"notify",(depth0 != null ? lookupProperty(depth0,"_ariaLevel") : depth0),{"name":"a11y_aria_level","hash":{},"data":data,"loc":{"start":{"line":18,"column":70},"end":{"line":18,"column":113}}}))
    + "\">\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":19,"column":31}}})) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    return " aria-label";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__section\">\n          <div class=\"notify__section-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_src") : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":41,"column":21}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":12},"end":{"line":49,"column":21}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_src") : stack1),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":12},"end":{"line":64,"column":19}}})) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_imageAlignment") : depth0),"left",{"name":"equals","hash":{},"data":data,"loc":{"start":{"line":29,"column":19},"end":{"line":29,"column":50}}}),(lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_imageAlignment") : depth0),"top",{"name":"equals","hash":{},"data":data,"loc":{"start":{"line":29,"column":51},"end":{"line":29,"column":81}}}),{"name":"any","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":12},"end":{"line":40,"column":22}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"notify__image-container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":47},"end":{"line":30,"column":98}}})) != null ? stack1 : "")
    + "\">\n              <img class=\"notify__image\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_src") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(24, data, 0),"data":data,"loc":{"start":{"line":31,"column":65},"end":{"line":31,"column":149}}})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":14},"end":{"line":38,"column":21}}})) != null ? stack1 : "")
    + "            </div>";
},"20":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0)) != null ? stack1 : "")
    + "\"";
},"24":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <div class=\"notify__attribution\">\n                <div class=\"notify__attribution-inner\">\n                  "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":35,"column":18},"end":{"line":35,"column":52}}})) != null ? stack1 : "")
    + "\n                </div>\n              </div>\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"notify__body\">\n              <div class=\"notify__body-inner\">\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":46,"column":16},"end":{"line":46,"column":34}}})) != null ? stack1 : "")
    + "\n              </div>\n            </div>";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_imageAlignment") : depth0),"right",{"name":"equals","hash":{},"data":data,"loc":{"start":{"line":52,"column":20},"end":{"line":52,"column":52}}}),(lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_imageAlignment") : depth0),"bottom",{"name":"equals","hash":{},"data":data,"loc":{"start":{"line":52,"column":53},"end":{"line":52,"column":86}}}),{"name":"any","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":52,"column":12},"end":{"line":63,"column":20}}})) != null ? stack1 : "");
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"notify__image-container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":47},"end":{"line":53,"column":98}}})) != null ? stack1 : "")
    + "\">\n              <img class=\"notify__image\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_src") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.program(24, data, 0),"data":data,"loc":{"start":{"line":54,"column":65},"end":{"line":54,"column":149}}})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":55,"column":14},"end":{"line":61,"column":21}}})) != null ? stack1 : "")
    + "            </div>\n";
},"33":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__btn-container\">\n          <button class=\"btn-text notify__btn notify__btn-alert js-notify-btn-alert\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"confirmText") || (depth0 != null ? lookupProperty(depth0,"confirmText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data,"loc":{"start":{"line":72,"column":97},"end":{"line":72,"column":114}}}) : helper))) != null ? stack1 : "")
    + "\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"confirmText") || (depth0 != null ? lookupProperty(depth0,"confirmText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data,"loc":{"start":{"line":73,"column":12},"end":{"line":73,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\n          </button>\n        </div>\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"notify__btn-container\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_prompts") : depth0),{"name":"each","hash":{},"fn":container.program(36, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":80,"column":10},"end":{"line":84,"column":19}}})) != null ? stack1 : "")
    + "        </div>\n";
},"36":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <button class=\"btn-text notify__btn notify__btn-prompt js-notify-btn-prompt\" data-event=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_callbackEvent") || (depth0 != null ? lookupProperty(depth0,"_callbackEvent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_callbackEvent","hash":{},"data":data,"loc":{"start":{"line":81,"column":99},"end":{"line":81,"column":117}}}) : helper)))
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"promptText") || (depth0 != null ? lookupProperty(depth0,"promptText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data,"loc":{"start":{"line":81,"column":131},"end":{"line":81,"column":147}}}) : helper))) != null ? stack1 : "")
    + "\">\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"promptText") || (depth0 != null ? lookupProperty(depth0,"promptText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data,"loc":{"start":{"line":82,"column":12},"end":{"line":82,"column":28}}}) : helper))) != null ? stack1 : "")
    + "\n          </button>\n";
},"38":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"popup",{"name":"equals","hash":{},"fn":container.program(39, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":93,"column":4},"end":{"line":97,"column":15}}})) != null ? stack1 : "");
},"39":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <button class=\"btn-icon notify__btn-icon notify__close-btn js-notify-close-btn\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closePopup") : stack1), depth0))
    + "\">\n      <span class=\"icon\" aria-hidden=\"true\"></span>\n    </button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div "
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_attributes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":5},"end":{"line":4,"column":55}}})) != null ? stack1 : "")
    + " class=\"notify__popup notify__popup-type-"
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":4,"column":96},"end":{"line":4,"column":105}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_classes") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":105},"end":{"line":4,"column":141}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_src") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":141},"end":{"line":4,"column":179}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_imageAlignment") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":179},"end":{"line":4,"column":241}}})) != null ? stack1 : "")
    + "\">\n  <div class=\"notify__popup-inner\">\n\n    <div class=\"notify__content\">\n      <div class=\"notify__content-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_showIcon") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":14,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":22,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_src") : stack1),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"any","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":8},"end":{"line":68,"column":16}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"alert",{"name":"equals","hash":{},"fn":container.program(33, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":8},"end":{"line":76,"column":19}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"prompt",{"name":"equals","hash":{},"fn":container.program(35, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":78,"column":8},"end":{"line":86,"column":19}}})) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n\n"
    + ((stack1 = (lookupProperty(helpers,"all")||(depth0 && lookupProperty(depth0,"all"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isCancellable") : depth0),(depth0 != null ? lookupProperty(depth0,"_showCloseButton") : depth0),{"name":"all","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":92,"column":4},"end":{"line":98,"column":12}}})) != null ? stack1 : "")
    + "\n  </div>\n\n  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":102,"column":2},"end":{"line":102,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\n\n</div>\n\n<div class=\"shadow notify__shadow js-notify-shadow-click\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notifyPush"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"notify-push__title\">\n    <div class=\"notify-push__title-inner\" role=\"heading\" aria-level=\""
    + container.escapeExpression((lookupProperty(helpers,"a11y_aria_level")||(depth0 && lookupProperty(depth0,"a11y_aria_level"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_id") : depth0),"notify",(depth0 != null ? lookupProperty(depth0,"_ariaLevel") : depth0),{"name":"a11y_aria_level","hash":{},"data":data,"loc":{"start":{"line":8,"column":69},"end":{"line":8,"column":112}}}))
    + "\">\n      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":25}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"notify-push__body\">\n    <div class=\"notify-push__body-inner\">\n      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":17,"column":6},"end":{"line":17,"column":24}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<button class=\"btn-icon notify-push__close-btn js-notify-push-close-btn\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closePopup") : stack1), depth0))
    + "\">\n  <span class=\"icon\" aria-hidden=\"true\"></span>\n</button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n\n<div id=\"notify-push-heading\" class=\"notify-push__inner js-notify-push-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":12,"column":9}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":20,"column":9}}})) != null ? stack1 : "")
    + "\n</div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_showCloseButton") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":0},"end":{"line":28,"column":7}}})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["page"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":52,"column":10}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"page__header\">\n    <div class=\"page__header-inner\">\n\n      <div class=\"page__header-content\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":18,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":8},"end":{"line":26,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"pageBody") : depth0),{"name":"any","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":8},"end":{"line":38,"column":16}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":8},"end":{"line":46,"column":15}}})) != null ? stack1 : "")
    + "\n      </div>\n\n    </div>\n  </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"page__title\">\n          <div class=\"page__title-inner js-heading\"></div>\n        </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"page__subtitle\">\n          <div class=\"page__subtitle-inner\">\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":23,"column":12},"end":{"line":23,"column":34}}})) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"page__body\">\n          <div class=\"page__body-inner\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pageBody") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":31,"column":12},"end":{"line":35,"column":19}}})) != null ? stack1 : "")
    + "          </div>\n        </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pageBody") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":32,"column":12},"end":{"line":32,"column":34}}})) != null ? stack1 : "")
    + "\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":34,"column":30}}})) != null ? stack1 : "")
    + "\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"page__instruction\">\n          <div class=\"page__instruction-inner\">\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":43,"column":12},"end":{"line":43,"column":37}}})) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n"
    + alias4(((helper = (helper = lookupProperty(helpers,"import_adapt") || (depth0 != null ? lookupProperty(depth0,"import_adapt") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_adapt","hash":{},"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":3,"column":16}}}) : helper)))
    + "\n\n<div class=\"page__inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"Adapt") : depth0)) != null ? lookupProperty(stack1,"config") : stack1)) != null ? lookupProperty(stack1,"_disablePageHeaders") : stack1),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":53,"column":13}}})) != null ? stack1 : "")
    + "\n  <div class=\"article__container\">\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["shadow"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"shadow\" class=\"shadow js-shadow u-display-none\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["responsiveIframe"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_scrolling") || (depth0 != null ? lookupProperty(depth0,"_scrolling") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_scrolling","hash":{},"data":data,"loc":{"start":{"line":6,"column":67},"end":{"line":6,"column":81}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    return "no";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner responsiveiframe__inner\">\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <div class=\"component__widget responsiveiframe__widget\">\n    <div class=\"responsiveiframe__iframe-holder\">\n      <iframe title=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"iframeTitle") || (depth0 != null ? lookupProperty(depth0,"iframeTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iframeTitle","hash":{},"data":data,"loc":{"start":{"line":6,"column":21},"end":{"line":6,"column":36}}}) : helper)))
    + "\" scrolling=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_scrolling") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":6,"column":49},"end":{"line":6,"column":98}}})) != null ? stack1 : "")
    + "\" class=\"responsiveiframe__iframe\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_source") || (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_source","hash":{},"data":data,"loc":{"start":{"line":6,"column":138},"end":{"line":6,"column":149}}}) : helper)))
    + "\"\n        data-height-xlarge=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_height") : depth0)) != null ? lookupProperty(stack1,"_large") : stack1), depth0))
    + "\" data-height-large=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_height") : depth0)) != null ? lookupProperty(stack1,"_large") : stack1), depth0))
    + "\" data-height-medium=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_height") : depth0)) != null ? lookupProperty(stack1,"_medium") : stack1), depth0))
    + "\" data-height-small=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_height") : depth0)) != null ? lookupProperty(stack1,"_small") : stack1), depth0))
    + "\"\n        data-width-xlarge=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_width") : depth0)) != null ? lookupProperty(stack1,"_large") : stack1), depth0))
    + "\" data-width-large=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_width") : depth0)) != null ? lookupProperty(stack1,"_large") : stack1), depth0))
    + "\" data-width-medium=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_width") : depth0)) != null ? lookupProperty(stack1,"_medium") : stack1), depth0))
    + "\" data-width-small=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_width") : depth0)) != null ? lookupProperty(stack1,"_small") : stack1), depth0))
    + "\" allowfullscreen webkitallowfullscreen mozallowfullscreen>\n      </iframe>\n    </div>\n  </div>\n</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["pageFooterNavigation"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "display-icons";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_shouldShowPrevious") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":10,"column":9}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <button data-destination=\"prev\"\n    class=\"pagefooternavigation__btn pagefooternavigation__btn-prev js-item-label "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isPreviousLocked") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":82},"end":{"line":5,"column":123}}})) != null ? stack1 : "")
    + "\"\n    title=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"prevButtonText") || (depth0 != null ? lookupProperty(depth0,"prevButtonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"prevButtonText","hash":{},"data":data,"loc":{"start":{"line":6,"column":11},"end":{"line":6,"column":29}}}) : helper)))
    + "\">\n    <i class=\"icon icon-controls-left\"></i>\n    "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_displayIcons") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":8,"column":58}}})) != null ? stack1 : "")
    + "\n  </button>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "is-locked";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"prevButtonText") || (depth0 != null ? lookupProperty(depth0,"prevButtonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"prevButtonText","hash":{},"data":data,"loc":{"start":{"line":8,"column":29},"end":{"line":8,"column":47}}}) : helper)));
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <button data-destination=\"home\"\n    class=\"pagefooternavigation__btn pagefooternavigation__btn-home js-item-label\"\n    title=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"homeButtonText") || (depth0 != null ? lookupProperty(depth0,"homeButtonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"homeButtonText","hash":{},"data":data,"loc":{"start":{"line":16,"column":11},"end":{"line":16,"column":29}}}) : helper)))
    + "\">\n    <i class=\"icon icon-home\"></i>\n    "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_displayIcons") : depth0),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":18,"column":58}}})) != null ? stack1 : "")
    + "\n  </button>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"homeButtonText") || (depth0 != null ? lookupProperty(depth0,"homeButtonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"homeButtonText","hash":{},"data":data,"loc":{"start":{"line":18,"column":29},"end":{"line":18,"column":47}}}) : helper)));
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_shouldShowUp") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":2},"end":{"line":30,"column":9}}})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <button data-destination=\"up\"\n    class=\"pagefooternavigation__btn pagefooternavigation__btn-up js-item-label\" \n    title=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"upButtonText") || (depth0 != null ? lookupProperty(depth0,"upButtonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"upButtonText","hash":{},"data":data,"loc":{"start":{"line":26,"column":11},"end":{"line":26,"column":27}}}) : helper)))
    + "\">\n    <i class=\"icon icon-controls-up\"></i>\n    "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_displayIcons") : depth0),{"name":"unless","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":4},"end":{"line":28,"column":56}}})) != null ? stack1 : "")
    + "\n  </button>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"upButtonText") || (depth0 != null ? lookupProperty(depth0,"upButtonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"upButtonText","hash":{},"data":data,"loc":{"start":{"line":28,"column":29},"end":{"line":28,"column":45}}}) : helper)));
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_shouldShowNext") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":2},"end":{"line":41,"column":9}}})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <button data-destination=\"next\"\n    class=\"pagefooternavigation__btn pagefooternavigation__btn-next js-item-label "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isNextLocked") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":82},"end":{"line":36,"column":119}}})) != null ? stack1 : "")
    + "\"\n    title=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"nextButtonText") || (depth0 != null ? lookupProperty(depth0,"nextButtonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"nextButtonText","hash":{},"data":data,"loc":{"start":{"line":37,"column":11},"end":{"line":37,"column":29}}}) : helper)))
    + "\">\n    <i class=\"icon icon-controls-right\"></i>\n    "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_displayIcons") : depth0),{"name":"unless","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":4},"end":{"line":39,"column":58}}})) != null ? stack1 : "")
    + "\n  </button>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"nextButtonText") || (depth0 != null ? lookupProperty(depth0,"nextButtonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"nextButtonText","hash":{},"data":data,"loc":{"start":{"line":39,"column":29},"end":{"line":39,"column":47}}}) : helper)));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"pagefooternavigation__inner "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_displayIcons") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":40},"end":{"line":1,"column":81}}})) != null ? stack1 : "")
    + "\" tabindex=\"0\">\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_hidePrevButton") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":11,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_hideHomeButton") : depth0),{"name":"unless","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":2},"end":{"line":20,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_hideUpButton") : depth0),{"name":"unless","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":2},"end":{"line":31,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_hideNextButton") : depth0),{"name":"unless","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":2},"end":{"line":42,"column":13}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["Handlebars"]["templates"]["tutor"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"tutor__title\">\n        <div class=\"tutor__title-inner\" role=\"heading\" aria-level=\""
    + container.escapeExpression((lookupProperty(helpers,"a11y_aria_level")||(depth0 && lookupProperty(depth0,"a11y_aria_level"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_id") : depth0),"@component+1",(depth0 != null ? lookupProperty(depth0,"_ariaLevel") : depth0),{"name":"a11y_aria_level","hash":{},"data":data,"loc":{"start":{"line":10,"column":67},"end":{"line":10,"column":117}}}))
    + "\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":11,"column":10},"end":{"line":11,"column":29}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"altTitle") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":20,"column":6}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"tutor__title aria-label\">\n        <div class=\"tutor__title-inner\" role=\"heading\" aria-level=\""
    + container.escapeExpression((lookupProperty(helpers,"a11y_aria_level")||(depth0 && lookupProperty(depth0,"a11y_aria_level"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_id") : depth0),"@component+1",(depth0 != null ? lookupProperty(depth0,"_ariaLevel") : depth0),{"name":"a11y_aria_level","hash":{},"data":data,"loc":{"start":{"line":16,"column":67},"end":{"line":16,"column":117}}}))
    + "\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"altTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":17,"column":10},"end":{"line":17,"column":32}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n      ";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <button\n        class=\"btn-icon tutor__btn-icon js-tutor-btn\"\n        "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_button") : depth0)) != null ? lookupProperty(stack1,"ariaLabel") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":8},"end":{"line":31,"column":97}}})) != null ? stack1 : "")
    + "\n      >\n        <span class=\"icon\" aria-hidden=\"true\"></span>\n      </button>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + container.escapeExpression((lookupProperty(helpers,"compile_a11y_normalize")||(depth0 && lookupProperty(depth0,"compile_a11y_normalize"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_button") : depth0)) != null ? lookupProperty(stack1,"ariaLabel") : stack1),{"name":"compile_a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":31,"column":45},"end":{"line":31,"column":89}}}))
    + "\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n\n<div class=\"tutor__inner\">\n\n  <div class=\"tutor__content\">\n    <div class=\"tutor__content-inner\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":20,"column":13}}})) != null ? stack1 : "")
    + "\n      <div class=\"tutor__body\">\n        <div class=\"tutor__body-inner\">\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":24,"column":10},"end":{"line":24,"column":28}}})) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"notify",{"name":"equals","hash":{},"data":data,"loc":{"start":{"line":28,"column":13},"end":{"line":28,"column":36}}}),(lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"overlay",{"name":"equals","hash":{},"data":data,"loc":{"start":{"line":28,"column":37},"end":{"line":28,"column":61}}}),{"name":"any","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":6},"end":{"line":35,"column":14}}})) != null ? stack1 : "")
    + "\n    </div>\n  </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["searchBox"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " aria-label";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":2,"column":125},"end":{"line":2,"column":142}}}) : helper))) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":2,"column":172},"end":{"line":2,"column":183}}}) : helper))) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"search__textbox-container\">\n  <label for=\"search__textbox\" class=\"search__textbox-label"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":59},"end":{"line":2,"column":104}}})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":106},"end":{"line":2,"column":149}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":149},"end":{"line":2,"column":194}}})) != null ? stack1 : "")
    + "</label>\n  <input id=\"search__textbox\" class=\"search__textbox js-search-textbox-change\" type=\"text\" placeholder=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"placeholder") || (depth0 != null ? lookupProperty(depth0,"placeholder") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":3,"column":104},"end":{"line":3,"column":119}}}) : helper)))
    + "\">\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["searchResults"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"search__items-container-inner\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["searchResultsContent"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"isAwaitingResults") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":5,"column":0},"end":{"line":60,"column":7}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"search__item no-results\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"awaitingResultsMessage") || (depth0 != null ? lookupProperty(depth0,"awaitingResultsMessage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"awaitingResultsMessage","hash":{},"data":data,"loc":{"start":{"line":6,"column":49},"end":{"line":6,"column":77}}}) : helper))) != null ? stack1 : "")
    + "\">\n  <div class=\"search__item-inner\">\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"awaitingResultsMessage") || (depth0 != null ? lookupProperty(depth0,"awaitingResultsMessage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"awaitingResultsMessage","hash":{},"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":8,"column":32}}}) : helper))) != null ? stack1 : "")
    + "\n  </div>\n</div>\n\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"formattedResults") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(19, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":14,"column":0},"end":{"line":58,"column":9}}})) != null ? stack1 : "")
    + "\n";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<button class=\"search__item drawer__item-btn\" data-id=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":15,"column":55},"end":{"line":15,"column":61}}}) : helper)))
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":15,"column":75},"end":{"line":15,"column":86}}}) : helper))) != null ? stack1 : "")
    + ". "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"textPreview") || (depth0 != null ? lookupProperty(depth0,"textPreview") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"textPreview","hash":{},"data":data,"loc":{"start":{"line":15,"column":88},"end":{"line":15,"column":105}}}) : helper))) != null ? stack1 : "")
    + "\">\n  <div class=\"search__item-inner\">\n\n    <div class=\"search__item-title drawer__item-title\">\n      <div class=\"search__item-title-inner drawer__item-title-inner\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_showHighlights") : depths[1]),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.program(10, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":20,"column":8},"end":{"line":24,"column":15}}})) != null ? stack1 : "")
    + "      </div>\n    </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"textPreview") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":4},"end":{"line":38,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_showFoundWords") : depths[1]),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":4},"end":{"line":46,"column":11}}})) != null ? stack1 : "")
    + "\n  </div>\n</button>\n\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"titleTagged") || (depth0 != null ? lookupProperty(depth0,"titleTagged") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"titleTagged","hash":{},"data":data,"loc":{"start":{"line":21,"column":8},"end":{"line":21,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":23,"column":8},"end":{"line":23,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\n";
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"search__item-preview drawer__item-body\">\n      <div class=\"search__item-preview-inner drawer__item-body-inner\">\n        \""
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"_showHighlights") : depths[1]),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.program(15, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":31,"column":9},"end":{"line":35,"column":15}}})) != null ? stack1 : "")
    + "\"\n      </div>\n    </div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"textPreviewTagged") || (depth0 != null ? lookupProperty(depth0,"textPreviewTagged") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"textPreviewTagged","hash":{},"data":data,"loc":{"start":{"line":32,"column":8},"end":{"line":32,"column":31}}}) : helper))) != null ? stack1 : "")
    + "\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"textPreview") || (depth0 != null ? lookupProperty(depth0,"textPreview") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"textPreview","hash":{},"data":data,"loc":{"start":{"line":34,"column":8},"end":{"line":34,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\n        ";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"search__item-foundwords drawer__item-body\">\n      <div class=\"search__item-foundwords-inner drawer__item-body-inner\">\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"foundWords") || (depth0 != null ? lookupProperty(depth0,"foundWords") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"foundWords","hash":{},"data":data,"loc":{"start":{"line":43,"column":8},"end":{"line":43,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n<div class=\"search__item no-results\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"noResultsMessage") || (depth0 != null ? lookupProperty(depth0,"noResultsMessage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"noResultsMessage","hash":{},"data":data,"loc":{"start":{"line":53,"column":49},"end":{"line":53,"column":71}}}) : helper))) != null ? stack1 : "")
    + "\">\n  <div class=\"search__item-inner\">\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"noResultsMessage") || (depth0 != null ? lookupProperty(depth0,"noResultsMessage") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"noResultsMessage","hash":{},"data":data,"loc":{"start":{"line":55,"column":4},"end":{"line":55,"column":26}}}) : helper))) != null ? stack1 : "")
    + "\n  </div>\n</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"isBlank") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":61,"column":7}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["searchSingleItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"drawer__item-title\">\n      <div class=\"drawer__item-title-inner\">\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"drawer__item\">\n  <div class=\"drawer__item-open is-search\">\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":10,"column":11}}})) != null ? stack1 : "")
    + "\n  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["boxmenucustom-item"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "is-visited";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-disabled=\"true\" aria-label=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_lockedLabel") || (depth0 != null ? lookupProperty(depth0,"_lockedLabel") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_lockedLabel","hash":{},"data":data,"loc":{"start":{"line":2,"column":135},"end":{"line":2,"column":151}}}) : helper)))
    + "\" ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"menu-item__duration boxmenucustom-item__duration\">\n      <div class=\"menu-item__duration-inner boxmenucustom-item__duration-inner\">\n        "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_boxMenu") : stack1)) != null ? lookupProperty(stack1,"durationLabel") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":10,"column":103}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":10,"column":104},"end":{"line":10,"column":118}}}) : helper))) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_boxMenu") : stack1)) != null ? lookupProperty(stack1,"durationLabel") : stack1), depth0)) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"menu-item__inner\" style=\"background-image: url("
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + ");\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_boxmenu") : stack1)) != null ? lookupProperty(stack1,"menuItem") : stack1), depth0))
    + "\">\n  <a href=\"#/id/"
    + alias2(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":2,"column":16},"end":{"line":2,"column":23}}}) : helper)))
    + "\" class=\"menu-item__link "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":48},"end":{"line":2,"column":83}}})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"_isLocked") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":85},"end":{"line":2,"column":160}}})) != null ? stack1 : "")
    + ">\n    <div class=\"menu-item__title\">\n      <div class=\"menu-item__title-inner accessible-text-block\" role=\"heading\" aria-level=\"2\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"displayTitle") || (depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"displayTitle","hash":{},"data":data,"loc":{"start":{"line":4,"column":94},"end":{"line":4,"column":112}}}) : helper))) != null ? stack1 : "")
    + "</div>\n    </div>\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"duration") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":13,"column":11}}})) != null ? stack1 : "")
    + "\n    <div class=\"menu-item__body\">\n      <div class=\"menu-item__body-inner\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"body","hash":{},"data":data,"loc":{"start":{"line":16,"column":41},"end":{"line":16,"column":51}}}) : helper))) != null ? stack1 : "")
    + "</div>\n    </div>\n\n    <div class=\"menu-item__progress boxmenucustom-item__progress js-menu-item-progress\">\n    </div>\n  </a>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["boxmenucustom"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"menu-addition__title\">\n            <div class=\"menu-addition__title-inner accessible-text-block\" role=\"heading\" aria-level=\"1\">\n              "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"displayTitle") || (depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayTitle","hash":{},"data":data,"loc":{"start":{"line":12,"column":14},"end":{"line":12,"column":32}}}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":10},"end":{"line":22,"column":17}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"menu-addition__title\">\n              <div class=\"menu-addition__title-inner accessible-text-block\" role=\"heading\" aria-level=\"1\">\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":27}}}) : helper))) != null ? stack1 : "")
    + "\n              </div>\n            </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"menu-addition__body\">\n            <div class=\"menu-addition__body-inner accessible-text-block\">\n              "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data,"loc":{"start":{"line":27,"column":14},"end":{"line":27,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n          </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"menu-addition\">\n  <div class=\"menu-addition__inner\">\n    <div class=\"menu-addition__text-wrapper\">\n      <div class=\"menu-addition__text-wrapper-inner\">\n        <div class=\"menu-addition__logo\">\n          <div class=\"menu-addition__logo-inner\">\n          </div>\n        </div>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":23,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":8},"end":{"line":30,"column":15}}})) != null ? stack1 : "")
    + "      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"menu-container\" role=\"region\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_boxmenu") : stack1)) != null ? lookupProperty(stack1,"ariaRegion") : stack1), depth0))
    + "\">\n  <div class='menu-container__inner box-menu-inner js-children clearfix'>\n    <div class=\"menu-instruction\">\n      <div class=\"menu-instruction__inner accessible-text-block\">\n        "
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_menu") : depth0)) != null ? lookupProperty(stack1,"_boxMenuCustom") : stack1)) != null ? lookupProperty(stack1,"_menuInstructionText") : stack1), depth0)) != null ? stack1 : "")
    + "\n      </div>\n    </div>\n  </div>\n  <div class=\"aria-label a11y-ignore-focus prevent-default\" tabindex=\"0\"\n    aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_boxmenu") : stack1)) != null ? lookupProperty(stack1,"menuEnd") : stack1), depth0))
    + "\"/>\n</div>\n";
},"useData":true});

return this["Handlebars"];

});