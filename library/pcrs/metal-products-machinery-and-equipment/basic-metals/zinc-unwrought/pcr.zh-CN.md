---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.zinc-unwrought
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未锻轧锌

## 1. 范围与适用性

本 PCR 适用于锌生产设施门口未锻轧形态锌金属的生产。参考输出为未锻轧锌时，涵盖以锌精矿为原料的初级电解法和热法生产，以及以锌废料为原料的二次回收；包括厂内原料预处理、适用时的焙烧或烧结、适用时的浸出和净化、电积或热还原与冷凝、精炼、熔化、铸成未锻轧形态，以及直接相关的厂内废气、废水和残渣治理。

矿石开采、选矿和精矿生产采用外购锌精矿的上游数据集表示。锌废料到达设施前的收集和预处理、外部运输、下游镀锌、合金制品制造、轧制、挤压、拉拔、粉末生产、氧化锌生产、产品使用和生命末期均在前景边界之外，除非研究明确扩展边界。锌尘与锌粉、锌制半成品、锌化合物和锌废物均不是本 PCR 的参考产品。

前景数据包必须说明生产路线、原料来源、锌品位、产品牌号、设施地理位置、电力供应、燃料组合，以及硫酸或其他可回收物料是否作为共产品离开设施。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.zinc-unwrought |
| classification_refs | CPC 3.0：41442，未锻轧锌 |
| covered_products | 初级或二次锌生产后以未锻轧形态销售的锌金属，包括进入下游加工前的锌板锭或锌锭 |
| excluded_products | 锌尘、锌粉、锌片、氧化锌、过氧化锌，以及锌条、锌杆、锌型材、锌丝、锌板、锌片材、锌带、锌箔、镀锌制品和作为废物销售的锌废料 |
| representative_product | 锌生产设施门口的未锻轧锌金属 |
| production_route | 初级电解法、初级热法或二次锌回收；必须声明路线和原料占比 |
| market_state | 设施门口固态未锻轧锌，并声明物理形态、锌牌号、合金状态和纯度规范 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为下游加工或冶金用途提供未锻轧锌金属 |
| How much | 锌生产设施门口 1 kg 未锻轧锌 |
| How well | 符合所声明的锌牌号、成分、物理形态以及客户或产品规范要求 |
| How long or cycle | 一个生产批次；不赋予使用期 |
| reference_flow_link | 归一化输出行 `out_unwrought_zinc` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 未锻轧锌 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 生产路线；初级和二次原料占比；产品物理形态；锌牌号和纯度；合金状态和成分；设施地理位置；技术；参考年份；电力供应；燃料组合；硫酸回收状态；分配方法；设施门口边界 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和所有质量归一化行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有清单交换按离开设施门口的 1 kg 可销售未锻轧锌归一化；归一化前分别报告铸造总量、内部重熔量、不合格品返回量和可销售净质量。 |
| `wet_dry_basis` | 精矿、废料、炉渣和浸出渣 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录称量质量以及水分或干固体分数；换算时明确湿基或干基，不得混用。 |
| `contained_zinc` | 含锌原料和残渣 | Zinc content `7c367337-54f2-4fe9-8ee3-3f42681b0792` | kg Zn | 保留实验室锌品位，并独立于物料总质量计算含锌量；不得以含锌量替代流总质量。 |
| `electricity_energy` | 外购和厂内发电 | energy | kWh | 保留电表记录的 kWh；需要能量换算时采用 1 kWh = 3.6 MJ，并披露原始计量单位和电压等级。 |
| `gas_reference_conditions` | 天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按声明的温度和压力报告气体体积，并保留供应商低位发热量，使能量与体积记录可审计。 |
| `solution_concentration` | 硫酸 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录溶液质量和酸质量分数；分别识别外购、厂内产生、内部循环和外售硫酸。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 初级冶炼厂门口接收的锌精矿和/或二次锌回收设施门口接收的已分选锌废料，以及外购公用工程和试剂 |
| starting_condition_role | 进入前景锌生产设施的上游产品和废物 |
| product_classification_scope | 仅包括未锻轧锌金属；锌化合物、锌粉末、锌制半成品和锌废物不属于参考产品标识 |
| recursive_input_rule | 用于重熔的外购未锻轧锌必须作为独立产品输入并关联上游数据集，不得默认为内部循环或在本 PCR 内递归展开 |
| upstream_dataset_requirement | 精矿、废料预处理、电力、燃料、试剂、供水和外部废物处理应采用具有地理和技术代表性的上游数据集 |
| disclosure | 声明路线、原料占比和品位、纳入的单元操作、厂内发电、内部循环、受控和无组织排放点、水边界、残渣去向、共产品和截断项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_facility_gate` | 所有路线 | 纳入从合格精矿或废料接收到可销售未锻轧锌铸造的全部单元操作，并纳入直接相关的厂内废气、废水和残渣治理。 | `us-epa-ap42-zinc-smelting-1986`; `us-epa-ap42-secondary-zinc-1981` |
| `boundary_upstream` | 外购投入 | 通过上游数据集建模设施外的开采、选矿、废料收集和预处理，以及外购能源、试剂和水；不得将其上游排放重复计入设施直接排放。 | `us-epa-ap42-zinc-smelting-1986`; `us-epa-ap42-secondary-zinc-1981` |
| `boundary_route_disclosure` | 路线相关操作 | 仅在实际采用时纳入焙烧、浸出、净化和电积；仅在实际采用时纳入烧结、还原、蒸馏炉处理、冷凝或二次原料预处理，并说明每项排除。 | `us-epa-ap42-zinc-smelting-1986`; `us-epa-ap42-secondary-zinc-1981`; `ipcc-2006-metal-industry-zinc` |
| `boundary_carbon_accounting` | 燃料和含碳还原剂 | 区分直接工艺二氧化碳与燃料燃烧排放，并避免与上游焦炭生产或能源数据集重复计算。 | `ipcc-2006-metal-industry-zinc` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `zinc_unwrought_production` | 未锻轧锌生产、精炼与铸造 | required | 所有数据集；路线特定交换仅在采用其所述路线时适用 | 对原料预处理、湿法或热法锌回收、精炼、铸造和厂内污染控制进行前景汇总 | 1 kg 可销售未锻轧锌输出 |

### 过程：未锻轧锌生产、精炼与铸造（`zinc_unwrought_production`）

#### 输入

##### 产品流

###### 初级生产用锌精矿（`in_zinc_concentrate`）

采用初级路线时，记录选矿后接收的锌精矿；不得用本行记录原矿或成品锌金属。

- 选定流：锌精矿 `ecb60d59-d9e3-4d96-958d-7b4453a8174f`
- 流属性/单位：Mass / kg
- 数量规则：实测接收精矿质量，并保留水分和锌品位
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锌输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_mass`
- 来源：`us-epa-ap42-zinc-smelting-1986`

