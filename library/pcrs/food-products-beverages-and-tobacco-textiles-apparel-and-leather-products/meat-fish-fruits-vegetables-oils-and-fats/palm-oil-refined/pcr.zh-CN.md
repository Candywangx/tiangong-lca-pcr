---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.palm-oil-refined
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 精炼棕榈油

## 1. 范围与适用性

本 PCR 适用于炼油厂以毛棕榈油生产散装精炼棕榈油的前景数据包。其涵盖物理精炼所得的精炼、漂白、脱臭（RBD）棕榈油，以及在明确声明工艺路线时由化学精炼所得的中和、漂白、脱臭（NBD）棕榈油。代表性路线为常规物理精炼，因为该路线生产 RBD 棕榈油和棕榈脂肪酸馏出物（PFAD），且产品类别专属的炼油证据对该路线有所记载。

前景边界始于炼油厂入口接收毛棕榈油，止于炼油厂储罐内符合要求、可供发运的散装精炼棕榈油。毛棕榈油进厂运输可作为条件性前景过程纳入。油棕种植、棕榈油压榨、分提为棕榈液油或棕榈硬脂、零售包装、配送、使用、生物柴油转化和生命末期均不在默认前景边界内。上游毛棕榈油及其他外购投入仍作为关联产品投入，并须链接适当的上游数据集。

