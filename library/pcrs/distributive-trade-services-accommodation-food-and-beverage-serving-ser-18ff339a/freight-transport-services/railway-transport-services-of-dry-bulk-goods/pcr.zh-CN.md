---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.railway-transport-services-of-dry-bulk-goods
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铁路干散货物货运工作量

## 1. 范围与适用性

覆盖谷物面粉水泥砂煤及其他实际松散固体散货的铁路运输。真实敞车封闭漏斗车或适用专车、重力底卸翻卸机械气力装卸均保留条件路线，不限某货物设备子集。排除包装货物集装箱服务、散装液气浆料承运、活体动物邮件快件、独立非铁路货运、货物制造采矿制粉贸易及纯铁路货车租赁。按货物状态和实际货运功能判断相邻分类。

功能输出为真实限定已完成货物运输工作量，不是采矿制粉商品销售车辆移动或粉尘损失额度。真实货物质量状态路线场站边界仍必须声明，吨公里比较须等价分层。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.railway-transport-services-of-dry-bulk-goods |
| classification_refs | CPC 3.0 65125 |
| covered_products | 覆盖谷物面粉水泥砂煤及其他实际松散固体散货的铁路运输。真实敞车封闭漏斗车或适用专车、重力底卸翻卸机械气力装卸均保留条件路线，不限某货物设备子集。排除包装货物集装箱服务、散装液气浆料承运、活体动物邮件快件、独立非铁路货运、货物制造采矿制粉贸易及纯铁路货车租赁。按货物状态和实际货运功能判断相邻分类。 |
| excluded_products | 包装集装箱液气浆料动物邮件独立非铁路功能；货物生产贸易；纯车辆租赁 |
| representative_product | 限定已完成铁路干散货运输工作量 |
| production_route | 真实干固体铁路保管装载编组调车干线卸料搬运过滤清扫及责任生命周期 |
| market_state | 具真实货物状态含水验收的限定已完成干散货铁路货运工作量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能对象（What） | 限定已完成铁路干散货运输工作量 |
| 数量（How much） | 1tkm真实限定已完成干散货铁路工作量，取真实合格净运输状态kg及铁路区段km |
| 质量（How well） | 真实货物组成粒径含水状态质量、车辆搬运路线及原完成验收 |
| 时间或周期（How long or cycle） | 实际声明保管铁路区段验收服务区间及归属全部作业生命周期期间 |
| reference_flow_link | qualified_dry_bulk_work |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 限定已完成铁路干散货运输工作量 |
| 参考流属性 | 质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` |
| 参考单位组 | 质量*距离单位组 `3620148f-c5db-48ce-9065-a10092089aca` |
| 参考单位 | tkm |
| 必需限定信息 | cargo_identity_particle_state_and_drybulk_function; actual_wagon_open_covered_hopper_gondola_config; actual_loading_unloading_gravity_mechanical_pneumatic_route; net_ascarried_mass_state_moisture_drysolid_basis_eachsegment; originalcompletion_acceptance_and_eligible_distance_W_tkm; actual_loco_consist_shunt_yard_empty_failed_duty; silo_receiver_compressor_filter_coverage; drysolid_water_stock_dust_capture_return_waste_environmentfates; alluser_causal_provider_native_cells; equipment_asset_cohort_life_phases; tkm_native_t_star_km_alias1000; actual_pollutant_size_composition_medium_uncertainty |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| work_basis | dry_bulk_rail | 实际原生兼容属性 | 实际原生单位 | W_tkm = sum(m_eligible_kg_s * d_eligible_km_s) / 1000。取各合格铁路区段真实限定已完成净货物运输状态质量，并声明状态含水基，不含货车机车容器自重其他货物。仅原预设已完成验收部分或有独立当时验收记录的区段变更服务合格，后来失败货物早前行程不自动为成功工作量，不能事后缩小失败范围。后续已损失留存货物不进入后续区段。空驶调位编组循环重复阶段及不合格移动不作输出，但保留真实负荷。不靠无依据加水标称容量或重定含水固体基抬高输出，披露真实路径绕行货物条件及可比分层。 |
| moisture_basis | dry_bulk_rail | 实际原生兼容属性 | 实际原生单位 | 客户干散货为保管货物，不是消耗生产投入。每次观测均采用真实实测湿基水分质量分数w及 M_dry = M_wet * (1-w)，或由实际测量含水基作有依据的兼容换算；不混用湿基与干基分数。按物料货批仓位期间将去向互斥闭合：期初湿货物加实际入界湿货物加实际外部物料水添加或吸收，等于验收湿交接、实际外发湿退回、外发湿弃置物、直接物料释放及期末保留湿货物之和，再加尚未计入这些外发流的实际独立排水蒸发或其他移出。显式记录实际净水量变化，不要求湿质量守恒或各观测含水相等。干固体和水分别闭合，纳入各货物残留废物留存交付流中所带水及真实添加吸收排水蒸发，不重复内部转移或净货物已含水。不能由湿重变化推断干固体损失。底料和归还客户捕尘只进入保管库存转移一次，残留是物理状态，不是额外平衡项。 |
| native_units | dry_bulk_rail | 实际原生兼容属性 | 实际原生单位 | tkm准确为核实原生t*km =1000kg*km拼写别名，物理尺度功能相同，最终TIDAS交换用原生单位名t*km。保留燃料水空气资产原生单位及换算真实温压密度含水，运输状态货物kg干物质kg车辆总重资产计次不同。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实松散干固货物状态含水及铁路保管搬运端口 |
| starting_condition_role | 前景事实，不是上游货物制造或资产供应零负荷 |
| product_classification_scope | CPC 3.0 65125 |
| recursive_input_rule | 真实分包铁路搬运服务仅替换覆盖原生单元一次，不重复工作量 |
| upstream_dataset_requirement | 真实物料资产供应原生身份单位端口质量地域期间及补全未覆盖生命周期 |
| disclosure | 货物状态含水W方法真实铁路场站作业粉尘水去向全部用户不确定性 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| scope | dry_bulk_rail | 覆盖谷物面粉水泥砂煤及其他实际松散固体散货的铁路运输。真实敞车封闭漏斗车或适用专车、重力底卸翻卸机械气力装卸均保留条件路线，不限某货物设备子集。排除包装货物集装箱服务、散装液气浆料承运、活体动物邮件快件、独立非铁路货运、货物制造采矿制粉贸易及纯铁路货车租赁。按货物状态和实际货运功能判断相邻分类。 | unsd-cpc3-65125 |
| rail_duties | dry_bulk_rail | 声明真实承运保管装载至验收交接卸料及场站筒仓运营接口。记录各真实机车编组货车区段编组场调车干线交接、载货空驶调位等待怠速失败救援清洗换货作业，按全部货物用户期间因果归属。编组场循环空驶重复交接账单不增加验收货物运输工作量。真实动力拓扑供应端口决定交换，不假定通用柴油机车。 | epa-rail-facility-operations; ghg-product-2011 |
| bulk_handling | dry_bulk_rail | 各真实货物状态记录提取卸料、车辆开口盖密封、溜槽输送筒仓、重力机械卸料、气力压缩机接收过滤及抑尘捕集清扫责任。声明货物特定真实含水污染食品质量条件，不引入粮食制粉水泥制造煤炭生产。购入压缩空气搬运服务按原生单位准确替换覆盖单元，已含本方压缩机电力资产捕尘不再重复。无统一卸料压力压缩效率控制因子。 | epa-ap42-grain-handling; epa-ap42-bulk-transfer; ghg-product-2011 |
| cargo_and_moisture | dry_bulk_rail | 客户干散货为保管货物，不是消耗生产投入。每次观测均采用真实实测湿基水分质量分数w及 M_dry = M_wet * (1-w)，或由实际测量含水基作有依据的兼容换算；不混用湿基与干基分数。按物料货批仓位期间将去向互斥闭合：期初湿货物加实际入界湿货物加实际外部物料水添加或吸收，等于验收湿交接、实际外发湿退回、外发湿弃置物、直接物料释放及期末保留湿货物之和，再加尚未计入这些外发流的实际独立排水蒸发或其他移出。显式记录实际净水量变化，不要求湿质量守恒或各观测含水相等。干固体和水分别闭合，纳入各货物残留废物留存交付流中所带水及真实添加吸收排水蒸发，不重复内部转移或净货物已含水。不能由湿重变化推断干固体损失。底料和归还客户捕尘只进入保管库存转移一次，残留是物理状态，不是额外平衡项。 | ghg-product-2011 |
| dust_fates | dry_bulk_rail | 追踪真实粉尘组成粒径基产生阶段、捕集返回收集与直接空气水土沉降及真实接收方。收集粉尘滤饼清扫浆依所有权状态去向属于真实库存产品返还或废物，不自动成为空气PM或避免产品。细粒比例和组分污染物不得与总粉尘质量重复相加；披露重叠并采用兼容表征避免双计。谷物面粉水泥含硅砂煤尘身份不互换，不设通用货尘损耗因子。作为货物的煤与实际燃烧的煤或其他燃料分开。 | epa-ap42-bulk-transfer; epa-ap42-grain-handling; ghg-product-2011 |
| work_gate | dry_bulk_rail | W_tkm = sum(m_eligible_kg_s * d_eligible_km_s) / 1000。取各合格铁路区段真实限定已完成净货物运输状态质量，并声明状态含水基，不含货车机车容器自重其他货物。仅原预设已完成验收部分或有独立当时验收记录的区段变更服务合格，后来失败货物早前行程不自动为成功工作量，不能事后缩小失败范围。后续已损失留存货物不进入后续区段。空驶调位编组循环重复阶段及不合格移动不作输出，但保留真实负荷。不靠无依据加水标称容量或重定含水固体基抬高输出，披露真实路径绕行货物条件及可比分层。 | ghg-product-2011 |
| assets_providers | dry_bulk_rail | 保留真实货车机车门盖制动轮对轨道道岔道砟电气化、编组场场站筒仓输送压缩机过滤清洗资产的制造安装维护更换退役。原生制造仅支持核实端口，按同资产正值全部用户有效服务量分摊；不重复总成初装部件或供应前景。真实承运编组场筒仓气力装卸清洗处理供应按原生单位准确替换覆盖单元一次，未覆盖作业生命周期保留。无通用寿命空返份额回收信用避免货物生产。 | ghg-product-2011 |
| atomic | dry_bulk_rail | 各真实燃料能源空气水化学品物料设备供应残留废物污染物展开为独立行，具有实际身份状态端口接收方方向类型原生属性单位数量核实UUID或行级待核登记本过程协议来源有依据计算。保留干湿基化合物与C/N/S、真实粒径来源介质全部用户作业库存归属，真实证据缺失为不完整而非零。 | ghg-product-2011 |

## 6. 过程清单结构

每张清单流卡仅代表一个可独立识别的产品、物料配方、废物流、物质或供应服务，具有兼容的端口、属性和单位。完整供应总成或实际收集的混合物流可有一个身份，其已含组分不得另列重复交换。第8节cp_expand_协议是必须落实的身份识别要求，不得当作选定流或交换数量。逐项记录真实适用性，以独立行标识列出全部具体交换；完整保留适用范围，未发生须有证据。尚未展开或未知的要求属于不完整，不得当作零。改为采集协议不等于解决缺失身份，也不免除生命周期、分配、计量或边界义务。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| dry_bulk_rail | 铁路干散货物货运工作量 | required | 实际完整合格干固体铁路货运功能 | foreground | qualified_dry_bulk_work |

### 过程：铁路干散货物货运工作量 (`dry_bulk_rail`)

#### 输入

##### 产品流

###### 完整铁路货车制造投入 (`wagon_assembly_manufacture`)

制造交付关口的一件真实完整物理总成；每个实例行只对应一个有记录的型号配置，不同配置分别实例化并计量。仅在该总成为所述节点服务且未被完整供应方覆盖时启用。初始部件包含清单是身份的一部分，已含初始部件不得再次投入；实际未覆盖的维护、更换及寿终另计。 各展开行一种真实漏斗敞车封闭专用固体车总成构型，明确端口已含部件，不是罐车或通用货运服务UUID。同车全部用户有效服务量仅分摊制造，其他生命周期补全。

- 选定流：完整铁路货车制造投入
- 流属性/单位：Count / Item(s)
- 数量规则：对每个同型号总成队列：制造件数 * 目标应承担工作量 / 全用户全寿命工作量 / W_tkm。两个工作量采用相容同一基准及队列，分母须有证据且为正；目标份额与最终参考归一各一次，已含初始部件不可再相加。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：ghg-product-2011


###### 完整铁路机车制造投入 (`locomotive_assembly_manufacture`)

制造交付关口的一件真实完整物理总成；每个实例行只对应一个有记录的型号配置，不同配置分别实例化并计量。仅在该总成为所述节点服务且未被完整供应方覆盖时启用。初始部件包含清单是身份的一部分，已含初始部件不得再次投入；实际未覆盖的维护、更换及寿终另计。 真实干线调车原生总成同队列全部用户服务量，不是全寿命或运输活动身份，未覆盖维护更换退役另列。

- 选定流：完整铁路机车制造投入
- 流属性/单位：Count / Item(s)
- 数量规则：对每个同型号总成队列：制造件数 * 目标应承担工作量 / 全用户全寿命工作量 / W_tkm。两个工作量采用相容同一基准及队列，分母须有证据且为正；目标份额与最终参考归一各一次，已含初始部件不可再相加。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：ghg-product-2011


###### 柴油 (`diesel`)

仅实际干线调车搬运辅助柴油，记录牌号库存燃烧泄漏供应端口。货煤不是本燃料，真实燃煤作业另用原生燃料身份。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：attributed_actual_diesel_kg / W_tkm
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：ghg-product-2011

###### 交流电 (`purchased_ac`)

按铁路充电筒仓输送过滤压缩阶段及供应端口记录真实交流计量。直流接触网供应不同，毛净损耗回收单元互斥。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：attributed_actual_AC_MJ / W_tkm
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：ghg-product-2011

###### 自来水 (`tap_water`)

条件实际自来水清洗或兼容抑尘，分别记录使用留货水废水蒸发。仅工厂供应端口，补全未覆盖交付调理。不是原水回用水，也不强制润湿面粉水泥。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：attributed_actual_tap_water_kg / W_tkm
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_bulk`
- 来源：ghg-product-2011