###### 浸出用硫酸（`in_sulfuric_acid`）

记录进入湿法路线的硫酸净输入，并区分厂内产生量和内部循环量。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：Mass / kg
- 数量规则：外购和转入硫酸之和，扣除内部循环，并记录浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锌输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reagent_mass`
- 来源：`us-epa-ap42-zinc-smelting-1986`

###### 工艺用水（`in_process_water`）

记录浸出、清洗、冷却补水、气体净化及其他厂内锌生产操作消耗的工艺用水；排除仅穿过系统而未消耗的水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：进入前景系统的计量用水扣除单独计量的直流返回水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锌输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_meter`
- 来源：`us-epa-ap42-zinc-smelting-1986`; `us-epa-ap42-secondary-zinc-1981`

###### 外购电力（`in_electricity`）

记录为电解、蒸馏炉、物料输送、泵送、气体净化和铸造而跨越设施边界输入的电力。排序候选未提供一致的流属性与单位支持，因此 Tiangong UUID 保持未解决。

- 选定流：按所声明电压等级交付的外购电力
- 流属性/单位：Energy / kWh
- 数量规则：收入电表进口电量扣除计量出口电量，厂内发电单独报告
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锌输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter`
- 来源：`us-epa-ap42-zinc-smelting-1986`

###### 厂内使用的天然气（`in_natural_gas`）

仅在设施使用天然气时记录直接工艺供热消耗，并保留参考状态和低位发热量。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：分配给所纳入锌生产操作的计量天然气消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锌输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_meter`
- 来源：`us-epa-ap42-zinc-smelting-1986`; `ipcc-2006-metal-industry-zinc`

###### 冶金焦还原剂（`in_metallurgical_coke`）

仅对热还原、帝国熔炼、电热法、威尔兹窑或其他已声明的碳还原操作记录冶金焦。