## 2. 产品类别标识

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.palm-oil-refined` |
| classification_refs | CPC 3.0:21652 Palm oil, refined |
| covered_products | 由油棕（Elaeis guineensis）果肉中油脂制得的散装精炼棕榈油，包括物理精炼 RBD 棕榈油，以及在声明路线和等级时的化学精炼 NBD 棕榈油 |
| excluded_products | 毛棕榈油；棕榈仁油；棕榈液油、棕榈硬脂、棕榈超级液油及其他分提产品；调和食用油；人造奶油及配制脂肪；生物柴油；零售包装产品 |
| representative_product | 炼油厂门口的散装精炼、漂白、脱臭棕榈油 |
| production_route | 毛棕榈油接收与储存、脱胶、漂白和过滤、物理脱酸/脱臭或声明的化学中和/脱臭、冷却、精滤和散装储存 |
| market_state | 炼油厂门口的散装成品，常温下通常为半固态；须声明食用级或工业级 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在炼油厂以毛棕榈油生产散装精炼棕榈油 |
| How much | 1,000 kg 符合要求的精炼棕榈油 |
| How well | 满足所声明的物理或化学精炼路线、产品等级、规格、地域和散装状态；食用产品声明须注明适用的食品规格，例如 Codex CXS 210-1999 |
| How long or cycle | 一个生产批次或声明的报告期，并归一化至 1,000 kg 合格产出；不指定使用寿命 |
| reference_flow_link | `palm_oil_refining` 的参考产品产出，位于分提或零售包装之前 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Palm oil, refined `029b6008-a809-4d77-8612-47451f7c98fa` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | refining_route; product_grade; applicable_product_specification; production_geography; reporting_period; bulk_or_packaged_state; fractionation_status; allocation_basis |

构建前景数据包时，须在数据集元数据、过程注释、参考流注释、产品描述或等效的数据包字段中声明 `Required qualifiers` 所列各项。缺少任何必需限定项，均会使该数据包的参考流定义不完整。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 精炼棕榈油参考产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将定量参考精确设为 1,000 kg 符合要求的散装精炼棕榈油，并按该质量缩放全部前景数量。 |
| `material_mass_conversion` | 毛棕榈油、精炼助剂、副产品和固体废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用有记录的换算系数将实测质量转换为 kg；没有记录密度及测量条件时，不得由体积推算质量。 |
| `energy_carrier_separation` | 外购电力、蒸汽和锅炉燃料 | 声明的载能体属性 | 视情况采用 kWh、MJ、kg 或 m3 | 按实测单位分别保留外购电力、外购蒸汽和每种锅炉燃料；记录所用的全部能量换算系数和热值基准。 |
| `water_volume` | 工艺用水和废水 | 声明的体积属性 | m3 | 按 1,000 L = 1 m3 将仪表记录的升数转换为 m3，并保留原始仪表读数。 |
| `transport_service` | 纳入时的毛棕榈油进厂运输 | 运输服务 | tkm | 吨公里等于毛棕榈油运输质量（吨）乘以载货距离（公里）；建模空载返程时须单独披露。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_refinery_operations` | 前景棕榈油炼油厂 | 纳入毛棕榈油接收与储存、脱胶、漂白和废白土去除、路线特定的脱酸或中和、脱臭、冷却、精滤、散装储存、公用工程、直接排放、废水、废物和副产品。 | `mpob-yung-2020-refining-lca` |
| `boundary_inbound_transport` | 毛棕榈油交付 | 当进厂运输由炼油厂控制或属于所声明研究范围时纳入；否则披露其排除，并保留上游交付条件。 | `mpob-yung-2020-refining-lca` |
| `boundary_upstream_linkage` | 外购毛棕榈油和其他产品投入 | 将上游生产置于前景炼油过程之外，但每项外购投入均须链接地域和时间上适当的上游数据集。 | `mpob-yung-2020-refining-lca` |
| `boundary_route_specificity` | 物理和化学精炼 | 声明工艺路线。物理精炼须表示脱臭过程产生的 PFAD；化学精炼须在实际存在时表示烧碱中和及其皂脚或棕榈酸化油路线。 | `mpob-yung-2020-refining-lca` |
| `boundary_downstream_exclusions` | 分提及下游阶段 | 从默认前景系统中排除分提、零售包装、配送、使用、生物柴油转化和生命末期；仅在扩展研究范围中将其作为明确独立的过程加入。 | `mpob-yung-2020-refining-lca` |
| `boundary_completeness` | 前景清单 | 不得遗漏毛棕榈油、电力、蒸汽或锅炉燃料、精炼助剂、精炼油、路线特定副产品、废白土、废水或燃料燃烧直接排放。披露并论证其他任何被省略的流，并评估其重要性。 | `mpob-yung-2020-refining-lca` |

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 毛棕榈油在炼油厂入口被接收，并声明供应商、来源、交付条件、质量、等级和运输纳入状态。 |
| starting_condition_role | 前景精炼系统的上游产品投入 |
| product_classification_scope | 分提、调和、配制或零售包装之前的精炼棕榈油 |
| recursive_input_rule | 进入前景系统的任何精炼棕榈油仍须作为显式产品投入并链接独立上游数据集；不得将其并入参考产出，也不得将其作为自身生产递归重新建模。 |
| upstream_dataset_requirement | 毛棕榈油和其他外购产品投入需要与所声明地域、技术、时间和交付条件匹配的上游数据集；不得将种植和压榨负荷默认为零。 |
| disclosure | 声明物理或化学精炼、食用级或工业级、产品规格、毛棕榈油来源、进厂运输处理、锅炉燃料组合、废水处理、副产品状态、分配基准、报告期，以及是否增加任何分提或包装。 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cpo_inbound_transport` | 毛棕榈油进厂运输 | `conditional` | 由炼油厂控制或被声明研究范围选中时纳入 | 将毛棕榈油从油厂或供应商运至炼油厂入口 | 交付毛棕榈油的 tkm |
| `palm_oil_refining` | 毛棕榈油精炼为散装精炼棕榈油 | `required` | 始终纳入 | 接收、脱胶、漂白、路线特定的脱酸或中和、脱臭、冷却、过滤和散装储存 | 1,000 kg 符合要求的精炼棕榈油产出 |
| `wastewater_treatment` | 炼油厂废水处理 | `conditional` | 由炼油厂运行或控制时纳入；否则将废水链接至外部处理数据集 | 排放或转移前处理水相废液 | 处理废水的 m3 |
| `fractionation` | 精炼棕榈油分提 | `excluded_by_default` | 仅在明确扩展范围时加入；该过程生产独立的棕榈液油和棕榈硬脂产品 | 液相与固相馏分的下游分离 | 不适用于本 PCR 参考流 |

### 过程：毛棕榈油进厂运输（`cpo_inbound_transport`）

#### 输入

##### 产品流

###### 毛棕榈油运输服务（`cpo_transport_service`）

当本过程在范围内时，记录将毛棕榈油运至炼油厂的载货运输。

- 选定流：按实际运输方式选择的货运服务
- 流属性 / 单位：运输服务 / tkm
- 数量规则：毛棕榈油运输质量（吨）乘以载货距离（公里）
- 数值模式：计算值（`calculated_value`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 符合要求的精炼棕榈油产出
- 基准类型：运输服务（`transport_service`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cpo_transport`
- 来源：`mpob-yung-2020-refining-lca`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：毛棕榈油精炼为散装精炼棕榈油（`palm_oil_refining`）

