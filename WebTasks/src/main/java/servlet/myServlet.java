package servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


 //@WebServlet("/myServlet")
public class myServlet extends HttpServlet {
  private static final long serialVersionUID = 1L;
       
   
    public myServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

  
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
  
    this.getServletContext().getRequestDispatcher("/Daten.xml").forward(request, response);
  }

  
  protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    // TODO Auto-generated method stub
    doGet(request, response);
  }

}
