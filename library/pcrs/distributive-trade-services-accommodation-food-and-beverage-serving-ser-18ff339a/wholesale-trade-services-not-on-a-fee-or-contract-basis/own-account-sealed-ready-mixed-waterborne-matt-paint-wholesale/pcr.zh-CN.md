---
pcr_id: pcr.own-account-sealed-ready-mixed-waterborne-matt-paint-wholesale
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 原封即用型水性丙烯酸共聚乳液内墙哑光漆自营批发服务

## 1. 范围与适用性

适用于真实原厂灌装原封即用型水性丙烯酸共聚乳液内墙哑光漆桶自营企业间贸易。采用真实SKU批次颜色基料配方、原生填充湿量体积密度温度及桶包装顶空封口状态。普通仓库接收存放电动搬运结束于撤销后真实最终验收，不假设开桶调色涂刷。

厂家一手资料支持标称产品化学及即用实例（`dulux-pds-2025`），不作为统一组成密度颜色容量或仓库应用指令。体积固含与桶内VOC的基准不同于质量固含及实际物种排放，均不确立释放或零。原灌装桶漆水树脂颜料顶空是商品审计，并非耗用服务输入。

完整配制灌装包装全部上游含真实损失商品隐含负荷在服务外。完整链前需量化原门槛分配需求及唯一实际损失和基线阶段损失覆盖一次。真实服务事故捕集接收处置处理在此一次，整流保留吸附游离液体物种视图互斥。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-sealed-ready-mixed-waterborne-matt-paint-wholesale |
| classification_refs | CPC 3.0:61064（narrower）；实际商品35110属于351 |
| covered_products | 实际原厂配制灌装、原封即用型水性丙烯酸共聚乳液内墙哑光漆桶的常温自营企业间批发服务。 |
| excluded_products | 批发调色混合稀释开桶分装重包装涂刷洗刷具固化；溶剂型双组分气雾漆及其他涂料；收费代理零售独立仓储。 |
| representative_product | 实际即用SKU批次颜色基料配方及原密封桶标签填充顶空状态，不强制品牌颜色容量或标称组成。 |
| production_route | 原厂最终配制灌装密封放行；批发所有权转售企业间收货状态记录、普通常温存放电动搬运，撤销后实际最终企业验收。 |
| market_state | 已完成商业服务；漆原厂桶包装顶空为非交换商品库存，不是耗用水树脂颜料服务输入。 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 声明原密封即用水性哑光漆货批的真实商业接收普通常温存放搬运及企业间验收交接。 |
| How much | 1个完成商业货批；实际桶数填充漆体积净湿质量及整桶货载分别计量。 |
| How well | 实际供应商最终即用配方填充封口批次颜色基料记录及买方验收标准，观察封口泄漏容器暴露状态。不统一规定应用性能VOC排放保证、颜色容量储存阈值或测试。 |
| How long or cycle | 实际供应放行收货存放发货验收撤销事件时刻时区时间来源持续量及代表性暴露状态。取消未完成撤销拒收资源保留真实群组期间。 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的原封即用型水性丙烯酸共聚乳液内墙哑光漆自营批发货批服务 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_ownership_resale; business_buyer; final_acceptance_after_reversals; original_supplier_release_gate; manufacturer_SKU_batch; ready_mixed_color_base_formulation; waterborne_acrylic_copolymer_interior_matt_state; pail_seal_fill_condition; actual_pail_count; net_wet_paint_mass_volume_basis; density_temperature_source; solids_water_composition_basis; original_pail_pack_headspace_state; receipt_hold_dispatch_acceptance_times; site_period |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| commercial_count | accepted_service | Count | Item(s) | N为撤销后真实批发自有转售企业间最终唯一货批验收。采集商家、所有权购销证据、企业买方、真实门槛来源撤销ID，供应收货本身不足。仅N>0且有最终证据才归一，否则保留事件资源不虚构参考除法。 |  |
| wet_paint_volume_mass | 商品审计 | Mass;Volume;Count | kg;实际原生体积;Item(s) | 净湿漆质量不同于标签容量、桶顶空外形体积及整密封桶质量。湿量=真实相容净漆体积*实际配方状态密度，采用原生换算及密度温度单位方法来源取样。毛量减皮重需明确保留顶空其他内含边界，不默认为零、不把填充体积等于容量。 |  |
| solids_water_basis | 漆与组分审计 | Mass;Volume;实际组成 | kg;原生体积;明确质量或体积分数 | 区分固体体积分数与质量分数及取样配方颜色基料方法状态来源单位。体积固含不能乘湿质量得干固体，匹配实测质量固含才可。水另取证，1-solids不自动纯水，可能有其他挥发组分；不产生涂刷干膜输出。 | dulux-pds-2025 |
| extent_components_cargo | 全部物理量 | Mass;Volume;Count | 原生及目标单位 | 每操作数保留原生单位基准方法状态取样来源及换算单位来源，密度附温度单位来源。EACH仅乘一次实际相容数，TOTAL保持总量。整漆桶包装顶空支撑货载仅扣非货物皮重；保留组分去向独立单位基准，不继承整流单位。 |  |
| species_content | direct_species | Mass;实际物种 | kg物种;真实原生组成基准 | 桶内VOC含量上限或标称颜料树脂水固体不是实际释放或零。独立识别物种颗粒接收介质；实测或适用活动系数仅在未已包含时使用实际组成去向。未知泄漏溢洒库存差不是排放或零。 | dulux-pds-2025 |


## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 真实厂家完整配制灌装原封即用型水性丙烯酸共聚内墙哑光漆桶原供应放行，含实际配方批次颜色基料填充包装顶空状态。 |
| starting_condition_role | 批发附加服务的原成品配制灌装包装商品门槛，不是原树脂水颜料或已涂刷固化漆。 |
| product_classification_scope | CPC 3.0:61064较窄自营漆批发服务；35110为商品背景，非服务量。 |
| recursive_input_rule | 购销漆桶保留非交换库存；服务外关联原实际配制灌装封口门槛需求，不递归批发服务或原组分代理整个商品。 |
| upstream_dataset_requirement | 关联商品仅一次覆盖真实原料树脂颜料添加剂、配制制造、原厂灌装密封和原桶包装顶空状态至原放行。原水树脂颜料或不匹配涂刷固化膜数据集不足；服务外补真实缺阶段并排除重叠。 |
| disclosure | 声明完整原门槛数量状态来源、原分配需求直接映射或完整终端群组、换算、缺阶段原生数量及实际损失唯一责任调整与基线阶段损失覆盖。服务单独非完整漆产品链足迹。 |