- 选定流：冶金焦 `a94c42b1-7fa9-42f3-a9d1-1e7353e8490d`
- 流属性/单位：Mass / kg
- 数量规则：投入所纳入锌生产操作的实测焦炭质量，并保留水分、灰分和碳含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锌输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_meter`
- 来源：`us-epa-ap42-zinc-smelting-1986`; `ipcc-2006-metal-industry-zinc`

##### 废物流

###### 二次回收用锌废料（`in_zinc_scrap`）

仅在纳入二次路线时，将接收的锌废料记录为废物输入；保留来源、成分、污染情况和废物负担分配约定。

- 选定流：锌废料 `b1629e09-83ea-4027-aab4-3a02406fac02`
- 流属性/单位：Mass / kg
- 数量规则：实测接收锌废料质量，并保留水分、锌含量和污染物信息
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锌输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_mass`
- 来源：`us-epa-ap42-secondary-zinc-1981`; `ipcc-2006-metal-industry-zinc`

##### 基本流

不规定基本流输入。外购产品所体现的资源开采由其上游数据集表示。

#### 输出

##### 产品流

###### 可销售未锻轧锌（`out_unwrought_zinc`）

仅记录以未锻轧市场形态离开设施的合格锌金属。锌锭候选与其锌制半成品分类冲突，因此参考产品 UUID 保持未解决。

- 选定流：未锻轧锌
- 流属性/单位：Mass / kg
- 数量规则：将实测可销售未锻轧锌净输出归一化为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_product_mass`
- 来源：`un-cpc-3-0-structure-2025`; `us-epa-ap42-zinc-smelting-1986`; `us-epa-ap42-secondary-zinc-1981`

###### 硫酸共产品（`out_sulfuric_acid`）

记录作为可销售共产品离开前景设施的硫酸；内部循环用于浸出的酸不得计为输出。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：Mass / kg
- 数量规则：实测外售酸溶液质量，并保留酸浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锌输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_mass`
- 来源：`us-epa-ap42-zinc-smelting-1986`

##### 废物流

###### 热处理产生的锌渣（`out_zinc_slag`）

记录热法锌生产或二次回收中跨越设施边界的锌渣，并保留去向和可回收锌含量。

- 选定流：锌渣（未指定） `1fe4a169-ae95-4eb8-b3d4-f5db63d1ca23`
- 流属性/单位：Mass / kg
- 数量规则：离开前景系统的实测炉渣质量，与内部循环炉渣分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锌输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`us-epa-ap42-zinc-smelting-1986`; `ipcc-2006-metal-industry-zinc`

###### 含锌浸出渣（`out_zinc_leach_residue`）

记录湿法路线中从浸出和净化工序离开的固体残渣。未找到准确的 Tiangong 废物流 UUID；不得以锌废料或热法锌渣替代。

- 选定流：含锌浸出渣
- 流属性/单位：Mass / kg
- 数量规则：离开前景系统的实测残渣质量，并保留湿质量、水分、干质量和锌含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锌输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`us-epa-ap42-zinc-smelting-1986`

##### 基本流

###### 化石源二氧化碳排放至空气（`out_fossil_carbon_dioxide`）

记录含碳还原剂和厂内燃料燃烧产生的直接化石源二氧化碳，同时避免工艺核算与能源核算重复。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：所纳入操作的实测直接化石 CO2，或采用设施碳平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锌输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`ipcc-2006-metal-industry-zinc`

###### 二氧化硫排放至空气，未指定（`out_sulfur_dioxide_air`）

记录硫回收和大气污染控制后剩余的二氧化硫，包括已量化的无组织排放。未找到准确的未指定空气隔室 UUID。

- 选定流：二氧化硫排放至空气，未指定
- 流属性/单位：Mass / kg
- 数量规则：实测受控烟囱和已量化无组织二氧化硫排放之和
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锌输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`us-epa-ap42-zinc-smelting-1986`

###### 锌排放至空气，未指定（`out_zinc_air`）

按元素锌质量记录受控和无组织大气排放中的锌，不得以颗粒物总质量替代。

