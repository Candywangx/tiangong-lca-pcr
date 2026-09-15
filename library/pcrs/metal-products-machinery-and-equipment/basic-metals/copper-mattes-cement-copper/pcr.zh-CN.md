---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.copper-mattes-cement-copper
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 铜锍；沉积铜（泥铜）

## 1. 范围与适用性

本 PCR 覆盖生产者大门处的两种含铜中间产品：由铜精矿熔炼制得的铜锍，以及由含铜浸出富液以铁置换制得的沉积铜（泥铜）。数据包必须选择并声明且仅声明一个参考产品分支。同一设施生产两种产品时，应分别形成归一化前景结果，或采用已披露且有证据支持的分配方法。

铜锍分支的前景边界始于铜精矿与熔剂进入冶炼厂，沉积铜分支的前景边界始于浸出富液与置换用铁进入沉积铜工序；边界止于所选中间产品完成计量、取样并在生产者大门放行。上游采矿、选矿、铜精矿生产及接收富液之前的浸出过程由关联上游数据集表示。铜锍的后续吹炼、粗铜生产、阳极精炼、电解精炼及精炼铜产品制造不在本前景边界内。

本 PCR 不以铜矿石、铜精矿、粗铜或阳极铜、精炼铜、铜合金、铜粉或铜废碎料作为参考产品。除非研究目标明确纳入并单独报告，否则不包括场址基础设施和资本品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.copper-mattes-cement-copper |
| classification_refs | CPC 3.0: 41411, Copper mattes; cement copper |
| covered_products | 铜锍；沉积铜（泥铜） |
| excluded_products | 作为参考产品的铜矿石和铜精矿；粗铜；阳极铜；精炼铜；铜合金；铜粉；铜废碎料 |
| representative_product | 铜锍 |
| production_route | 铜精矿熔炼制铜锍，或含铜浸出富液以铁置换制沉积铜 |
| market_state | 铜锍为熔融、浇铸、破碎或水淬中间体；沉积铜为分离后的湿滤饼或干粉；均须声明干质量基准、水分、铜品位、杂质及生产者大门状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产本 PCR 覆盖的已声明含铜中间产品 |
| How much | 1,000 kg 已声明产品干质量 |
| How well | 产品明确识别为铜锍或沉积铜，并声明路线、铜品位、水分、物理状态、杂质特征和放行规格 |
| How long or cycle | 完成至生产者大门的一个生产批次或报告期份额；不适用使用寿命 |
| reference_flow_link | reference_product_copper_matte |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 干产品 |
| 参考产品流 | 铜锍 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 所选产品分支；生产技术；生产者地理范围；报告期；产品物理状态；干质量测定；水分；铜品位；铜锍的硫和铁含量；沉积铜的残余铁和不溶性杂质；共产品回收；内部循环流；污染控制边界 |

