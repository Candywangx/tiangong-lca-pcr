---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.railway-transport-services-of-freight-by-tanker-cars
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铁路罐车散装液体及气体货物运输工作量

## 1. 范围与适用性

本PCR覆盖专用罐车铁路承运原油天然气成品油及其他散装液体气体，包括真实常温加热承压液化低温构型及各实际牵引路线。永久安装气体管束或电池式设备依实际专用罐车功能和分类判断，不作无依据整体纳入排除。排除作为集装箱服务的罐式集装箱运输、包装货物、罐状干散货车、公路管道水运航空航天承运、纯罐车租赁及货物制造贸易。

实际参考为1吨公里限定已完成铁路罐车货运工作量，保留真实货物相态、铁路区段净载距离、条件及保管服务端口。罐车计次列车总重质量距离账单空驶泵送循环是不同量。PCR记法tkm准确等于核实原生t*km单位（1000 kg*km），最终TIDAS交换使用原生单位名t*km。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.railway-transport-services-of-freight-by-tanker-cars |
| classification_refs | CPC 3.0 65122 |
| covered_products | 本PCR覆盖专用罐车铁路承运原油天然气成品油及其他散装液体气体，包括真实常温加热承压液化低温构型及各实际牵引路线。永久安装气体管束或电池式设备依实际专用罐车功能和分类判断，不作无依据整体纳入排除。排除作为集装箱服务的罐式集装箱运输、包装货物、罐状干散货车、公路管道水运航空航天承运、纯罐车租赁及货物制造贸易。 |
| excluded_products | 罐式集装箱服务；包装干散货；公路管道水运航空航天承运；纯罐车租赁；货物制造贸易 |
| representative_product | 限定铁路罐车散装液体或气体货物运输工作量 |
| production_route | 真实铁路承运保管装载干线编组调车罐体场站支持及验收交接，含全部责任生命周期 |
| market_state | 限定已完成罐车铁路运输工作量，真实货物相态条件及区段工作量口径 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能对象（What） | 限定铁路罐车散装液体或气体货物运输工作量 |
| 数量（How much） | 1 tkm实际限定已完成散装液体或气体铁路罐车货运工作量，取真实合格净货物质量和铁路区段距离 |
| 质量（How well） | 验收货物身份质量温压、罐体约束、记录服务及危险属性条件 |
| 时间或周期（How long or cycle） | 实际接收至验收交付义务，及因果归属支持作业和资产期间 |
| reference_flow_link | `qualified_rail_tank_work` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 限定铁路罐车散装液体或气体货物运输工作量 |
| 参考流属性 | 质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` |
| 参考单位组 | 质量*距离单位组 `3620148f-c5db-48ce-9065-a10092089aca` |
| 参考单位 | tkm |
| 必需限定信息 | cargo_compound_composition_phase_hazard_state; tank_car_type_compartments_pressure_temperature; locomotive_consist_and_actual_traction; rail_origin_destination_eligible_segmentdistance_and_actualgrossdistance; actual_eligible_net_cargo_mass_each_segment_and_W_tkm; acceptance_completion_partial_loss_and_heel_rules; actual_thermal_pressure_inerting_vaporreturn_conditions; linehaul_yard_shunting_empty_reposition_failed_duties; tank_terminal_cleaning_previous_next_campaigns; provider_native_cells_cargo_custody_fates; asset_cohort_all_user_useful_life; tkm_native_t_star_km_alias_and_factor1000; actual_species_receiver_uncertainty |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| transport_work | rail_tank_carriage | 实际原生兼容属性 | 实际原生单位 | W 为声明分层中正值真实限定已完成工作量 W_tkm。各原生交换 q_x = allocated_native_quantity_x / W_tkm，对应1 tkm参考。货物相态质量合格距离遵循 work_gate，不以计次车辆行次装罐标称容量列车总重吨公里替代。失败空驶清洗编组场即使无合格W仍保留因果归属负荷，W=0无有限强度。比较前须真实披露货物温压路线时长供应覆盖分层分布。 |
| native_basis | rail_tank_carriage | 实际原生兼容属性 | 实际原生单位 | 保留原生质量、体积、能量及计次。仅对同一计量能量按核实单位支持将 kWh 转 MJ。气体体积须有真实标准温压及压缩性；密度与热值取实测状态及组成，不用通用常数。货物数量及真实合格距离共同按work_gate量化铁路工作量，资产计次仍单独处理。 |
| species_basis | rail_tank_carriage | 实际原生兼容属性 | 实际原生单位 | 区分化合物与 C/N/S、化石与生物、气体与溶解或收集废物、颗粒物粒径及接收介质。货物库存损耗不自动成为直接基本流排放。 |
| transport_unit_notation | rail_tank_carriage | 实际原生兼容属性 | 实际原生单位 | tkm为核实原生t*km = 1000 kg*km的拼写别名，不是新参考基准或虚构换算。原生质量*距离属性及单位组保留真实UUID，最终TIDAS交换用原生t*km。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际专用罐车、散装液气货批、保管端口及现有货物罐体状态 |
| starting_condition_role | 前景保管事实，不构成上游供应或资产零负荷截断 |
| product_classification_scope | CPC 3.0 65122 |
| recursive_input_rule | 相同分包罐式服务仅替换供应方有证据覆盖的作业一次 |
| upstream_dataset_requirement | 真实供应资产服务身份、原生单位、端口、地域期间和范围；补全未覆盖运输及生命周期 |
| disclosure | 货物状态保管、全部用户作业、供应方资产边界、拒收、不确定性及真实服务分层 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| scope | rail_tank_carriage | 本PCR覆盖专用罐车铁路承运原油天然气成品油及其他散装液体气体，包括真实常温加热承压液化低温构型及各实际牵引路线。永久安装气体管束或电池式设备依实际专用罐车功能和分类判断，不作无依据整体纳入排除。排除作为集装箱服务的罐式集装箱运输、包装货物、罐状干散货车、公路管道水运航空航天承运、纯罐车租赁及货物制造贸易。 | unsd-cpc3-65122 |
| rail_duty | rail_tank_carriage | 从声明铁路承运保管装载端口至验收卸载交接，明确真实场站运营租赁责任。记录各真实编组机车罐车区段调车事件：干线运输编解组连挂制动进出站怠速等待过境交接空返调位救援失败承运均保留因果负荷。这些运行移动不自动增加交付运输工作量。不同承运编组场或国家清单边界变化不能删去实际作业。 | epa-rail-facility-operations; ghg-product-2011 |
| tank_terminal | rail_tank_carriage | 依真实货物状态罐体附件记录实际转移泵送加热蒸汽保压泄压冷却低温支持惰化吹扫蒸气返回脱气路径；并非各路线均发生。机车牵引编组场辅助与罐体场站作业分开。CEFIC液体清单仅支持液体装卸接口，明确排除承压气体和固体。RID2025例子仅限其危险品适用辖区，实际适用货物设备规则决定条件。无统一充装率温压保持时间惰气剂量。 | cefic-rail-liquid-checklists; otif-rid-2025; ghg-product-2011 |
| cargo_stock | rail_tank_carriage | 客户散装货物为保管库存，与机车燃料支持供应分开，即使化学身份相同。按真实化合物物料相态罐体仓位期间，期初货物加接收等于验收交接、实际外发退回转移、外发收集废物、直接释放及期末货物，全部互斥。留罐底料只属期末库存，残留是一次分类的物理状态，不增列平衡项。返回发货方回收或留在车上的蒸气不是空气排放。放空蒸发气溶解收集物泄漏须真实接收方质量，体积压力变化本身不证明质量损失。 | ghg-product-2011 |
| work_gate | rail_tank_carriage | 由唯一货批区段验收及真实净货物质量和液气状态定义限定已完成铁路运输工作量。W_tkm = sum(m_eligible_kg_s * d_eligible_km_s) / 1000。各真实区段交接按预设完成边界只计一次；m_eligible 排除后续区段已留存未交付或已损失物料，绝不含罐车自重机车包装其他货物。区分真实装载物理载荷失败损失作业和合格验收工作量。合格实际路线距离排除重复交接阶段、编组场循环、空驶调位和纯支持移动。保留实际绕行服务路径距离口径，不靠无必要循环增加服务输出。仅原预设义务下已完成验收的部分，或有独立记录且当时已验收的区段或变更服务，可进入W_tkm。后来未完成原义务的货物早前行程不自动成为成功工作量，不得事后缩小失败范围制造验收输出。保留全部关联负荷结局。 | ghg-product-2011 |
| assets_energy | rail_tank_carriage | 分别完整覆盖真实罐车机车制造总成、轨道道砟枕木道岔轮对转向架制动、电接触供应、编组场场站泵软管加热清洗及更换维护退役。原生制造仅支持已核实端口，同资产全部用户有效服务量分摊制造，不代表全寿命。避免总成初装部件和净电网电回收电重复。rail_tank_carriage 下实际柴油电力电池氢等路线须真实拓扑原生供应端口全部作业，不强加通用技术寿命回收信用。 | ghg-product-2011 |
| provider_cleaning | rail_tank_carriage | 罐体清洗换货去污按正确前后货物运行批次、真实残留废液废物及责任接收方归属，不假定空罐已洁净或统一清洗频率。准确铁路承运机车编组场罐体场站加热清洗处理供应结果按原生单位只替换覆盖单元一次，保留未覆盖作业生命周期。承运交接重复账单或罐车租赁不能再增加铁路工作量输出。 | ghg-product-2011 |
| atomic | rail_tank_carriage | 各真实条件能源物料惰化剂传热介质资产供应服务废物排放化合物展开为独立行，含一个既有过程方向类型真实身份状态端口接收方原生属性单位数量核实UUID或待核登记本节点协议来源有依据计算。区分化合物与C/N/S化石生物真实粒径空气水土收集去向。数量相态端口接收方证据缺失为不完整，绝非零。 | ghg-product-2011 |

## 6. 过程清单结构

每张清单流卡仅代表一个可独立识别的产品、物料配方、废物流、物质或供应服务，具有兼容的端口、属性和单位。完整供应总成或实际收集的混合物流可有一个身份，其已含组分不得另列重复交换。第8节cp_expand_协议是必须落实的身份识别要求，不得当作选定流或交换数量。逐项记录真实适用性，以独立行标识列出全部具体交换；完整保留适用范围，未发生须有证据。尚未展开或未知的要求属于不完整，不得当作零。改为采集协议不等于解决缺失身份，也不免除生命周期、分配、计量或边界义务。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| rail_tank_carriage | 铁路罐车散装液体及气体货物运输工作量 | required | 实际完整限定罐式服务 | foreground | qualified_rail_tank_work |

### 过程：铁路罐车散装液体及气体货物运输工作量 (`rail_tank_carriage`)

#### 输入

##### 产品流

###### 完整铁路罐车制造投入 (`tank_car_assembly_manufacture`)

制造交付关口的一件真实完整物理总成；每个实例行只对应一个有记录的型号配置，不同配置分别实例化并计量。仅在该总成为所述节点服务且未被完整供应方覆盖时启用。初始部件包含清单是身份的一部分，已含初始部件不得再次投入；实际未覆盖的维护、更换及寿终另计。 仅声明构型真实完整专用液气铁路罐车，明确原生总成制造端口已含初装附件。同车队列有效服务量仅分摊制造覆盖，机车及未覆盖维护更换退役另列。

- 选定流：完整铁路罐车制造投入
- 流属性/单位：Count / Item(s)
- 数量规则：对每个同型号总成队列：制造件数 * 目标应承担工作量 / 全用户全寿命工作量 / W。两个工作量采用相容同一基准及队列，分母须有证据且为正；目标份额与最终参考归一各一次，已含初始部件不可再相加。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：ghg-product-2011


###### 完整铁路机车制造投入 (`locomotive_assembly_manufacture`)

制造交付关口的一件真实完整物理总成；每个实例行只对应一个有记录的型号配置，不同配置分别实例化并计量。仅在该总成为所述节点服务且未被完整供应方覆盖时启用。初始部件包含清单是身份的一部分，已含初始部件不得再次投入；实际未覆盖的维护、更换及寿终另计。 真实干线调车机车构型，各展开行准确原生总成，不以运输服务UUID作为车辆资产。同机车全部用户有效服务量分摊制造，轨道罐车资产及未覆盖生命周期另列。

- 选定流：完整铁路机车制造投入
- 流属性/单位：Count / Item(s)
- 数量规则：对每个同型号总成队列：制造件数 * 目标应承担工作量 / 全用户全寿命工作量 / W。两个工作量采用相容同一基准及队列，分母须有证据且为正；目标份额与最终参考归一各一次，已含初始部件不可再相加。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：ghg-product-2011


###### 柴油 (`diesel`)

实际干线调车机车或另计罐体场站辅助柴油，记录牌号原生燃料库存燃烧泄漏事件端口。客户石油货物不是本供应燃料。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：归属柴油质量 / W
- 数值来源模式：`calculated_value`
- 适用范围：`route_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：ghg-product-2011