### 边界规则

| rule_id | Rule | source_ids |
| --- | --- | --- |
| merchant_scope | 含真实所有权企业间收货状态库存存放电动搬运、仓库卫生事故捕集新增外防护、分配基础设施运输与实际接收搬运处理。原密封桶普通环境观察不确立主动保存配制灌装。 |  |
| no_application_processing | 不假设批发调色混合稀释开桶分装涂刷固化洗刷具、强制溢洒沉降干燥、溶剂双组分气雾路线或专用气候干预。真实额外操作含外包需审路线，厂家应用清理说明不是批发输入系数。 | dulux-pds-2025 |
| actual_product_condition | 厂家即用配方储存背景仅支持实际SKU状态封桶暴露核查。不默认颜色桶容组成密度固含温度时长、涂刷覆盖涂层稀释压力重涂固化或处置配方。体积固含桶内VOC不等于质量组成排放。 | dulux-pds-2025 |
| commodity_outside_once | 完整配制灌装包装全部上游含真实损失商品隐含上游在附加服务外。完整链前须量化原门槛分配需求及唯一实际损失调整原生基准来源责任基线阶段损失覆盖一次；真实服务捕集处置处理在此一次。未知损失非零。 |  |
| retained_stream_exclusivity | 整桶保留漆顶空、独立包装残漆、吸附固体、游离收集漆、卫生液和独立物种介质为互斥物理视图。泄漏溢洒库存差不自动VOC水排放或整桶废物；实际接收处理组分去向决定，无默认回收替代抵扣。 |  |


## 6. 过程清单结构

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sealed_paint_wholesale | 原封即用漆批发 | required | 实际声明原封即用漆自营企业间货批 | final_service | accepted_service |


### 过程：原封即用漆批发 (`sealed_paint_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：native_interval_quantity*service_driver_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需有实际区间表计全部用户原生驱动及交付电力来源属性支持；不默认每桶每吨功率用电。

###### 实际液态处理自来水供给 (`hygiene_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：actual_utility_quantity*service_driver_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需有原生计量体积或有据密度换算、真实卫生区间全部用户份额来源；漆内水分或刷具清洁系数不可替代。

###### 实际独立记录的合成洗涤剂投入 (`hygiene_materials_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：selected_supply_input/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需有实际配方、独立库存未用外送配对及原生整物数量单位范围组成换算；供给量本身不是已用废物。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的原封即用型水性丙烯酸共聚乳液内墙哑光漆自营批发货批服务 (`accepted_service`)

真实批发商自有购销企业间商业货批，在最终买方验收及撤销核对后完成，包含实际原厂密封即用SKU批次颜色基料配方及灌装桶状态。一个桶升千克涂刷平方米利润不是服务计数。

- 选定流：已完成的原封即用型水性丙烯酸共聚乳液内墙哑光漆自营批发货批服务
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_paint`

数量范围证据需求：需有真实所有权转售、企业买方门槛来源撤销证据、原灌装漆门槛及实际计数净湿质量体积密度包装顶空时刻限定；不固定桶容量颜色数量。

##### 废物流

###### 废弃装有预混水性哑光涂料的原桶整件 (`whole_pail_waste_atomic_case`)

仅在实际独立记录确认“废弃装有预混水性哑光涂料的原桶整件”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`whole_pail_waste`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃装有预混水性哑光涂料的原桶整件
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有来源桶批次封口填充状态、整流净量范围内含边界及接收分类处理，不推定满桶废物或回收率。

###### 实际单独收集的纸类包装废物 (`packaging_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有实际材质污染保留湿漆原生量单位状态来源、原桶包装关联与接收分类；理论空桶皮重不是真实废物量。


###### 实际单独收集的金属包装废物 (`packaging_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有实际材质污染保留湿漆原生量单位状态来源、原桶包装关联与接收分类；理论空桶皮重不是真实废物量。


###### 实际单独收集的塑料包装废物 (`packaging_waste_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有实际材质污染保留湿漆原生量单位状态来源、原桶包装关联与接收分类；理论空桶皮重不是真实废物量。

###### 废弃独立收集的预混水性哑光涂料 (`free_paint_waste_atomic_case`)

仅在实际独立记录确认“废弃独立收集的预混水性哑光涂料”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`free_paint_waste`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃独立收集的预混水性哑光涂料
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有真实游离收集量单位基准状态、换算时密度温度、原批及接收分类处理；原桶缺口不等于游离漆或VOC排放。

##### 基本流

## 7. 分配与联产品处理