构建前景数据包时，`必需限定信息` 中的项目必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失这些限定信息时，数据包的参考流定义不完整。参考铜锍产品的 TianGong UUID 尚未解决；不得以归入矿石类别的同名候选或下游铜产品替代。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | 参考产品及所有质量归一化交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 归一化至 1,000 kg 干产品。测量收到状态质量并用代表性样品测定水分，保留干质量计算记录。 |
| `gas_reference_conditions` | 天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200b9a66` | m3 | 按计量基准温度和压力报告气体体积；记录基准条件及从工况体积到基准体积的换算。 |
| `electricity_energy_basis` | 外购电力 | Energy | kWh | 使用计量的有功电量。将电压等级、电网地理范围、供应商和场内发电边界作为前景限定信息；不得使用净热值代理流。 |
| `solution_mass_conversion` | 浸出富液和废浸出液 | Mass | kg | 若按体积采集，则使用同期密度换算，并记录采样报告期的铜、总铁、酸度、硫酸根、悬浮物和温度。 |
| `direct_emission_basis` | 直接大气排放 | Mass | kg | 报告经过控制后进入所声明空气隔室的释放量。将烟气测量或计算与同一报告期及 1,000 kg 干产品基准对齐。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 铜锍分支：铜精矿和单独采购的熔剂在冶炼厂大门接收。沉积铜分支：含铜浸出富液和置换用钢铁废碎料在沉积铜工序接收。 |
| starting_condition_role | 前景生产投入大门；上游开采、选矿、铜精矿生产或浸出由关联上游数据集表示，不在本 PCR 内重复构建。 |
| product_classification_scope | CPC 3.0 子类 41411；规范性 PCR 含义限于两种已声明含铜中间产品及其生产路线。 |
| recursive_input_rule | 铜锍或沉积铜作为内部投入时，记录实测内部转移，不对该转移递归应用本 PCR；仅当其跨越已声明前景边界时才使用单独上游数据集。 |
| upstream_dataset_requirement | 铜精矿、石英石、天然气、工业氧气、电力、浸出富液和钢铁废碎料跨越前景边界时，关联相应供应数据集。 |
| disclosure | 声明所选分支、起始物料状态和化验、技术、污染控制、内部循环、共产品回收、生产者地理范围、报告期、截断及对默认门到门边界的全部偏离。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_branch_selection` | 前景模型 | 选择铜锍或沉积铜作为参考产品。纳入对应过程分支并排除另一分支；若设施确实同时运行两条路线且数据已细分，则可同时记录。 | `unsd-cpc-3-0-structure-2025`, `us-epa-ap42-primary-copper-smelting-1995`, `us-bureau-mines-copper-materials-survey-1965` |
| `boundary_matte_operations` | 铜锍分支 | 纳入铜精矿和熔剂接收、使用时的干燥或焙烧、熔炼、铜锍放出和调理、炉渣处理、直接能源、氧气、控制后排放，以及在运行上与铜锍生产一体化的场内烟气处理。 | `us-epa-ap42-primary-copper-smelting-1995` |
| `boundary_cement_operations` | 沉积铜分支 | 纳入溶液转移、铁置换、搅拌或泵送、沉淀物分离、产品调理、废液处理及沉积铜工序的直接释放。 | `us-bureau-mines-copper-materials-survey-1965` |
| `boundary_upstream_and_downstream` | 两个分支 | 以关联数据集表示上游供应投入。参考产品前景结果不包括下游吹炼和精炼；除非研究采用并披露单独的后果情景，否则不得计入未来回收或下游金属回收信用。 | `us-epa-ap42-primary-copper-smelting-1995`, `eu-commission-pef-method-2021` |
| `boundary_completeness` | 两个分支 | 纳入声明边界内所有环境相关的物料、能源、废物和直接基本流。场址特定物种或材料必须作为单独的原子流行添加，不得汇总为一般集合标签。 | `eu-commission-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p_matte_smelting` | 铜精矿熔炼制铜锍 | `conditional` | 已声明参考产品为铜锍时纳入。 | 前景生产 | 在生产者大门放行的铜锍干质量 |
| `p_cement_copper_production` | 铁置换制沉积铜 | `conditional` | 已声明参考产品为沉积铜时纳入。 | 前景生产 | 在生产者大门放行的沉积铜干质量 |

### 过程：铜精矿熔炼制铜锍（`p_matte_smelting`）

#### 输入

##### 产品流

###### 铜精矿进料（`matte_copper_concentrate`）

铜精矿作为主要含铜、含硫进料跨越冶炼前景边界。按批次或已核对生产期记录干质量、水分、铜、硫、铁、脉石和相关痕量元素化验。

- 选定流：铜精矿
- 流属性/单位：Mass / kg
- 数量规则：根据已核对的接收、库存变化、退料和水分记录计算消耗的干铜精矿
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干铜锍输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_matte_material_inputs`
- 来源：`us-epa-ap42-primary-copper-smelting-1995`

###### 用作硅质熔剂的石英石（`matte_quartz_stone_flux`）

仅在石英石作为单独供应的硅质熔剂时记录本行。若另一种具体熔剂跨越边界，应新增该材料自己的原子产品流行，不得改写本行名称。

- 选定流：石英石 `e3cb4771-a491-487e-a16b-8482d3ebf6ff`
- 流属性/单位：Mass / kg
- 数量规则：根据地磅、料仓和库存变化记录计算装入的干石英石
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干铜锍输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_matte_material_inputs`
- 来源：`us-epa-ap42-primary-copper-smelting-1995`

###### 气态天然气（`matte_natural_gas`）

