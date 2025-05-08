using System;

public partial class Login : System.Web.UI.Page
{
    protected void btnLogin_Click(object sender, EventArgs e)
    {
        string user = txtUsername.Text;
        string pass = txtPassword.Text;

        if ((user == "admin" && pass == "1234") || (user == "test" && pass == "abcd"))
        {
            Session["username"] = user;
            Response.Redirect("Dashboard.aspx");
        }
        else
        {
            lblMessage.Text = "Invalid username or password.";
        }
    }
}
