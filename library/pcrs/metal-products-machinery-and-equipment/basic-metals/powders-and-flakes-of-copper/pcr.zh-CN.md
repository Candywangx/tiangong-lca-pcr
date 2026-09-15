---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.powders-and-flakes-of-copper
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铜粉及片状粉末

## 1. 范围与适用性

本PCR适用于以粉末或片状粉末形态投放市场、在生产者厂门交付的单质铜产品。涵盖以雾化法、氧化物还原法或电解法生产铜粉，以机械研磨铜粉生产片状粉末，以及各路线特有的洗涤、干燥、还原或退火、粒度分级、混合、污染控制和包装。前景数据包应选择实际路线，并仅纳入符合条件的工序。

本PCR不涵盖铜矿石和精矿、铜锍、矿渣和含铜灰、作为产品出售的铜盐或铜氧化物、铜合金粉末、未经制粉而出售的废铜，以及下游压制、烧结、增材制造、浆料配制、零部件生产、使用和寿命终止阶段。纳米级表面功能化或化学合成路线仅可在披露全部单一试剂、溶剂、废物和排放时使用本PCR；本PCR不为未披露路线提供默认清单行。

## 2. 产品类别标识

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.powders-and-flakes-of-copper |
| classification_refs | CPC 3.0：41511，铜粉及片状粉末 |
| covered_products | 单质铜粉和单质铜片状粉末，包括雾化、氧化物还原、电解及机械片化牌号 |
| excluded_products | 铜合金粉末；作为产品出售的铜氧化物或铜盐粉末；铜矿石、铜锍、矿渣、含铜灰、废铜、浆料、压坯、烧结件和增材制造件 |
| representative_product | 符合申报销售规格的净干单质铜粉或片状粉末 |
| production_route | 雾化、氧化物还原、电解或铜粉片化研磨；前景数据包应申报一条实际路线及其调质顺序 |
| market_state | 装于销售容器、在生产者厂门交付的干粉或片状粉末，并申报形貌、粒度分布、铜含量、表面处理、水分、氧含量和包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供粉末或片状形态的单质铜，用于下游配制、致密化、涂覆或其他申报的工业用途 |
| How much | 生产者厂门处1 kg净干合格产品 |
| How well | 符合申报的铜含量、形貌、粒度分布、松装密度、水分、氧含量和表面处理规格 |
| How long or cycle | 一个生产批次及生产者厂门放行；不表征使用期限 |
| reference_flow_link | `reference_copper_powder_or_flakes` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg净干合格产品 |
| Reference product flow | 铜粉及片状粉末 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 铜含量和杂质规格；粉末或片状形貌；生产路线；粒度分布及测试方法；规定时的松装密度；水分和氧含量基准；表面处理或润滑剂残留；净干质量测定；再生料含量声明及监管链；生产地域和时期；销售包装纳入情况 |