| rule_id | Rule | source_ids |
| --- | --- | --- |
| stock_events_and_count | 按期间用实际SKU批次颜色基料桶货批物理事件ID记录期初收货期末、真实可用退回其他终端保留拒收实际溢洒泄漏损失及接收路线。核实所有权购销、企业买方和最终门槛来源撤销。N仅撤销后真实最终唯一验收，N>0才除。取消未完成拒收撤销资源保留群组期间，不虚构参考或零资源。内部保留回收期末非外送。 |  |
| original_source_assignment | 有据来源至目标直接映射，或完整相容来源群组：assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers。真实正且完整分母包含每终端驱动数量单位基准方法状态来源链接责任：期末其他可用退回及实际溢洒泄漏损失商品。原灌装漆桶等价换算明确，不仅验收分母、不以余额当损失。 |  |
| original_commodity_demand | commodity_source_gate_demand=assigned_source_gate_quantity，对应完整原配制灌装密封包装状态并含有据状态变化份额。原输入分配基线补阶段数量逐项需原生单位状态基准方法来源及真实换算。唯一真实损失调整单位基准来源责任与基线阶段损失覆盖服务外核对一次。最终发货加废物非原需求，不能用不完整原组分基线。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |  |
| supplies_and_returns | S=opening+net_receipts-closing含保留可用回收。总S/N输入加单独真实配对未用外送，或仅耗用(S-usable_outward_return)/N且省同配对输出。仅同独立负担供给身份边界；不可用原漆桶顶空资产冲无关当前输入，不再抵扣。 |  |
| all_consumer_attribution | 真实直接表计或同单位原生服务全部用户因果物理驱动覆盖全部用户期间及所属空闲卫生未完成尝试。保留每份额分子分母基准方法来源不确定性。桶数质量均分需因果证据，价格利润不是物理份额。 |  |
| full_asset_lifecycle | 匹配完整制造实际维护更换退役寿命终结，采用全部用户工作已观测剩余寿命驱动的相容单位基准方法状态来源等价不确定性敏感性更新。job_driver/lifetime_all_user_driver再除N一次；供应承包承运批发资产责任互斥，不每次新托盘或租赁加完整周期重复。 |  |
| unique_load_leg_and_owner | 每直接承包承运资产接收处理事件唯一责任。对唯一load+leg记录求和，每记录真实运输量乘其documented_service_share在SUM内部，再除N一次。EACH载荷只计一次，TOTAL不变；真实满桶包装支撑顶空货载保留，只扣非货物皮重。整流组分清理液物种处理视图不重复，无默认抵扣。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_paint | sealed_paint_wholesale | 商品及最终自有转售企业间服务 | 厂家配制灌装密封及批发买方事件记录 | consignment_id; merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; SKU; batch; color; base; formulation_id; formulation_source; ready_mixed_state; acrylic_copolymer_waterborne_interior_matt_state; supplier_release_gate; source_gate_state; pail_ids; pail_seal_state; fill_condition; label_capacity; capacity_unit; capacity_source; actual_pail_count; count_unit; count_basis; count_method; count_source; count_sample_time; paint_net_volume; volume_unit; volume_basis; volume_method; volume_state; volume_source; volume_sample_time; paint_net_wet_mass; mass_unit; mass_basis; mass_method; mass_state; mass_source; mass_sample_time; quantity_reporting_extent; count_multiplier; multiplier_unit; multiplier_basis; multiplier_method; multiplier_source; paint_density; density_unit; density_basis; density_state; density_temperature; density_temperature_unit; density_method; density_source; density_sample_time; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_source; conversion_sample_time; solids_fraction; solids_fraction_unit; solids_mass_or_volume_basis; solids_method; solids_state; solids_source; solids_sample_time; actual_water_content; water_content_unit; water_content_basis; water_content_method; water_content_state; water_content_source; water_content_sample_time; component_identity; component_quantity; component_unit; component_basis; component_method; component_state; component_source; component_sample_time; headspace_content_identity; headspace_content_quantity; headspace_content_unit; headspace_content_basis; headspace_content_method; headspace_content_state; headspace_content_source; headspace_content_sample_time; headspace_composition; headspace_composition_unit; headspace_composition_basis; headspace_composition_method; headspace_composition_source; headspace_composition_sample_time; closed_pail_gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_source; gross_mass_sample_time; original_pail_pack_tare; tare_unit; tare_basis; tare_method; tare_state; tare_source; tare_sample_time; original_content_unknowns; condition_observation; actual_spill_leak_record; exposure_temperature; exposure_temperature_unit; exposure_temperature_method; exposure_temperature_source; exposure_time; actual_pail_orientation; source_release_time; receipt_time; dispatch_time; acceptance_time; reversal_time; time_zone; time_source; duration; duration_unit; duration_source; opening_stock; receipts; closing_stock; stock_unit; stock_basis; stock_method; stock_state; stock_source; return_ids; return_quantity; return_unit; return_basis; return_method; return_state; return_source; return_owner; useful_other_exit_ids; useful_other_exit_quantity; useful_other_exit_unit; useful_other_exit_basis; useful_other_exit_method; useful_other_exit_state; useful_other_exit_source; useful_other_exit_owner; actual_loss_quantity; actual_loss_unit; actual_loss_basis; actual_loss_method; actual_loss_state; actual_loss_source; actual_loss_fate; unfinished_resource_attribution; carried_resource_link; source_gate_input_quantity; source_gate_input_unit; source_gate_input_basis; source_gate_input_method; source_gate_input_state; source_gate_quantity_source; source_gate_allocation_mode; direct_assignment_source_ids; direct_assignment_quantity; direct_assignment_unit; direct_assignment_basis; direct_assignment_method; direct_assignment_state; direct_assignment_source; allocation_cohort_id; cohort_source_quantity; cohort_source_unit; cohort_source_basis; cohort_source_method; cohort_source_state; cohort_source_record; target_exit_driver; sum_exit_drivers; exit_driver_unit; exit_driver_basis; exit_driver_method; exit_driver_state; exit_driver_source; all_terminal_exit_ids; all_terminal_exit_driver_records; terminal_exit_link; terminal_exit_owner; exit_original_filled_pail_equivalent; exit_equivalence_unit; exit_equivalence_basis; exit_equivalence_method; exit_equivalence_state; exit_equivalence_source; assigned_source_gate_quantity; assigned_source_gate_unit; assigned_source_gate_basis; assigned_source_gate_method; assigned_source_gate_state; source_gate_allocation_source; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_source; exclusive_other_exit_coverage; baseline_quantity; baseline_quantity_unit; baseline_quantity_basis; baseline_quantity_method; baseline_quantity_state; baseline_quantity_source; baseline_stage_coverage; baseline_loss_coverage; additional_stage_quantity; additional_stage_unit; additional_stage_basis; additional_stage_method; additional_stage_state; additional_stage_source; additional_stage_owner; loss_adjustment_quantity; loss_adjustment_unit; loss_adjustment_basis; loss_adjustment_method; loss_adjustment_state; loss_adjustment_source; loss_owner; already_included_loss_coverage; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source | 核实实际批发所有权购销企业买方门槛来源撤销，只计真实最终唯一验收。匹配原即用SKU批次颜色基料配方桶填充封口和原生漆体积湿量密度温度包装顶空证据，不假设开桶。分别记录固体水组成的体积质量基准；核对真实库存终端和直接映射或完整正竞争驱动群组。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 | Item(s)、kg及原生体积密度温度组成时间驱动单位 | 逐收货状态库存发货验收撤销事件及期间关账 | 原来源放行至全部终端、跨期未完成拒收取消资源 | 真实供应批发买方门槛，sealed_paint_wholesale节点 | 每参考流 | 厂家最终灌装包装配方、校准原生方法状态来源取样、真实所有权企业证据及完整来源出口损失覆盖 N>0且有真实最终门槛才归一；不凭收货或以余额当损失。 |
| cp_supplies | sealed_paint_wholesale | 真实新供给与配对未用退回 | 独立物料库存外部转移 | supply_id; material_SKU; formulation; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; opening; net_receipts; closing; stock_unit; stock_basis; stock_method; stock_state; stock_source; retained_recovery; unused_outward_return; return_unit; return_basis; return_method; return_state; return_source; return_receiver; same_supply_pairing; supply_convention; native_quantity; quantity_unit; quantity_basis; quantity_method; quantity_state; quantity_source; quantity_sample_time; reporting_extent; count_multiplier; multiplier_unit; multiplier_basis; multiplier_method; multiplier_source; per_piece_mass; per_piece_mass_unit; per_piece_mass_basis; per_piece_mass_method; per_piece_mass_state; per_piece_mass_source; per_piece_mass_sample_time; density; density_unit; density_basis; density_method; density_state; density_temperature; density_temperature_unit; density_source; density_sample_time; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_source; service_driver; all_user_driver; driver_unit; driver_basis; driver_method; driver_source; service_driver_share; period; owner; embedded_provider_coverage; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采集真实配方原生库存EACH/TOTAL数量基准方法状态来源取样及同库存可用外送接收。总S加真实配对独立输出，或仅耗用扣配对且省输出；当前输入排除原漆桶。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际原生供给单位及相容目标换算 | 逐真实库存使用转移关账 | 真实库存区间及保留回收期末 | 批发独立新供给及真实外部接收 | 每参考流 | 收据校准库存、原供给接收配对、方法状态单位密度温度换算来源 原生换算因果物理份额/N一次，无默认替代抵扣。 |
| cp_utilities | sealed_paint_wholesale | 真实仓库公用工程分配 | 原生表计时段及全部用户驱动 | utility_id; provider; geography; meter_id; native_interval_quantity; quantity_unit; quantity_basis; quantity_method; quantity_state; quantity_source; quantity_sample_time; interval_start; interval_end; time_zone; time_source; service_driver; all_user_driver; driver_unit; driver_basis; driver_method; driver_source; service_driver_share; actual_utility_quantity; density; density_unit; density_basis; density_state; density_method; density_temperature; density_temperature_unit; density_source; density_sample_time; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_source; included_provider_scope; overlap_exclusions; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量真实原生量及期间来源时区，同单位因果服务全部用户驱动，明确换算除N。区分实测分配承包覆盖，无稀释涂刷洗刷具用水或混合固化用能。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh、m3及原生时间驱动换算单位 | 逐真实公用工程驱动区间 | 实际区间含所属空闲卫生未完成资源 | 真实仓库电动搬运表计及全部用户 | 每参考流 | 计量边界来源状态取样及全部用户因果原生驱动记录 仅实际时段公用资源份额，原漆水非公用工程。 |
| cp_provider | sealed_paint_wholesale | 真实互斥承包包 | 物理原生等价及事件覆盖 | package_id; provider; physical_scope; actual_native_package_quantity; package_unit; quantity_basis; quantity_method; quantity_state; quantity_source; quantity_sample_time; physical_equivalence; equivalence_unit; equivalence_basis; equivalence_method; equivalence_state; equivalence_source; documented_share; share_numerator; share_denominator; share_driver_unit; share_driver_basis; share_driver_method; share_driver_source; covered_events; covered_energy; covered_materials; covered_assets; covered_transport; covered_treatment; excluded_scope; direct_resource_owner; service_period; time_zone; time_source; all_users; evidence_record; N | 采集真实物理数量等价单位基准方法状态来源、记录份额分子分母及资源资产承运处理责任，无隐藏调色混合开桶涂刷。 | 原生物理服务及匹配驱动单位 | 逐真实服务事件范围变更 | 实际服务期间时间来源 | 真实批发关联承包边界 | 每参考流 | 服务方原生事件等价及覆盖排除唯一责任矩阵 物理包乘有据份额/N一次，无价格或重复直接范围。 |
| cp_assets | sealed_paint_wholesale | 完整寿命共享基础设施 | 资产生命周期历史剩余登记 | asset_id; asset_dataset_scope; manufacture_coverage; maintenance; replacement_events; retirement; end_of_life; event_quantity; event_unit; event_basis; event_method; event_state; event_source; event_time; time_zone; time_source; job_driver; job_driver_unit; job_driver_basis; job_driver_method; job_driver_state; job_driver_source; observed_all_user_driver; observed_driver_unit; observed_driver_basis; observed_driver_method; observed_driver_state; observed_driver_source; remaining_driver; remaining_driver_unit; remaining_basis; remaining_method; remaining_state; remaining_source; lifetime_all_user_driver; lifetime_driver_unit; lifetime_driver_basis; lifetime_driver_method; lifetime_driver_state; lifetime_driver_source; driver_equivalence; equivalence_unit; equivalence_basis; equivalence_method; equivalence_state; equivalence_source; all_consumers; all_periods; idle_and_open_use; uncertainty; sensitivity; update_trigger; supplier_merchant_provider_carrier_overlap; N | 采集匹配完整制造实际维护更换退役寿命终结；每工作已观测剩余寿命全部用户驱动原生单位基准方法状态来源等价及不确定性敏感性更新。供应承包承运批发互斥。 | 原生资产等价及相容物理工作寿命驱动单位 | 逐资产事件期间更新 | 全部用户完整已观测寿命加有来源剩余及寿命终结 | 实际仓库设备循环支撑使用者 | 每参考流 | 完整资产数据集、已观测事件及有来源剩余原生等价不确定性 工作寿命比再除N一次，非每用新资产或租赁完整周期重复。 |
| cp_freight | sealed_paint_wholesale | 唯一实际载荷运输段 | 秤票载荷路线份额记录 | load_id; leg_id; unique_load_leg_key; mode; carrier; origin; destination; route_scope; actual_count; count_unit; count_basis; count_method; count_source; cargo_mass_quantity; cargo_mass_unit; cargo_mass_basis; cargo_mass_method; cargo_mass_state; cargo_mass_source; cargo_mass_sample_time; cargo_mass_reporting_extent; cargo_mass_count_multiplier; multiplier_unit; multiplier_basis; multiplier_method; multiplier_source; actual_filled_pail_state; wet_paint_mass; wet_paint_mass_unit; wet_paint_mass_basis; wet_paint_mass_method; wet_paint_mass_state; wet_paint_mass_source; wet_paint_mass_sample_time; pail_lid_label_mass; pail_pack_mass_unit; pail_pack_mass_basis; pail_pack_mass_method; pail_pack_mass_state; pail_pack_mass_source; pail_pack_mass_sample_time; headspace_contents_mass; headspace_mass_unit; headspace_mass_basis; headspace_mass_method; headspace_mass_state; headspace_mass_source; headspace_mass_sample_time; actual_carried_outer_pack_support_mass; support_mass_unit; support_mass_basis; support_mass_method; support_mass_state; support_mass_source; support_mass_sample_time; noncargo_vehicle_container_tare; tare_unit; tare_basis; tare_method; tare_state; tare_source; tare_sample_time; payload_scope_source; whole_pack_payload; payload_unit; payload_basis; payload_method; payload_state; payload_source; payload_conversion; payload_conversion_unit; payload_conversion_source; distance; distance_unit; distance_basis; distance_method; distance_source; distance_conversion; distance_conversion_unit; distance_conversion_source; actual_transport_work; work_unit; work_basis; work_method; work_source; documented_service_share; share_numerator; share_denominator; share_driver_unit; share_driver_basis; share_driver_method; share_driver_source; record_allocation_owner; empty_return_coverage; carrier_fuel_assets; warehouse_overlap; event_time; time_zone; time_source; N | 识别唯一load_id+leg_id及真实灌装桶包装顶空支撑货载。EACH乘相容实际数一次，或TOTAL不变，只扣非货物皮重。每记录真实工作量乘该记录份额在唯一求和内部，再除N一次，保留空返燃料资产责任。 | 原生货载质量计数距离工作量及换算t*km | 逐真实唯一load+leg及返程 | 实际纳入路线事件区间时间来源 | 真实承运路线并排除仓库重叠 | 每参考流 | 秤票边界单件总量来源、记录份额原生驱动及真实路线承运覆盖 sum_unique_load_leg(actual_transport_work*documented_service_share)/N；循环支撑仍是货载，湿漆不是整载。 |
| cp_outlets | sealed_paint_wholesale | 真实互斥接收物流 | 接收验收整流保留组分计量 | transfer_id; receiver; receiver_classification; treatment_boundary; treatment_owner; source_pail_batch_ids; parent_stream_id; pail_pack_headspace_membership; stream_identity; physical_state; native_quantity; quantity_unit; quantity_basis; quantity_method; quantity_state; quantity_source; quantity_sample_time; reporting_extent; count_multiplier; multiplier_unit; multiplier_basis; multiplier_method; multiplier_source; transfer_time; time_zone; time_source; whole_pail_exclusion; separate_pack_exclusion; absorbed_solids_exclusion; free_paint_exclusion; hygiene_liquid_exclusion; retained_paint_quantity; retained_paint_unit; retained_paint_basis; retained_paint_method; retained_paint_state; retained_paint_source; retained_paint_sample_time; retained_content_fate; component_identity; component_quantity; component_unit; component_mass_or_volume_basis; component_method; component_state; component_source; component_sample_time; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; density; density_unit; density_basis; density_method; density_state; density_temperature; density_temperature_unit; density_source; density_sample_time; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_source; usable_transfer_record; waste_acceptance_record; source_stock_pairing; no_double_credit; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 关联桶批次父流并分类真实整桶独立包装吸附固体游离漆卫生液。计量原生整流净量范围，独立审计保留漆组分水分液体单位质量体积基准方法状态来源取样去向。接收处理一次，不推定沉降干燥回收。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | 原生整流kg、m3、Item(s)及独立保留组分单位 | 逐真实外转移事故 | 真实转移期间时间来源；保留期末另列 | 真实批发出口及有据接收处理边界 | 每参考流 | 真实接收验收分类、实测原生整流保留基准及唯一处理责任 相容净量/N一次，整桶保留漆与独立转移互斥，不重复物种。 |
| cp_environment | sealed_paint_wholesale | 条件性真实物种直接释放 | 物种介质测量或适用活动系数 | event_id; species_identity; particle_basis; receiving_medium; direct_measurement; measurement_unit; measurement_basis; measurement_method; measurement_state; measurement_source; sample_time; activity; activity_unit; activity_basis; activity_method; activity_state; activity_source; factor; factor_unit; factor_basis; factor_method; factor_state; factor_source; factor_scope_complete; composition; composition_unit; composition_mass_or_volume_basis; composition_method; composition_state; composition_source; composition_sample_time; release_fraction; release_fraction_unit; release_fraction_basis; release_fraction_method; release_fraction_state; release_fraction_source; release_fraction_sample_time; fate_basis; fate_method; fate_state; fate_source; whole_stream_quantity; whole_stream_unit; whole_stream_basis; whole_stream_method; whole_stream_state; whole_stream_source; density; density_unit; density_basis; density_state; density_method; density_temperature; density_temperature_unit; density_source; density_sample_time; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_source; retained_captured_quantity; retained_captured_unit; retained_captured_basis; retained_captured_method; retained_captured_state; retained_captured_source; contained_transfer_exclusion; headspace_provenance; in_can_VOC_basis_source; stock_unknowns; provider_overlap; event_time; time_zone; time_source; N | 独立识别真实物种颗粒介质，以实测或真实适用活动系数及必要质量体积组成去向。桶内VOC上限非排放或零；保留顶空捕集漆收集液排除，完整系数不再相乘。 | kg物种及原生活动系数组成温度时间单位 | 逐真实实测或有据事件 | 实际事件取样期间代表性 | 批发边界外真实接收介质 | 每参考流 | 取样分析来源或系数适用原生活动组成去向及独立介质证明 实际测量/N或有据物种系数路线/N，未知释放未定。 |

