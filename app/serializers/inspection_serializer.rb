class InspectionSerializer < ActiveModel::Serializer
	attributes :id, :license_no, :lic_issue_date, :lic_exp_date, :result, :result_date, :viol_code, :viol_level, :viol_date, :comments
end