构建前景数据包时，必须在数据集元数据、过程备注、参考流注释、产品说明或等效字段中申报`Required qualifiers`所列项目。缺失任何必需限定信息，均使该数据包的参考流定义不完整。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及含铜物料行 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用净干质量。扣除容器皮重，并单独报告水分或残留工艺液体；不得将包装毛重视为产品质量。 |
| `copper_assay_basis` | 铜质量平衡 | 质量及申报铜质量分数 | kg和kg/kg | 在同一干基上记录物料质量和实验室铜品位；计算含铜量时不得假定所有含铜物流均为纯铜。 |
| `electricity_energy` | 电力行 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表kWh原始数据，并按`calc_electricity_conversion`换算为MJ；标识电压等级、电网地域、供应方和计量边界。 |
| `gas_reference_volume` | 氮气、氢气及天然气行 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 说明压力、温度、湿基/干基及体积为实际状态还是标准化状态；不得合并身份或供应状态不同的气体。 |
| `solvent_net_consumption` | 正庚烷行 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录新鲜投入、回收量、库存变化、废物转移和直接释放；仅在溶剂平衡闭合后报告净消耗。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制粉厂接收路线特定的阴极铜、阳极铜、氧化铜或铜粉前驱体，以及路线所需化学品和能源载体 |
| starting_condition_role | 前景门到门起始条件；上游生产由供应商或背景数据集表征 |
| product_classification_scope | 与CPC 3.0代码41511语义一致的单质铜粉和片状粉末，不受分类系统所有权影响 |
| recursive_input_rule | 以铜粉生产铜片状粉末时，将粉末作为`copper_powder_precursor`及其上游数据集仅记录一次；不得在片化过程中递归重复制粉系统 |
| upstream_dataset_requirement | 对每项外购投入使用地域、时间、技术和产品状态具有代表性的上游数据集；披露代理及再生料含量核算 |
| disclosure | 申报实际成形路线、起始物料状态和品位、中间产品转移、调质顺序、污染控制边界、回收物料回路、直接释放、包装边界、地域、生产时期和截断 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 前景过程边界 | 纳入选定制粉路线、路线特有的洗涤或气氛控制、干燥或退火、粒度调质、污染控制及最终包装，直至生产者厂门处的合格产品。 | `neikov-nonferrous-powder-2014`; `uspto-us4884754-copper-flakes` |
| `boundary_rule_2` | 条件路线 | 仅在液态铜被雾化时纳入雾化；仅在还原铜氧化物时纳入氧化物还原；仅在产生粉末沉积物时纳入电解；仅在铜粉前驱体被机械转化为片状粉末时纳入片化研磨。 | `neikov-nonferrous-powder-2014`; `uspto-us4884754-copper-flakes` |
| `boundary_rule_3` | 直接负荷 | 纳入直接能源使用、工艺气体、补充水、化学品、溶剂、废物、废水及实测或计算的直接释放。不得将上游电力或外购物料的排放列为前景基本流。 |  |
| `boundary_rule_4` | 排除的下游操作 | 排除粉末压制、烧结、浆料配制、涂覆应用、增材制造、成品制造、使用和寿命终止，除非另行申报的研究扩大边界。 | `uspto-us4884754-copper-flakes` |
| `boundary_rule_5` | 同类别递归 | 外购或转移的铜粉前驱体应作为一个带上游数据集的产品投入；不得通过递归类别追踪重复核算同一单元过程。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `atomization` | 铜熔化与雾化 | `conditional` | 当申报路线以水或氮气将熔融铜雾化为颗粒时纳入 | 前景制粉 | 每kg与参考产品对账的合格雾化中间产品 |
| `oxide_reduction` | 氧化铜还原 | `conditional` | 当以氢气、天然气或申报的还原气氛还原铜氧化物时纳入 | 前景制粉 | 每kg与参考产品对账的合格还原中间产品 |
| `electrolysis` | 电解铜粉沉积 | `conditional` | 当电沉积形成可移除粉末沉积物时纳入 | 前景制粉与洗涤 | 每kg与参考产品对账的合格电解中间产品 |
| `flake_milling` | 铜粉片化研磨 | `conditional` | 当铜粉前驱体经机械压扁或粉碎形成片状粉末时纳入 | 前景形貌转化 | 每kg与参考产品对账的合格片状中间产品 |
| `finishing` | 分级、混合、控制与包装 | `required` | 对可销售的干铜粉或片状粉末始终纳入 | 前景精整及参考产品放行 | 每1 kg净干合格参考产品 |

### 过程：铜熔化与雾化（`atomization`）

#### 输入

##### 产品流

###### 原生阴极铜进料（`atomization_copper_cathode`）

记录用于雾化熔化的特定铜进料；不得以宽泛的铜合金或废铜身份替代。

- Selected flow: 原生阴极铜 `a3e71c01-d625-4f53-8c5e-caa08808cdaf`
- Flow property / unit: 质量 / kg
- Amount rule: 称量投入熔化系统的干阴极铜
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每kg合格雾化中间产品
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_atomization_records`
- Sources: `neikov-nonferrous-powder-2014`

###### 水雾化介质（`atomization_process_water`）

仅在水雾化时纳入；记录跨越过程边界的补充水，不记录内部循环水。

- Selected flow: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: 质量 / kg
- Amount rule: 经计量或质量平衡确定的补充工艺水
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每kg合格雾化中间产品
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_atomization_records`
- Sources: `neikov-nonferrous-powder-2014`

###### 氮气雾化气（`atomization_nitrogen_gas`）

仅在氮气作为雾化气或保护气时纳入。

