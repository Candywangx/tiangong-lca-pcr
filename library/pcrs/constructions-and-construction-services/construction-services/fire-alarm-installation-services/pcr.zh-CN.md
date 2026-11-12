---
pcr_id: pcr.constructions-and-construction-services.construction-services.fire-alarm-installation-services
language: zh-CN
translation_status: aligned
status: candidate
sync_with: pcr.en-US.md
---

# 常规有线火灾报警系统安装服务

## 1. 范围与适用性

本PCR适用于一个单控制盘常规有线建筑火灾报警系统的安装与调试，包含独立的探测及手动触发回路、警报回路和永久备用电池对。工作从已认可设计、安装位置及路由和既有专用隔离电源接口开始。安装方接收材料、准备并安装控制盘及器件、敷设端接线路、连接及配置系统、纠正缺陷、完成实际测试计划，最终交接有文件的验收系统。CFP Standard手册提供路线证据，不能替代适用工程设计或有资质人员的验收决定（`ctec-standard`，PDF第6–8、10–13、15、17及23页）。

排除可寻址、无线、AlarmSense两线制、复示及联网系统、灭火剂控制、远程监控、上游建筑及电源建设，以及交接后运行维护。不同控制盘、分区、器件、电缆或备用配置不自动具有功能等价性。安装一个部件、回路通电或记录检查不等于完整验收输出。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.fire-alarm-installation-services |
| classification_refs | CPC 3.0 54612 Fire alarm installation services；本PCR覆盖所声明的常规有线子集 |
| covered_products | 在安装方交接门验收的完整单控制盘常规有线火灾报警系统安装与调试 |
| excluded_products | 可寻址；无线；AlarmSense两线制；复示及联网；灭火剂控制；远程监控；运行维护 |
| representative_product | 常规CFP Standard控制盘，配兼容探测及手动触发回路、极性声响回路、真实末端器件和永久VRLA备用电池对 |
| production_route | 接收核实；准备安装；敷设端接连接；配置；测试纠正复测；恢复正常状态并签字验收 |
| market_state | 安装方签字交接时已安装、连接、配置、功能测试并形成文件的系统 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 同一声明配置的完整已验收常规有线火灾报警系统安装与调试 |
| How much | 1 Item(s) |
| How well | 真实认可设计及BOM、回路完整性及因果响应、兼容备用电源、有文件测试结果、恢复正常状态和有资质人员签字验收 |
| How long or cycle | 一个真实安装至验收周期，含纠正及复测；披露工程日期。可复用资产数据包分别保留制造、所有服务期间、维护更换及退役阶段；不意味着运行服务期间。 |
| reference_flow_link | `accepted_installation` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收完整常规有线火灾报警系统安装与调试 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 实际控制盘制造商及型号；单控制盘配置；分区及探测声响回路；准确器件及配件BOM和件数；回路及安装方馈线长度和SKU；永久电池对型号容量及批准；既有隔离电源接口及安装方段；安装位置及路由；设计和验收规范；真实因果响应及备用计划；测试纠正恢复记录；签字交接门及日期 |

在数据包中声明这些限定信息，并在cp_acceptance保留D，即独立计数的同配置完整验收系统数。归一化须有正的D。实质不同配置分别处理；单纯件数既不证明等效覆盖，也不证明等效消防性能。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | accepted_installation | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 采用cp_acceptance计数同配置完整验收系统，不计器件、分区、测试或进度。每项清单数量均使用同一D。 |
| mass_numerators | `refine_incoming_packaging`要求细化的实际交换; control_panel; smoke_detector; heat_detector; detector_base; manual_call_point; polarised_sounder; end_of_line_device; standby_batteries; `alarm_cable_alarm_circuit`; `alarm_cable_panel_feeder`; `fixings_and_containment_screw`; `fixings_and_containment_anchor`; `fixings_and_containment_gland`; `fixings_and_containment_support`; `fixings_and_containment_containment`; `fixings_and_containment_label`; detector_test_agent; `test_cleaning_consumables_wipe`; `test_cleaning_consumables_cleaning_formulation`; `refine_unused_product_return`要求细化的实际交换; `refine_dry_material_waste`要求细化的实际交换; `rejected_component_waste_panel`; `rejected_component_waste_detector`; `rejected_component_waste_heat_detector`; `rejected_component_waste_base`; `rejected_component_waste_call_point`; `rejected_component_waste_sounder`; `rejected_component_waste_eol`; `rejected_component_waste_cable`; `rejected_component_waste_vrla_battery`; `contaminated_solid_waste_wipe`; `contaminated_solid_waste_container`; `contaminated_solid_waste_loose_residue`; `refine_airborne_particulate`要求细化的实际交换; `refine_test_agent_constituent_to_air`要求细化的实际交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | SKU、材质、状态及接收方的数量分子分开。采用经校准净称量，或可追溯同SKU件数及长度与质量转换。Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`的参考kg系数为1。不得用于电量或服务时长。 |
| energy_preservation | installation_electricity | Energy | kWh | 通过cp_energy测量真实交接前kWh及因果份额。下游交换构建须核实Energy支撑；NCV、电池Ah、质量及单独经过小时数不能提供该支撑。 |
| resource_count | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger`; `hired_support_service_access` | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 自有资产采用具体归属件数份额；计数租用须为真实完整合同事件。Item(s)参考系数为1。小时合同须使用真实Duration支撑并复核，不得转成件数。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已认可常规设计及路由安装接口；已准备建筑和主桥架；明确位置的既有专用隔离电源接口；安装方接收时的供应组件 |
| starting_condition_role | 边界就绪事实及既有接口，不是新增产出交换或收益 |
| product_classification_scope | CPC 3.0 54612中的常规有线单控制盘安装调试子集 |
| recursive_input_rule | 同类别既有安装进入工程时识别其真实交接状态及上游数据包；不得递归重建验收服务，也不得将就绪状态当作服务输入。改变范围须单独复核。 |
| upstream_dataset_requirement | 匹配真实供应组件SKU及状态和地域技术；要求上游制造及到场交付包装边界披露。区分供应制造与前景安装，避免已含包装重复计算。 |
| disclosure | 真实设计、起始接口、安装方馈线职责、场址工程期间、供应数据集及包含项、验收配置及D、资源所有权和未关闭证据缺口 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | 本PCR适用于一个单控制盘常规有线建筑火灾报警系统的安装与调试，包含独立的探测及手动触发回路、警报回路和永久备用电池对。工作从已认可设计、安装位置及路由和既有专用隔离电源接口开始。安装方接收材料、准备并安装控制盘及器件、敷设端接线路、连接及配置系统、纠正缺陷、完成实际测试计划，最终交接有文件的验收系统。CFP Standard手册提供路线证据，不能替代适用工程设计或有资质人员的验收决定（`ctec-standard`，PDF第6–8、10–13、15、17及23页）。 排除可寻址、无线、AlarmSense两线制、复示及联网系统、灭火剂控制、远程监控、上游建筑及电源建设，以及交接后运行维护。不同控制盘、分区、器件、电缆或备用配置不自动具有功能等价性。安装一个部件、回路通电或记录检查不等于完整验收输出。 | `ctec-standard` |
| boundary_install | install_accept | 单节点负责接收、准备安装、探测和声响回路端接、永久电池连接、配置、真实测试纠正及签字验收。阶段日志不产生新增产品交换。实际设计记录保留兼容末端器件、市电隔离布线及屏蔽接地接口。 | `ctec-standard` |
| boundary_mains | `alarm_cable_alarm_circuit`; `alarm_cable_panel_feeder`; installation_electricity | 既有专用隔离市电为明确起始接口。纳入安装方实际供应馈线段、连接和交接前实测耗电；排除上游建筑配电施工及后续运行。 | `ctec-standard` |
| boundary_components | control_panel; smoke_detector; heat_detector; detector_base; manual_call_point; polarised_sounder; end_of_line_device; standby_batteries | 永久控制盘电源充电器、电池及连接器件为安装产品组件，不是可复用工具资产。披露配件包含项和真实CFP批准及设计电池条件，不得跨型号泛化。 | `ctec-standard` |
| boundary_residuals | install_accept | 每项真实拒收、纠正、可用退回及残留出口只有一个责任方。关联原领用、事件、转移和真实接收方。内部重新端接或配置不产生虚构中间输出；未分类失踪质量为缺口。 | |
| boundary_resources | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger`; `hired_support_service_access` | 识别跨工程及期间使用的每项共享资产：安装方自有工具、测试仪、外置充电器、登高设备及供应方服务。索引从制造购置、服务、维护更换至退役终止的所有受益工程及期间。保留真实剩余使用量不确定性。不得重复供应方资产制造。 |  |
| boundary_packaging | `refine_incoming_packaging`要求细化的实际交换; `refine_dry_material_waste`要求细化的实际交换 | 即使制造已含于到场供应，来料包装仍保留在实物来源池。仅上游排除时新增独立包装负荷；不得从出口废物虚构来料。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| install_accept | 常规有线系统安装与验收 | required | 真实已认可设计的常规有线工程 | 单一负责组装、测试纠正及交接的职责 | accepted_installation; 1 Item(s) |

接收就绪、布线安装、连接配置、测试纠正及收尾是install_accept的日志阶段。失效控制盘及器件、受损电缆或缺陷电池始终关联纠正替换及最终验收工程。实际修复、未变库存退回、回收接收方和丢弃是不同路径；不得默认处置或回收。

### 过程：常规有线系统安装与验收（`install_accept`）

#### 输入

##### 产品流

###### 自有钻孔工具资产当量 (`owned_equipment_attribution_drill`)

仅记录本项独立识别的“自有钻孔工具资产当量”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。 数量关联：`owned_asset_normalize`；保留下列原方法明确公式。

- 选定流：自有钻孔工具资产当量
- 流属性/单位：Number of items / Item(s)
- 数量规则：本准确资产包的制造资产当量 = N_asset * A_job / A_life / D Item(s)。N_asset为实际资产包数量，本工单与全部使用者全寿命活动采用同一有证据基准及完整正分母；制造只归属一次，维护替换及退役按实际受益期间分别归属，不按每系统消耗整台工具。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`ctec-standard`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 自有火灾报警测试仪资产当量 (`owned_equipment_attribution_tester`)

仅记录本项独立识别的“自有火灾报警测试仪资产当量”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。 数量关联：`owned_asset_normalize`；保留下列原方法明确公式。

- 选定流：自有火灾报警测试仪资产当量
- 流属性/单位：Number of items / Item(s)
- 数量规则：本准确资产包的制造资产当量 = N_asset * A_job / A_life / D Item(s)。N_asset为实际资产包数量，本工单与全部使用者全寿命活动采用同一有证据基准及完整正分母；制造只归属一次，维护替换及退役按实际受益期间分别归属，不按每系统消耗整台工具。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`ctec-standard`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 自有外置设备充电器资产当量 (`owned_equipment_attribution_external_charger`)

仅记录本项独立识别的“自有外置设备充电器资产当量”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。 数量关联：`owned_asset_normalize`；保留下列原方法明确公式。

- 选定流：自有外置设备充电器资产当量
- 流属性/单位：Number of items / Item(s)
- 数量规则：本准确资产包的制造资产当量 = N_asset * A_job / A_life / D Item(s)。N_asset为实际资产包数量，本工单与全部使用者全寿命活动采用同一有证据基准及完整正分母；制造只归属一次，维护替换及退役按实际受益期间分别归属，不按每系统消耗整台工具。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`
- 来源：`ctec-standard`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 接收时的常规有线火灾报警控制盘（`control_panel`）