###### 洗涤剂 (`detergent`)

仅实际兼容合成洗涤剂配方供应端口，干扫消毒剂货物调理化学品不同。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：质量 / kg
- 数量规则：attributed_actual_detergent_kg / W_tkm
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_bulk`
- 来源：ghg-product-2011

###### 实际购入的气力散货搬运压缩空气 (`purchased_air`)

仅真实跨边界购入空气，声明压力温度质量原生单位。边界内自制则记录真实压缩机电力吸入资产，不虚构额外购气交换。供应已含压缩机电力资产仅扣除一次。

- 选定流：实际购入的气力散货搬运压缩空气
- 流属性/单位：实际原生属性 / Actual native unit
- 数量规则：attributed_native_purchased_air / W_tkm
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_bulk`
- 来源：ghg-product-2011

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 限定已完成铁路干散货运输工作量 (`qualified_dry_bulk_work`)

W_tkm = sum(m_eligible_kg_s * d_eligible_km_s) / 1000。取各合格铁路区段真实限定已完成净货物运输状态质量，并声明状态含水基，不含货车机车容器自重其他货物。仅原预设已完成验收部分或有独立当时验收记录的区段变更服务合格，后来失败货物早前行程不自动为成功工作量，不能事后缩小失败范围。后续已损失留存货物不进入后续区段。空驶调位编组循环重复阶段及不合格移动不作输出，但保留真实负荷。不靠无依据加水标称容量或重定含水固体基抬高输出，披露真实路径绕行货物条件及可比分层。