- Selected flow: 氮气 `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- Flow property / unit: 体积 / m3
- Amount rule: 申报参考条件下计量的氮气体积
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每kg合格雾化中间产品
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_atomization_records`
- Sources: `neikov-nonferrous-powder-2014`

###### 雾化用电（`atomization_electricity`）

仅记录申报计量边界内雾化系统及其专用辅助设备消耗的电力。

- Selected flow: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: 净热值 / MJ
- Amount rule: 单独计量或以可辩护的分表方法分配给熔化、泵送、气体压缩和辅助设备的电力
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每kg合格雾化中间产品
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_atomization_records`
- Sources: `neikov-nonferrous-powder-2014`

#### 输出

##### 产品流

###### 雾化铜粉中间产品（`atomized_copper_powder_intermediate`）

将其作为转入精整的内部物流，不得作为额外参考产品输出。

- Selected flow: 雾化铜粉；UUID未解决
- Flow property / unit: 质量 / kg
- Amount rule: 计算转入精整的合格干中间产品质量
- Value mode: 计算值（`calculated_value`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每个雾化批次
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 由采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_atomization_records`
- Sources: `neikov-nonferrous-powder-2014`

### 过程：氧化铜还原（`oxide_reduction`）

#### 输入

##### 产品流

###### 氧化铜进料（`reduction_copper_oxide`）

记录实际铜氧化物组成和品位，因为CuO与Cu2O的铜、氧含量不同。

- Selected flow: 氧化铜 `4cc720c4-ff95-41cf-85ed-d73cb80c1b3a`
- Flow property / unit: 质量 / kg
- Amount rule: 称量投入的干氧化铜，并记录CuO/Cu2O组成及铜品位
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每kg合格还原中间产品
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_reduction_records`
- Sources: `neikov-nonferrous-powder-2014`

###### 氢气还原气（`reduction_hydrogen_gas`）

仅在分子氢作为还原气跨越前景边界时纳入。

- Selected flow: 氢气；UUID未解决
- Flow property / unit: 体积 / m3
- Amount rule: 申报参考条件下计量的氢气体积
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每kg合格还原中间产品
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_reduction_records`
- Sources: `neikov-nonferrous-powder-2014`

###### 天然气还原气氛或炉用燃料（`reduction_natural_gas`）

仅在申报还原气氛中消耗气态天然气，或在现场燃烧天然气提供工艺热时纳入。

- Selected flow: 气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: 体积 / m3
- Amount rule: 申报参考条件下计量的气态天然气
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每kg合格还原中间产品
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_reduction_records`
- Sources: `neikov-nonferrous-powder-2014`

###### 还原工序用电（`reduction_electricity`）

仅记录还原路线及其专用物料输送和控制设施用电。

- Selected flow: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: 净热值 / MJ
- Amount rule: 单独计量或以可辩护的分表方法分配给炉体、输送、破碎和辅助设备的电力
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每kg合格还原中间产品
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_reduction_records`
- Sources: `neikov-nonferrous-powder-2014`

#### 输出

##### 产品流

###### 还原铜粉中间产品（`reduced_copper_powder_intermediate`）

将其作为转入精整的内部物流；不合格或回用物料应在前景平衡中单独记录。

- Selected flow: 氧化物还原铜粉；UUID未解决
- Flow property / unit: 质量 / kg
- Amount rule: 计算转入精整的合格干中间产品质量
- Value mode: 计算值（`calculated_value`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每个还原批次
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 由采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_reduction_records`
- Sources: `neikov-nonferrous-powder-2014`

##### 基本流

###### 直接化石源二氧化碳（`reduction_fossil_carbon_dioxide`）

仅纳入现场天然气氧化或燃烧产生的排放；排除购入电力或天然气数据集所含上游排放。

- Selected flow: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: 质量 / kg
- Amount rule: 实测直接排放，或按`calc_direct_fossil_co2`以场址燃料碳平衡计算
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每kg合格还原中间产品
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 由采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_reduction_records`
- Sources:

### 过程：电解铜粉沉积（`electrolysis`）

#### 输入

##### 产品流

###### 阳极铜（`electrolysis_anode_copper`）

根据申报电解制粉生产期的期初、期末质量记录确定阳极铜消耗量。