### 计算规则

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | accepted_service | N为撤销后真实批发自有转售企业间最终唯一货批验收数，由商家所有权买方门槛来源撤销记录支持。仅N>0归一，否则保留真实群组事件资源，不虚构服务除法。 | cp_paint商家所有权购销买方最终验收撤销证据 | N与1 Item(s)已完成商业服务 |  |
| wet_fill_mass | 非交换商品 | paint_wet_mass=actual_compatible_net_paint_volume*actual_paint_density，经原生换算且配方状态温度匹配。标签容量顶空外形及整密封桶量非净漆体积质量；毛减皮需真实其他内含顶空边界。 | cp_paint实际体积质量密度温度单位方法状态来源取样换算 | 实际净湿漆审计，无默认密度或顶空零 |  |
| solids_water_audit | 非交换组分审计 | 仅实测匹配质量基准时mass_solids=actual_wet_paint_mass*actual_compatible_MASS_solids_fraction。VOLUME固含不可乘湿量；若真实相容体积审计，体积固体结果与质量分开。真实水另计取证，不自动1-solids；无涂刷干膜交换。 | cp_paint真实质量体积固体水组分方法状态来源原生单位 | 不重复保留湿漆组分审计，无通用湿干换算 |  |
| original_gate_demand | 服务外商品 | commodity_source_gate_demand=assigned_source_gate_quantity；实际直接映射，或assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers，完整正实际终端含期末退回其他可用溢洒泄漏损失。原生来源分配基线补阶段数量状态方法来源等价及唯一损失阶段覆盖服务外核对一次。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 | cp_paint完整原灌装包来源全部终端原生分配损失阶段记录 | 量化原成品配制灌装包装需求及唯一上游损失接口 |  |
| supply_convention | 实际新增供给 | S=opening+net_receipts-closing；总S/N加同库存实际usable_outward_return/N输出，或仅耗用(S-usable_outward_return)/N且省配对输出。不用原商品资产冲无关供给或再抵扣。 | cp_supplies原生库存范围方法状态换算实际接收配对 | 互斥供给可用未用外送 |  |
| utility_allocation | 真实公用工程 | 匹配实际因果原生基准service_driver_share=service_driver/all_user_driver；有据换算后allocated_utility=native_interval_quantity*service_driver_share/N。 | cp_utilities原生表计期间驱动方法状态来源 | 每服务实际实测或分配仓库公用工程 |  |
| provider_allocation | provider_packages | 物理等价覆盖后provider_quantity=actual_native_package_quantity*documented_share/N；documented_share=share_numerator/share_denominator，原生驱动基准方法来源相容。 | cp_provider原生等价份额唯一责任证据 | 每服务互斥实际物理承包包 |  |
| asset_allocation | shared_assets | asset_equivalent=job_driver/lifetime_all_user_driver/N；lifetime_all_user_driver=compatible_observed_all_user_driver+compatible_sourced_remaining_driver。匹配完整制造维护更换退役寿命终结，各驱动原生单位基准方法状态来源等价不确定性更新明确。 | cp_assets完整生命周期工作已观测剩余寿命全部用户记录 | 每服务全部用户完整寿命资产份额 |  |
| unique_freight_sum | freight | EACH时cargo_total=actual_each_compatible_cargo_mass*actual_compatible_count仅一次；TOTAL时cargo_total=actual_total_compatible_cargo_mass不变。货载含真实桶漆包装顶空支撑，仅扣非货物皮重。逐唯一load+leg的actual_transport_work=cargo_total_tonnes*actual_distance_km或相容原生量；freight_quantity=sum_unique_load_leg(actual_transport_work*documented_service_share)/N。每记录份额在和内，除N一次。 | cp_freight唯一载荷段原生货载范围计数路程换算记录份额覆盖 | 每服务实际求和承运量，无重复载荷段份额N |  |
| actual_outlets | 接收物流 | outlet_quantity=actual_compatible_net_quantity/N；EACH量仅乘一次相容数，TOTAL不变。整桶保留漆顶空、独立包装残漆、吸附漆固体、游离收集漆、卫生液组分及独立物种互斥。 | cp_outlets原生整流保留组分质量体积基准状态父流接收去向记录 | 真实接收净转移，无重复漆组分处理 |  |
| actual_release | direct_species | release_quantity=actual_measured_species_quantity/N或compatible_activity*applicable_factor*required_composition*required_release_fraction/N。完整物种系数已含组成去向时省额外因子，排除保留捕集收集库存。 | cp_environment原生测量活动系数质量体积组成去向介质来源 | 真实已识别物种介质，不是桶内VOC含量或零 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| native_operands | 每真实数量 | 保留原生单位基准方法状态取样来源及换算单位来源，密度含温度单位。匹配SKU配方颜色基料和质量体积分数。缺证据非零。 | 节点专属CP原记录实际换算 |
| actual_received_state | 配方填充包装 | 真实即用原封成品灌装门槛控制。厂家标称树脂固体VOC性能及应用指引非统一配方密度、服务操作或实际物种释放。 | 真实供应最终配方填充封口记录及来源适用 |
| complete_commodity | 原来源系统 | 真实成品配制灌装包装全部阶段及原输入分配基线补阶段原生量、完整正终端驱动、实际唯一损失责任基线阶段损失覆盖，在服务外一次后方完整链。 | cp_paint关联商品读回 |
| final_actual_bindings | 实际展开交换 | 最终包前需具体实际SKU服务资产接收物种流身份及属性单位详情支持，Count支持候选语义卡非真实已核实流。 | 实际详情支持及来源原生数量接收记录 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | sealed_paint_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| hygiene_water | sealed_paint_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`hygiene_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| hygiene_materials | sealed_paint_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`hygiene_materials`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| added_outer_packing | sealed_paint_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`added_outer_packing`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_packages | sealed_paint_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_provider`识别`provider_packages`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_provider`; 实际来源关联原生记录 |
| shared_assets | sealed_paint_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`shared_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | sealed_paint_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_freight`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_freight`; 实际来源关联原生记录 |
| unused_count_returns | sealed_paint_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`unused_count_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| unused_mass_returns | sealed_paint_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`unused_mass_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| whole_pail_waste | sealed_paint_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`whole_pail_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`whole_pail_waste_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| packaging_waste | sealed_paint_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`packaging_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| hygiene_waste | sealed_paint_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`hygiene_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| free_paint_waste | sealed_paint_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`free_paint_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`free_paint_waste_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| contained_hygiene_liquid | sealed_paint_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`contained_hygiene_liquid`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| direct_species | sealed_paint_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`direct_species`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

