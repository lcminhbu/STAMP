using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace STAMP2023.Pages
{
    public class  HomeRegisterTalkshowModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public  HomeRegisterTalkshowModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}