- 选定流：限定已完成铁路干散货运输工作量
- 流属性/单位：质量*距离 / tkm
- 数量规则：1 tkm
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_service`
- 来源：ghg-product-2011

##### 废物流

###### 废润滑油 (`used_oil`)

产生点真实单独收集废油，真实接收未覆盖处理另列，无自动回收信用。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：attributed_actual_used_oil_kg / W_tkm
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2`)

仅匹配真实空气子介质时记录实测或有依据碳平衡化石CO2。货煤煤尘质量不自动燃成CO2或作机车燃料，真实燃烧氧化须独立状态来源期间证据。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：attributed_actual_fossil_CO2_kg / W_tkm
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：ghg-product-2011

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| subdivide | dry_bulk_rail | 按真实机车编组货车货物区段编组场散货搬运筒仓过滤作业直接测量拆分，列明各共载货物其他用户。干散货本身仍为保管货物，不是新生产共产品。 | ghg-product-2011 |
| causal | dry_bulk_rail | 共享牵引依真实物理编组作业总牵引载荷容量约束论证，净合格货物定义输出。货物特定气力输送过滤抑尘清洗可按真实吞吐时长状态，不套通用列车吨公里份额。全部用户份额只核对应用一次，物理因果不可得时论证测试其他方法。无统一每车平均装载率排放强度。 | ghg-product-2011 |
| life_period | dry_bulk_rail | 各真实货车机车基础设施设备队列按 attributed_same_asset_useful_duty / positive_total_all_user_same_asset_useful_duty 分摊原生制造，再按W_tkm归一化。真实期间批次前后货物清洗更换退役及供应归属唯一。保留回收客户粉尘是货物库存，不是免费再生资产或自动回收信用。 | ghg-product-2011 |
| normalize | dry_bulk_rail | 对正值合格W_tkm及1tkm参考，q_x = allocated_native_quantity_x / W_tkm。空驶失败清理支持不增加合格工作量仍保留归属负荷。质量状态品质货物路线供应分层真实分布决定可比性，W_tkm=0无有限强度。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | dry_bulk_rail | 服务工作量保管供应闭合 | collected_record | 货批物料状态；机车编组货车仓位区段编组场ID；验收净运输质量kg及含水基；合格区段km总移动；原完成范围验收；当时验收区段变更证据；W_tkm；期初提取交接外发退回弃置释放期末货物；全部用户作业；失败空驶调位；供应原生单位数量覆盖 | 读取校准称量路线保管验收记录，保留原范围真实部分失败证据，不事后缩小范围。先核对净区段质量距离货物库存唯一全部用户供应覆盖，分配后除正值W_tkm一次。 按参考计量口径汇总唯一且已验收的合格产出作为分母，单列不合格事件及其资源责任。参考量保持规定值，仅归属的清单总量除以正分母。 | tkm; kg; km; 实际原生单位 | 每实际事件或资产变化 | 完整声明服务队列及归属作业资产期间 | 本过程各实际参与供应全部用户单元 | 每声明的参考流 | 地磅校准原订单验收区段日志供应范围保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_energy | dry_bulk_rail | 铁路搬运能源排放 | collected_record | 事件机车编组货车区段编组场场站ID；牵引调车筒仓输送压缩过滤阶段；原生燃料能源期初采购转移燃烧泄漏期末；牌号组成密度；毛净损耗回收端口；真实作业全部用户；物种因子测量介质不确定性 | 校准燃料能源计量作业日志区分干线调车场站接收压缩过滤责任。货煤与燃料分开，真实原生供应燃烧排放须有依据模型独立QA、全部用户分配归一化一次。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | kg; MJ; 实际原生单位 | 每实际事件或资产变化 | 完整声明服务队列及归属作业资产期间 | 本过程各实际参与供应全部用户单元 | 每声明的参考流 | 校准燃料来源记录真实模型适用QA保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_bulk | dry_bulk_rail | 散货搬运干固体水粉尘去向 | collected_record | 货批物料组成粒径含水基前后；敞封车辆装卸方法；筒仓接收压缩机过滤边界；真实空气水清洗抑尘原生数量；干固体水期初提取添加吸收交接退回保留捕尘废物释放排水蒸发期末；PM粒径组分重叠；真实接收方；前后批次清洗；供应覆盖；每观测湿质量kg实测水分分数及基准；各观测M_dry；外部加水吸收排水蒸发各互斥流所带水；实际净水量变化 | 采用实测货物含水干物质和物料去向样本、捕尘过滤清扫联单，状态变化时独立干固体水账。确定真实气力供应或本方压缩机，原生数量返回保留弃置排放质量互斥，无通用AP42因子捕集率。 各次观测用实测湿基分数或有依据兼容换算，计算M_dry=M_wet*(1-w)，湿质量闭合及各流水账显式纳入实际净水量变化，不强制湿质量或含水相等。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | kg; 含水基；实际原生单位 | 每实际事件或资产变化 | 完整声明服务队列及归属作业资产期间 | 本过程各实际参与供应全部用户单元 | 每声明的参考流 | 含水物种粒径测试校准库存控制记录接收联单保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_assets | dry_bulk_rail | 设备铁路场站生命周期废物 | collected_record | 资产ID队列范围原生数量；货车机车轨道电气化编组场筒仓输送压缩过滤；制造安装维护更换退役事件期间；正值同资产全部用户有效服务总量归属份额；供应范围；废物物料状态接收方 | 原生资产制造已含部件匹配同队列有效服务量完整全部用户寿命。未覆盖生命周期供应补全一次，滤材与捕集货物真实废物去向区分，不设通用寿命回收分配。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | Item(s); kg; 实际原生单位 | 每实际事件或资产变化 | 完整声明服务队列及归属作业资产期间 | 本过程各实际参与供应全部用户单元 | 每声明的参考流 | 资产范围服务量寿命证据供应边界废物联单保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_expand_other_energy | dry_bulk_rail | 必须展开身份 other_energy (inputs/product)：实际其他干散货铁路能源供应 | collected_record | requirement_id=other_energy; process_id=dry_bulk_rail; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_energy; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; carrier_and_supply_state; meter_id; integrated_energy_or_power_time; fuel_as_received_quantity; heating_value_basis; supply_return_state; responsible_failure_and_readiness; complete_provider_exclusion; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 各真实非柴油燃料热直流供应按状态属性单位端口展开，不假定统一牵引能源强度。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际其他干散货铁路能源供应）。存在未被完整供应方覆盖的实际计量电力、购入热冷或消耗燃料时启用。区分载能体、供应状态和独立仪表，燃料组成及收到基数量与有用热分别识别；积分能量不再乘时长，功率须有时间积分证据；燃料换能量须匹配实际热值基准，供热须有供回状态。纳入应分摊待机、空载、失败和返工职责；总表仅协调分项，不再次相加。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实测交付状态下的载能体量；能量采用有记录的仪表或热值口径 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 保留仪表期间、供应状态及交接点。积分能量已含时长；仅在对应路线由功率和实测时长，或相容燃料量与有据热值计算能量。区分燃料提取、有用热冷交付及已覆盖的上游阶段。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_energy / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_energy；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_bulk_support | dry_bulk_rail | 必须展开身份 bulk_support (inputs/product)：实际散货保护或抑尘投入 | collected_record | requirement_id=bulk_support; process_id=dry_bulk_rail; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_bulk; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实盖内衬密封抑尘剂过滤介质等条件供应，各展开行一物料状态，食品水泥煤兼容及水含水去向真实，不设通用剂量。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际散货保护或抑尘投入）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_bulk_support / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_bulk；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_wagon_assembly | dry_bulk_rail | 必须展开身份 wagon_assembly (inputs/product)：制造端口完整干散货铁路货车总成 | collected_record | requirement_id=wagon_assembly; process_id=dry_bulk_rail; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 各展开行一种真实漏斗敞车封闭专用固体车总成构型，明确端口已含部件，不是罐车或通用货运服务UUID。同车全部用户有效服务量仅分摊制造，其他生命周期补全。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 已明确分支（仅按实际适用记录启用）：wagon_assembly_manufacture. 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 若实体资产按 物品数量 / Item(s) 计量，保留实测供应量，寿命作业量另记单位。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_wagon_manufacture_items / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_locomotive_assembly | dry_bulk_rail | 必须展开身份 locomotive_assembly (inputs/product)：制造端口完整铁路机车总成 | collected_record | requirement_id=locomotive_assembly; process_id=dry_bulk_rail; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 真实干线调车原生总成同队列全部用户服务量，不是全寿命或运输活动身份，未覆盖维护更换退役另列。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 已明确分支（仅按实际适用记录启用）：locomotive_assembly_manufacture. 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 若实体资产按 物品数量 / Item(s) 计量，保留实测供应量，寿命作业量另记单位。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_locomotive_manufacture_items / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_infrastructure | dry_bulk_rail | 必须展开身份 infrastructure (inputs/product)：实际铁路及散货场站基础设施生命周期投入 | collected_record | requirement_id=infrastructure; process_id=dry_bulk_rail; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; ownership_mode; provider_native_unit; actual_delivered_demand; coverage_stage; attribution_state; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 真实轨道电气化编组场筒仓输送压缩机过滤装卸清洗资产或生命周期服务分别展开，同资产原生范围全部用户服务量明确。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 识别实际实体资产、周转品或已交付的生命周期服务，登记配置、场址、期间、责任方、队列及覆盖阶段。外购服务按供应方已核实的每原生功能单位强度乘相容交付需求；仅对尚未归属的负担应用目标份额，仅对尚未归一化的目标总量除以相应正参考产出。不得再计该服务已含的制造。自建或购入的实体资产按制造量乘以目标作业量与同资产队列全用户完整寿命正作业量之比，再按匹配合格产出归一化一次。逐事件追踪初始部件、增配、更换、空闲或失败使用、修理、清洗及退役。混合覆盖时每个缺口阶段独立承接一次；保留发票、资产台账、作业和覆盖记录，禁止假定通用寿命或服务单位。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。仅属于不适用分支的字段须注明理由；适用分支缺少的计量仍须登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_infrastructure / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_maintenance_supply | dry_bulk_rail | 必须展开身份 maintenance_supply (inputs/product)：实际铁路散货服务维护更换件或消耗品 | collected_record | requirement_id=maintenance_supply; process_id=dry_bulk_rail; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实轮对制动钢轨集电润滑过滤压缩机门盖密封更换分别展开，避免初装总成供应覆盖重复。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际铁路散货服务维护更换件或消耗品）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_maintenance / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_provider_service | dry_bulk_rail | 必须展开身份 provider_service (inputs/product)：实际独立供应铁路散货或搬运服务 | collected_record | requirement_id=provider_service; process_id=dry_bulk_rail; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_service; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 各承运编组场筒仓气力接收装载清洗处理供应按真实原生单位覆盖，只替换准确前景单元一次，不因账单重复W。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际独立供应铁路散货或搬运服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_provider / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_service；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_discarded_cargo | dry_bulk_rail | 必须展开身份 discarded_cargo (outputs/waste)：实际弃置干散货或捕集粉尘 | collected_record | requirement_id=discarded_cargo; process_id=dry_bulk_rail; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_bulk; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 仅真实弃置物，各展开行一物料组成含水接收方。归还客户捕尘底料可售回收物不自动为废物，捕集质量不再排放。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（实际弃置干散货或捕集粉尘）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_discarded_material_kg / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_bulk；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_cleaning_effluent | dry_bulk_rail | 必须展开身份 cleaning_effluent (outputs/waste)：实际收集干散货服务清洗废液 | collected_record | requirement_id=cleaning_effluent; process_id=dry_bulk_rail; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_bulk; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实湿清扫洗涤清洗收集流，明确固体水化学品接收方。浆内已含捕集固体无真实分离账时不另记外发干废物质量。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（实际收集干散货服务清洗废液）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_collected_effluent_kg / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_bulk；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_waste | dry_bulk_rail | 必须展开身份 other_waste (outputs/waste)：实际铁路散货设备或过滤废物 | collected_record | requirement_id=other_waste; process_id=dry_bulk_rail; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实磨损件过滤介质退役设备按状态物料接收方分别展开。避免供应终末覆盖或直接磨损重复，滤内货尘与滤材质量区分。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（实际铁路散货设备或过滤废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_waste / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_cargo_dust_release | dry_bulk_rail | 必须展开身份 cargo_dust_release (outputs/elementary)：实际向环境释放干散货粉尘 | collected_record | requirement_id=cargo_dust_release; process_id=dry_bulk_rail; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_bulk; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 各展开行真实谷物面粉水泥砂煤等物料粉尘粒径接收空气水土子介质。总PM/PM10/PM2.5化学组分存在重叠，不重复相加。捕集返回尘不是直接释放，不凭货名绑定通用粉尘UUID。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（实际向环境释放干散货粉尘）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_composition_size_medium_dust_kg / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_bulk；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_species | dry_bulk_rail | 必须展开身份 other_species (outputs/elementary)：实际铁路散货作业污染物种 | collected_record | requirement_id=other_species; process_id=dry_bulk_rail; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_energy; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 实际尾气物种铁路轮对制动钢轨集电磨损清洗搬运释放按来源物料粒径来源介质及真实因子测量展开。场站轮胎磨损仅实际纳入轮式设备且有自身证据，不用通用NOx/VOC混合身份。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（实际铁路散货作业污染物种）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_species_release_kg / W_tkm 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_energy；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |

### 计算规则

| rule_id | 适用对象 | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| eligible_work | dry_bulk_rail | W_tkm = sum(m_eligible_kg_s * d_eligible_km_s) / 1000。取各合格铁路区段真实限定已完成净货物运输状态质量，并声明状态含水基，不含货车机车容器自重其他货物。仅原预设已完成验收部分或有独立当时验收记录的区段变更服务合格，后来失败货物早前行程不自动为成功工作量，不能事后缩小失败范围。后续已损失留存货物不进入后续区段。空驶调位编组循环重复阶段及不合格移动不作输出，但保留真实负荷。不靠无依据加水标称容量或重定含水固体基抬高输出，披露真实路径绕行货物条件及可比分层。 | 实际运输状态下的净质量（kg）; 水分、状态及已验收区段的距离（km） | W_tkm | ghg-product-2011 |
| normalize | dry_bulk_rail | 对正值合格W_tkm及1tkm参考，q_x = allocated_native_quantity_x / W_tkm。空驶失败清理支持不增加合格工作量仍保留归属负荷。质量状态品质货物路线供应分层真实分布决定可比性，W_tkm=0无有限强度。 | 已归属的原生数量; 正的合格运输功 W_tkm | 每1tkm原生数量 | ghg-product-2011 |
| asset_life | dry_bulk_rail | attributed_asset = native_asset_quantity * attributed_same_asset_useful_duty / positive_total_all_user_same_asset_useful_duty；再除W_tkm，仅核实制造端口覆盖。 | 真实同资产原生数量全部用户服务量 | 归属原生制造数量 | ghg-product-2011 |
| solid_water | dry_bulk_rail | 客户干散货为保管货物，不是消耗生产投入。每次观测均采用真实实测湿基水分质量分数w及 M_dry = M_wet * (1-w)，或由实际测量含水基作有依据的兼容换算；不混用湿基与干基分数。按物料货批仓位期间将去向互斥闭合：期初湿货物加实际入界湿货物加实际外部物料水添加或吸收，等于验收湿交接、实际外发湿退回、外发湿弃置物、直接物料释放及期末保留湿货物之和，再加尚未计入这些外发流的实际独立排水蒸发或其他移出。显式记录实际净水量变化，不要求湿质量守恒或各观测含水相等。干固体和水分别闭合，纳入各货物残留废物留存交付流中所带水及真实添加吸收排水蒸发，不重复内部转移或净货物已含水。不能由湿重变化推断干固体损失。底料和归还客户捕尘只进入保管库存转移一次，残留是物理状态，不是额外平衡项。 | 货物库存; 干固体及水分; 实际水与粉尘去向 | 互斥干固体水货物质量闭合 | ghg-product-2011 |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | evidence |
| --- | --- | --- | --- |
| strata | dry_bulk_rail | 列明货物状态含水搬运牵引路线场址期间供应分层全部参与者，仅等价功能按真实工作量加权，不一并平均谷物水泥煤或变换质量状态定义。 | 参与者完成工作量登记权重 |
| completeness | dry_bulk_rail | 各真实燃料能源空气水化学品物料设备供应残留废物污染物展开为独立行，具有实际身份状态端口接收方方向类型原生属性单位数量核实UUID或行级待核登记本过程协议来源有依据计算。保留干湿基化合物与C/N/S、真实粒径来源介质全部用户作业库存归属，真实证据缺失为不完整而非零。 | 真实行级来源覆盖去向账 |
| uncertainty | dry_bulk_rail | 不虚构干湿换算粉尘粒径因子捕集压缩空气能源损耗装载寿命默认数值。采用真实测量或审查适用模型，保留校准样本覆盖独立QA不确定性，通用AP42因子不是全货物证据。 | 校准来源适用独立核查 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| scope_reference | dry_bulk_rail | 核对完整松散固体铁路货物范围、真实车辆装卸场站作业及唯一限定干散货服务参考。按原完成或独立当时验收变更证据核对真实净合格区段工作量，不用总重空驶循环重定失败范围抬高。 | ghg-product-2011 |
| solid_water_fates | dry_bulk_rail | 核对运输状态货物及含水变化时独立干固体水账，留存回收货物外发废物收集粉尘真实粒径组成排放接收方互斥。货煤不自动燃烧，捕集质量不再同时排放。 每次观测核对实测含水基及M_dry=M_wet*(1-w)或有依据兼容换算，独立水账及湿质量闭合纳入真实加水吸收排水蒸发留存交付流水，不强制湿质量含水相等。 | ghg-product-2011 |
| identity_native | dry_bulk_rail | 要求核实真实交换原生属性单位状态端口接收方。tkm准确为原生t*km（1000kg*km），不是新基准，最终TIDAS用原生t*km。属性支持不识别产品UUID，通用粉尘来源身份不能替代真实货物污染物或供应服务。 | ghg-product-2011 |
| parity_quality | dry_bulk_rail | 双语投影ID公式常数真实条件路线来源限制对齐。数量须校准测量或兼容记录模型独立QA不确定性。缺失为不完整而非零，检查通过不等于科学外部身份就绪。 | ghg-product-2011 |
| atomic_dry_bulk_rail | dry_bulk_rail | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| check_occurrence_completion | 全部实际清单行和身份识别协议 | 保留适用性证据，将每个实际事件对应到具体清单行或已核实的供应方覆盖范围。判定未发生须有证据，未知项保留待决。按同一身份、状态、单位、期间和交接点核对期初、接收、期末及互斥去向。耗材领用账区分未用退回、内部领拨和合格、失败及返工作业的实际耗用。托管账或物料平衡采用期初库存＋外部接收＋配对内部接收＝期末库存＋配对内部发出＋对外交付且获接收的数量＋未用外退＋外送的已用物资或回收物＋外送废物＋直接排放＋本边界内消耗或转化量。身份在边界内生成时，将有证据的生成量或出生数计入该身份账的来源并关联原事件。在上层守恒物料或元素平衡中抵消内部转化和移交。每个事件只记一次，留存回收物计入期末，移交与耗用分别登记。按相容口径执行专用托管、相态、转化或元素规则；已作为转化量计入的物料，其后续产物不得再计入同一去向合计。独立计量各项，对未解释的差额追查并保留待决。实物总量与负担分配分别核算。共享原始负担采用 Q_raw × s / R，其中 s 为有证据的目标驱动量除以同池同期间全部适用用户的正驱动量总和。已归属的目标总量采用 Q_target / R，已与同一参考流等效的单位结果 q_ref 原值沿用。供应方单位强度先乘以按其原生单位实测的需求量。仅在另一个仍有共享负担的独立阶段另作分配。R 为同一队列、交接点和参考单位下的正值合格产出量。保留失败与部分完成作业的负担，禁止以此放大 R；零产出时保留负担及有证据的结转或最终处置。自有资产采用同队列全用户寿命作业量，并排除初始部件重复计算。外购服务仅替代有记录的覆盖阶段。适用的身份、数量、支持单位、去向或分配分母仍未决时，最终数据集仍不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 限定干散货铁路货运工作量，供过程生命周期模型 |
| allowed_use | 具核实最终交换的等价真实净货物质量状态路线搬运功能 |
| excluded_use | 货物制造贸易、通用全铁路或液体集装箱服务、无依据含水因子比较 |
| required_metadata | cargo_identity_particle_state_and_drybulk_function; actual_wagon_open_covered_hopper_gondola_config; actual_loading_unloading_gravity_mechanical_pneumatic_route; net_ascarried_mass_state_moisture_drysolid_basis_eachsegment; originalcompletion_acceptance_and_eligible_distance_W_tkm; actual_loco_consist_shunt_yard_empty_failed_duty; silo_receiver_compressor_filter_coverage; drysolid_water_stock_dust_capture_return_waste_environmentfates; alluser_causal_provider_native_cells; equipment_asset_cohort_life_phases; tkm_native_t_star_km_alias1000; actual_pollutant_size_composition_medium_uncertainty |
| required_quality_disclosure | 真实实测模型原生数量工作量含水基粉尘接收方重叠供应资产覆盖不确定性待核身份 |
| update_trigger | 货物含水搬运控制路线技术供应资产证据变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-65125 | official_guidance | UNSD CPC3.0 code65125 https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/65125 | 官方干散货铁路范围，例子非穷尽；无LCA默认数值 |
| epa-rail-facility-operations | official_guidance | US EPA Rail Facility Best Practices to Improve Air Quality. https://www.epa.gov/ports-initiative/rail-facility-best-practices-improve-air-quality | 仅铁路干线调车编组场作业区分，无美国数值法规默认 |
| epa-ap42-bulk-transfer | official_guidance | US EPA AP42 §13.2.4 Aggregate handling and storage piles (2006). https://www.epa.gov/sites/default/files/2020-10/documents/13.2.4_aggregate_handling_and_storage_piles.pdf | 实际适用范围内物料转移含水粒径控制去向问题，不普遍采用排放公式因子 |
| epa-ap42-grain-handling | official_guidance | US EPA AP42 §9.9.1 Grain elevators and processes (2003). https://www.epa.gov/sites/default/files/2020-10/documents/c9s0909-1.pdf | 仅粮食装卸输送及抽风捕集控制例子，制粉加工不在本货物服务内，不把粮食因子用于其他货物 |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011). https://ghgprotocol.org/product-standard | GHG生命周期分配数据质量框架，详细货物粉尘含水资产要求为明确PCR方法，不是来源数值要求。 |