- Selected flow: 阳极铜 `8885183a-5ee5-492e-a31b-9f5f1ac9d636`
- Flow property / unit: 质量 / kg
- Amount rule: 称量制粉生产期内的阳极消耗量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每kg合格电解中间产品
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_electrolysis_records`
- Sources: `neikov-nonferrous-powder-2014`

###### 硫酸电解液补充（`electrolysis_sulfuric_acid`）

将进入边界的硫酸同时记录为交付溶液质量和实测浓度，并保留两项数值。

- Selected flow: 硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: 质量 / kg
- Amount rule: 经浓度校正、跨越过程边界的硫酸补充量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每kg合格电解中间产品
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_electrolysis_records`
- Sources: `neikov-nonferrous-powder-2014`

###### 电解液及洗涤用水（`electrolysis_process_water`）

记录跨越边界的补充水；不得重复计算循环电解液或洗涤水。

- Selected flow: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: 质量 / kg
- Amount rule: 电解液配制及铜粉洗涤的计量补充水
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每kg合格电解中间产品
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_electrolysis_records`
- Sources: `neikov-nonferrous-powder-2014`

###### 电解用电（`electrolysis_electricity`）

记录申报生产期内整流器及专用辅助设备用电，不得合并无关场址负荷。

- Selected flow: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: 净热值 / MJ
- Amount rule: 分配至该生产期的整流器及辅助设备计量电力
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每kg合格电解中间产品
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_electrolysis_records`
- Sources: `neikov-nonferrous-powder-2014`

#### 输出

##### 产品流

###### 电解铜粉中间产品（`electrolytic_copper_powder_intermediate`）

将洗涤、干燥后的铜粉作为转入精整的内部物流，不得作为第二项最终产品。

- Selected flow: 电解铜粉；UUID未解决
- Flow property / unit: 质量 / kg
- Amount rule: 计算转入精整的合格干中间产品质量
- Value mode: 计算值（`calculated_value`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每个电解生产期
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 由采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_electrolysis_records`
- Sources: `neikov-nonferrous-powder-2014`

##### 废物流

###### 含铜废硫酸电解液（`spent_copper_electrolyte`）

仅记录跨越边界送往再生或处理的电解液，并保留其铜和酸组成。

- Selected flow: 含铜废硫酸电解液；UUID未解决
- Flow property / unit: 质量 / kg
- Amount rule: 称量转移至再生或处理的质量，并记录铜和酸浓度
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每kg合格电解中间产品
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_electrolysis_records`
- Sources: `neikov-nonferrous-powder-2014`

###### 含铜漂洗废水（`copper_bearing_rinse_wastewater`）

将水相排放与废电解液及捕集固体分别记录。

- Selected flow: 含铜漂洗废水；UUID未解决
- Flow property / unit: 质量 / kg
- Amount rule: 计量排放质量，并记录铜浓度和去向
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每kg合格电解中间产品
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_electrolysis_records`
- Sources: `neikov-nonferrous-powder-2014`

### 过程：铜粉片化研磨（`flake_milling`）

#### 输入

##### 产品流

###### 铜粉前驱体（`copper_powder_precursor`）

片状粉末生产仅记录一次上游铜粉投入，不得递归重现其制造系统。

- Selected flow: 铜粉前驱体；UUID未解决
- Flow property / unit: 质量 / kg
- Amount rule: 称量投入研磨的净干铜粉
- Value mode: 前景记录（`foreground_record`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 每kg合格片状中间产品
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_flake_milling_records`
- Sources: `uspto-us4884754-copper-flakes`

###### 硬脂酸表面活性剂（`flake_stearic_acid`）

仅在硬脂酸实际作为研磨助剂或表面活性剂投入时纳入。

- Selected flow: 硬脂酸；UUID未解决
- Flow property / unit: 质量 / kg
- Amount rule: 称量投入研磨的新鲜硬脂酸
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每kg合格片状中间产品
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_flake_milling_records`
- Sources: `uspto-us4884754-copper-flakes`

###### 正庚烷研磨介质（`flake_heptane`）

仅在正庚烷作为液态研磨介质或溶剂投入时纳入。

- Selected flow: 正庚烷 `f3026a5f-e4ce-4bb3-b015-92d56ebb0091`
- Flow property / unit: 质量 / kg
- Amount rule: 新鲜正庚烷投入减去有记录的退回供应商量，而非循环总装料量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每kg合格片状中间产品
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_flake_milling_records`
- Sources: `uspto-us4884754-copper-flakes`