仅含真实仓库照明电动搬运实测或因果分配电力。不假设原厂配制灌装、批发调色混合或涂刷干燥用电。承包承运已含资源须唯一负责。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际仓库与电动漆桶搬运用电
- 流属性/单位：Energy / kWh
- 数量规则：native_interval_quantity*service_driver_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需有实际区间表计全部用户原生驱动及交付电力来源属性支持；不默认每桶每吨功率用电。

#### hygiene_water

仅含实际供给仓库表面卫生事故围控的水。原漆所含水属于商品，并非公用工程输入；不稀释洗刷具或涂刷冲洗。记录真实水源处理承包边界。

本卡为独立身份分支`hygiene_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际仓库卫生用水
- 流属性/单位：Volume / m3
- 数量规则：actual_utility_quantity*service_driver_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需有原生计量体积或有据密度换算、真实卫生区间全部用户份额来源；漆内水分或刷具清洁系数不可替代。

#### hygiene_materials

仅在真实使用时记录清洁剂擦拭物吸附物过滤物SKU库存。不规定洗剂溶剂干燥剂剂量、漆树脂水颜料购入、消费者刷具或稀释料。使用后物料另外计量。

本卡为独立身份分支`hygiene_materials_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际仓库卫生与事故捕集物料
- 流属性/单位：Mass / kg
- 数量规则：selected_supply_input/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需有实际配方、独立库存未用外送配对及原生整物数量单位范围组成换算；供给量本身不是已用废物。