###### 交流电 (`purchased_ac`)

按端口地域阶段记录真实铁路供应充电场站泵加热编组场支持交流计量，接触网直流不自动匹配交流。整流损耗回收毛净流互斥并补全真实供应。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：归属购入交流电能量 / W
- 数值来源模式：`calculated_value`
- 适用范围：`route_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：ghg-product-2011

###### 自来水 (`tap_water`)

实际罐体或车辆清洗使用自来水时纳入；供应流工厂端口之外的输配及接收负荷须另补。回用水、原水及去离子水另用身份。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：归属自来水质量 / W
- 数值来源模式：`calculated_value`
- 适用范围：`route_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cleaning`
- 来源：ghg-product-2011

###### 洗涤剂 (`detergent`)

仅适用于与实际配方及供应端口匹配的合成洗涤剂。烧碱、溶剂、消毒剂或吹扫气须分别记录真实身份，不得改称洗涤剂。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：质量 / kg
- 数量规则：归属洗涤剂质量 / W
- 数值来源模式：`calculated_value`
- 适用范围：`route_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cleaning`
- 来源：ghg-product-2011

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 限定铁路罐车散装液体或气体货物运输工作量 (`qualified_rail_tank_work`)

由唯一货批区段验收及真实净货物质量和液气状态定义限定已完成铁路运输工作量。W_tkm = sum(m_eligible_kg_s * d_eligible_km_s) / 1000。各真实区段交接按预设完成边界只计一次；m_eligible 排除后续区段已留存未交付或已损失物料，绝不含罐车自重机车包装其他货物。区分真实装载物理载荷失败损失作业和合格验收工作量。合格实际路线距离排除重复交接阶段、编组场循环、空驶调位和纯支持移动。保留实际绕行服务路径距离口径，不靠无必要循环增加服务输出。仅原预设义务下已完成验收的部分，或有独立记录且当时已验收的区段或变更服务，可进入W_tkm。后来未完成原义务的货物早前行程不自动成为成功工作量，不得事后缩小失败范围制造验收输出。保留全部关联负荷结局。

- 选定流：限定铁路罐车散装液体或气体货物运输工作量
- 流属性/单位：mass*distance / tkm
- 数量规则：1 tkm
- 数值来源模式：`fixed_value`
- 适用范围：`route_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_service`
- 来源：ghg-product-2011

##### 废物流

###### 废润滑油 (`used_oil`)

产生点实际单独收集的废润滑油。另记去向及运输处理负荷，不自动给予回收信用。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：归属废润滑油质量 / W
- 数值来源模式：`calculated_value`
- 适用范围：`route_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2`)

实际化石源 CO2 向空气排放，仅在证据支持时使用未特指子介质。按有证据燃料组成及碳平衡计算实际氧化化石碳，或实测；不设通用柴油排放因子。生物源 CO2 和含碳货物损耗分别处理。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：归属化石源 CO2 质量 / W
- 数值来源模式：`calculated_value`
- 适用范围：`route_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：ghg-product-2011

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| subdivide | rail_tank_carriage | 按真实机车编组罐车货物化合物区段编组场场站作业直接测量拆分。列明各共载产品其他服务用户，不仅合格液气工作量。干线调车载货空驶罐体温控场站作业在共享分配前区分。 | ghg-product-2011 |
| causal | rail_tank_carriage | 不可分牵引须论证真实编组区段总载阻力空间路线作业因果分配，实际牵引罐车机车支持载荷与净验收货物工作量输出区分。货物特定加热惰化清洗依真实过程时长状态分配，不用通用全列车吨公里份额。核对全部用户负荷份额并只应用一次，物理关系不可得时论证测试其他方法。不设统一装载率空驶率燃料强度每车平均份额。 | ghg-product-2011 |
| life_period | rail_tank_carriage | 各罐车机车基础设施设备队列分别采用制造归属量 = native_asset_quantity * attributed_same_asset_useful_duty / positive_total_all_user_same_asset_useful_duty。其他生命周期阶段补全一次，保留真实运行批次期间更换退役归属。货物库存留罐底料不是资本资产或免费再生产品，不自动回收避免生产信用。 | ghg-product-2011 |
| normalize | rail_tank_carriage | W 为声明分层中正值真实限定已完成工作量 W_tkm。各原生交换 q_x = allocated_native_quantity_x / W_tkm，对应1 tkm参考。货物相态质量合格距离遵循 work_gate，不以计次车辆行次装罐标称容量列车总重吨公里替代。失败空驶清洗编组场即使无合格W仍保留因果归属负荷，W=0无有限强度。比较前须真实披露货物温压路线时长供应覆盖分层分布。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | rail_tank_carriage | 服务与保管闭合 | collected_record | 货批ID；物种；起讫；合格区段距离公里；实际列车总行程；各区段合格净货物千克；区段验收损失留存端口；原预设范围完成验收；独立记录当时区段或变更服务验收；禁止事后重定失败范围；W_tkm；验收交付数量；装卸温压；期初提货验收交付外发退回转移ID外发废物泄漏放空期末货物残留互斥归属；完成规则；W；失败空驶调位事件；供应服务原生单位数量覆盖；全部用户分配 | 使用承运保管单、校准交付及车辆日志和货批验收；连接实际行程罐仓期间及供应覆盖。独立核对货物质量、实际区段W_tkm及全部服务义务，先分配再除正值 W 一次。 按参考计量口径汇总唯一且已验收的合格产出作为分母，单列不合格事件及其资源责任。参考量保持规定值，仅归属的清单总量除以正分母。 | tkm; kg; km; 实际原生单位 | 每货批、保管事件及供应服务结果 | 完整声明服务队列，包括失败及空驶 | 全部实际路线、接收场址和责任供应方 | 每声明的参考流 | 保管验收及校准货物路线记录保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_energy | rail_tank_carriage | 能源与排放 | collected_record | 事件ID；机车ID；编组ID；罐车ID；铁路区段ID；调车事件ID；计量或燃料库存；采购期初期末转移泄漏燃烧；真实牌号组成密度；辅助牵引阶段；原生单位；供应端口；毛净及损耗；物种介质方法因子不确定性；全部用户作业 | 读取校准燃料能源计量与期初期末库存；区分货物与燃料、实际阶段及供应原生边界。记录实测物种或经审查兼容模型，附碳质量平衡和独立QA；归属全部作业并归一化一次。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | kg; MJ; 实际原生单位 | 每作业及计量区间 | 完整队列及关联运行作业 | 各机车编组罐车编组场场站实际供应地域 | 每声明的参考流 | 校准、发票、燃料组成、模型来源及QA保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_cleaning | rail_tank_carriage | 罐体清洗与货物状态维持 | collected_record | 罐体ID；罐仓；前后货物；换货ID；前后状态温压；保持时间；实际投入身份原生数量；水清洗剂吹扫热制冷剂平衡；收集废液组成质量接收方；共享事件 | 使用清洗证明、罐体状态日志、校准供应计量及废物联单。各化学品、热负荷和收集废液分别记录；保留前后载货因果归属及库存去向闭合；不以补充量直接推算泄漏。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | kg; MJ; 实际原生单位 | 每清洗、状态维持及换货事件 | 声明队列及因果关联前后载货事件 | 各罐体清洗站及状态维持供应方 | 每声明的参考流 | 清洗证明、校准、状态日志及接收记录保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_assets | rail_tank_carriage | 资产维护与废物 | collected_record | 资产ID；总成范围；原生数量；队列；制造安装维护更换退役事件；寿命全部用户有效服务量；归属服务量；共享轨道电气化编组场场站用户；废物身份质量接收方；供应覆盖 | 读取资产台账、供应方生命周期覆盖、实测维护及退役废物记录。原生制造数量匹配同资产有效服务量；补全未覆盖阶段，避免初装部件与总成重复；先按全部用户和期间分配再归一化。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | Item(s); kg; 实际原生单位 | 每资产队列及维护更换退役事件 | 与报告队列关联的相关完整资产寿命 | 实际机车罐车轨道电气化编组场场站清洗资产及全部用户 | 每声明的参考流 | 资产规格、寿命服务量来源、供应范围及废物联单保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_expand_tank_car_assembly | rail_tank_carriage | 必须展开身份 tank_car_assembly (inputs/product)：制造端口的完整铁路罐车总成 | collected_record | requirement_id=tank_car_assembly; process_id=rail_tank_carriage; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 仅声明构型真实完整专用液气铁路罐车，明确原生总成制造端口已含初装附件。同车队列有效服务量仅分摊制造覆盖，机车及未覆盖维护更换退役另列。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 已明确分支（仅按实际适用记录启用）：tank_car_assembly_manufacture. 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 若实体资产按 物品数量 / Item(s) 计量，保留实测供应量，寿命作业量另记单位。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：归属罐车制造数量 / W 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：route_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_energy | rail_tank_carriage | 必须展开身份 other_energy (inputs/product)：罐式承运实际非柴油能源供应 | collected_record | requirement_id=other_energy; process_id=rail_tank_carriage; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_energy; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; carrier_and_supply_state; meter_id; integrated_energy_or_power_time; fuel_as_received_quantity; heating_value_basis; supply_return_state; responsible_failure_and_readiness; complete_provider_exclusion; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件要求：氢、气体、其他燃料或蒸汽按压力状态、能量属性及供应端口分别展开。货物天然气或蒸发气作燃料须明确保管转出及碳归属，不得视为免费燃料。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（罐式承运实际非柴油能源供应）。存在未被完整供应方覆盖的实际计量电力、购入热冷或消耗燃料时启用。区分载能体、供应状态和独立仪表，燃料组成及收到基数量与有用热分别识别；积分能量不再乘时长，功率须有时间积分证据；燃料换能量须匹配实际热值基准，供热须有供回状态。纳入应分摊待机、空载、失败和返工职责；总表仅协调分项，不再次相加。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实测交付状态下的载能体量；能量采用有记录的仪表或热值口径 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 保留仪表期间、供应状态及交接点。积分能量已含时长；仅在对应路线由功率和实测时长，或相容燃料量与有据热值计算能量。区分燃料提取、有用热冷交付及已覆盖的上游阶段。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：归属原生供应数量 / W 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：route_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_energy；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_conditioning_input | rail_tank_carriage | 必须展开身份 conditioning_input (inputs/product)：实际罐内货物状态维持投入 | collected_record | requirement_id=conditioning_input; process_id=rail_tank_carriage; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_cleaning; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件要求：每个实际行记录一种真实制冷剂、吹扫气或传热介质。保留前后状态、压力和原生组成；补充制冷剂不等于向空气泄漏。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际罐内货物状态维持投入）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：归属原生状态维持数量 / W 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：route_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_cleaning；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_maintenance_input | rail_tank_carriage | 必须展开身份 maintenance_input (inputs/product)：实际罐车维护更换件或消耗品 | collected_record | requirement_id=maintenance_input; process_id=rail_tank_carriage; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 按真实轮对制动钢轨接触集电润滑密封软管泵电池维护供应实际物料端口展开条件要求。铁路钢磨损不是道路轮胎排放，总成与已含初装部件互斥。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际罐车维护更换件或消耗品）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：归属原生维护数量 / W 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：route_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_infrastructure | rail_tank_carriage | 必须展开身份 infrastructure (inputs/product)：实际铁路轨道电气化编组场或场站基础设施生命周期投入 | collected_record | requirement_id=infrastructure; process_id=rail_tank_carriage; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; ownership_mode; provider_native_unit; actual_delivered_demand; coverage_stage; attribution_state; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 真实轨道钢轨枕木道砟道岔、电气化接触回流牵引供应、编组场车场场站泵加热清洗资产或真实生命周期服务，各展开行一种身份同队列全部用户原生覆盖。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 识别实际实体资产、周转品或已交付的生命周期服务，登记配置、场址、期间、责任方、队列及覆盖阶段。外购服务按供应方已核实的每原生功能单位强度乘相容交付需求；仅对尚未归属的负担应用目标份额，仅对尚未归一化的目标总量除以相应正参考产出。不得再计该服务已含的制造。自建或购入的实体资产按制造量乘以目标作业量与同资产队列全用户完整寿命正作业量之比，再按匹配合格产出归一化一次。逐事件追踪初始部件、增配、更换、空闲或失败使用、修理、清洗及退役。混合覆盖时每个缺口阶段独立承接一次；保留发票、资产台账、作业和覆盖记录，禁止假定通用寿命或服务单位。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。仅属于不适用分支的字段须注明理由；适用分支缺少的计量仍须登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：归属原生基础设施数量 / W 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：route_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_provider_service | rail_tank_carriage | 必须展开身份 provider_service (inputs/product)：实际分包罐式承运或辅助服务 | collected_record | requirement_id=provider_service; process_id=rail_tank_carriage; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_service; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 条件要求：独立供应承运、泵送、清洗、处理或场站服务各按实际原生单位与覆盖范围拆分。准确替换已覆盖单元一次，保留未覆盖责任。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际分包罐式承运或辅助服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：归属原生供应服务数量 / W 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：route_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_service；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_locomotive_assembly | rail_tank_carriage | 必须展开身份 locomotive_assembly (inputs/product)：制造端口完整铁路机车总成 | collected_record | requirement_id=locomotive_assembly; process_id=rail_tank_carriage; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 真实干线调车机车构型，各展开行准确原生总成，不以运输服务UUID作为车辆资产。同机车全部用户有效服务量分摊制造，轨道罐车资产及未覆盖生命周期另列。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 已明确分支（仅按实际适用记录启用）：locomotive_assembly_manufacture. 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 若实体资产按 物品数量 / Item(s) 计量，保留实测供应量，寿命作业量另记单位。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：归属机车制造数量 / W 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：route_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_wash_effluent | rail_tank_carriage | 必须展开身份 wash_effluent (outputs/waste)：实际收集的罐体清洗废液 | collected_record | requirement_id=wash_effluent; process_id=rail_tank_carriage; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_cleaning; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 按实际收集废液的货物残留及清洗剂组成和接收处理纳入。不同废液及去向分开，不默认直接向环境排放废水。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（实际收集的罐体清洗废液）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：归属收集清洗废液质量 / W 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：route_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_cleaning；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_cargo_residue | rail_tank_carriage | 必须展开身份 cargo_residue (outputs/waste)：实际弃置的罐车货物残留 | collected_record | requirement_id=cargo_residue; process_id=rail_tank_carriage; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_service; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 仅在属于承运责任且实际弃置时记残留废物。可利用的退回客户货物仍为保管库存；按组成及去向拆分废物，不再重复记成直接泄漏。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（实际弃置的罐车货物残留）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：归属弃置货物残留质量 / W 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：route_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_service；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_waste | rail_tank_carriage | 必须展开身份 other_waste (outputs/waste)：实际罐式运输维护废物 | collected_record | requirement_id=other_waste; process_id=rail_tank_carriage; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 各实际废轮对钢轨制动集电电池维护部件退役废物分别按真实物料状态产生端口接收方展开。铁路钢磨损不套道路废轮胎身份，收集磨损不重复作直接排放。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（实际罐式运输维护废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：归属原生废物数量 / W 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：route_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_cargo_release | rail_tank_carriage | 必须展开身份 cargo_release (outputs/elementary)：实际向环境释放的罐内货物物种 | collected_record | requirement_id=cargo_release; process_id=rail_tank_carriage; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_service; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件要求：实际甲烷或其他蒸气或液体泄漏按化合物、化石或生物来源、空气水土接收介质及相关子介质拆分。放空或泄漏不是通用 VOC 或整罐质量；已回收保留物料不是排放。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（实际向环境释放的罐内货物物种）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：归属原生物种释放质量 / W 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：route_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_service；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_emissions | rail_tank_carriage | 必须展开身份 other_emissions (outputs/elementary)：实际罐式运输污染物种 | collected_record | requirement_id=other_emissions; process_id=rail_tank_carriage; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_energy; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件要求：尾气 NOx 形态及计量基、CO、N2O、甲烷、颗粒物粒径、实际铁路轮对制动钢轨集电磨损及实际制冷剂排放；场站轮胎磨损仅限实际纳入的轮式搬运设备且具有自身来源。各实际排放须独立身份介质和测量或兼容因子。回收磨损与收集废物不得同时记成直接排放。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（实际罐式运输污染物种）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：归属实测或有证据物种质量 / W 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：route_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_energy；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |

### 计算规则

| rule_id | 适用对象 | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | rail_tank_carriage | 各实际行 x 在因果作业供应库存闭合后，q_x = allocated_native_quantity_x / W；W > 0。最终参考服务 = 1 tkm。 | 原生记录; 全部使用者的分配记录; 已完成的等价运输功 W | 每参考流原生数量 | ghg-product-2011 |
| asset_share | rail_tank_carriage | 归属制造量 = native_asset_quantity * attributed_same_asset_useful_duty / positive_total_all_user_same_asset_useful_duty；再除 W。本项仅包含已核实制造覆盖范围。 | 同一资产队列; 原生数量; 全部使用者的作业量 | 归属原生资产制造量 | ghg-product-2011 |
| custody | rail_tank_carriage | 客户散装货物为保管库存，与机车燃料支持供应分开，即使化学身份相同。按真实化合物物料相态罐体仓位期间，期初货物加接收等于验收交接、实际外发退回转移、外发收集废物、直接释放及期末货物，全部互斥。留罐底料只属期末库存，残留是一次分类的物理状态，不增列平衡项。返回发货方回收或留在车上的蒸气不是空气排放。放空蒸发气溶解收集物泄漏须真实接收方质量，体积压力变化本身不证明质量损失。 | 保管库存; 交付及实际损耗 | 归一化前物料物种质量闭合 | ghg-product-2011 |
| eligible_work | rail_tank_carriage | 由唯一货批区段验收及真实净货物质量和液气状态定义限定已完成铁路运输工作量。W_tkm = sum(m_eligible_kg_s * d_eligible_km_s) / 1000。各真实区段交接按预设完成边界只计一次；m_eligible 排除后续区段已留存未交付或已损失物料，绝不含罐车自重机车包装其他货物。区分真实装载物理载荷失败损失作业和合格验收工作量。合格实际路线距离排除重复交接阶段、编组场循环、空驶调位和纯支持移动。保留实际绕行服务路径距离口径，不靠无必要循环增加服务输出。仅原预设义务下已完成验收的部分，或有独立记录且当时已验收的区段或变更服务，可进入W_tkm。后来未完成原义务的货物早前行程不自动成为成功工作量，不得事后缩小失败范围制造验收输出。保留全部关联负荷结局。 | 实际合格货物净质量（kg）及已完成铁路区段距离（km）; 验收、损耗和库存记录 | W_tkm | ghg-product-2011 |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | evidence |
| --- | --- | --- | --- |
| completeness | rail_tank_carriage | 各真实条件能源物料惰化剂传热介质资产供应服务废物排放化合物展开为独立行，含一个既有过程方向类型真实身份状态端口接收方原生属性单位数量核实UUID或待核登记本节点协议来源有依据计算。区分化合物与C/N/S化石生物真实粒径空气水土收集去向。数量相态端口接收方证据缺失为不完整，绝非零。 | 可定位行展开及缺失不作零审计 |
| representative | rail_tank_carriage | 列明真实车辆清洗站场站国家期间及货物温控技术分层。按实际完成 W 聚合等价功能并披露分布；路线平均不得抹去不等价载荷距离质量。 | 参与单元登记、验收输出及权重证据 |
| uncertainty | rail_tank_carriage | 要求校准、采样覆盖、库存核对、模型适用性及独立 QA。不设默认损耗寿命燃料因子分配比例或数值范围。确需模型时使用前保留数据来源及不确定性。 | 计量证明、模型文献、不确定性及独立样本 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| scope_work | rail_tank_carriage | 核对完整官方液气罐车铁路范围、真实铁路构型货物状态及唯一验收运输工作量参考。用原始区段货物质量合格距离及原完成验收证据或独立当时验收区段变更服务证据核对W_tkm；后来失败货物的早前行程不自动成为输出，不得事后缩小失败范围。不含车辆自重后续已损失留存质量重复阶段空驶编组循环工作量输出。 | ghg-product-2011 |
| closure | rail_tank_carriage | 核对全部货物物种相态保管及互斥底料退回废物蒸气泄漏去向、机车罐体场站编组场作业、正值工作量及全部用户供应资产覆盖。原生数量相态条件覆盖去向缺失使真实数据包不完整。 | ghg-product-2011 |
| native_identity | rail_tank_carriage | 最终交换依核实真实原生流属性单位端口接收方确定。参考tkm记法等于已核实t*km，不是新基准。原生属性单位组支持不识别铁路罐车产品UUID。真实惰化加热清洗排放物种不得继承近似身份。 | ghg-product-2011 |
| parity_quality | rail_tank_carriage | 按行规则协议ID公式常数真实条件铁路路线核对双语投影，要求校准测量兼容模型独立QA不确定性。明确来源领域限制，检查通过不证明外部身份核实或法律科学就绪。 | ghg-product-2011 |
| atomic_rail_tank_carriage | rail_tank_carriage | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| check_occurrence_completion | 全部实际清单行和身份识别协议 | 保留适用性证据，将每个实际事件对应到具体清单行或已核实的供应方覆盖范围。判定未发生须有证据，未知项保留待决。按同一身份、状态、单位、期间和交接点核对期初、接收、期末及互斥去向。耗材领用账区分未用退回、内部领拨和合格、失败及返工作业的实际耗用。托管账或物料平衡采用期初库存＋外部接收＋配对内部接收＝期末库存＋配对内部发出＋对外交付且获接收的数量＋未用外退＋外送的已用物资或回收物＋外送废物＋直接排放＋本边界内消耗或转化量。身份在边界内生成时，将有证据的生成量或出生数计入该身份账的来源并关联原事件。在上层守恒物料或元素平衡中抵消内部转化和移交。每个事件只记一次，留存回收物计入期末，移交与耗用分别登记。按相容口径执行专用托管、相态、转化或元素规则；已作为转化量计入的物料，其后续产物不得再计入同一去向合计。独立计量各项，对未解释的差额追查并保留待决。实物总量与负担分配分别核算。共享原始负担采用 Q_raw × s / R，其中 s 为有证据的目标驱动量除以同池同期间全部适用用户的正驱动量总和。已归属的目标总量采用 Q_target / R，已与同一参考流等效的单位结果 q_ref 原值沿用。供应方单位强度先乘以按其原生单位实测的需求量。仅在另一个仍有共享负担的独立阶段另作分配。R 为同一队列、交接点和参考单位下的正值合格产出量。保留失败与部分完成作业的负担，禁止以此放大 R；零产出时保留负担及有证据的结转或最终处置。自有资产采用同队列全用户寿命作业量，并排除初始部件重复计算。外购服务仅替代有记录的覆盖阶段。适用的身份、数量、支持单位、去向或分配分母仍未决时，最终数据集仍不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 限定真实铁路罐车散装液气货运工作量，供过程及生命周期模型使用 |
| allowed_use | 具真实W_tkm条件及核实最终交换的等价限定液气铁路罐车货运工作量 |
| excluded_use | 替代通用铁路货运货物制造集装箱公路管道或纯罐车资产服务；跨货物状态路线覆盖无条件比较 |
| required_metadata | cargo_compound_composition_phase_hazard_state; tank_car_type_compartments_pressure_temperature; locomotive_consist_and_actual_traction; rail_origin_destination_eligible_segmentdistance_and_actualgrossdistance; actual_eligible_net_cargo_mass_each_segment_and_W_tkm; acceptance_completion_partial_loss_and_heel_rules; actual_thermal_pressure_inerting_vaporreturn_conditions; linehaul_yard_shunting_empty_reposition_failed_duties; tank_terminal_cleaning_previous_next_campaigns; provider_native_cells_cargo_custody_fates; asset_cohort_all_user_useful_life; tkm_native_t_star_km_alias_and_factor1000; actual_species_receiver_uncertainty |
| required_quality_disclosure | 实测与模型数量、全部用户份额、覆盖不确定性、待核身份及服务可比性 |
| update_trigger | 货物状态技术供应端口路线分配资产寿命或来源证据变化 |