天然气为炉体、干燥器、焙烧炉、保温或辅助燃烧而跨越前景边界时记录。上游供应排放不得计入直接排放，而应通过天然气供应数据集关联。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：计量外购天然气，并换算至声明的基准温度和压力
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干铜锍输出的 m3
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_matte_energy_and_gases`
- 来源：`us-epa-ap42-primary-copper-smelting-1995`

###### 工业氧气（`matte_industrial_oxygen`）

外购工业氧气用于富氧或氧气熔炼时记录。氧气在场内生产时，应将制氧投入纳入前景边界，并将本外购流行标为不适用。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：按声明基准条件计量供应氧气并记录氧气纯度
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干铜锍输出的 m3
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_matte_energy_and_gases`
- 来源：`us-epa-ap42-primary-copper-smelting-1995`

###### 中压电（`matte_electricity`）

记录电熔炼及边界内所有传动、风机、泵、烟气净化和产品处理所输入的有功电量。输出电力或场内发电须单独计量。

- 选定流：中压电
- 流属性/单位：Energy / kWh
- 数量规则：核对报告期的输入有功电量、场内发电、输出电量及与库存无关的分表合计
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干铜锍输出的 kWh
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_matte_energy_and_gases`
- 来源：`us-epa-ap42-primary-copper-smelting-1995`, `eu-commission-pef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考铜锍产品（`reference_product_copper_matte`）

铜锍是铜锍分支的参考输出。按干基记录放出并放行的产品质量，保留水分、铜、硫、铁、物理状态和杂质化验数据。

- 选定流：铜锍
- 流属性/单位：Mass / kg
- 数量规则：根据实测产品质量和代表性水分测定计算放行的干铜锍
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 干铜锍输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_matte_outputs_and_emissions`
- 来源：`unsd-cpc-3-0-structure-2025`, `us-epa-ap42-primary-copper-smelting-1995`

###### 回收硫酸（`matte_sulfuric_acid`）

仅当二氧化硫在已声明前景边界内转化为硫酸，且硫酸作为可用产品离开过程时，才将硫酸记录为单独共产品。记录浓度和商业去向。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：Mass / kg
- 数量规则：根据产品发运和库存变化记录，按实测浓度计算硫酸产品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干铜锍输出的已声明浓度硫酸 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_matte_outputs_and_emissions`
- 来源：`us-epa-ap42-primary-copper-smelting-1995`

##### 废物流

###### 铜渣（`matte_copper_slag`）

将离开熔炼或炉渣贫化工序的含铜炉渣记录为废物流，直至其可证明满足场址声明的共产品判定条件。内部返渣属于内部转移，不得重复计为外部投入或输出。

- 选定流：铜渣 `3b318911-2500-490f-8f56-fea047c8fbea`
- 流属性/单位：Mass / kg
- 数量规则：依据发运、称量、水分和库存变化记录计算外排干铜渣，并扣除内部循环量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 干铜锍输出的干铜渣 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_matte_outputs_and_emissions`
- 来源：`us-epa-ap42-primary-copper-smelting-1995`

##### 基本流

###### 排放至空气的二氧化硫（`matte_sulfur_dioxide_air`）

记录经过已声明烟气收集和治理系统后释放的二氧化硫。进入回收硫酸的硫不得同时记录为排放。

- 选定流：二氧化硫（排放至未指定空气）
- 流属性/单位：Mass / kg
- 数量规则：根据经验证的连续监测、烟道测试或已核对硫平衡计算控制后释放量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干铜锍输出的二氧化硫 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_matte_outputs_and_emissions`
- 来源：`us-epa-ap42-primary-copper-smelting-1995`

###### 排放至空气的总颗粒物（`matte_particulate_air`）

记录经控制后进入已声明空气隔室的总颗粒物。若有实测粒径级或金属物种，则作为单独基本流添加；不得将 PM2.5 UUID 当作总颗粒物。

- 选定流：颗粒物（总量，排放至未指定空气）
- 流属性/单位：Mass / kg
- 数量规则：根据经验证的烟道测试或连续测量及运行小时数计算控制后总颗粒物释放量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干铜锍输出的总颗粒物 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_matte_outputs_and_emissions`
- 来源：`us-epa-ap42-primary-copper-smelting-1995`

###### 排放至空气的化石二氧化碳（`matte_fossil_co2_air`）

仅记录边界内燃料燃烧和含碳还原剂产生的直接化石二氧化碳。上游电力和燃料供应排放留在关联供应数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据计量燃料、声明碳含量、氧化率及实测烟气核对计算直接化石二氧化碳
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干铜锍输出的化石二氧化碳 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_matte_outputs_and_emissions`
- 来源：`us-epa-ap42-primary-copper-smelting-1995`