#### 输入

##### 产品流

###### 毛棕榈油原料（`crude_palm_oil_feed`）

记录报告期内跨越炼油厂边界的全部毛棕榈油，并核对期初和期末储罐库存。

- 选定流：粗棕榈油 `c25748fe-ebcf-4a0e-bcf9-544edb1645b1`
- 流属性 / 单位：质量 / kg
- 数量规则：实测验收毛棕榈油质量经库存变化调整并归一化至合格精炼棕榈油产出；将结果与 MPOB 多炼油厂基准 1 kg RBD 棕榈油对应 1.055 kg 毛棕榈油比较，但不得以该基准替代前景数据
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 符合要求的精炼棕榈油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`mpob-yung-2020-refining-lca`

###### 精炼助剂（`refining_aids`）

分别记录每种精炼助剂，包括磷酸或柠檬酸、漂白土或白土、化学精炼所用烧碱及其他路线特定化学品。

- 选定流：路线特定的精炼助剂
- 流属性 / 单位：质量 / kg
- 数量规则：按具名材料记录实测领用量或投加量；不得将不同物质汇总成单一质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 符合要求的精炼棕榈油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_balance`
- 来源：`mpob-yung-2020-refining-lca`

###### 外购电力（`purchased_electricity`）

记录精炼、泵送、真空系统、冷却、过滤、储存和经分配的共用公用工程所使用的计量电力。

- 选定流：与声明电网和电压匹配的电力供应
- 流属性 / 单位：能量 / kWh
- 数量规则：报告期仪表读数或有记录的分表分配
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 符合要求的精炼棕榈油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_water`
- 来源：`mpob-yung-2020-refining-lca`

###### 蒸汽和锅炉燃料（`thermal_energy_inputs`）

分别记录外购蒸汽和用于产生炼油蒸汽的每种燃料；不得重复计算锅炉燃料和外购蒸汽。

- 选定流：外购蒸汽或具名锅炉燃料
- 流属性 / 单位：声明的载能体属性 / 按实测采用 MJ、kg 或 m3
- 数量规则：按载能体记录实测采购量、储罐平衡量或校准流量计数量
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 符合要求的精炼棕榈油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_water`
- 来源：`mpob-yung-2020-refining-lca`

###### 工艺用水（`process_water`）

记录用于蒸汽生产、清洗、冷却补水和路线特定精炼操作的淡水及其他供水。

- 选定流：与实际水源匹配的供水
- 流属性 / 单位：体积 / m3
- 数量规则：按水源记录计量取水量或有记录的储罐平衡量
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 符合要求的精炼棕榈油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_water`
- 来源：`mpob-yung-2020-refining-lca`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 精炼棕榈油参考产品（`refined_palm_oil_output`）

仅将分提或零售包装之前符合要求的散装精炼棕榈油记录为参考产品。

- 选定流：精炼棕榈油 `029b6008-a809-4d77-8612-47451f7c98fa`
- 流属性 / 单位：质量 / kg
- 数量规则：经拒收、返工和储罐库存调整后精确为 1,000 kg
- 数值模式：固定值（`fixed_value`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：1,000 kg 符合要求的精炼棕榈油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：标识引用（`identity_reference`）
- 来源：`codex-cxs-210-1999`；`mpob-yung-2020-refining-lca`

###### 物理精炼副产品 PFAD（`pfad_output`）

当物理脱酸和脱臭期间分离的 PFAD 离开过程用于出售、回收、转移或进一步使用时，予以记录。