## 11. 数据源

来源列为编号（source_id）、类型（type）、文献信息（reference）和用途（used_for）。

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-65122 | official_guidance | UNSD CPC Version 3.0, code 65122. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/65122 | 官方液气罐式承运范围；不提供数量或LCA默认值 |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011). https://ghgprotocol.org/product-standard | 生命周期核算、数据质量及分配框架。具体罐式运输采集闭合选择为明确PCR方法，并非该来源的数值要求。 |
| epa-rail-facility-operations | official_guidance | US EPA, Rail Facility Best Practices to Improve Air Quality. https://www.epa.gov/ports-initiative/rail-facility-best-practices-improve-air-quality | 真实干线调车编组场怠速活动区分；不采用美国例子数值车队性能法规要求。 |
| cefic-rail-liquid-checklists | official_guidance | OTIF-hosted CEFIC Filling and discharging of rail tank-wagons, four liquid checklists. https://www.otif.org/fileadmin/user_upload/otif_verlinkte_files/05_gef_guet/07_rid_verweis/1.4.3.3-1.4.3.7.1_E_CEFIC-Checklist.pdf | 仅液体装卸交接闭合泄漏问题；明确排除承压气体固体，不声称普遍法律合规。 |
| otif-rid-2025 | official_guidance | OTIF RID2025, chapter1.4 participant obligations. https://otif.org/fileadmin/docs/LegalTexts/COTIF/DangerousGoodsRID/RID/RID_2025_e_20_August_2025_signed.pdf | 实际适用时充装卸载未清洗空罐参与者责任；不作全球非危险品要求或通用数量。 |