登记实际供应的常规控制盘型号及随附配件BOM。称量产品净质量，或将该具体SKU数量乘以可追溯净质量系数。永久电源及电池充电器保留在控制盘数据包内；不得与现场器件或紧固件重复记录配件。将接收、最终安装和拆除件关联至同一部件记录。

数量计算见第8节`normalize_exchange`。范围证据需求：需提供实际控制盘质量、数量及配件边界；单控制盘参考对象不能给出跨型号质量区间。

- 选定流：接收时的常规有线火灾报警控制盘
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

###### 兼容的常规烟雾探测器 (`smoke_detector`)

仅在本具体交换确实发生于现有作业边界内时适用。记录准确物料或设备身份、供应/当前状态、原生数量及实际接收方或上游覆盖。不推定发生、数量、新工艺或 UUID。完整供应组件与其已包含部件是互斥采购表示。此处仅记录实际批准的烟雾探测技术/SKU，排除独立供应底座及已包含附件。

- 选定流：兼容的常规烟雾探测器
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

###### 兼容的常规感温探测器 (`heat_detector`)

仅在本具体交换确实发生于现有作业边界内时适用。记录准确物料或设备身份、供应/当前状态、原生数量及实际接收方或上游覆盖。不推定发生、数量、新工艺或 UUID。完整供应组件与其已包含部件是互斥采购表示。以安装清单实际存在批准的感温探测器为条件，不要求每套系统必有。

- 选定流：兼容的常规感温探测器
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

###### 兼容且独立供应的探测器底座 (`detector_base`)

仅在本具体交换确实发生于现有作业边界内时适用。记录准确物料或设备身份、供应/当前状态、原生数量及实际接收方或上游覆盖。不推定发生、数量、新工艺或 UUID。完整供应组件与其已包含部件是互斥采购表示。不重复采购探测器套件已包含的底座。

- 选定流：兼容且独立供应的探测器底座
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

###### 兼容的手动火灾报警按钮 (`manual_call_point`)

仅在本具体交换确实发生于现有作业边界内时适用。记录准确物料或设备身份、供应/当前状态、原生数量及实际接收方或上游覆盖。不推定发生、数量、新工艺或 UUID。完整供应组件与其已包含部件是互斥采购表示。保留实际触发回路，供应附件只计一次。

- 选定流：兼容的手动火灾报警按钮
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

###### 兼容的极性火灾报警声响器 (`polarised_sounder`)

仅在本具体交换确实发生于现有作业边界内时适用。记录准确物料或设备身份、供应/当前状态、原生数量及实际接收方或上游覆盖。不推定发生、数量、新工艺或 UUID。完整供应组件与其已包含部件是互斥采购表示。通知回路身份与探测/手动触发回路分开。

- 选定流：兼容的极性火灾报警声响器
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

###### 兼容的回路终端器件 (`end_of_line_device`)

仅在本具体交换确实发生于现有作业边界内时适用。记录准确物料或设备身份、供应/当前状态、原生数量及实际接收方或上游覆盖。不推定发生、数量、新工艺或 UUID。完整供应组件与其已包含部件是互斥采购表示。使用实际批准的终端元件身份及回路，不编造阻值或元件数量。