### 过程：铁置换制沉积铜（`p_cement_copper_production`）

#### 输入

##### 产品流

###### 含铜浸出富液（`cement_pregnant_leach_solution`）

记录进入置换工序的含铜水溶液。保留溶液体积或质量、密度、铜浓度、总铁、酸度、硫酸根、悬浮物、温度、来源过程和循环状态。

- 选定流：含铜硫酸盐浸出富液
- 流属性/单位：Mass / kg
- 数量规则：依据置换报告期内已核对的流量测量和密度计算溶液质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干沉积铜输出的浸出富液 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cement_inputs_and_energy`
- 来源：`us-bureau-mines-copper-materials-survey-1965`

###### 用作置换铁的钢铁废碎料（`cement_scrap_steel`）

记录作为置换用铁加入的钢铁废碎料。保留牌号、涂层、污染物、总铁、未反应返料及是否承担前一产品系统负荷等信息。

- 选定流：钢铁废碎料 `6cb5e364-ba39-4009-8b40-a76fdc88bc42`
- 流属性/单位：Mass / kg
- 数量规则：根据投料、回收未反应料及库存变化质量计算钢铁废碎料净消耗量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 干沉积铜输出消耗的钢铁废碎料 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cement_inputs_and_energy`
- 来源：`us-bureau-mines-copper-materials-survey-1965`

###### 中压电（`cement_electricity`）

记录溶液转移、搅拌、沉淀设备、分离、通风和边界内产品处理所输入的有功电量。

- 选定流：中压电
- 流属性/单位：Energy / kWh
- 数量规则：核对报告期的输入有功电量、场内发电、输出电量和适用分表
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干沉积铜输出的 kWh
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cement_inputs_and_energy`
- 来源：`us-bureau-mines-copper-materials-survey-1965`, `eu-commission-pef-method-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 沉积铜产品（`cement_copper_product`）

按干基记录分离后的沉积铜产品。保留收到状态质量、水分、铜品位、残余铁、不溶物、物理状态和放行规格。

- 选定流：沉积铜（泥铜）
- 流属性/单位：Mass / kg
- 数量规则：根据实测产品质量和代表性水分测定计算放行的干沉积铜
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 干沉积铜输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cement_outputs_and_releases`
- 来源：`unsd-cpc-3-0-structure-2025`, `us-bureau-mines-copper-materials-survey-1965`

##### 废物流

###### 含硫酸亚铁废浸出液（`cement_spent_leach_solution`）

铜沉淀后液流转至循环、处理、排放或另一过程并跨越边界时记录。外部转移仅记录一次，并声明其去向。

- 选定流：含硫酸亚铁废浸出液
- 流属性/单位：Mass / kg
- 数量规则：根据实测体积、密度、循环、排放和库存变化记录计算外排废液质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干沉积铜输出的废液 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cement_outputs_and_releases`
- 来源：`us-bureau-mines-copper-materials-survey-1965`

##### 基本流

###### 排放至空气的氢（`cement_hydrogen_air`）

过量酸与铁反应产生的氢实际释放并跨越前景边界时记录。没有实测或已核对反应数据时，不得推定非零数量。