###### 氮气气流磨气体（`flake_nitrogen_gas`）

仅在以氮气作为气流研磨或惰化气体时纳入。

- Selected flow: 氮气 `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- Flow property / unit: 体积 / m3
- Amount rule: 申报参考条件下计量的氮气体积
- Value mode: 前景记录（`foreground_record`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每kg合格片状中间产品
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_flake_milling_records`
- Sources: `uspto-us4884754-copper-flakes`

###### 片化研磨用电（`flake_electricity`）

记录申报边界内研磨、干燥、气体压缩、回收及专用辅助设备用电。

- Selected flow: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: 净热值 / MJ
- Amount rule: 单独计量或以可辩护的分表方法分配给研磨、真空干燥、气体压缩和辅助设备的电力
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每kg合格片状中间产品
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_flake_milling_records`
- Sources: `uspto-us4884754-copper-flakes`

#### 输出

##### 产品流

###### 铜片状粉末中间产品（`copper_flakes_intermediate`）

将合格干片状粉末作为转入精整的内部物流，并与前驱体投入及路线损失对账。

- Selected flow: 研磨铜片状粉末；UUID未解决
- Flow property / unit: 质量 / kg
- Amount rule: 计算转入精整的合格干片状粉末质量
- Value mode: 计算值（`calculated_value`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每个片化研磨批次
- Basis kind: 过程产出（`process_output`）
- Evidence kind: 由采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_flake_milling_records`
- Sources: `uspto-us4884754-copper-flakes`

### 过程：分级、混合、控制与包装（`finishing`）

#### 输入

##### 产品流

###### 精整用电（`finishing_electricity`）

记录分级、混合、控制和包装用电，不得重复制粉路线用电。

- Selected flow: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: 净热值 / MJ
- Amount rule: 单独计量或以可辩护的分表方法分配给筛分、分级、混合、除尘和包装的电力
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每1 kg净干合格参考产品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 采集记录（`collected_record`）
- Collection protocol: `cp_finishing_records`
- Sources: `neikov-nonferrous-powder-2014`

#### 输出

##### 产品流

###### 参考铜粉或片状粉末（`reference_copper_powder_or_flakes`）

此为唯一的定量参考输出；选择粉末或片状形貌，并披露所选路线和销售规格。

- Selected flow: 铜粉及片状粉末
- Flow property / unit: 质量 / kg
- Amount rule: 按扣除皮重并校正水分后的合格包装质量计算1 kg净干合格产品
- Value mode: 计算值（`calculated_value`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: 一个参考流
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 由采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_finishing_records`
- Sources: `un-cpc-3-structure-2025`

##### 基本流

###### 直接排放至空气的铜（`finishing_copper_to_air`）

仅记录穿过已申报室外空气边界的铜；不得用该行代替厂内捕集粉尘或转移废物。

- Selected flow: 铜 `fe0acd60-3ddc-11dd-a7a0-0050c2490048`
- Flow property / unit: 质量 / kg
- Amount rule: 实测工艺排气中的铜排放，或以经验证的浓度和干烟气体积计算
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每1 kg净干合格参考产品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 由采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_finishing_records`
- Sources:

###### 直接排放至室外空气的正庚烷（`flake_heptane_to_air`）

仅在片化路线中正庚烷跨越室外空气边界时纳入；不得采用室内空气子类别的候选UUID。