- 选定流：兼容的回路终端器件
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`


###### 按SKU区分的永久新装VRLA备用电池（`standby_batteries`）

代表性CFP路线登记串联的两块兼容新12 V VRLA电池，注明准确容量、批准适用性及供应状态。逐SKU称量，或采用可追溯件数与净质量系数。容量依据实际负载、所需备用及报警时段和制造商适用批准选择；引用的批准条件不是所有电池的通用规格。交接前充电电量计入 installation_electricity，与电池制造分开。

数量计算见第8节`normalize_exchange`。范围证据需求：需提供具体电池数据表、批准及设计要求、验收电池对BOM和真实质量；制造商备用容量Ah示例既不是安装能耗，也不是通用电池用量范围。

- 选定流：按SKU区分的永久新装VRLA备用电池
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

###### 完整供应的耐火屏蔽报警回路电缆 (`alarm_cable_alarm_circuit`)

仅记录本项独立识别的“完整供应的耐火屏蔽报警回路电缆”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：完整供应的耐火屏蔽报警回路电缆
- 流属性/单位：Mass / kg
- 数量规则：按本项“完整供应的耐火屏蔽报警回路电缆”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 实际供应的控制盘下游馈线电缆 (`alarm_cable_panel_feeder`)

仅记录本项独立识别的“实际供应的控制盘下游馈线电缆”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：实际供应的控制盘下游馈线电缆
- 流属性/单位：Mass / kg
- 数量规则：按本项“实际供应的控制盘下游馈线电缆”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 单独供应的报警系统安装螺钉 (`fixings_and_containment_screw`)

仅记录本项独立识别的“单独供应的报警系统安装螺钉”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：单独供应的报警系统安装螺钉
- 流属性/单位：Mass / kg
- 数量规则：按本项“单独供应的报警系统安装螺钉”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 单独供应的报警系统安装锚栓 (`fixings_and_containment_anchor`)

仅记录本项独立识别的“单独供应的报警系统安装锚栓”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：单独供应的报警系统安装锚栓
- 流属性/单位：Mass / kg
- 数量规则：按本项“单独供应的报警系统安装锚栓”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 单独供应的报警系统电缆格兰头 (`fixings_and_containment_gland`)

仅记录本项独立识别的“单独供应的报警系统电缆格兰头”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：单独供应的报警系统电缆格兰头
- 流属性/单位：Mass / kg
- 数量规则：按本项“单独供应的报警系统电缆格兰头”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 单独供应的局部报警电缆支架 (`fixings_and_containment_support`)

仅记录本项独立识别的“单独供应的局部报警电缆支架”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：单独供应的局部报警电缆支架
- 流属性/单位：Mass / kg
- 数量规则：按本项“单独供应的局部报警电缆支架”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 单独供应的短段局部报警电缆敷设件 (`fixings_and_containment_containment`)

仅记录本项独立识别的“单独供应的短段局部报警电缆敷设件”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：单独供应的短段局部报警电缆敷设件
- 流属性/单位：Mass / kg
- 数量规则：按本项“单独供应的短段局部报警电缆敷设件”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 单独供应的报警系统标识标签 (`fixings_and_containment_label`)

仅记录本项独立识别的“单独供应的报警系统标识标签”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：单独供应的报警系统标识标签
- 流属性/单位：Mass / kg
- 数量规则：按本项“单独供应的报警系统标识标签”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 实际物理耗用的探测器测试配方产品（`detector_test_agent`）

仅在真实使用兼容物理气溶胶或其他配方产品时启用。记录准确产品、当前SDS、罐总重及皮重、使用前后数量、退回产品和残留去向；配方耗用kg与空容器质量分开测量。电子或热测试及受测器件数量不会自动产生化学输入。排放物种另按 `refine_test_agent_constituent_to_air`要求细化的实际交换 独立识别。

数量计算见第8节`normalize_exchange`。范围证据需求：需提供兼容产品及SDS、真实罐质量变化和同方法剂量观察；没有已核实的通用每测试克数系数。

- 选定流：实际物理耗用的探测器测试配方产品
- 流属性/单位：Mass / kg
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：`ctec-standard`

###### 单独供应的火灾报警测试或清洁擦拭物 (`test_cleaning_consumables_wipe`)

仅记录本项独立识别的“单独供应的火灾报警测试或清洁擦拭物”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：单独供应的火灾报警测试或清洁擦拭物
- 流属性/单位：Mass / kg
- 数量规则：按本项“单独供应的火灾报警测试或清洁擦拭物”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 单独供应的火灾报警清洁配方产品 (`test_cleaning_consumables_cleaning_formulation`)

仅记录本项独立识别的“单独供应的火灾报警清洁配方产品”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：单独供应的火灾报警清洁配方产品
- 流属性/单位：Mass / kg
- 数量规则：按本项“单独供应的火灾报警清洁配方产品”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 安装及交接前测试的实测电量（`installation_electricity`）

按真实安装、外置工具充电、控制盘通电、备用电池充电、测试及复测的交接前时段，读取经校准供电电表起止kWh。同一表计时段内其他使用方的耗电按因果记录分担；每个充电边界只计一次。保留Energy/kWh，不得称量电力、作质量转换、以NCV替代或从电池Ah推算。后续监控、待机及运行不在此服务周期内。

数量计算见第8节`energy_normalize`。范围证据需求：需提供实际表计时段、背景供电及充电职责、其他用户、验收系统分担和可比实测kWh/参考流记录。Energy/kWh身份支撑未决；无有来源的数量范围。

- 选定流：安装及交接前测试的实测电量
- 流属性/单位：Energy / kWh
- 数量规则：真实归属数量分子除以D；保留原始记录及对应计量基准
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：

###### 完整火灾报警安装登高合同事件 (`hired_support_service_access`)

仅记录本项独立识别的“完整火灾报警安装登高合同事件”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：完整火灾报警安装登高合同事件
- 流属性/单位：Number of items / Item(s)
- 数量规则：仅在本项实际服务确实提供具名、边界明确且原生参考为Item(s)的独立完整物理成果或服务事件时启用。独立清点实际已完成且接收的服务ID、配置与交付点，并核对服务方生命周期及已含资源；按原已验收产出正分母仅归一化一次，不将费用或劳动小时换成事件。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_services`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

#### 输出

##### 产品流

###### 已验收完整常规有线火灾报警系统安装与调试（`accepted_installation`）

只计数同一声明配置下已完整安装、连接、配置、形成文件并签字验收的单控制盘系统。cp_acceptance将真实设计及BOM关联至触发、警报、故障、市电失效及备用、因果响应和恢复正常状态证据。计数对象为系统，不是分区、器件、测试、部分进度或拒收工作。复测及纠正保留资源负荷，不增加D。

数量计算见第8节`reference_output`。范围证据需求：1 Item(s)是准确归一化参考输出，不是实测产率范围。验收分母、失败及待验收工作和配置区分均须可追溯记录。