- 选定流：锌 `08a91e70-3ddc-11dd-94e3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟囱和无组织大气排放中的实测锌质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锌输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`us-epa-ap42-zinc-smelting-1986`; `us-epa-ap42-secondary-zinc-1981`

###### 锌排放至水体，未指定（`out_zinc_water`）

记录处理后跨越设施水边界排放的溶解态和悬浮态锌；已知时披露受纳水体隔室。

- 选定流：锌 `08a91e70-3ddc-11dd-94e9-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：处理后废水体积乘以代表性锌浓度，再加单独实测的直接释放量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售未锻轧锌输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`us-epa-ap42-zinc-smelting-1986`; `us-epa-ap42-secondary-zinc-1981`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 可独立计量的单元操作 | 具备独立测量时，通过细分初级、二次、制酸、铅回收、残渣处理和公用工程操作避免分配。 | `us-epa-ap42-zinc-smelting-1986`; `us-epa-ap42-secondary-zinc-1981` |
| `allocation_joint_lead_zinc` | 铅锌同时生产 | 采用有文件依据的工厂特定物理关系或质量平衡分配共同消耗的焦炭和直接工艺排放；报告分配因子并避免铅和锌之间重复计算。 | `ipcc-2006-metal-industry-zinc` |
| `allocation_sulfuric_acid` | 可销售硫酸 | 首先将可直接计量的制酸投入和产出归于制酸；仅对不可分割的剩余负担采用已声明的物理关系分配，无可辩护物理关系时采用经济分配，并报告敏感性结果。 | `us-epa-ap42-zinc-smelting-1986` |
| `allocation_waste_inputs` | 锌废料和其他废物原料 | 声明废物分配约定、任何来料负担、预处理边界和抵扣；除非研究采用并披露后果型替代模型，不得在清单内主张避免初级锌生产。 | `us-epa-ap42-secondary-zinc-1981` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feed_mass` | `zinc_unwrought_production` | 锌精矿和锌废料 | 地磅和实验室记录 | 接收质量；皮重；水分；锌品位；批次号；供应商；原料路线 | 核对地磅单、实验室证书和库存变化 | kg；质量分数 | 每批接收及月末 | 具有代表性的连续 12 个月 | 范围内全部原料接收点 | 按原料类型汇总接收量加期初库存减期末库存，再归一化 | 秤校准记录；取样方案；实验室 QA/QC；库存核对 |
| `cp_reagent_mass` | `zinc_unwrought_production` | 硫酸输入 | 采购、转移、储罐和浓度记录 | 溶液质量或体积；密度；酸分数；期初期末库存；内部循环 | 核对发票与校准储罐测量；区分外购、产生、循环和外售酸 | kg 溶液；kg H2SO4 | 每批或每日计量及月末 | 与产品输出相同的 12 个月 | 所有纳入的酸储存和工艺回路 | 外购加转入加期初库存减期末库存减外售，排除内部循环 | 储罐校准；密度和化验方法；发票核对 |
| `cp_water_meter` | `zinc_unwrought_production` | 工艺用水输入 | 水表记录 | 取水量；外购水；返回直流水；仪表编号 | 读取校准边界表和分表并与公用工程发票核对 | kg 或 m3 | 每日或每月 | 与产品输出相同的 12 个月 | 所有纳入的进水点 | 边界净消耗水量，需要时用有文件依据的密度换算 | 仪表校准；水量平衡；缺失数据日志 |
| `cp_electricity_meter` | `zinc_unwrought_production` | 外购电力输入 | 收入电表和分表记录 | 输入 kWh；输出 kWh；厂内发电；电压；仪表编号 | 核对收入电表、分表和厂内发电记录 | kWh | 间隔或每月 | 与产品输出相同的 12 个月 | 所有纳入的电力边界表 | 输入减输出；不得在未披露时以厂内发电冲抵燃料输入 | 仪表校准；发票；能量平衡 |
| `cp_fuel_meter` | `zinc_unwrought_production` | 天然气和冶金焦 | 燃料计量、秤量、库存和化验记录 | 天然气体积；参考状态；发热量；焦炭质量；水分；灰分；碳；库存变化 | 核对天然气账单和校准仪表；核对焦炭接收、秤量和库存 | m3；MJ；kg | 连续或每批交付及月末 | 与产品输出相同的 12 个月 | 所有纳入的燃料和还原剂入口 | 按物料和用途分别计算接收量加期初库存减期末库存 | 仪表和秤校准；供应商化验；碳平衡 |
| `cp_product_mass` | `zinc_unwrought_production` | 未锻轧锌和硫酸输出 | 铸造秤、发运、储罐和实验室记录 | 锌铸造总量；内部重熔；不合格品返回；可销售锌净量；酸溶液质量；酸分数；发运编号 | 核对生产、内部返回、库存和发运记录 | kg | 每批及月末 | 与投入相同的 12 个月 | 所有产品和共产品出口 | 可销售净输出等于发运量加期末库存减期初库存，排除内部循环 | 校准秤和储罐；产品化验；发运核对 |
| `cp_waste_mass` | `zinc_unwrought_production` | 锌渣和含锌浸出渣 | 废物秤、联单、水分和化验记录 | 湿质量；水分；干质量；锌品位；去向；内部循环 | 核对秤、废物联单、实验室化验和内部返回 | kg | 每批外运及月末 | 与产品输出相同的 12 个月 | 所有纳入的废物出口 | 仅计外部输出；内部循环留在边界内 | 秤校准；交接链；实验室 QA/QC；废物接收方凭证 |
| `cp_emissions` | `zinc_unwrought_production` | 化石 CO2、二氧化硫、排放至空气的锌和排放至水体的锌 | 连续监测、烟囱测试、废水监测、燃料和还原剂化验 | 气体流量；浓度；运行时间；废水流量；锌浓度；燃料碳；焦炭碳；控制装置停运 | 有条件时采用经验证的直接测量；否则用已采集活动和化验数据按已声明方程计算 | kg；浓度；流量 | 连续、监测批次或符合许可要求的取样，按月汇总 | 包含异常运行的代表性连续 12 个月 | 所有纳入的点源、无组织源和水排放边界 | 汇总实测点源和有依据的无组织估计；避免工艺与能源重复计算 | 校准；检出限；取样代表性；实验室 QA/QC；质量和碳平衡 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_inventory` | 每个清单行 | 归一化交换量 = 期间交换量 / 可销售未锻轧锌净输出 | 期间交换量；可销售锌净质量 | 每 1 kg 未锻轧锌的交换量 |  |
| `calc_dry_mass` | 含锌原料和残渣 | 干质量 = 湿质量 ×（1 − 水分质量分数） | 湿质量；水分质量分数 | kg 干物料 |  |
| `calc_contained_zinc` | 含锌原料和残渣 | 含锌量 = 干质量 × 干基锌质量分数 | 干质量；锌化验值 | kg Zn |  |
| `calc_acid_mass` | 硫酸 | 酸质量 = 溶液质量 × 硫酸质量分数 | 溶液质量；浓度 | kg H2SO4 | `us-epa-ap42-zinc-smelting-1986` |
| `calc_waterborne_zinc` | 排放至水体的锌 | 锌质量 = 处理后废水体积 × 代表性锌浓度；披露单位换算和检出限处理 | 废水体积；锌浓度 | 排放至水体的 kg Zn |  |
| `calc_process_co2` | 热法锌路线 | 优先采用设施实测排放；否则对已采集的还原剂和其他含碳工艺物料数据进行透明碳平衡，并区分燃料燃烧核算 | 碳输入；产品和废物中保留的碳；可得的实测排放 | kg 化石 CO2 | `ipcc-2006-metal-industry-zinc` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 保留产品形态、锌牌号、纯度或合金成分、批次定义和合格证据。 | 产品化验、规范和发运记录 |
| `dq_route` | 全部清单 | 识别初级电解法、热法或二次路线，并报告初级和二次原料占比。 | 工艺流程图、原料记录和生产日志 |
| `dq_temporal` | 全部前景数据 | 采用具有代表性的连续 12 个月，或说明较短生产周期足以涵盖开停车、维护和异常运行的理由。 | 带日期的仪表、生产、维护和排放记录 |
| `dq_completeness` | 质量、锌、硫、能量、碳和水量平衡 | 核对投入、可销售输出、内部循环、库存、废物和直接排放；解释实质性残差和所有排除项。 | 经签署的平衡表和核对结论 |
| `dq_measurement` | 仪表、秤、化验和排放监测 | 保留校准状态、方法、取样频率、检出限、缺失数据处理和实验室 QA/QC。 | 校准证书、方法记录和 QA/QC 结果 |
| `dq_geography` | 上游供应和直接排放 | 电力、燃料、水、精矿、废料和处理数据集应匹配声明地理范围，并披露受纳环境隔室。 | 供应商和设施位置记录；数据集元数据 |
| `dq_allocation` | 共产品和联合生产 | 保留细分逻辑、分配依据、分配因子、采用经济分配时的价格期间和敏感性结果。 | 分配工作表和来源记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | `out_unwrought_zinc` | 归一化后可销售未锻轧锌净输出必须等于 1 kg，且铸造总量、内部重熔、不合格品返回和库存变化仍可审计。 |  |
| `validate_product_boundary` | 参考产品 | 参考输出为锌粉、氧化锌、锌制半成品或锌废料而非未锻轧锌金属的数据集应予拒绝。 | `un-cpc-3-0-structure-2025` |
| `validate_route_rows` | 路线特定清单 | 路线特定行仅在采用对应操作时出现；缺失必须由路线文件支持，不得以无说明的零值替代。 | `us-epa-ap42-zinc-smelting-1986`; `us-epa-ap42-secondary-zinc-1981`; `ipcc-2006-metal-industry-zinc` |
| `validate_zinc_balance` | 原料、产品、共产品、炉渣、残渣和排放 | 使用一致的干湿基和化验值完成含锌量平衡，并调查和解释残差。 |  |
| `validate_sulfur_balance` | 硫化锌精矿、硫酸、二氧化硫和含硫残渣 | 处理硫化物精矿时完成硫平衡，并区分回收酸与排放的二氧化硫。 | `us-epa-ap42-zinc-smelting-1986` |
| `validate_carbon_double_count` | 天然气、焦炭和化石源二氧化碳 | 证明工艺 CO2、厂内燃料燃烧 CO2、上游燃料负担和焦炭生产排放既无遗漏也无重复计算。 | `ipcc-2006-metal-industry-zinc` |
| `validate_uuid_gaps` | 未解决的 Tiangong 流 | 发布前解决或明确审查未锻轧锌参考产品、电力、浸出渣和二氧化硫 UUID 缺口；不得使用近似匹配替代。 |  |
| `validate_sources` | 外部约束规则 | 每个外部来源 ID 必须能解析至数据源表，且仅用于原文所支持的用途。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 设施特定前景生产数据集；在来源、UUID 和方法完成审查后，可作为 secondary_dataset 或 background_dataset 发布 |
| downstream_use | 需要锌生产设施门口未锻轧锌的归因型过程清单和生命周期模型 |
| allowed_use | 用于所声明的路线、产品牌号、地理范围、技术、参考期、原料占比、电力供应、燃料组合、水边界和分配方法 |
| excluded_use | 不得作为通用锌矿开采数据集、锌制半成品数据集、锌化合物数据集或无独立模型和披露的后果型回收抵扣使用 |
| required_metadata | PCR id 和版本；产品形态和牌号；路线和原料占比；设施地理位置；技术；参考期；电力和燃料供应；水边界；共产品；分配；截断项；上游数据集标识 |
| required_quality_disclosure | 数据覆盖；仪表和秤校准；取样和化验方法；时间代表性；质量、锌、硫、能量、碳和水量平衡结果；缺失数据处理；不确定性；未解决 UUID；来源适用性 |
| update_trigger | 路线、原料占比或品位、产品牌号、主要技术、电力或燃料供应、排放控制、水系统、共产品回收、分配方法、设施地理位置或参考期发生变化 |