- 选定流：氢 `08a91e70-3ddc-11dd-949c-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据已核对铁消耗、溶液酸度、铜沉淀和排气数据计算或测量直接氢释放量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干沉积铜输出的氢 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cement_outputs_and_releases`
- 来源：`us-bureau-mines-copper-materials-survey-1965`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_branches` | 生产铜锍和沉积铜的设施 | 首先细分过程线、计量表、批次和库存变化，使每个已声明参考产品仅承担可直接归属的前景投入和输出。 | `eu-commission-pef-method-2021` |
| `allocation_shared_services` | 共用公用工程和处理 | 仅分配无法细分的真正共用服务。采用能表示因果关系的有记录物理驱动量，例如计量能源、处理烟气体积、溶液体积或干物料吞吐量；不得仅为方便按产品总质量分配。 | `eu-commission-pef-method-2021` |
| `allocation_sulfuric_acid` | 回收硫酸 | 将回收硫酸保留为单独产品输出。优先细分或系统扩展；均不可行时，先采用并论证相关物理关系，再考虑经济关系。报告硫酸浓度和分配敏感性。 | `us-epa-ap42-primary-copper-smelting-1995`, `eu-commission-pef-method-2021` |
| `allocation_slag_and_recycle` | 铜渣和内部循环 | 内部返渣作为内部转移，不再次承担上游负荷。外部转移铜渣在具备产品状态证明前按废物记录；单独披露处理、回收信用或负荷划分。 | `us-epa-ap42-primary-copper-smelting-1995`, `eu-commission-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_matte_material_inputs` | `p_matte_smelting` | 铜精矿和石英石投入 | 地磅、批次、化验、水分和库存记录 | 接收质量；退料质量；期初和期末库存；水分；铜；硫；铁；脉石；痕量元素；石英组成 | 将经校准称量及代表性实验室样品核对至每批或生产期 | kg 和质量分数 | 每次接收和每批；按月核对 | 至少一个代表性运行年度，较短生产期则覆盖整个生产期 | 向已声明产品供料的所有前景熔炼单元 | 干投入净量等于接收量加期初库存减退料和期末库存，再归一化至干铜锍输出 | 衡器校准；采样计划；实验室方法；样品流转记录；核对残差 |
| `cp_matte_energy_and_gases` | `p_matte_smelting` | 天然气、工业氧气和电力 | 结算表、分表、发票和运行日志 | 气体体积；温度；压力；氧气体积和纯度；输入电量；场内发电；输出电量；停机时间；生产分配驱动量 | 将经校准计量表和发票与熔炼报告期按时间对齐 | m3 和 kWh | 连续或每次交付；按月核对 | 与产品输出相同期间，覆盖季节和生产期变化 | 边界内全部炉体、烟气净化及辅助设备 | 输入净量减输出量，仅按已记录物理驱动量分摊，并归一化至干铜锍输出 | 仪表校准；发票核对；缺失数据日志；基准条件换算 |
| `cp_matte_outputs_and_emissions` | `p_matte_smelting` | 铜锍、硫酸、铜渣、二氧化硫、颗粒物和化石二氧化碳 | 产品发运、库存、化验、烟气监测、烟道测试、燃料和残余物记录 | 产品和炉渣质量；水分；铜；硫；铁；硫酸质量和浓度；烟气流量；污染物浓度；运行小时；燃料碳；内部循环 | 核对产品和残余物平衡与经验证的控制后排放监测 | kg、质量分数、浓度和气体体积 | 每批或每次发运；具备条件时连续监测；按许可进行烟道测试 | 与投入相同的代表性年度或完整生产期 | 边界内所有产品放出、烟气处理、残余物处理和排放点 | 计算干输出和控制后释放量，扣除内部循环，并归一化至干铜锍输出 | 称量和实验室 QA；CEMS QA；烟道测试报告；硫和碳平衡闭合；库存核对 |
| `cp_cement_inputs_and_energy` | `p_cement_copper_production` | 浸出富液、钢铁废碎料和电力 | 流量计、储槽、化验、地磅、库存、计量表和发票记录 | 溶液体积和密度；铜；铁；酸度；硫酸根；悬浮物；温度；废钢投料和返料；废钢铁含量和涂层；输入电量、场内发电和输出电量 | 将经校准溶液、质量、化验和电力记录与置换批次按时间对齐 | kg、m3、质量浓度、质量分数和 kWh | 每批或连续流；按月核对 | 至少一个代表性运行年度，较短生产期则覆盖整个生产期 | 边界内所有置换、分离、通风和产品处理单元 | 计算溶液、废钢和电力净投入，并归一化至干沉积铜输出 | 仪表和衡器校准；采样计划；实验室 QA；发票核对；反应平衡残差 |
| `cp_cement_outputs_and_releases` | `p_cement_copper_production` | 沉积铜、废液和氢 | 产品质量、水分、化验、溶液流量、储槽、排气和反应平衡记录 | 产品质量；水分；铜；铁；不溶物；废液体积和密度；铜；亚铁和高铁；酸度；硫酸根；循环和排放；氢测量或计算输入 | 按批次或报告期核对干产品、溶液、铜、铁和排气平衡 | kg、m3、质量浓度和质量分数 | 每批或连续流；按月核对 | 与置换投入相同期间 | 边界内所有分离、循环、排放、产品调理和排气点 | 扣除内部循环后计算外部输出，并归一化至干沉积铜输出 | 衡器和流量计校准；代表性水分样品；实验室 QA；铜和铁平衡闭合；排气方法文件 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_product_mass` | 铜锍和沉积铜 | 干产品质量 = 收到状态产品质量 ×（1 − 水分质量分数） | 收到状态质量；代表性水分质量分数 | kg 干产品 | `eu-commission-pef-method-2021` |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 报告期净交换量 × 1,000 / 报告期参考产品干质量 | 净交换量；参考产品干质量 | 每 1,000 kg 干产品的行单位 | `eu-commission-pef-method-2021` |
| `calc_gas_reference_volume` | 天然气和工业氧气 | 使用有记录的仪表修正或气体定律修正，将工况体积换算至已声明计量基准温度和压力；不得混用不兼容的基准条件。 | 工况体积；温度；压力；仪表修正；具有实质影响时的气体压缩因子 | 已声明基准条件下的 m3 | `us-epa-ap42-primary-copper-smelting-1995` |
| `calc_matte_sulfur_balance` | 铜锍分支 | 核对铜精矿及其他投入中的硫与铜锍、炉渣、回收硫酸、直接硫排放及其他实测含硫输出；调查并披露残差。 | 干质量；硫化验；硫酸浓度；监测排放 | 硫平衡闭合度及归一化含硫输出 | `us-epa-ap42-primary-copper-smelting-1995` |
| `calc_cementation_balance` | 沉积铜分支 | 核对浸出富液、钢铁废碎料、沉积铜、未反应废钢、废液、残余物和释放中的铜与铁；以 Fe + CuSO4 → Cu + FeSO4 反应作为化学计量 QA 关系，不得替代前景测量。 | 溶液流量和化验；废钢及产品质量和化验；废液组成 | 铜平衡闭合度；铁平衡闭合度；QA 残差 | `us-bureau-mines-copper-materials-survey-1965` |
| `calc_stack_release` | 直接烟囱排放 | 污染物质量 = 经验证的控制后污染物浓度 × 相容的干或湿烟气体积；按适用情况记录水分、氧基准、温度和压力修正 | 浓度；烟气流量；运行时间；修正参数 | 释放污染物 kg | `us-epa-ap42-primary-copper-smelting-1995` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 声明分支、物理状态、水分基准、铜品位、相关杂质、放行规格和采样方法；不得以精炼状态或矿石状态 UUID 作为代理。 | 产品规格；发运记录；实验室证书；采样计划 |
| `dq_temporal_alignment` | 全部前景交换 | 投入、输出、库存变化和排放采用同一报告期。覆盖一个代表性运行年度，或说明较短生产期具有代表性的原因。 | 带日期原始记录；生产日历；停机和异常运行日志 |
| `dq_measurement_control` | 仪表、衡器和化验 | 保留每项物料交换的校准状态、样品代表性、实验室方法、检出限、替代数据和不确定性。 | 校准证书；QA/QC 控制图；实验室报告；缺失数据台账 |
| `dq_balance_closure` | 两个分支 | 报告质量平衡残差和分支特定铜平衡；铜锍另报告硫平衡，沉积铜另报告铁平衡。调查实质残差，不得以未测流强制闭合。 | 签署的核对工作表；化验记录；残差说明 |
| `dq_atomic_completeness` | 清单 | 将每项场址特定材料、废物和排放物种作为单独原子交换添加，并分别给出身份、属性、单位、数量规则和去向。 | 流清单；许可污染物清单；废物联单；完整性审查 |
| `dq_primary_manufacturing_data` | 前景制造 | 前景生产过程使用企业特定数据，并披露任何二手数据替代及其影响。 | 计量、批次、发票、化验、发运和监测记录；替代数据日志；敏感性结果 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_branch` | 数据集身份 | 确认 CPC 41411 范围，声明且仅声明一个参考产品分支，并拒绝以铜矿石、铜精矿、粗铜、阳极铜、精炼铜、铜合金、铜粉或铜废碎料作为参考产品。 | `unsd-cpc-3-0-structure-2025` |
| `validate_reference_mass` | 参考流 | 确认经记录的水分换算后参考输出等于 1,000 kg 干产品，且所有清单数量采用同一分母。 | `eu-commission-pef-method-2021` |
| `validate_process_completeness` | 过程清单 | 对所选分支核查所有相关过程步骤、物料和能源投入、产品和共产品输出、废物及控制后基本流释放；跳过的行必须有“不适用”依据。 | `us-epa-ap42-primary-copper-smelting-1995`, `us-bureau-mines-copper-materials-survey-1965`, `eu-commission-pef-method-2021` |
| `validate_no_double_counting` | 上游和内部流 | 确认上游供应负荷只出现在关联数据集中，内部循环不重复计作外部交换，进入硫酸的硫不再记录为二氧化硫排放。 | `us-epa-ap42-primary-copper-smelting-1995` |
| `validate_balances` | 质量、铜、硫和铁 | 两个分支均核查总质量和铜闭合，铜锍核查硫闭合，沉积铜核查铁闭合。报告残差、阈值、调查和更正，不得虚构平衡流。 | `us-epa-ap42-primary-copper-smelting-1995`, `us-bureau-mines-copper-materials-survey-1965` |
| `validate_allocation` | 多输出过程 | 确认首先尝试细分，每项剩余共用负荷均有因果驱动量，回收硫酸为单独输出，且物理关系、系统扩展或经济分配均完整披露并开展敏感性分析。 | `eu-commission-pef-method-2021` |
| `validate_uuid_status` | TianGong 流身份 | 仅使用已直接验证的 state-100 UUID。九个已声明未解决行保持 UUID 为空，直至验证具有相容流类型、分类、产品状态、属性和单位组的精确公共身份。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 铜锍或沉积铜的门到门前景生产数据集 |
| downstream_use | `secondary_dataset`；在代表性、完整性、分配和未解决身份审查后可作 `background_dataset` |
| allowed_use | 需要生产者大门处铜锍或沉积铜投入，且技术、地理范围、品位和边界相容的产品足迹及生命周期模型 |
| excluded_use | 直接表示矿石开采、铜精矿生产、浸出富液制备、粗铜或阳极铜生产、精炼、铜制成品，或对两个覆盖分支作未声明平均 |
| required_metadata | 所选分支；地理范围；技术；报告期；干质量方法；产品品位和物理状态；投入化验；能源供应；氧气和气体基准条件；污染控制；共产品；内部循环；分配；上游关联；未解决 UUID |
| required_quality_disclosure | 原始数据占比；时间和地理代表性；仪表和化验 QA；缺失数据处理；适用的质量、铜、硫和铁平衡残差；排放测量基准；分配敏感性；偏离和截断 |
| update_trigger | 进料品位、炉型或置换技术、能源或氧气供应、污染控制、制酸回收、溶液循环、产品规格、分配、场址地理范围发生实质变化，或取得精确 TianGong UUID 或双来源范围证据 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC Version 3.0 Structure》，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-04） | CPC 41411 正式身份和英文标题 |
| `china-product-specific-origin-rules` | `official_guidance` | 《附件五 产品特定原产地规则》。https://www.dg.gov.cn/attachment/cmsfile/304093920/0202/201504/daofile/doc233067.pdf（检索于 2026-09-04） | 专业中文品目术语“铜锍；沉积铜（泥铜）” |
| `us-epa-ap42-primary-copper-smelting-1995` | `official_guidance` | 美国环保署，AP-42 第 12.3 节《Primary Copper Smelting》，1986 年 10 月，1995 年 1 月重排。https://www.epa.gov/sites/default/files/2020-11/documents/c12s03.pdf（检索于 2026-09-04） | 铜锍过程分解、物料和能源投入、炉渣、烟气、排放及硫酸回收 |
| `us-bureau-mines-copper-materials-survey-1965` | `handbook` | 美国内政部矿务局，《Copper: A Materials Survey》，Information Circular 8225，1965。https://stacks.cdc.gov/view/cdc/206386/cdc_206386_DS1.pdf（检索于 2026-09-04） | 沉积铜定义、铁置换反应、浸出富液、置换铁、废液及直接氢释放路径 |
| `eu-commission-pef-method-2021` | `official_guidance` | 欧盟委员会，Commission Recommendation (EU) 2021/2279，Annexes 1 to 2，Product Environmental Footprint Method，2021。https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf（检索于 2026-09-04） | 企业特定制造数据、完整性、透明度、归一化、数据质量及多功能性层级 |