- 选定流：已验收完整常规有线火灾报警系统安装与调试
- 流属性/单位：Number of items / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_acceptance`
- 来源：`accepted-count-normalization`

##### 废物流

###### 完整拒收火灾报警控制盘废物 (`rejected_component_waste_panel`)

仅记录本项独立识别的“完整拒收火灾报警控制盘废物”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：完整拒收火灾报警控制盘废物
- 流属性/单位：Mass / kg
- 数量规则：按本项“完整拒收火灾报警控制盘废物”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 完整拒收烟雾探测器废物 (`rejected_component_waste_detector`)

仅记录本项独立识别的“完整拒收烟雾探测器废物”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：完整拒收烟雾探测器废物
- 流属性/单位：Mass / kg
- 数量规则：按本项“完整拒收烟雾探测器废物”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 完整拒收感温探测器废物 (`rejected_component_waste_heat_detector`)

仅记录本项独立识别的“完整拒收感温探测器废物”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：完整拒收感温探测器废物
- 流属性/单位：Mass / kg
- 数量规则：按本项“完整拒收感温探测器废物”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 单独废弃的探测器底座废物 (`rejected_component_waste_base`)

仅记录本项独立识别的“单独废弃的探测器底座废物”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：单独废弃的探测器底座废物
- 流属性/单位：Mass / kg
- 数量规则：按本项“单独废弃的探测器底座废物”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 完整拒收手动报警按钮废物 (`rejected_component_waste_call_point`)

仅记录本项独立识别的“完整拒收手动报警按钮废物”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：完整拒收手动报警按钮废物
- 流属性/单位：Mass / kg
- 数量规则：按本项“完整拒收手动报警按钮废物”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 完整拒收火灾报警声响器废物 (`rejected_component_waste_sounder`)

仅记录本项独立识别的“完整拒收火灾报警声响器废物”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：完整拒收火灾报警声响器废物
- 流属性/单位：Mass / kg
- 数量规则：按本项“完整拒收火灾报警声响器废物”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 单独废弃的回路终端器件废物 (`rejected_component_waste_eol`)

仅记录本项独立识别的“单独废弃的回路终端器件废物”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：单独废弃的回路终端器件废物
- 流属性/单位：Mass / kg
- 数量规则：按本项“单独废弃的回路终端器件废物”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 完整受损报警电缆废物 (`rejected_component_waste_cable`)

仅记录本项独立识别的“完整受损报警电缆废物”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：完整受损报警电缆废物
- 流属性/单位：Mass / kg
- 数量规则：按本项“完整受损报警电缆废物”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 完整失效VRLA备用电池废物 (`rejected_component_waste_vrla_battery`)

仅记录本项独立识别的“完整失效VRLA备用电池废物”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：完整失效VRLA备用电池废物
- 流属性/单位：Mass / kg
- 数量规则：按本项“完整失效VRLA备用电池废物”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 受污染的火灾报警测试或清洁擦拭物废物 (`contaminated_solid_waste_wipe`)

仅记录本项独立识别的“受污染的火灾报警测试或清洁擦拭物废物”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：受污染的火灾报警测试或清洁擦拭物废物
- 流属性/单位：Mass / kg
- 数量规则：按本项“受污染的火灾报警测试或清洁擦拭物废物”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 受污染的火灾报警测试或清洁容器废物 (`contaminated_solid_waste_container`)

仅记录本项独立识别的“受污染的火灾报警测试或清洁容器废物”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：受污染的火灾报警测试或清洁容器废物
- 流属性/单位：Mass / kg
- 数量规则：按本项“受污染的火灾报警测试或清洁容器废物”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 单独交付的火灾报警作业配方残余废物 (`contaminated_solid_waste_loose_residue`)

仅记录本项独立识别的“单独交付的火灾报警作业配方残余废物”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：单独交付的火灾报警作业配方残余废物
- 流属性/单位：Mass / kg
- 数量规则：按本项“单独交付的火灾报警作业配方残余废物”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residuals`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocate_job | install_accept | 实际材料、电量、测试剂、服务及纠正负荷归属同一验收配置工程。先细分独立记录工程，再采用有理据因果份额。拒收、复测及失败工作不增加D，也不脱离工程负荷。唯一预期产品输出为accepted_installation；可用未变库存是退回，不是预期共产品。 | |
| allocate_returns | `refine_unused_product_return`要求细化的实际交换; `refine_incoming_packaging`要求细化的实际交换 | 毛保管输入及真实未变退回分别保留。上游净耗用供应数量分子为毛领用减有证据可用退回及归属别处的剩余库存。退回操作资源仍归本工程；不得既净扣供应又给予第二次避免产品收益。供应已含包装不另计制造负荷。 |  |
| allocate_asset | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger` | 对每项具体资产制造包，以其件数乘本工程真实服务活动量，再除以有文件同基准全寿命活动量。枚举install_accept及所有其他使用工程期间；所声明寿命内份额合计为一。寿命服务或剩余使用证据未知时不能完成最终归属。禁止每工程整台资产、默认寿命或重复使用次数。 |  |
| allocate_period | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger` | 制造购置、全部服务工程、维护更换及退役终止使用同一资产阶段期间索引。真实维护更换数据包分配给有证据受益期间或因果工程，该具体分配优先于一般寿命份额。退役只索引一次并披露负荷责任方。已终止资产采用真实历史；在用资产剩余使用估计须有证据及不确定性。不得对已按寿命归属的数据包再年化，也不得将原资产及替换资产同时按整台计入。 |  |
| allocate_service | `hired_support_service_access`; installation_electricity | 供应方服务负责其已含租用资产制造维护及运行资源。采用全部用户的真实完成事件份额并披露包含项；只对服务包以外的电量等资源另计。自有资产隐含份额与实测电量为不同数据包，各计一次。 |  |
| allocate_residual | `refine_dry_material_waste`要求细化的实际交换; `rejected_component_waste_panel`; `rejected_component_waste_detector`; `rejected_component_waste_heat_detector`; `rejected_component_waste_base`; `rejected_component_waste_call_point`; `rejected_component_waste_sounder`; `rejected_component_waste_eol`; `rejected_component_waste_cable`; `rejected_component_waste_vrla_battery`; `contaminated_solid_waste_wipe`; `contaminated_solid_waste_container`; `contaminated_solid_waste_loose_residue` | 每种状态声明真实修复、库存退回、回收接收方或丢弃，并保留收集及已建模处理的责任方。目的地不能自动产生回收替代收益。下游回收产品模型须有自身证据及边界。 |  |

## 8. 前景数据采集、计算与质量规则


对照验收回路清单，分别识别每种实际探测、触发、通知、底座和终端 SKU。条件卡不规定设备数量或通用探测技术。实际工厂组合设备按一套供应组件记录，其已包含部件不得另行采购。保留修正中消耗的全部替换件和准确 SKU 的计数转质量证据；额外实际设备仍须具有自身具体身份。

### 变量与实物台账定义

D是cp_acceptance中同配置完整验收系统的正计数。Q为使用自身单位的真实归属数量分子，不是材料、能量、资产份额及服务事件的混合总和。负荷归一化前保留原始毛观察。对每个相容SKU或材质池，核对期初库存加真实接收领用与期末库存、安装留存、未变退回和分别测量的残留出口。验收服务输出以Item(s)计数，不进入kg平衡项。粉尘相关时保留真实准备基材信息，不虚构新增材料耗用。