- Selected flow: 排放至室外空气的庚烷（未特指子类别）；UUID未解决
- Flow property / unit: 质量 / kg
- Amount rule: 实测工艺排气正庚烷，或按`calc_heptane_balance`计算损失量
- Value mode: 计算值（`calculated_value`）
- Specificity: 场址特定（`site_specific`）
- Normalization basis: 每1 kg净干合格参考产品
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 由采集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_finishing_records`
- Sources: `uspto-us4884754-copper-flakes`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 前景细分 | 只要记录允许细分，即应通过分别计量选定制粉路线、片化转化、精整、污染控制及内部循环回路来避免分配。 |  |
| `allocation_rule_2` | 内部循环 | 不得向同一前景系统内返回的铜粉、粉尘、溶剂、电解液或水给予联产品抵扣；记录内部回路，仅核算新鲜补充量和跨边界输出。 |  |
| `allocation_rule_3` | 外运含铜物料 | 将每项外运含铜物料作为独立产品流或废物流记录，包含质量、铜品位、去向和合同状态。不得规定默认避免负荷抵扣或分配因子；披露研究特定处理，并在其显著影响结论时提供敏感性结果。 |  |
| `allocation_rule_4` | 场址共用服务 | 仅在无法细分时分配共用实测总量，并采用有记录的因果驱动因子，如计量运行时间或设备负荷；不得仅因产品价值易得而采用价值分配。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集规程

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_atomization_records` | `atomization` | 铜进料、雾化介质、电力、合格中间产品 | 批次及仪表记录 | batch_id; cathode_mass; cathode_assay; water_makeup; nitrogen_volume; gas_reference_conditions; electricity_kWh; accepted_dry_powder_mass | 经校准的秤、水表、气体流量计和电表及实验室放行记录 | kg; m3; kWh | 每批，按月对账仪表 | 至少12个代表性月份，或较短生产期的全期 | 申报场址边界内全部雾化设备及专用控制设施 | 汇总投入和能源，除以合格干中间产品，并核对铜质量 | 校准记录、发票、批次单、品位证书和仪表对账 |
| `cp_reduction_records` | `oxide_reduction` | 氧化物进料、还原气、电力、直接CO2、合格中间产品 | 批次、气体、仪表及排放记录 | batch_id; oxide_mass; CuO_Cu2O_fraction; copper_assay; hydrogen_volume; natural_gas_volume; gas_reference_conditions; electricity_kWh; direct_CO2_mass; accepted_dry_powder_mass | 经校准的秤和仪表、实验室分析、烟囱记录或燃料碳平衡 | kg; m3; kWh | 每批，按月对账公用工程和碳 | 至少12个代表性月份，或较短生产期的全期 | 还原炉、破碎、转移及专用控制设施 | 按批汇总；仅由前景化石气计算直接CO2；除以合格干中间产品 | 校准、燃料发票、组成证书、批次单、分析及碳平衡证据 |
| `cp_electrolysis_records` | `electrolysis` | 阳极、酸、水、电力、铜粉、电解液废物、漂洗废水 | 生产期、实验室、仪表及废物转移记录 | campaign_id; anode_opening_mass; anode_closing_mass; acid_makeup_mass; acid_concentration; water_makeup; electricity_kWh; dry_powder_mass; spent_electrolyte_mass; spent_electrolyte_copper; rinse_wastewater_mass; wastewater_copper | 称量、化学品库存、仪表、实验室分析及废物联单 | kg; kg/kg; kWh | 每个生产期，按月平衡 | 至少12个代表性月份，或较短生产期的全期 | 电解槽、循环、刮粉、洗涤、干燥及专用处理设施 | 计算阳极消耗和纯酸补充；核对铜和液体平衡；除以合格干中间产品 | 秤和仪表校准、实验室QA/QC、化学品发票、废物联单及生产期日志 |
| `cp_flake_milling_records` | `flake_milling` | 粉末前驱体、硬脂酸、正庚烷、氮气、电力、片状中间产品 | 批次、溶剂库存、气体及仪表记录 | batch_id; precursor_dry_mass; precursor_assay; stearic_acid_mass; fresh_heptane_mass; recovered_heptane_mass; heptane_inventory_change; nitrogen_volume; gas_reference_conditions; electricity_kWh; accepted_dry_flake_mass | 经校准的秤、罐或容器库存、气体流量计、电表及放行检测 | kg; m3; kWh | 每批，按月对账溶剂 | 至少12个代表性月份，或较短生产期的全期 | 研磨、干燥、气流研磨、转移及专用回收设施 | 应用溶剂平衡；汇总能源和气体；除以合格干片状粉末输出 | 校准、采购和回收记录、批次单及放行检测证据 |
| `cp_finishing_records` | `finishing` | 电力、合格产品、铜空气排放、正庚烷空气排放 | 批号、包装、仪表、烟囱及溶剂平衡记录 | lot_id; gross_packed_mass; package_tare; sample_moisture; accepted_net_dry_mass; electricity_kWh; stack_copper_concentration; dry_gas_volume; measured_heptane_mass; upstream_intermediate_mass | 经校准的包装秤和仪表、放行检测、烟囱采样及经验证的溶剂平衡 | kg; kg/kg; kWh; m3 | 每批号，按月对账控制系统 | 至少12个代表性月份，或较短生产期的全期 | 分级、混合、除尘、包装及适用工艺排气口 | 计算净干合格产品和直接释放；将全部选定路线记录归一至1 kg产品 | 秤和仪表校准、分析证书、不合格批记录、烟囱QA/QC及对账 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | 参考产品 | 净干合格质量 = 包装毛重 - 包装皮重 - 实测水分对应的水质量 | gross_packed_mass; package_tare; sample_moisture | kg净干合格产品 |  |
| `calc_electricity_conversion` | 每个电力行 | electricity_MJ = metered_kWh × 3.6 | electricity_kWh | MJ电力 |  |
| `calc_gas_normalization` | 氮气、氢气和天然气 | 使用记录的绝对压力、温度、压缩因子处理和湿基/干基，将仪表实际体积换算至申报参考条件；保留原始实际体积 | actual_volume; pressure; temperature; moisture_basis; reference_conditions | 申报参考条件下的m3 |  |
| `calc_pure_acid_makeup` | 硫酸 | 纯硫酸补充量 = 交付溶液质量 × 实测酸质量分数 | acid_makeup_mass; acid_concentration | 同时保留kg H2SO4当量和kg交付溶液 |  |
| `calc_copper_balance` | 每条选定路线及合并前景系统 | 核对进料含铜量与合格产品、跨边界含铜产品和废物、直接铜释放及库存变化的含铜量；调查并披露残差，不得强行闭合 | 干质量；铜品位；库存变化；铜释放数据 | 有记录的铜质量平衡和残差 |  |
| `calc_direct_fossil_co2` | 直接化石CO2 | 有代表性时采用实测烟囱CO2；否则仅依据前景化石天然气用量以及有记录的燃料碳含量和氧化情况计算，并排除上游排放 | natural_gas_volume; 燃料组成或碳含量；氧化证据 | kg直接化石CO2 |  |
| `calc_heptane_balance` | 正庚烷路线 | 新鲜正庚烷 + 期初库存 = 回收正庚烷 + 退回正庚烷 + 废正庚烷 + 直接空气释放 + 期末库存 + 有记录残差 | 新鲜、回收、退回、废弃、释放及库存记录 | kg净消耗、kg直接释放及平衡残差 | `uspto-us4884754-copper-flakes` |
| `calc_route_normalization` | 所有过程行 | 将每条选定路线交换按合格干中间产品归一化，将中间产品链接至精整，再按净干合格参考产品归一化合并系统且不重复计算内部转移 | 过程总量；中间产品转移；合格产品 | 每1 kg参考产品的交换量 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 保留铜含量、形貌、粒度分布及方法、规定时的松装密度、水分、氧含量和表面处理的分析证书及销售规格。 | 批次放行证书和产品规格 |
| `dq_route` | 过程图 | 标识实际路线及设备顺序；条件过程应与清单行一致，未采用路线不得存在非零交换。 | 工艺流程图、批次路线代码和操作记录 |
| `dq_temporal` | 前景总量 | 除非生产期较短，否则使用至少12个代表性月份；说明开车、停车、异常和排除时段。 | 生产日历和排除日志 |
| `dq_completeness` | 质量、铜、水、溶剂和能源记录 | 将仪表和库存与采购、生产及废物记录对账；披露全部残差及其处置。 | 签署的对账和纠正措施记录 |
| `dq_measurement` | 秤、仪表和分析 | 使用校准有效期内的仪器和具有文件化取样、检出限、平行样、空白及适用监管链的实验室方法。 | 校准证书和实验室QA/QC |
| `dq_upstream` | 外购产品投入 | 匹配地域、技术、产品状态、纯度、再生料含量及交付边界；披露每项代理。 | 供应商声明和数据集选择日志 |
| `dq_uncertainty` | 已报告交换 | 定量或定性分级测量、分配、代理选择、组成和时间变异的不确定性；不得以PCR范围替代缺失的前景记录。 | 不确定性登记和敏感性结果 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 产品标识 | 输出必须是单质铜粉或片状粉末；销售输出为铜合金、氧化物、盐、矿石、铜锍、矿渣、含铜灰、废铜、浆料、压坯或成品时，应拒绝该记录。 | `un-cpc-3-structure-2025` |
| `validation_rule_2` | 参考流 | 参考输出应等于1 kg净干合格产品，并申报全部必需限定信息；缺失天工参考产品UUID仍为明确的编制缺口。 |  |
| `validation_rule_3` | 路线一致性 | 仅纳入申报的成形路线；每个纳入的条件过程必须具有详细清单，未采用路线不得贡献交换。 | `neikov-nonferrous-powder-2014`; `uspto-us4884754-copper-flakes` |
| `validation_rule_4` | 原子化清单 | 每行必须表征一个产品流、废物流或基本流；组合公用工程、燃料、化学品、废物或排放无效。 |  |
| `validation_rule_5` | 内部中间产品 | 雾化、还原、电解或片状中间产品应仅一次链接路线生产与精整，不得误作额外最终输出。 |  |
| `validation_rule_6` | 铜平衡 | 含铜量平衡应纳入进料、合格输出、外运物料、废物、直接释放和库存变化；未解决残差应披露并调查。 |  |
| `validation_rule_7` | 能源与直接排放 | 电力应由保留的kWh记录换算为MJ；直接化石CO2仅纳入前景氧化或燃烧，并排除上游电力排放。 |  |
| `validation_rule_8` | 溶剂路线 | 使用正庚烷时，应核对新鲜投入、回收、库存变化、废物转移和直接释放；不得将室内空气正庚烷UUID用于室外工艺排气。 | `uspto-us4884754-copper-flakes` |
| `validation_rule_9` | 证据缺口 | 不得由单一案例或搜索摘要发布外部数量范围；清单中的未解决UUID和范围证据需求在审查确切身份或双来源证据前应保持可见。 |  |

