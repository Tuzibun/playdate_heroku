module ApplicationHelper
  
  def flash_class(level)
    case level.to_sym
      when :notice then "alert alert-success"
      when :info then "alert alert-info"
      when :alert then "alert alert-danger"
      when :warning then "alert alert-warning"
    end
  end

  def active_page(active_page)
    @active == active_page ? "active" : ""
  end

  def bootstrap_form_for(name, *args, &block)
    options = args.extract_options!
    form_for(name, *(args << options.merge(:builder => BootstrapFormBuilder)), &block)
  end
  
end