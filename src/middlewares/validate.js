const validate = (schema) => (req, res, next) => {
    const { error } = schema.body.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
  
    if (schema.params) {
      const { error: paramError } = schema.params.validate(req.params);
      if (paramError) {
        return res.status(400).json({ message: paramError.details[0].message });
      }
    }
  
    next();
  };
  
  module.exports = validate;
  