#### added_outer_packing

仅含原封漆桶外实际新外箱护件薄膜封口物。原厂桶盖标签原包装顶空属于商品，循环支撑为完整寿命资产；不规定开桶分装或漆重包装。

- 身份采集要求：实际新增外部运输包装
- 流属性/单位：Count / Item(s)
- 数量规则：selected_supply_input/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需有真实新防护单位材质单件质量单件总量范围及责任；不固定每托盘桶数或缠绕剂量。

#### provider_packages

真实原生物理服务等价、因果份额及能源物料资产承运处理覆盖，费用不是物理量。外包调色混合稀释开桶分装涂刷固化仍为路线扩展，不能隐形。

- 身份采集要求：实际互斥仓储承包服务包
- 流属性/单位：Count / Item(s)
- 数量规则：actual_native_package_quantity*documented_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

数量范围证据需求：需有服务方物理单位原生驱动分子分母来源互斥覆盖，不采用通用配制涂刷或计价物流代理。

#### shared_assets

真实建筑货架电动搬运机循环托盘笼秤监测器覆盖全部用户期间及完整制造维护更换退役寿命终结。原桶不默认批发循环基础设施；供应承包承运责任互斥。

- 身份采集要求：密封漆桶仓储搬运共享资产完整寿命服务
- 流属性/单位：Count / Item(s)
- 数量规则：job_driver/lifetime_all_user_driver/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

