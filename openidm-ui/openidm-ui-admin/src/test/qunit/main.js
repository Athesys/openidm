/**
 * The contents of this file are subject to the terms of the Common Development and
 * Distribution License (the License). You may not use this file except in compliance with the
 * License.
 *
 * You can obtain a copy of the License at legal/CDDLv1.0.txt. See the License for the
 * specific language governing permission and limitations under the License.
 *
 * When distributing Covered Software, include this CDDL Header Notice in each file and include
 * the License file at legal/CDDLv1.0.txt. If applicable, add the following below the CDDL
 * Header, with the fields enclosed by brackets [] replaced by your own identifying
 * information: "Portions copyright [year] [name of copyright owner]".
 *
 * Copyright 2016 ForgeRock AS.
 */

// add new test modules here:
define([
    //idm common tests
    "./org/forgerock/openidm/ui/common/resource/ResourceCollectionTest",
    "./org/forgerock/openidm/ui/common/resource/RelationshipArrayViewTest",
    "./org/forgerock/openidm/ui/common/delegates/SearchDelegateTest",
    "./org/forgerock/openidm/ui/common/UserModelTest",
    "./org/forgerock/openidm/ui/common/workflow/tasks/TaskDetailsViewTest",

    //idm admin tests
    "./org/forgerock/openidm/ui/admin/MapResourceViewTest",
    "./org/forgerock/openidm/ui/admin/assignment/AddAssignmentViewTest",
    "./org/forgerock/openidm/ui/admin/assignment/AssignmentViewTest",
    "./org/forgerock/openidm/ui/admin/assignment/EditAssignmentViewTest",
    "./org/forgerock/openidm/ui/admin/connector/AbstractConnectorViewTest",
    "./org/forgerock/openidm/ui/admin/connector/AddConnectorViewTest",
    "./org/forgerock/openidm/ui/admin/connector/ConnectorListViewTest",
    "./org/forgerock/openidm/ui/admin/connector/ConnectorRegistryTest",
    "./org/forgerock/openidm/ui/admin/connector/ConnectorTypeAbstractViewTest",
    "./org/forgerock/openidm/ui/admin/connector/ConnectorTypeViewTest",
    "./org/forgerock/openidm/ui/admin/connector/EditConnectorViewTest",
    "./org/forgerock/openidm/ui/admin/connector/ldap/LDAPFilterDialogTest",
    "./org/forgerock/openidm/ui/admin/connector/ldap/LDAPTypeViewTest",
    "./org/forgerock/openidm/ui/admin/connector/oauth/AbstractOAuthViewTest",
    "./org/forgerock/openidm/ui/admin/connector/oauth/GoogleTypeViewTest",
    "./org/forgerock/openidm/ui/admin/connector/oauth/SalesforceTypeViewTest",
    "./org/forgerock/openidm/ui/admin/dashboard/DashboardTest",
    "./org/forgerock/openidm/ui/admin/dashboard/DashboardWidgetLoaderTest",
    "./org/forgerock/openidm/ui/admin/dashboard/NewDashboardTest",
    "./org/forgerock/openidm/ui/admin/dashboard/widgets/FrameWidgetTest",
    "./org/forgerock/openidm/ui/admin/dashboard/widgets/MappingReconResultsWidgetTest",
    "./org/forgerock/openidm/ui/admin/dashboard/widgets/RelationshipWidgetTest",
    "./org/forgerock/openidm/ui/admin/dashboard/widgets/ResourceListWidgetTest",
    "./org/forgerock/openidm/ui/admin/delegates/AuditDelegateTest",
    "./org/forgerock/openidm/ui/admin/delegates/ClusterDelegateTest",
    "./org/forgerock/openidm/ui/admin/delegates/ConnectorDelegateTest",
    "./org/forgerock/openidm/ui/admin/delegates/ExternalAccessDelegateTest",
    "./org/forgerock/openidm/ui/admin/delegates/MaintenanceDelegateTest",
    "./org/forgerock/openidm/ui/admin/delegates/ReconDelegateTest",
    "./org/forgerock/openidm/ui/admin/delegates/SchedulerDelegateTest",
    "./org/forgerock/openidm/ui/admin/delegates/ScriptDelegateTest",
    "./org/forgerock/openidm/ui/admin/delegates/SecurityDelegateTest",
    "./org/forgerock/openidm/ui/admin/delegates/SiteConfigurationDelegateTest",
    "./org/forgerock/openidm/ui/admin/delegates/SyncDelegateTest",
    "./org/forgerock/openidm/ui/admin/delegates/WorkflowDelegateTest",
    "./org/forgerock/openidm/ui/admin/managed/AbstractManagedViewTest",
    "./org/forgerock/openidm/ui/admin/managed/AddManagedViewTest",
    "./org/forgerock/openidm/ui/admin/managed/EditManagedViewTest",
    "./org/forgerock/openidm/ui/admin/managed/ManagedListViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/AddMappingViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/AdvancedViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/AssociationViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/BehaviorsViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/MappingBaseViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/MappingListViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/PropertiesViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/ScheduleViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/association/AssociationRuleViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/association/DataAssociationManagementViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/association/IndividualRecordValidationViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/association/ReconciliationQueryFiltersViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/association/correlationQuery/CorrelationQueryBuilderViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/association/correlationQuery/CorrelationQueryDialogTest",
    "./org/forgerock/openidm/ui/admin/mapping/association/dataAssociationManagement/ChangeAssociationDialogTest",
    "./org/forgerock/openidm/ui/admin/mapping/association/dataAssociationManagement/TestSyncDialogTest",
    "./org/forgerock/openidm/ui/admin/mapping/behaviors/PoliciesDialogViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/behaviors/PoliciesViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/behaviors/ReconciliationScriptViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/behaviors/SingleRecordReconciliationGridViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/behaviors/SingleRecordReconciliationViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/behaviors/SituationalEventScriptsViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/properties/AddPropertyMappingDialogTest",
    "./org/forgerock/openidm/ui/admin/mapping/properties/AttributesGridViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/properties/EditPropertyMappingDialogTest",
    "./org/forgerock/openidm/ui/admin/mapping/properties/LinkQualifiersViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/properties/MappingAssignmentsViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/scheduling/LiveSyncViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/scheduling/SchedulerViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/util/LinkQualifierFilterEditorTest",
    "./org/forgerock/openidm/ui/admin/mapping/util/MappingAdminAbstractViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/util/MappingScriptsViewTest",
    "./org/forgerock/openidm/ui/admin/mapping/util/MappingUtilsTest",
    "./org/forgerock/openidm/ui/admin/mapping/util/QueryFilterEditorTest",
    "./org/forgerock/openidm/ui/admin/objectTypes/ObjectTypesDialogTest",
    "./org/forgerock/openidm/ui/admin/role/EditRoleViewTest",
    "./org/forgerock/openidm/ui/admin/role/MembersDialogTest",
    "./org/forgerock/openidm/ui/admin/role/MembersViewTest",
    "./org/forgerock/openidm/ui/admin/role/TemporalConstraintsFormViewTest",
    "./org/forgerock/openidm/ui/admin/role/util/TemporalConstraintsUtilsTest",
    "./org/forgerock/openidm/ui/admin/role/util/UserQueryFilterEditorTest",
    "./org/forgerock/openidm/ui/admin/selfservice/AbstractSelfServiceViewTest",
    "./org/forgerock/openidm/ui/admin/selfservice/ForgotUsernameConfigViewTest",
    "./org/forgerock/openidm/ui/admin/selfservice/PasswordResetConfigViewTest",
    "./org/forgerock/openidm/ui/admin/selfservice/UserRegistrationConfigViewTest",
    "./org/forgerock/openidm/ui/admin/settings/EmailConfigViewTest",
    "./org/forgerock/openidm/ui/admin/settings/SelfServiceViewTest",
    "./org/forgerock/openidm/ui/admin/settings/SettingsViewTest",
    "./org/forgerock/openidm/ui/admin/settings/UpdateViewTest",
    "./org/forgerock/openidm/ui/admin/settings/audit/AuditAdminAbstractViewTest",
    "./org/forgerock/openidm/ui/admin/settings/audit/AuditEventHandlersDialogTest",
    "./org/forgerock/openidm/ui/admin/settings/audit/AuditEventHandlersViewTest",
    "./org/forgerock/openidm/ui/admin/settings/audit/AuditFilterPoliciesDialogTest",
    "./org/forgerock/openidm/ui/admin/settings/audit/AuditFilterPoliciesViewTest",
    "./org/forgerock/openidm/ui/admin/settings/audit/AuditTopicsDialogTest",
    "./org/forgerock/openidm/ui/admin/settings/audit/AuditTopicsViewTest",
    "./org/forgerock/openidm/ui/admin/settings/audit/AuditViewTest",
    "./org/forgerock/openidm/ui/admin/settings/audit/ExceptionFormatterViewTest",
    "./org/forgerock/openidm/ui/admin/settings/authentication/AuthenticationAbstractViewTest",
    "./org/forgerock/openidm/ui/admin/settings/authentication/AuthenticationModuleDialogViewTest",
    "./org/forgerock/openidm/ui/admin/settings/authentication/AuthenticationModuleViewTest",
    "./org/forgerock/openidm/ui/admin/settings/authentication/AuthenticationViewTest",
    "./org/forgerock/openidm/ui/admin/settings/authentication/SessionModuleViewTest",
    "./org/forgerock/openidm/ui/admin/settings/update/HistoryViewTest",
    "./org/forgerock/openidm/ui/admin/settings/update/InstallationPreviewViewTest",
    "./org/forgerock/openidm/ui/admin/settings/update/InstallationReportViewTest",
    "./org/forgerock/openidm/ui/admin/settings/update/InstallViewTest",
    "./org/forgerock/openidm/ui/admin/settings/update/MaintenanceModeViewTest",
    "./org/forgerock/openidm/ui/admin/settings/update/RepoUpdateViewTest",
    "./org/forgerock/openidm/ui/admin/settings/update/VersionsViewTest",
    "./org/forgerock/openidm/ui/admin/user/EditUserViewTest",
    "./org/forgerock/openidm/ui/admin/util/AdminAbstractViewTest",
    "./org/forgerock/openidm/ui/admin/util/AdminUtilsTest",
    "./org/forgerock/openidm/ui/admin/util/BackgridUtilsTest",
    "./org/forgerock/openidm/ui/admin/util/ConnectorUtilsTest",
    "./org/forgerock/openidm/ui/admin/util/FilterEditorTest",
    "./org/forgerock/openidm/ui/admin/util/FilterEvaluatorTest",
    "./org/forgerock/openidm/ui/admin/util/InlineScriptEditorTest",
    "./org/forgerock/openidm/ui/admin/util/LinkQualifierUtilsTest",
    "./org/forgerock/openidm/ui/admin/util/ReconDetailsViewTest",
    "./org/forgerock/openidm/ui/admin/util/SaveChangesViewTest",
    "./org/forgerock/openidm/ui/admin/util/SchedulerTest",
    "./org/forgerock/openidm/ui/admin/util/ScriptDialogTest",
    "./org/forgerock/openidm/ui/admin/util/ScriptListTest",
    "./org/forgerock/openidm/ui/admin/util/TreeGridUtilsTest",
    "./org/forgerock/openidm/ui/admin/util/WorkflowUtilsTest",
    "./org/forgerock/openidm/ui/admin/util/WorkflowWidgetTest",
    "./org/forgerock/openidm/ui/admin/workflow/ActiveProcessesViewTest",
    "./org/forgerock/openidm/ui/admin/workflow/ProcessDefinitionsViewTest",
    "./org/forgerock/openidm/ui/admin/workflow/ProcessDefinitionViewTest",
    "./org/forgerock/openidm/ui/admin/workflow/ProcessHistoryViewTest",
    "./org/forgerock/openidm/ui/admin/workflow/ProcessInstanceViewTest",
    "./org/forgerock/openidm/ui/admin/workflow/ProcessListViewTest",
    "./org/forgerock/openidm/ui/admin/workflow/TaskInstanceViewTest",
    "./org/forgerock/openidm/ui/admin/workflow/TaskListViewTest"
]);