## 10. 发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | 由完整、经审查的前景数据包派生的`secondary_dataset`或`background_dataset` |
| downstream_use | 用于产品系统和生命周期模型中的铜粉或铜片状粉末供应过程数据集 |
| allowed_use | 当产品标识、路线、地域、时期、产品规格、再生料含量处理、上游数据集和分配方法对研究具有代表性时使用 |
| excluded_use | 不得作为铜合金粉末、铜化合物、废铜、下游粉末致密化或零件，以及未披露的化学或纳米功能化路线的代理 |
| required_metadata | PCR id和版本；路线；场址地域；生产时期；铜品位；形貌；粒度分布及方法；相关时的松装密度；水分和氧含量基准；表面处理；参考产品UUID状态；上游数据集标识；分配；截断；包装边界 |
| required_quality_disclosure | 前景覆盖、仪表和秤校准、实验室QA/QC、质量和铜平衡残差、适用时的溶剂平衡、条件行、数据缺口、代理、不确定性及未解决UUID或范围证据 |
| update_trigger | 路线或设备变化；进料或产品规格变化；能源、气体、水、溶剂、产率、废物或直接释放的实质变化；新增确切天工流；新增双来源定量证据；或发布者规定的复审期限届满 |

## 11. 数据来源

| Source id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-structure-2025` | `official_guidance` | 联合国统计司，CPC第3.0版结构，2025年6月30日，第41511行，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（2026-06-23获取；2026-09-04独立核验精确缓存字节） | 官方分类标识和类别表述 |
| `neikov-nonferrous-powder-2014` | `literature` | Oleg Neikov，“Non-ferrous powder production: Manufacturing methods and properties of copper, aluminium, titanium and nickel powders”，Powder Metallurgy Review，2014年夏季号，第64-75页，https://www.metal-powder.tech/wp-content/uploads/2016/07/MAGAZINE-PMR-Summer-2014-PDF-double-page-edition.pdf（2026-09-04核验原始PDF文本及渲染页） | 雾化、氧化物还原和电解过程分解；铜进料、还原气氛及路线披露要求 |
| `uspto-us4884754-copper-flakes` | `literature` | Preston B. Kemp, Jr.和Walter A. Johnson，US4884754A，“Process for producing fine copper flakes”，1989年12月5日授权，https://patents.google.com/patent/US4884754A/en（2026-09-04核验完整说明书和权利要求） | 铜粉前驱体、正庚烷和表面活性剂介质研磨、干燥及气流研磨过程分解 |