数量范围证据需求：需有匹配完整生命周期及工作已观测剩余寿命全部用户驱动的原生单位基准方法来源等价和不确定性敏感性更新；非每搬新托盘或假设寿命。

#### freight

货载含实际灌装桶盖标签、真实顶空内含物及随货外包装支撑，不仅湿漆。仅扣车辆集装箱非货物皮重。唯一真实load+leg记录：EACH量仅乘一次相容实际计数，TOTAL不变；每记录物理服务份额在求和内部，再除N一次。空返燃料资产唯一负责。

- 身份采集要求：实际运输原封灌装漆桶
- 流属性/单位：Freight transport / t*km
- 数量规则：sum_unique_load_leg(actual_transport_work*documented_service_share)/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

数量范围证据需求：需有真实货载原生内含包装支撑非货物皮重边界、单件总量计数、唯一运输段路程换算记录份额空返；不用标称体积或通用运费因子。

#### unused_count_returns

仅含同一独立负担新库存实际外送可用未用单位。回收期末非外送，商品密封漆桶退回仍是商品事件。仅耗用输入扣同配对退回时省此输出，不默认替代抵扣。

- 身份采集要求：实际配对未用新外包装外送退回
- 流属性/单位：Count / Item(s)
- 数量规则：actual_matched_unused_outward_units/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需有实际原供给单位状态同源库存接收配对；原漆桶或循环托盘不能成为未用新包装抵扣。

#### unused_mass_returns

仅含同一独立来源库存真实外送可用未用卫生料，记录原生净量。总输入加此输出，或仅耗用减配对量且省输出，不两次抵扣。原漆原料不是当前卫生用品。

- 身份采集要求：实际配对未用仓库物料外送退回
- 流属性/单位：Mass / kg
- 数量规则：actual_matched_unused_outward_mass/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需有实际料SKU状态净量单位、需要时密度及同库存接收配对；商品漆退货不冲新卫生输入。

#### whole_pail_waste

仅含接收方实际验收废弃的有据状态漆桶，按实际所含保留湿漆盖标签包装顶空。拒收、封口损伤、疑似冻损或库存缺口本身非处置。整流保留组分是不可重复相加审计，不另加漆水固体排放。