## 11. 数据源

| 来源 ID | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《产品总分类第 3.0 版结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-04） | 原文确认 CPC 41442 为“Zinc, unwrought”，并区分锌制半成品子类 |
| `us-epa-ap42-zinc-smelting-1986` | official_guidance | 美国环境保护署，AP-42 第 12.7 节《Zinc Smelting》，1986 年 10 月，1995 年 1 月重新排版，https://www.epa.gov/sites/production/files/2020-11/documents/c12s07.pdf（检索日期：2026-09-04） | 原文确认初级锌工艺分解、精矿焙烧、电解法浸出/净化/电解、热法蒸馏炉、板锌和硫酸输出，以及二氧化硫、颗粒物和金属排放控制点 |
| `us-epa-ap42-secondary-zinc-1981` | official_guidance | 美国环境保护署，AP-42 第 12.14 节《Secondary Zinc Processing》，1981 年 4 月，https://www.epa.gov/sites/production/files/2020-11/documents/c12s14.pdf（检索日期：2026-09-04） | 原文确认从废料预处理、熔化、精炼到板锌输出的二次锌回收，支持二次路线边界以及废物和排放采集要求 |
| `ipcc-2006-metal-industry-zinc` | official_guidance | IPCC，《2006 年 IPCC 国家温室气体清单指南》第 3 卷第 4 章第 4.7 节“Zinc Production”，https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/3_Volume3/V3_4_Ch4_Metal_Industry.pdf（检索日期：2026-09-04） | 原文确认电解法、电热法、帝国熔炼法、威尔兹窑和二次路线；含碳还原剂和直接工艺 CO2 核算；工厂特定活动数据；分配及避免重复计算 |
