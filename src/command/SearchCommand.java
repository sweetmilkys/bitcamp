package command;


import javax.servlet.http.HttpServletRequest;

import enums.Domain;

public class SearchCommand extends Command {
	private Stock stock = new Stock();
	
	public SearchCommand(HttpServletRequest request) {
		setRequest(request);
		setDomain(request.getServletPath().substring(1, request.getServletPath().indexOf(".")));
		setAction("move");
		setPage(request.getParameter("page"));
		execute();
	}
	@Override
	public void execute() {
		switch (Domain.valueOf(domain.toUpperCase())) {
		case MEMBER :
		case ADMIN :
			stock.list(request);
			break;
		default:
			break;
		}
		super.execute();
	}
}