- 选定流：棕榈脂肪酸馏出物 `3c7cf631-4a11-4b19-a183-b19aa396dab3`
- 流属性 / 单位：质量 / kg
- 数量规则：PFAD 储罐、地磅或发运实测质量，并按库存变化调整
- 数值模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 符合要求的精炼棕榈油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_and_wastes`
- 来源：`mpob-yung-2020-refining-lca`

###### 化学精炼副产品（`chemical_route_coproducts`）

对于化学精炼，在产生、回收、出售或转移皂脚和棕榈酸化油时，须分别记录。

- 选定流：与实际材料匹配的皂脚或棕榈酸化油
- 流属性 / 单位：质量 / kg
- 数量规则：按具名副产品和去向记录实测产出
- 数值模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 符合要求的精炼棕榈油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_and_wastes`
- 来源：`mpob-yung-2020-refining-lca`

##### 废物流

###### 废白土和过滤残渣（`spent_bleaching_earth`）

记录废白土和其他过滤残渣，并区分油回收、出售、处理或处置去向。

- 选定流：废白土或具名过滤残渣
- 流属性 / 单位：质量 / kg
- 数量规则：实测外运质量，并按储存变化和回收油调整
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 符合要求的精炼棕榈油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_and_wastes`
- 来源：`mpob-yung-2020-refining-lca`

###### 炼油厂废水（`refinery_wastewater`）

记录送往场内或外部处理的废水；保留其体积、BOD 和 COD 等实测质量参数及接收处理路线。

- 选定流：送往所声明处理路线的废水
- 流属性 / 单位：体积 / m3
- 数量规则：内部循环之后、进入所选处理过程之前的实测排放体积
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 符合要求的精炼棕榈油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_and_wastes`
- 来源：`mpob-yung-2020-refining-lca`

##### 基本流

###### 锅炉和过程直接排放（`direct_refinery_emissions`）

根据实测燃料使用量和受控排放因子或烟囱实测值计算直接排放；生物源与化石碳流须分别保留。

- 选定流：进入正确环境介质的物质特定基本排放流
- 流属性 / 单位：质量 / kg
- 数量规则：实测烟囱排放量，或实测燃料量乘以有记录且与载能体、技术和地域相符的排放因子
- 数值模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 符合要求的精炼棕榈油产出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_water`
- 来源：`mpob-yung-2020-refining-lca`

### 过程：炼油厂废水处理（`wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理服务和投入（`wastewater_treatment_inputs`）

当废水处理处于前景边界内时，记录外购处理服务、电力、化学品和其他投入。

- 选定流：与实际系统匹配的处理投入或服务
- 流属性 / 单位：适用于各项投入的属性和单位
- 数量规则：分配给炼油厂废水的实测数量或开票数量
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 m3 已处理炼油厂废水
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`mpob-yung-2020-refining-lca`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 处理污泥和残余废物（`wastewater_treatment_residues`）

按实测质量和去向记录污泥及其他处理残余物。

- 选定流：与实际材料匹配的处理残余物
- 流属性 / 单位：质量 / kg
- 数量规则：实测外运质量，并按储存变化调整
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 m3 已处理炼油厂废水
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`mpob-yung-2020-refining-lca`

##### 基本流

###### 处理后水排放（`treated_water_emissions`）

使用同一期间的浓度和流量数据，记录处理后排入水体的实测污染物负荷。

- 选定流：排入水体的物质特定基本排放流
- 流属性 / 单位：质量 / kg
- 数量规则：同期间处理水体积乘以实测排放浓度，并记录单位换算
- 数值模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 m3 已处理炼油厂废水
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`mpob-yung-2020-refining-lca`