配方组分采用相容基准下的实测耗用配方及准确组成，随后核对留存、捕集残留和有独立证据排放份额。碳或水约束只能检查相容真实组分池；不得使用通用水平衡、氧气交换或残差即排放捷径。发生状态未知是证据缺口，不是零。清单诊断与真实具体交换分开；混合材质质量总量不是可选择流身份。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | install_accept | accepted_installation | 签字验收台账 | job/configuration/system IDs; panel/model/zones; exact device BOM; circuit/feeder lengths; battery pair/capacity/approval; design/cause-effect/standby schedule; tests/corrections/normal restoration; status/signature/date; D; 工程配置系统ID；控制盘型号分区；准确器件BOM；回路馈线长度；电池对容量批准；设计因果响应备用计划；测试纠正恢复正常；状态签字日期；D | 按真实设计、测试及验收记录检查完整安装系统。仅计数最终签字同配置验收系统；待验收、失败及进度记录分别保留。 | Item(s) | 每系统及纠正；最终收尾 | 真实安装开始至签字验收 | 一个声明场址工程及配置 | 每参考流 | 签字设计BOM测试恢复记录；分母核对 |
| cp_materials | install_accept | 实物供应材料、包装及可用退回 | 接收领用退回及安装状态台账 | job/date/event/transfer IDs; supplier/SKU/state; gross/net/tare; count or length; matching kg/item or kg/m evidence; shipment/pack material; upstream inclusions; stock; retained installed mass; usable return; 工程日期事件转移ID；供应方SKU状态；毛重净重皮重；件数或长度；匹配kg/item或kg/m证据；批次包装材质；上游包含项；库存；安装留存质量；可用退回; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | 经校准秤称量净物料，或采用可追溯同SKU件数长度质量系数。分开追踪保管毛输入、真实未变退回、库存变化及安装状态；包装实物池与上游负荷责任方独立保留。 按身份、实物事件、状态、交付点和期间独立记录每项实际子流或后续细化交换。即使尚未确定具体交换身份，原全部采集和闭合义务仍保留。不得分摊集合总量或把数值区间复制给子流，不得重复计算载体及其内含物，也不得将发生情况、数量或原生参考缺失填成零。每项具体交换只能有一种属性和一个单位；CP其他读数仅作辅助且须有证据换算。必要细化缺失会阻断数据集完成。 | kg; Item(s); m | 每次接收领用退回及最终安装BOM | 所有原始及纠正事件至收尾 | install_accept保管及声明批次接口 | 每参考流 | 校准皮重记录；SKU系数；配对转移；库存BOM核对 |
| cp_energy | install_accept | installation_electricity | 表计时段及用户份额台账 | job/date; meter ID/calibration; start/end kWh; supply/charging boundary; installation/test/retest/recharge interval; other users; causal shares; signed acceptance cutoff; 工程日期；电表ID校准；起止kWh；供电充电边界；安装测试复测充电时段；其他用户；因果份额；签字验收截止 | 读取真实供电电表，包含外置工具充电及交接前控制盘电池充电；核对共享用户时段，仅扣除有证据的其他用户耗电，排除交接后运行。 | kWh | 每个归属运行测试充电时段 | 安装开始至交接截止，含纠正 | 服务install_accept的真实供电电表边界 | 每参考流 | 电表读数校准；时段覆盖；用户份额；不以电池Ah代替 |
| cp_services | install_accept | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger`; `hired_support_service_access` | 资产事件及寿命期间归属台账 | asset/model/serial/owner; manufacture packet/count; job activity; same-basis lifetime activity; all jobs/consumers/periods; maintenance/replacement/retirement event and beneficiaries; remaining-use evidence; service contract/configuration/completion/count; provider resource inclusions; 资产型号序列号所有方；制造数据包及件数；工程活动量；同基准全寿命活动量；所有工程用户期间；维护更换退役事件及受益方；剩余使用量证据；服务合同配置完成件数；供应方资源包含项; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | 索引真实资产制造购置、每个使用工程报告期间、真实维护更换和退役。以一致基准测量工程及全寿命活动量；识别维护因果受益方。真实计数租用检查合同、完成事件数及全部用户份额；真实小时租赁数量保留并单独复核。 按身份、实物事件、状态、交付点和期间独立记录每项实际子流或后续细化交换。即使尚未确定具体交换身份，原全部采集和闭合义务仍保留。不得分摊集合总量或把数值区间复制给子流，不得重复计算载体及其内含物，也不得将发生情况、数量或原生参考缺失填成零。每项具体交换只能有一种属性和一个单位；CP其他读数仅作辅助且须有证据换算。必要细化缺失会阻断数据集完成。 | Item(s); 披露实际服务活动基准 | 每工程事件及每资产期间更新 | 工程日期及有文件资产寿命阶段历史 | install_accept及所选资源所有其他用户 | 每参考流 | 资产历史BOM；有文件使用量及不确定性；合同发票完成记录；全部用户份额核对 |
| cp_residuals | install_accept | 废物流及直接空气物种颗粒 | 残留发运监测及组分台账 | job/date/event; original issue/source pool; material/SKU/state; waste code/recipient/transfer; gross/tare kg; fault/removal/retest; substrate/tool/capture/particle basis/air compartment; test product/SDS/composition; measured consumed/captured/residual quantities; matching factor/activity and uncertainty; 工程日期事件；原领用来源池；材质SKU状态；废物代码接收方转移；毛重皮重kg；故障拆除复测；基材工具捕集粒径基准空气子区室；测试产品SDS组成；实测耗用捕集残留；匹配系数活动量及不确定性; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | 逐材质状态接收方称量发运量，并与保管纠正记录配对。真实空气排放采用物种颗粒质量测量，或独立支撑的匹配活动组成分配方法；区分捕集废物及可用库存，禁止将未闭合残差变为排放。 按身份、实物事件、状态、交付点和期间独立记录每项实际子流或后续细化交换。即使尚未确定具体交换身份，原全部采集和闭合义务仍保留。不得分摊集合总量或把数值区间复制给子流，不得重复计算载体及其内含物，也不得将发生情况、数量或原生参考缺失填成零。每项具体交换只能有一种属性和一个单位；CP其他读数仅作辅助且须有证据换算。必要细化缺失会阻断数据集完成。 | kg | 每残留事件发运及真实排放测试准备事件 | 所有安装纠正事件至残留收尾 | install_accept出口及真实接收介质接收方 | 每参考流 | 磅单皮重接收方记录；监测或有理据系数；SDS及相容组分平衡 |

### 计算规则

| rule_id | 适用对象 | 公式或规则（`formula_or_rule`） | 输入（`inputs`） | 输出（`output`） | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | `refine_incoming_packaging`要求细化的实际交换; control_panel; smoke_detector; heat_detector; detector_base; manual_call_point; polarised_sounder; end_of_line_device; standby_batteries; `alarm_cable_alarm_circuit`; `alarm_cable_panel_feeder`; `fixings_and_containment_screw`; `fixings_and_containment_anchor`; `fixings_and_containment_gland`; `fixings_and_containment_support`; `fixings_and_containment_containment`; `fixings_and_containment_label`; detector_test_agent; `test_cleaning_consumables_wipe`; `test_cleaning_consumables_cleaning_formulation`; `hired_support_service_access`; `refine_unused_product_return`要求细化的实际交换 | 归一化数量 = Q / D。Q为真实归属材料kg或真实完成服务事件数，分别测量；在按allocate_returns处理净耗用供应前保留毛领用、库存及退回。 | Q; D; cp_materials; cp_services; cp_acceptance | 每参考流采用原单位的具体交换归一化数量 |  |
| energy_normalize | installation_electricity | 归一化电量 = E_job / D。E_job为实测时段kWh仅减有证据其他用户kWh；交接前归属充电纠正时段只计一次。 | 电表起止；其他用户记录；E_job; D; cp_energy; cp_acceptance | 每参考流kWh |  |
| owned_asset_normalize | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger` | 归一化制造资产份额 = N_asset * A_job / A_life / D。N_asset为具体资产包真实件数；A_job及A_life采用同一有文件服务活动基准。维护更换退役数据包另按allocate_period处理。 | N_asset; A_job; A_life; D; cp_services; cp_acceptance | 每参考流归属Item(s) |  |
| residual_normalize | `refine_dry_material_waste`要求细化的实际交换; `rejected_component_waste_panel`; `rejected_component_waste_detector`; `rejected_component_waste_heat_detector`; `rejected_component_waste_base`; `rejected_component_waste_call_point`; `rejected_component_waste_sounder`; `rejected_component_waste_eol`; `rejected_component_waste_cable`; `rejected_component_waste_vrla_battery`; `contaminated_solid_waste_wipe`; `contaminated_solid_waste_container`; `contaminated_solid_waste_loose_residue` | 归一化废物 = W_stream / D。W_stream为实际材质状态接收门独立实测净kg，不是未解释差值。 | W_stream; D; cp_residuals; cp_acceptance | 每参考流逐废物流kg |  |
| emission_normalize | `refine_airborne_particulate`要求细化的实际交换 | 归一化空气颗粒 = P_air / D。P_air为监测质量，或实测活动量乘独立支撑的匹配基材工具捕集粒径基准系数；保留来源、单位转换及不确定性。 | P_air；匹配系数及活动量或监测；D; cp_residuals; cp_acceptance | 每参考流特定颗粒基准及空气子区室kg |  |
| solvent_partition | `refine_test_agent_constituent_to_air`要求细化的实际交换 | 归一化组分排放 = S_air / D。S_air来自物种测量，或真实耗用配方乘准确组分份额再乘独立支撑释放份额；按同一组分基准核对留存捕集残留。不得将耗用量全部默认释放。 | 真实配方耗用；SDS组成；分配或物种监测；S_air; D; cp_residuals; cp_acceptance | 每参考流已识别物种及空气子区室kg |  |
| reference_output | accepted_installation | 归一化验收输出 = D / D = 1 Item(s)。D仅包含最终同配置验收系统。 | D; cp_acceptance | 每参考流1 Item(s) |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求（`requirement`） | 证据（`evidence`） |
| --- | --- | --- | --- |
| dq_reference | accepted_installation | 保留全部限定信息、独立D及失败待验收记录；不同配置分别处理。 | cp_acceptance |
| dq_pools | all inventory rows | 逐SKU状态接收方保留毛输入、库存、留存、退回及实测残留；混合质量总和仅为诊断。 | cp_materials; cp_residuals |
| dq_ownership | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger`; `hired_support_service_access`; installation_electricity | 制造及供应包含项、全部用户期间、真实维护更换退役和剩余使用证据须可核对；服务与电量不得重复。 | cp_services; cp_energy |
| dq_occurrence | all inventory rows | 未知发生状态、缺失计量或身份不可标为零；下游交换前须核实具体身份及Energy或Duration等支撑。 | 实际来源及数量记录 |
| dq_range_incoming_packaging | `refine_incoming_packaging`要求细化的实际交换 | 范围证据需求：需提供实际批次的材质重量、包装规格、重复使用及退回记录和供应数据集包装边界；尚无通用的每系统包装质量区间。 | cp_materials; 实际同域数量证据 |
| dq_range_owned_equipment_attribution | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger` | 范围证据需求：需提供具体资产制造或BOM、真实维护、所有使用工程及期间、全寿命使用量和剩余使用量不确定性；不得默认寿命、重复使用次数或每系统通用隐含质量。 | cp_services; 实际同域数量证据 |
| dq_range_control_panel | control_panel | 范围证据需求：需提供实际控制盘质量、数量及配件边界；单控制盘参考对象不能给出跨型号质量区间。 | cp_materials; 实际同域数量证据 |
| dq_range_field_alarm_devices | smoke_detector; heat_detector; detector_base; manual_call_point; polarised_sounder; end_of_line_device | 范围证据需求：需提供实际器件类型BOM、兼容SKU质量、回路负载及设计覆盖；不得使用混合器件总量或通用每系统器件数区间。 | cp_materials; 实际同域数量证据 |
| dq_range_standby_batteries | standby_batteries | 范围证据需求：需提供具体电池数据表、批准及设计要求、验收电池对BOM和真实质量；制造商备用容量Ah示例既不是安装能耗，也不是通用电池用量范围。 | cp_materials; 实际同域数量证据 |
| dq_range_alarm_cable | `alarm_cable_alarm_circuit`; `alarm_cable_panel_feeder` | 范围证据需求：需提供实际回路长度、芯线及等级、余量与端接要求、准确kg/m证据和切割返工记录；尚无通用每系统电缆质量区间。 | cp_materials; 实际同域数量证据 |
| dq_range_fixings_and_containment | `fixings_and_containment_screw`; `fixings_and_containment_anchor`; `fixings_and_containment_gland`; `fixings_and_containment_support`; `fixings_and_containment_containment`; `fixings_and_containment_label` | 范围证据需求：需提供验收配置、真实安装及领用件数和SKU质量；已准备的主要支撑及建筑结构不能作为新增材料区间。 | cp_materials; 实际同域数量证据 |
| dq_range_detector_test_agent | detector_test_agent | 范围证据需求：需提供兼容产品及SDS、真实罐质量变化和同方法剂量观察；没有已核实的通用每测试克数系数。 | cp_materials; 实际同域数量证据 |
| dq_range_test_cleaning_consumables | `test_cleaning_consumables_wipe`; `test_cleaning_consumables_cleaning_formulation` | 范围证据需求：需提供真实对象及事件覆盖、SKU和领用、退回、残留、擦拭物测量；剂量观察只适用于同器件及同方法。 | cp_materials; 实际同域数量证据 |
| dq_range_installation_electricity | installation_electricity | 范围证据需求：需提供实际表计时段、背景供电及充电职责、其他用户、验收系统分担和可比实测kWh/参考流记录。Energy/kWh身份支撑未决；无有来源的数量范围。 | cp_energy; 实际同域数量证据 |
| dq_range_hired_support_service | `hired_support_service_access` | 范围证据需求：需提供真实事件定义或小时合同、配置及容量、供应方包含项和所有用户份额。小时Duration未决，不能由本计数单位覆盖。 | cp_services; 实际同域数量证据 |
| dq_range_unused_product_return | `refine_unused_product_return`要求细化的实际交换 | 范围证据需求：需逐SKU关联实测毛领用、未变状态及真实退回；没有默认退回比例或自动收益。 | cp_materials; 实际同域数量证据 |
| dq_range_dry_material_waste | `refine_dry_material_waste`要求细化的实际交换 | 范围证据需求：需提供逐废物流称量联单、来源池关联及真实分流路线；组件标称质量不能给出废物率区间。 | cp_residuals; 实际同域数量证据 |
| dq_range_rejected_component_waste | `rejected_component_waste_panel`; `rejected_component_waste_detector`; `rejected_component_waste_heat_detector`; `rejected_component_waste_base`; `rejected_component_waste_call_point`; `rejected_component_waste_sounder`; `rejected_component_waste_eol`; `rejected_component_waste_cable`; `rejected_component_waste_vrla_battery` | 范围证据需求：需提供真实故障、拆除及复测、原领用、分类和称量发运记录。不得默认缺陷率；零值须有完整事件覆盖。 | cp_residuals; 实际同域数量证据 |
| dq_range_contaminated_solid_waste | `contaminated_solid_waste_wipe`; `contaminated_solid_waste_container`; `contaminated_solid_waste_loose_residue` | 范围证据需求：需提供特定配方残留、容器皮重、擦拭物质量及接收方接收证据；不得假设全部化学品蒸发。 | cp_residuals; 实际同域数量证据 |
| dq_range_airborne_particulate | `refine_airborne_particulate`要求细化的实际交换 | 范围证据需求：需提供匹配基材、工具、捕集措施、粒径基准、活动量及排放系数或监测证据；不得使用通用粉尘或平衡损失量。 | cp_residuals; 实际同域数量证据 |
| dq_range_test_agent_constituent_to_air | `refine_test_agent_constituent_to_air`要求细化的实际交换 | 范围证据需求：需提供具体产品及SDS、组分组成和送达、捕集、残留份额；不得推断通用气溶胶及VOC区间或空气子区室。 | cp_residuals; 实际同域数量证据 |
| dq_range_accepted_installation | accepted_installation | 范围证据需求：1 Item(s)是准确归一化参考输出，不是实测产率范围。验收分母、失败及待验收工作和配置区分均须可追溯记录。 | cp_acceptance; 实际同域数量证据 |
| `refine_incoming_packaging` | 独立细化的实际交换 | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：将随设备、电池、电缆及耗材收到的包装，按所属批次登记在实物保管台账中。逐种材质称量，或采用可核实的包装件数及皮重。只有到场供应数据集未包含该包装时，才建立独立负荷输入；已包含包装的制造负荷由上游负责。核对重复使用、退回、库存及废物，不得由废物出口倒推来料。 数量计算见第8节`normalize_exchange`。范围证据需求：需提供实际批次的材质重量、包装规格、重复使用及退回记录和供应数据集包装边界；尚无通用的每系统包装质量区间。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_materials`; 实际独立记录及身份／单位证据 |
| `refine_owned_equipment_attribution` | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：按型号和序列号识别实际钻孔、电缆准备工具、测试仪、外置设备充电器或登高设备。以相同基准记录本工程服务活动及有证据的全寿命活动，将 owned_asset_normalize 用于该具体资产的制造数据包。真实维护、更换及退役数据包按第7节关联至受益工程及期间。控制盘内永久充电器和备用电池属于安装组件；租用设备负荷由供应方服务负责。此行记录 Item(s) 归属份额，不是安装质量或每工程耗用整台工具。 数量计算见第8节`owned_asset_normalize`。范围证据需求：需提供具体资产制造或BOM、真实维护、所有使用工程及期间、全寿命使用量和剩余使用量不确定性；不得默认寿命、重复使用次数或每系统通用隐含质量。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_services`; 实际独立记录及身份／单位证据 |
| `refine_alarm_cable` | `alarm_cable_alarm_circuit`; `alarm_cable_panel_feeder` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：按结构与等级识别实际耐火屏蔽报警电缆。保留实测路由、端接余量、领用长度、边角料及替换长度；直接称量，或采用匹配SKU的kg/m系数得到kg。控制盘馈线只计入约定隔离电源接口下游由本安装方真实供应的段。既有专用电源及主干桥架属于起始条件，不是新增电缆耗用。 数量计算见第8节`normalize_exchange`。范围证据需求：需提供实际回路长度、芯线及等级、余量与端接要求、准确kg/m证据和切割返工记录；尚无通用每系统电缆质量区间。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_materials`; 实际独立记录及身份／单位证据 |
| `refine_fixings_and_containment` | `fixings_and_containment_screw`; `fixings_and_containment_anchor`; `fixings_and_containment_gland`; `fixings_and_containment_support`; `fixings_and_containment_containment`; `fixings_and_containment_label` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：分别记录真实供应的螺钉、锚栓、格兰头、支撑、短段敷设件及标签。逐材质或SKU称量，或使用实测单位质量及实际领用件数。将安装件数关联至验收墙面及路由，并区分已准备建筑结构或既有主桥架。进线孔准备和屏蔽及接地端接仍属组装职责，不构成独立加工产品。 数量计算见第8节`normalize_exchange`。范围证据需求：需提供验收配置、真实安装及领用件数和SKU质量；已准备的主要支撑及建筑结构不能作为新增材料区间。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_materials`; 实际独立记录及身份／单位证据 |
| `refine_test_cleaning_consumables` | `test_cleaning_consumables_wipe`; `test_cleaning_consumables_cleaning_formulation` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：仅纳入真实耗用的擦拭物、清洁产品或其他复位及测试材料。记录对象和事件、具体SKU、领用、未用退回、容器皮重及残留；称量或采用匹配SKU系数得到产品净质量。重复使用的复位钥匙及测试仪属于设备，不是耗材。区分擦拭基材、供应配方及出口污染物，避免同一组分重复计算。 数量计算见第8节`normalize_exchange`。范围证据需求：需提供真实对象及事件覆盖、SKU和领用、退回、残留、擦拭物测量；剂量观察只适用于同器件及同方法。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_materials`; 实际独立记录及身份／单位证据 |
| `refine_hired_support_service` | `hired_support_service_access` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：本计数卡仅适用于供应方合同明确规定、具有具体设备配置及交付结果的真实完整事件，以合同和完成记录证明。通过cp_services记录完成事件数及实际使用方份额。真实小时租赁保留其真实数量，须进行范围与计量复核并核实Duration支撑；不得将小时换成虚构Item(s)事件。新增独立资源前先记录供应方已含的制造、维护、燃料及电量。 数量计算见第8节`normalize_exchange`。范围证据需求：需提供真实事件定义或小时合同、配置及容量、供应方包含项和所有用户份额。小时Duration未决，不能由本计数单位覆盖。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_services`; 实际独立记录及身份／单位证据 |
| `refine_unused_product_return` | 独立细化的实际交换 | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：记录离开安装方保管边界的真实可用且状态未变的组件、电缆、耗材或可复用包装。保留原SKU及状态、接收方，并称量净质量或采用准确件数及长度与质量关系。退回转移关联原领用。保留毛领用及退回观察，按第7节仅计一次净耗用上游供应，不得重复扣减退回。失效或受污染物不属可用退回。 数量计算见第8节`normalize_exchange`。范围证据需求：需逐SKU关联实测毛领用、未变状态及真实退回；没有默认退回比例或自动收益。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_materials`; 实际独立记录及身份／单位证据 |
| `refine_dry_material_waste` | 独立细化的实际交换 | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：对真实干物料流逐项称量，记录容器皮重、发运证据、材质、状态和实际接收方。即使包装负荷已含于上游，也将包装废物关联收到的实物来源池。捕集粉尘留在相应废物流；真实进入空气的份额另行区分。回收目的地证据与后续处理或回收模型分开；此处不得主张避免产品收益。 数量计算见第8节`residual_normalize`。范围证据需求：需提供逐废物流称量联单、来源池关联及真实分流路线；组件标称质量不能给出废物率区间。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_residuals`; 实际独立记录及身份／单位证据 |
| `refine_rejected_component_waste` | `rejected_component_waste_panel`; `rejected_component_waste_detector`; `rejected_component_waste_heat_detector`; `rejected_component_waste_base`; `rejected_component_waste_call_point`; `rejected_component_waste_sounder`; `rejected_component_waste_eol`; `rejected_component_waste_cable`; `rejected_component_waste_vrla_battery` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：将不可用控制盘、探测器及底座、手动按钮、声响及末端器件、受损电缆组件或失效电池关联至原领用、缺陷及纠正事件。对真实废物状态称量，或使用具体SKU件数与质量，保留发运及合格接收方证据。电池、电子及电缆废物分开。内部修复不是新增产品转移；可用未变部件按`refine_unused_product_return`要求细化的实际交换退回。 数量计算见第8节`residual_normalize`。范围证据需求：需提供真实故障、拆除及复测、原领用、分类和称量发运记录。不得默认缺陷率；零值须有完整事件覆盖。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_residuals`; 实际独立记录及身份／单位证据 |
| `refine_contaminated_solid_waste` | `contaminated_solid_waste_wipe`; `contaminated_solid_waste_container`; `contaminated_solid_waste_loose_residue` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：按废物接收方登记真实受污染擦拭物、容器或配方残留流，记录组成、物态、毛重及皮重。区分清洁可回收包装和可用退回。核对供应擦拭物及配方组分池、留存残留与有独立证据的排放。化学品毛领用不自动等于蒸发。 数量计算见第8节`residual_normalize`。范围证据需求：需提供特定配方残留、容器皮重、擦拭物质量及接收方接收证据；不得假设全部化学品蒸发。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_residuals`; 实际独立记录及身份／单位证据 |
| `refine_airborne_particulate` | 独立细化的实际交换 | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：仅在实际钻孔及电缆准备具有测量或独立支撑的空气排放时启用。识别基材及材质、工具、捕集措施、粒径或份额基准及真实接收空气子区室。采用监测，或匹配材质、工具及控制措施的系数乘实测活动量，随后应用emission_normalize。捕集粉尘仍属废物；不得将保管台账未解释残差当空气排放。 数量计算见第8节`emission_normalize`。范围证据需求：需提供匹配基材、工具、捕集措施、粒径基准、活动量及排放系数或监测证据；不得使用通用粉尘或平衡损失量。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 实际采用粒径分级时，各粒径分段必须互不重叠，不得将存在包含关系的累计粒径数据直接相加。 | `cp_residuals`; 实际独立记录及身份／单位证据 |
| `refine_test_agent_constituent_to_air` | 独立细化的实际交换 | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：针对真实物理耗用的测试剂，在定义基本交换前识别每种物质及接收子区室。按solvent_partition采用物种监测，或特定产品SDS组成和有证据的送达、捕集、残留分配方法。组分数量应与耗用配方来源池相容。器件测试数、未区分VOC名称或100%释放假设均不能确定物质质量或去向。 数量计算见第8节`solvent_partition`。范围证据需求：需提供具体产品及SDS、组分组成和送达、捕集、残留份额；不得推断通用气溶胶及VOC区间或空气子区室。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 实际采用粒径分级时，各粒径分段必须互不重叠，不得将存在包含关系的累计粒径数据直接相加。 | `cp_residuals`; 实际独立记录及身份／单位证据 |
| `atomic_exchange_identity_unit` | all inventory rows | 每项具体流卡只识别一种实际独立供给的产品SKU或配方、完整组件、完整单一职能或真实完整有界服务方服务、实际废物整体及状态接收方，或物质粒径及接收介质，且只有一种属性和一个单位。实际不同身份须有独立数量和记录，不得合为集合交换。完整产品或载体含其内含物一次。同一未改变SKU状态的供给与可用退回，以及实物匹配的内部发送接收，使用同一选定属性单位；kg和件数、MJ和kWh等辅助读数不加和，不产生重复交换。身份、发生、数量或原生参考缺失是缺口，不是零。 任何合并分母均须保留原验收配置分层、状态交付点及因果归属；不得把不等价线路、路线、产品或工单按等价数量盲目相除。 | 实际身份、单位、保管及独立数量证据 |
| `asset_final_normalization_once` | all inventory rows | 资产当量公式已除以N、D或A时，其结果就是最终每参考流数量。全寿命份额及验收产出归一化与通用归一化规则是同一次操作，不再除一次该分母。完整生命周期上游负担只应用一次。实际完整服务方事件仍计真实事件量，不套用自有资产份额。 | 实际身份、单位、保管及独立数量证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_gate | accepted_installation | 要求全部参考限定信息、正D及完整签字验收。按工程验收计划核对真实触发警报及因果响应、故障市电失效备用及最终恢复正常记录。编程测试模式或部件检查不等于整系统验收。 | `ctec-standard` |
| validate_identity | all inventory rows | 下游交换完成前核实每项真实SKU材质状态接收方，或物种空气子区室身份及相容属性单位。条件总括卡根据实际发生展开为零、一或多个具体交换；未知不等于零。计数支撑不核实服务UUID。 | |
| validate_quantity | all inventory rows | 匹配各原始数量分子、单位、CP、第8节适用计算及同一D。核对分开的毛领用退回库存留存残留池；禁止混合材质UUID、电力质量转换及小时租用事件化。缺少相容Energy或Duration支撑仍是明确缺口。 | |
| validate_rework | `rejected_component_waste_panel`; `rejected_component_waste_detector`; `rejected_component_waste_heat_detector`; `rejected_component_waste_base`; `rejected_component_waste_call_point`; `rejected_component_waste_sounder`; `rejected_component_waste_eol`; `rejected_component_waste_cable`; `rejected_component_waste_vrla_battery`; accepted_installation | 原组件电缆电池缺陷、修复替换、复测和真实出口均关联install_accept。失败及待验收工作不计入D，但保留负荷。每个出口有真实状态接收方；不得使用无文件回收路线或收益。 |  |
| validate_shared_period | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger`; `hired_support_service_access` | 核对所有资源用户及期间、真实寿命服务份额和制造维护更换退役事件责任归属。剩余使用、更换、终止证据缺失时不能完成最终归属。禁止整台工具默认值、寿命年化重复归属及供应方服务、自有资产、电量之间重复。 |  |
| validate_ranges | all inventory rows | 第8节保留逐角色范围证据需求。制造商设计限制、标称系数或准确1 Item(s)参考不是实测数量区间。披露缺失范围，不得为消除警告虚构界限。 | |
| `atomization_incoming_packaging_complete` | 独立细化的实际交换 | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_incoming_packaging`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_owned_equipment_attribution_complete` | `owned_equipment_attribution_drill`; `owned_equipment_attribution_tester`; `owned_equipment_attribution_external_charger` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_owned_equipment_attribution`；必要细化尚未解决时阻断数据集。 | `ctec-standard` |
| `atomization_alarm_cable_complete` | `alarm_cable_alarm_circuit`; `alarm_cable_panel_feeder` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_alarm_cable`；必要细化尚未解决时阻断数据集。 | `ctec-standard` |
| `atomization_fixings_and_containment_complete` | `fixings_and_containment_screw`; `fixings_and_containment_anchor`; `fixings_and_containment_gland`; `fixings_and_containment_support`; `fixings_and_containment_containment`; `fixings_and_containment_label` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_fixings_and_containment`；必要细化尚未解决时阻断数据集。 | `ctec-standard` |
| `atomization_test_cleaning_consumables_complete` | `test_cleaning_consumables_wipe`; `test_cleaning_consumables_cleaning_formulation` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_test_cleaning_consumables`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_hired_support_service_complete` | `hired_support_service_access` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_hired_support_service`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_unused_product_return_complete` | 独立细化的实际交换 | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_unused_product_return`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_dry_material_waste_complete` | 独立细化的实际交换 | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_dry_material_waste`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_rejected_component_waste_complete` | `rejected_component_waste_panel`; `rejected_component_waste_detector`; `rejected_component_waste_heat_detector`; `rejected_component_waste_base`; `rejected_component_waste_call_point`; `rejected_component_waste_sounder`; `rejected_component_waste_eol`; `rejected_component_waste_cable`; `rejected_component_waste_vrla_battery` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_rejected_component_waste`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_contaminated_solid_waste_complete` | `contaminated_solid_waste_wipe`; `contaminated_solid_waste_container`; `contaminated_solid_waste_loose_residue` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_contaminated_solid_waste`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_airborne_particulate_complete` | 独立细化的实际交换 | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_airborne_particulate`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_test_agent_constituent_to_air_complete` | 独立细化的实际交换 | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_test_agent_constituent_to_air`；必要细化尚未解决时阻断数据集。 |  |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | 每项具体流卡只识别一种实际独立供给的产品SKU或配方、完整组件、完整单一职能或真实完整有界服务方服务、实际废物整体及状态接收方，或物质粒径及接收介质，且只有一种属性和一个单位。实际不同身份须有独立数量和记录，不得合为集合交换。完整产品或载体含其内含物一次。同一未改变SKU状态的供给与可用退回，以及实物匹配的内部发送接收，使用同一选定属性单位；kg和件数、MJ和kWh等辅助读数不加和，不产生重复交换。身份、发生、数量或原生参考缺失是缺口，不是零。 资产当量公式已除以N、D或A时，其结果就是最终每参考流数量。全寿命份额及验收产出归一化与通用归一化规则是同一次操作，不再除一次该分母。完整生命周期上游负担只应用一次。实际完整服务方事件仍计真实事件量，不套用自有资产份额。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个已披露常规有线系统配置的安装至验收前景数据包 |
| downstream_use | secondary_dataset; background_dataset；下游process及lifecyclemodel投影 |
| allowed_use | 同一明确范围、起始接口、配置及交接门的安装调试贡献，使用真实相容供应数据集 |
| excluded_use | 不同覆盖配置自动比较；独立器件制造；可寻址无线AlarmSense两线制联网复示灭火剂系统；远程监控及运行服务 |
| required_metadata | 控制盘及分区；准确器件配件BOM；真实回路馈线长度；兼容备用电池对设计；场址工程期间；设计测试验收门；D；供应包装边界；资产服务所有方；所有用户阶段索引；数量身份依据 |
| required_quality_disclosure | 未决具体身份和Energy及条件Duration支撑；逐角色范围缺口；表计和平衡完整性；故障返工；资产剩余使用和期间不确定性；省略未知发生状态及功能等价限制 |
| update_trigger | 控制盘配置路线设计或范围接口改变；电池器件规格改变；新真实数量范围证据；供应资源边界改变；身份核实；验收或资产历史更新 |

## 11. 数据源

| 来源编号（source_id） | 类型（type） | 引用（reference） | 用途（used_for） |
| --- | --- | --- | --- |
| ctec-standard | handbook | C-TEC CFP 2/4/8 Zone Standard安装维护手册，Approved Document DFU7004010 Rev 4，01/11/21；https://c-tec.com/download?wpdmdl=13537 ；PDF第6–8、10–13、15、17及23页 | 常规独立探测手动触发及极性声响回路；真实电缆安装接地市电接口和组件职责；永久充电器及兼容新VRLA电池对；测试模式恢复及配置记录；与负载备用要求相关的电池完整性。手册不提供安装电量、测试剂剂量、资产寿命或通用服务归一化用量范围。 |
| accepted-count-normalization | method_factor | 正验收计数的归一化恒等式：D / D = 1；本PCR第3及8节；D仅含同配置完整验收系统 | 准确参考输出1 Item(s)，不是经验产率或用量范围 |