- 身份采集要求：实际废弃的整桶满装或部分装漆物流
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有来源桶批次封口填充状态、整流净量范围内含边界及接收分类处理，不推定满桶废物或回收率。

#### packaging_waste

真实事故或转移中已分离桶盖标签外包装，不假设日常倒空分装。保留漆含于整流计量及原生组分审计。排除整桶或混合清理已含包装；厂家标签不使污染包装自动成为空桶。

本卡为独立身份分支`packaging_waste_paper_pack`; `packaging_waste_metal_pack`; `packaging_waste_plastic_pack`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际独立转移的漆桶或外包装废物
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有实际材质污染保留湿漆原生量单位状态来源、原桶包装关联与接收分类；理论空桶皮重不是真实废物量。

#### hygiene_waste

真实使用后擦拭吸附过滤或事故捕集流，含保留漆液。购入干品、使用后湿整流、吸附漆水固体是不同不可重复相加视图。不规定沉降、主动干燥固化或处置配方。

- 身份采集要求：实际含漆仓库围控固体
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有实际使用后净湿量范围及保留漆液水分固体原生量单位基准方法来源取样去向接收证据，不能仅凭物料收货或溢洒估量。

#### free_paint_waste

真实事故收集且独立转移接收的游离漆，区别整桶、独立包装、吸附固体或卫生液所含漆。不假设批发开桶分装混合或主动干燥，按记录匹配原批配方及实际稀释污染状态。

- 身份采集要求：实际独立收集的游离湿漆废物
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有真实游离收集量单位基准状态、换算时密度温度、原批及接收分类处理；原桶缺口不等于游离漆或VOC排放。

#### contained_hygiene_liquid

送至接收方的真实仓库表面清洁事故收集液，不是刷具清洗涂刷冲洗自动排水或纯水释放。漆固体水含量需实际相容证据；与游离漆及吸附保留整流分开。

- 身份采集要求：实际收集的仓库卫生液体
- 流属性/单位：Volume / m3
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有真实收集体积或相容质量密度温度换算、组成负荷原生组分基准及接收方；取水或标称漆含水率不是废水实测。

#### direct_species

仅含独立识别物种颗粒介质及真实测量或适用活动系数组成去向。桶内VOC最大值声明或标称水树脂固体不是实际排放物种、释放份额或零；封闭顶空在独立证实释放前为保留内容。捕集漆收集液为转移，非排放。

- 身份采集要求：实际已识别物种或颗粒直接释放
- 流属性/单位：Mass / kg
- 数量规则：actual_measured_species_quantity/N OR actual_activity*applicable_factor*required_composition*required_release_fraction/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

数量范围证据需求：需有真实物种介质测量，或有据原生活动系数组成去向换算；完整系数已含组成去向不重复相乘。不采用通用VOC、全部溢洒入空气或空顶空假设。

## 9. 验证规则

| rule_id | Rule | source_ids |
| --- | --- | --- |
| reference_gate_check | 真实输出名链接Count量及N与商家所有权购销企业买方最终验收门槛来源撤销和原封即用漆限定一致；N>0后除，未完成取消撤销资源保留。 |  |
| original_gate_check | 实际完整原厂配制灌装密封状态、每实际缺阶段及原生原分配基线补量来源，直接分配或完整正全部终端含期末可用其他退回溢洒泄漏损失和唯一损失阶段覆盖服务外一次。非仅原树脂水颜料代理，不余额即损失。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |  |
| scope_check | 无隐藏批发调色混合稀释开桶分装涂刷洗刷具固化主动沉降干燥或溶剂双组分气雾路线，外包同样；真实额外操作需扩展审查。 |  |
| basis_fate_check | 核对真实净湿漆与桶顶空标签体积、密度温度、质量固含体积固含水基准。真实整桶独立包装吸附固体游离漆卫生液保留组分物种接收处理互斥；VOC含量或未知损失非排放零。 |  |
| resource_record_check | 原生单件总量货载含全部真实随货灌装桶包装顶空支撑仅扣非货物皮重。唯一载荷段求和含其自身物理份额再除N一次。全部用户完整资产工作已观测剩余寿命原生证据寿命终结、总S加配对输出或仅耗用省输出符合唯一责任。 |  |
| binding_completeness_check | 最终交换需真实原生数量换算来源及具体核实身份属性单位。披露候选身份经验范围缺口，自动通过不代表发布完整链就绪。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 真实验收自有转售企业间原封即用水性丙烯酸共聚内墙哑光漆货批附加服务前景。 |
| downstream_use | 互斥实际服务与匹配完整原配制灌装密封商品系统及量化唯一原需求损失在服务外仅组合一次。 |
| allowed_use | 真实声明即用SKU批次颜色基料配方灌装桶封口顶空状态普通常温批发，含真实所有权验收资源接收。 |
| excluded_use | 独立完整漆产品足迹、原制造或调色配制涂刷干燥洗刷具、溶剂双组分气雾漆，零售代理未审操作。 |
| required_metadata | 真实商家所有权企业间验收撤销、原配制灌装包装门槛SKU批次颜色基料封口填充计数净湿体积质量密度温度组成基准包装顶空时刻场址期间，原基线补阶段全部终端原生量损失覆盖和资源资产唯一载荷段接收范围。 |
| required_quality_disclosure | 实际身份支持数量范围及原生方法状态取样来源未定、质量体积组成区别、保留游离吸附物流未知、实际唯一载荷段份额、实测分配资源完整寿命剩余不确定性。 |
| update_trigger | 真实来源配方颜色基料填充封口路线服务资产运输段接收物种变化、修订原生密度组成分配损失阶段覆盖或具体核实身份来源。 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| dulux-pds-2025 | handbook | Dulux Trade Diamond Matt PDS1026，08/25发布，3页。 https://msp.images.akzonobel.com/prd/dh/eukddc/documents/dt_1026__diamond_matt_pdf.pdf | 仅定性支持标称水性丙烯酸共聚组成、即用实例及实际封桶储存状态问题。体积固含非质量分数，桶内VOC非批发释放零。无统一颜色容量配方密度性能或应用清理处置程序。 |