## 7. 分配与副产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_where_separable` | 单独计量的过程和产品生产批次 | 在应用分配前，优先采用细分或直接测量，使负荷归属于引起负荷的过程或产品。 | `mpob-yung-2020-refining-lca` |
| `allocation_pfads_economic` | 物理精炼的 RBD 棕榈油和 PFAD | 当 PFAD 为可销售副产品且无法细分时，采用同一声明期间和市场的质量及代表性价格，按 RBD 棕榈油和 PFAD 的同期经济价值分配共同精炼负荷。 | `mpob-yung-2020-refining-lca` |
| `allocation_chemical_route` | 皂脚、棕榈酸化油及其他化学精炼产出 | 依据有记录的去向和市场证据，将每项产出分类为副产品、内部回收材料或废物；对可销售副产品应用同一经济分配规则，对废物分配处理负荷。 | `mpob-yung-2020-refining-lca` |
| `allocation_internal_recovery` | 内部循环的油或材料 | 不得将内部循环流作为独立产品分配负荷；在前景质量平衡中保留回收操作和被替代的新投入。 | `mpob-yung-2020-refining-lca` |
| `allocation_price_evidence` | 经济分配 | 保留产品质量、价格来源、币种、价格基准、平均期间和计算。若不能证明其市场期间代表本研究，不得沿用历史的 96.2:3.8 RBD 棕榈油:PFAD 比率。 | `mpob-yung-2020-refining-lca` |
| `allocation_sensitivity` | 重要的多产出结果 | 当分配选择对解释有重大影响时，报告质量分配敏感性，并在主要经济分配结果旁披露该结果。 | `mpob-yung-2020-refining-lca` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cpo_transport` | `cpo_inbound_transport` | 毛棕榈油交付 | 地磅和物流记录 | shipment_mass_t; origin; destination; loaded_distance_km; mode; vehicle_class; empty_return | 将逐批运输的地磅单与路线或承运商记录匹配 | t; km | 每批运输 | 与炼油产出相同的报告期 | 所有纳入的毛棕榈油交付 | 运输质量乘以载货距离后求和；空载返程单独处理 | 地磅单、承运商发票、路线证据及与毛棕榈油接收量的核对 |
| `cp_material_balance` | `palm_oil_refining` | 毛棕榈油和精炼助剂 | 地磅、储罐、发票和投加记录 | opening_stock; receipts; issues_or_dosing; returns; closing_stock; rejected_or_reworked_mass; material_identity | 核对经校准仪表、储罐测量、地磅单、发票和批次投加日志 | 按材料采用 kg | 每批，并每月核对 | 覆盖完整声明报告期及代表性运行条件 | 服务于声明产品的全部炼油生产线和储罐 | 消耗量等于期初库存加接收量减期末库存及有记录的转移量；按合格产出归一化 | 校准记录、库存核对、供应商标识、批次日志及异常记录 |
| `cp_energy_and_water` | `palm_oil_refining` | 电力、蒸汽、锅炉燃料、水和直接排放 | 仪表、采购、储罐、锅炉和烟囱记录 | meter_readings; purchases; stocks; carrier_identity; heating_value; steam_import; water_source; emission_measurement_or_factor | 可用时采用经校准分表；否则记录从全厂总量分配共用公用工程的方法 | kWh; MJ; kg; m3; 排放 kg | 连续或每班，按月汇总 | 与产品产出相同的报告期 | 服务于声明炼油过程的全部公用工程系统 | 核对采购量和库存，避免蒸汽/燃料重复计算，并按合格产出归一化 | 仪表校准、发票、锅炉日志、燃料分析、因子来源及核对 |
| `cp_outputs_and_wastes` | `palm_oil_refining` | 精炼油、副产品、废物和废水 | 储罐、地磅、发运、废物转移和实验室记录 | opening_stock; production; dispatch; closing_stock; destination; market_status; wastewater_volume; BOD; COD | 将生产和发运记录与储罐及废物联单核对；按适用场址方法采样废水 | kg; m3; mg/L | 每批或每次发运；废水按许可或运行计划 | 与物料和公用工程投入相同的报告期 | 声明产品的全部产出储罐和废物路线 | 按具名产品或废物汇总经库存变化调整后的净产出，并保留去向 | 经校准的秤或储罐、销售记录、废物联单、样品监管链和实验室报告 |
| `cp_wastewater_treatment` | `wastewater_treatment` | 处理投入、残余物和处理后水排放 | 处理仪表、化学品、污泥和实验室记录 | influent_volume; effluent_volume; chemical_use; energy_use; sludge_mass; analyte; concentration; sampling_time | 匹配同一处理期间的进水、出水、化学品、能源、污泥和实验室记录 | m3; kg; kWh; mg/L | 连续或每处理批次；按许可采样 | 与炼油厂废水相同的报告期 | 场内系统或有记录的外部处理路线 | 由匹配的流量和浓度计算负荷；按每 m3 处理量归一化处理清单 | 仪表校准、处理日志、实验室 QA/QC、废物转移记录及质量/负荷核对 |
| `cp_product_quality` | `palm_oil_refining` | 精炼棕榈油符合性 | 批次证书和实验室结果 | batch_id; route; grade; specification; test_method; result; acceptance_status; rework_or_rejection | 按适用规格和场址质量计划对每项声明产品取样和测试 | 取决于规格 | 每批或每个批号 | 整个报告期 | 计为合格产出的每个批号 | 只有验收产出进入参考量；拒收或返工油仍保留在质量平衡中 | 分析证书、测试方法、实验室 QA/QC 及放行记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 每项炼油清单数量 | normalised_quantity = reporting_period_quantity / conforming_refined_palm_oil_kg * 1000 | 报告期流数量；合格精炼棕榈油产出 kg | 每 1,000 kg 参考产品的流数量 | `mpob-yung-2020-refining-lca` |
| `calc_cpo_transport` | 进厂运输 | tkm = 毛棕榈油运输质量（吨）* 载货距离（公里） | shipment_mass_t; loaded_distance_km | 每批运输及每参考流的 tkm | `mpob-yung-2020-refining-lca` |
| `calc_wastewater_load` | 排入水体的污染物 | load_kg = treated_water_volume_m3 * concentration_mg_per_L / 1000 | 匹配的处理水体积；分析物浓度 | 排放污染物 kg | `mpob-yung-2020-refining-lca` |
| `calc_economic_allocation` | 可销售副产品的共同精炼负荷 | 对所有可销售副产品 j，allocation_share_i = mass_i * representative_price_i / sum(mass_j * representative_price_j) | 副产品质量；代表性价格；价格期间；币种和基准 | 各可销售副产品的分配份额 | `mpob-yung-2020-refining-lca` |
| `calc_mass_balance` | 炼油厂质量平衡 | balance_gap = total_mass_inputs - total_mass_outputs - net_inventory_change；重要时单独记录蒸发或测量项 | 实测材料投入；产品；副产品；废物；库存变化 | 质量平衡差及核对说明 | `mpob-yung-2020-refining-lca` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产出 | 证明精炼棕榈油的标识、路线、等级、规格、散装状态及未包含分提产品；食用产品声明须注明适用规格。 | 批次放行和分析证书；`codex-cxs-210-1999` |
| `dq_temporal_alignment` | 全部前景流 | 投入、产出、库存变化、公用工程、废物和价格须覆盖同一声明期间；披露停产、异常生产、缺失月份和季节性限制。 | 报告日历、完整性矩阵和异常日志；`mpob-yung-2020-refining-lca` |
| `dq_site_coverage` | 设施数据 | 纳入服务于声明产品的每条生产线、储罐、公用工程和受控废物路线，或记录从完整设施总量进行的分配。 | 过程图、仪表图、储罐清单和场址核对 |
| `dq_mass_completeness` | 物料清单 | 核对毛棕榈油、精炼油、副产品、精炼助剂、固体残渣、废水、返工和库存变化；发布前调查质量平衡差。 | 签署的质量平衡工作表和源记录交叉检查 |
| `dq_utility_completeness` | 能源和水 | 分别保留电力、蒸汽、每种锅炉燃料、水源和直接燃烧排放；避免重复计算蒸汽及其生产燃料。 | 仪表和燃料核对、锅炉日志及计算工作簿 |
| `dq_allocation_evidence` | 多产出过程 | 保留用于经济分配的当前质量和市场证据，并在重要时提供所要求的敏感性分析。 | 价格参考、产品数量、分配工作簿和敏感性结果；`mpob-yung-2020-refining-lca` |
| `dq_background_match` | 关联上游数据集 | 尽可能匹配地域、技术、时间、等级、交付条件、电力结构、燃料、水源、化学品、运输和废物处理；披露重要不匹配。 | 数据集元数据和不匹配登记表 |
| `dq_traceability` | 前景数据集 | 每项归一化数值均须追溯至源记录、采集协议、换算和计算版本。 | 记录标识符、计算工作簿、审查人签署和留存的 QA 证据 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考产出必须使用 Palm oil, refined `029b6008-a809-4d77-8612-47451f7c98fa`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，并精确为 1,000 kg。 | `codex-cxs-210-1999` |
| `validate_required_qualifiers` | 数据集标识 | 所有必需限定项均须存在，并标识精炼路线、等级、规格、地域、时间、散装状态、分提状态和分配基准。 | `codex-cxs-210-1999`；`mpob-yung-2020-refining-lca` |
| `validate_route_inventory` | 过程清单 | 物理精炼须包括脱胶、漂白、废白土、脱臭、PFAD、电力、热能、水、废水和直接排放；化学精炼须以有记录的烧碱中和路线替换游离脂肪酸去除和副产品规则。 | `mpob-yung-2020-refining-lca` |
| `validate_boundary_links` | 系统边界 | 上游毛棕榈油及每项外购投入均须有上游数据集或明确的未解决缺口；不得将分提和包装默默纳入参考过程。 | `mpob-yung-2020-refining-lca` |
| `validate_mass_balance` | 物料平衡 | 归一化物料平衡须包括库存变化、返工、副产品、废物和有记录的测量项，并将每个无法解释的差额报告为发现。 | `mpob-yung-2020-refining-lca` |
| `validate_allocation` | 副产品 | PFAD 和其他任何可销售副产品均须有记录的状态和分配；经济分配须使用代表研究期间的证据，不得无论证复制历史比率。 | `mpob-yung-2020-refining-lca` |
| `validate_foreground_evidence` | 数据生产 | 每项前景记录值或计算值均须链接至其采集协议和声明期间留存的源证据。 | `mpob-yung-2020-refining-lca` |
| `validate_completeness` | 发布准备度 | 验证须报告已接受输入、已执行检查、已跳过检查、发现和完整性；缺失标识、未解决质量平衡、缺失必需流、无支持分配或无源记录须作为错误或不确定结果。 | `mpob-yung-2020-refining-lca` |

## 10. 已发布数据集配置

| 字段 | 值 |
| --- | --- |
| dataset_role | 散装精炼棕榈油生产的前景炼油数据包和单元过程数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 需要炼油厂门口声明的散装精炼棕榈油的归因型产品系统；链接匹配的上游毛棕榈油和下游用户；当地域和技术具有代表性时用于区域化研究 |
| excluded_use | 直接表示毛棕榈油、棕榈仁油、分提棕榈液油或棕榈硬脂、调和或包装食用油、生物柴油，或数据集未披露的炼油路线和地域 |
| required_metadata | PCR id 和版本；Tiangong 参考流 UUID；可用时的过程 UUID；精炼路线；等级和规格；地域；报告期；技术；散装状态；分提状态；毛棕榈油来源和交付条件；运输范围；锅炉燃料组合；废水路线；分配基准；source ids；collection protocol ids |
| required_quality_disclosure | 场址和生产线覆盖；时间覆盖；仪表和库存核对；质量平衡结果；产品符合性；背景数据不匹配；副产品状态和价格证据；分配敏感性；缺失或估计记录；废水和直接排放计算方法 |
| update_trigger | 炼油路线、产品等级或规格、参考流标识、毛棕榈油供应地域、能源或燃料系统、废水处理、副产品市场状态、分配证据、报告期或外部方法证据发生重大变化 |

## 11. 数据源

| 来源编号 | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `codex-cxs-210-1999` | `standard` | Codex Alimentarius, Standard for Named Vegetable Oils, CXS 210-1999, amended 2024 and corrected 2026, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B210-1999%252FCXS_210e.pdf（检索日期 2026-08-10） | 棕榈油产品标识、食用产品范围、规格披露和产品符合性 |
| `mpob-yung-2020-refining-lca` | `literature` | Yung, C. L.; Subramaniam, V.; Yusoff, S. Life Cycle Assessment for Palm Oil Refining and Fractionation. Journal of Oil Palm Research. DOI: 10.21894/jopr.2020.0029. https://jopr.mpob.gov.my/wp-content/uploads/2020/06/joprinpress2020-chee.pdf（检索日期 2026-08-10） | 功能单位、物理精炼过程分解、门到门边界、清单覆盖、前景采集实践、副产品分配、定量基准背景、数据质量和验证规则 |
