---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.oat-milk
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 燕麦奶

## 1. 范围与适用性

本 PCR 适用于主要以燕麦（*Avena* 属）制造并以燕麦奶或燕麦饮料形式出厂的液态植物饮料。当声明的参考产品为成品燕麦饮料时，范围包括原味及配方型产品，也包括常温稳定型和冷藏型产品。前景生产边界按声明路线包括原辅料接收与准备、水提取或浆料制备、可选酶处理、分离、调配、热处理、均质、灌装、清洗以及工厂放行。

主要由其他植物原料制成的产品、乳制奶与燕麦的混合饮料、勺食型发酵产品、粉状饮料浓缩物、婴幼儿配方食品，以及仅将燕麦饮料作为配料的食品不在范围内。燕麦农业生产、外购配料和包装生产、分销、零售、消费者使用及生命周期末端，应在研究需要时通过关联的上游或下游数据集表示，不得虚构为工厂前景记录。

本候选 PCR 提供数据生产规则。暂定筛选范围不能替代真实数据；用于关键发布模型前，应以具有代表性的工厂或供应商记录替换。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.oat-milk |
| classification_refs | CPC 3.0：24425 Oat milk |
| covered_products | 主要以燕麦制成的成品液态饮料，包括原味、强化、调味、常温稳定和冷藏燕麦饮料 |
| excluded_products | 含乳制奶的混合饮料；主要由其他植物制成的饮料；勺食型发酵燕麦产品；粉状浓缩物；婴幼儿配方食品；以燕麦饮料为配料的下游食品 |
| representative_product | 由制造工厂放行的包装、热处理燕麦奶 |
| production_route | 燕麦接收或燕麦配料准备；加水提取或浆料制备；可选酶转化；分离；调配；热处理；均质；灌装；清洗；放行 |
| market_state | 成品液态饮料，按声明以常温或冷藏分销包装形式出厂 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 可作为液态饮料或食品配料使用的成品燕麦奶 |
| How much | 制造工厂门口 1 kg 包装燕麦奶 |
| How well | 满足声明的配方、燕麦含量、强化、感官和微生物放行规格、热处理路线、包装形式及储存条件 |
| How long or cycle | 工厂放行时；保质期和储存制度是必需限定信息，不转换为服务持续时间 |
| reference_flow_link | 所有纳入的前景流均以 1 kg 合格包装燕麦奶为定量归一化参考 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Oat milk `ad17fd2f-4977-4a51-b80b-f52061c153ec` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 燕麦占比和燕麦配料形态；配方或产品变体；可得时的固形物或干物质基准；强化和甜味剂状态；酶处理；热处理路线；均质；包装形式和净装量；常温或冷藏储存；地理区域；生产期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考燕麦奶及全部归一化结果 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告合格包装产品的净质量，不含二级和三级运输包装；以实测或产品特定密度换算体积记录，并保留密度记录。 |
| `ingredient_mass_basis` | 燕麦、燕麦配料、添加剂、强化剂、油、甜味剂及加工助剂 | Mass | kg | 记录接收质量，并在差异影响解释时声明湿基、接收态、干物质或活性物质基准；没有明确换算不得混用。 |
| `water_mass_equivalence` | 工艺水和清洗水 | Mass or volume | kg or m3 | 采集时保留实测体积；换算为质量时使用实测工况密度或披露的水密度约定，并保留换算过程。 |
| `energy_carrier_separation` | 电力、热能和燃料 | Energy | kWh、MJ 或载能体特定质量/体积单位 | 外购电力、回收热、蒸汽及各类燃料分别记录；明确单位换算，关联上游数据集前不得合并载能体。 |
| `packaging_net_basis` | 初级包装和封口件 | Mass and count | kg 和 item | 包装质量应由领用或采购质量获得，或由件数乘经核实的单件质量计算；产品净质量与包装质量分开。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购燕麦或燕麦配料、调配材料、初级包装、水和公用工程在燕麦奶制造工厂边界接收 |
| starting_condition_role | 前景采集从工厂控制的接收和加工开始；上游农业和外购材料负荷通过单独数据集关联 |
| product_classification_scope | 符合 CPC 3.0 代码 24425 且同时满足本 PCR 语义纳入和排除规则的成品燕麦饮料 |
| recursive_input_rule | 同一类别的燕麦奶或燕麦奶中间体进入前景系统时，仅作为产品投入记录一次，同时关联其上游数据集并声明加工阶段；不得在接收过程中递归重建其生产 |
| upstream_dataset_requirement | 当研究边界纳入时，应关联具有代表性的燕麦或燕麦配料、添加剂、强化剂、油、甜味剂、包装、水、电力、燃料、热及外部废物处理数据集 |
| disclosure | 声明燕麦配料形态和来源、前景工厂和时期、配方变体、纳入单元操作、共产品和废物状态、分配选择、包装形式、储存制度、排除阶段以及全部上游数据集替代 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_minimum` | 工厂前景边界 | 当声明产品发生相关操作时，应纳入从燕麦配料及其他投入接收，到提取或浆料制备、调配、热处理、灌装、清洗和放行的全部工厂控制操作。 | `eu-jrc-fdm-bref-2019`; `epd-international-pcr-2025-03` |
| `sb_upstream_links` | 完整从摇篮到工厂门模型 | 外购燕麦、配料、包装和载能体应由披露的上游数据集表示；不得将其到厂视为零负荷。 | `eu-pef-2021-2279`; `epd-international-pcr-2025-03` |
| `sb_route_specificity` | 路线相关操作 | 可选酶处理、脱壳或磨粉、冷藏、无菌处理和外部处理仅在实际发生或声明路线要求时纳入，并明确说明排除项。 | `eu-jrc-fdm-bref-2019` |
| `sb_downstream_scope` | 分销、零售、使用和生命周期末端 | 默认工厂门前景数据包不含下游阶段；研究目标或适用声明项目要求时，应以明确的下游情景补充。 | `eu-pef-2021-2279`; `epd-international-pcr-2025-03` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `prepare_oat_slurry` | 燕麦接收与浆料制备 | required | 始终纳入；仅当记录无法拆分时才合并接收、清理、磨制、浸泡和酶处理，并披露合并情况 | 前景配料准备和水提取进料制备 | 每生产期转移到分离的浆料或已制备提取液 kg |
| `separate_and_formulate` | 分离与调配 | required | 始终纳入；分离可与提取合并，但产率和残渣去向仍应单独报告 | 前景固液分离和配方调配 | 转移到最终处理的调配燕麦基料 kg |
| `treat_fill_release` | 热处理、均质、灌装与放行 | required | 始终纳入；声明巴氏、UHT、无菌或其他经验证处理路线及实际包装形式 | 前景最终制造和定量参考产品生产 | 放行的合格包装燕麦奶 kg |
| `cleaning_and_utilities` | 原位清洗和共享公用工程 | required | 纳入分配给所表示产品时期的工厂清洗及共享公用工程消耗；披露已并入其他过程的公用工程记录 | 前景卫生和共享工厂服务 | 服务于所表示燕麦奶产出的生产期 |

### 过程：燕麦接收与浆料制备（`prepare_oat_slurry`）

#### 输入

##### 产品流

###### 燕麦粒、燕麦片、燕麦粉或浓缩物（`oat_ingredient_input`）

记录进入前景过程的实际燕麦来源配料质量，并声明形态、水分或干物质基准、来源及上游数据集。

- 选定流：燕麦配料（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：所表示生产期的接收质量，扣除有记录的退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行的合格包装燕麦奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials_and_packaging`
- 数量范围：暂定燕麦投入筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.03
  - 上限：0.50
  - 单位：kg 燕麦配料/kg 包装燕麦奶
  - 基准：覆盖稀饮料和浓缩燕麦配料的宽泛配方及产率筛查；以配方和接收记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 浆料制备用工艺水（`slurry_water_input`）

记录浸泡、磨制、提取、酶处理或稀释过程中加入产品流的水。清洗水保留在 `cleaning_and_utilities`。

- 选定流：工艺水（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：输送至产品接触准备步骤的实测或计量水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的合格包装燕麦奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_energy`
- 数量范围：暂定产品接触水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.3
  - 上限：3.0
  - 单位：kg 水/kg 包装燕麦奶
  - 基准：含产品保留水和制备损失的宽泛首轮筛查；以配方和计量记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 酶和制备助剂（`preparation_aids_input`）

记录实际使用的酶、pH 调节剂和其他助剂；未使用的助剂不记录，并声明其留在产品、随残渣离开或进入废水。

- 选定流：酶或加工助剂，路线特定（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：各产品接触制备步骤的领用量减有记录的退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的合格包装燕麦奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials_and_packaging`

###### 制备用电（`preparation_electricity_input`）

记录接收、输送、磨制、混合、泵送及酶处理控制的计量或分配电力。

- 选定流：工厂供应电力（Tiangong UUID 未解析）
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或从工厂总表按有记录的方法分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的合格包装燕麦奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_energy`
- 数量范围：暂定制备用电筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：1.0
  - 单位：kWh/kg 包装燕麦奶
  - 基准：刻意宽泛的工厂首轮筛查；以分表或分配记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已制备燕麦浆或提取液（`prepared_oat_slurry_output`）

将转移的中间体记录为计算的内部产品流，使制备产率和转移量与下一过程一致。

- 选定流：已制备燕麦浆或提取液，内部中间体（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或罐体积变化按产品特定密度换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个生产期浆料制备过程的产出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_product_and_intermediate_yield`

##### 废物流

###### 接收和制备废弃物（`preparation_rejects_output`）

记录以废物形式离开制备过程的筛除物、异物、撒漏和不合格燕麦物料；存在有记录的产品或共产品用途时除外。

- 选定流：有机制备废弃物（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：实测废物容器质量，或由库存记录支持的差额计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的合格包装燕麦奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_waste_and_wastewater`
- 数量范围：暂定制备废弃率筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg 接收燕麦配料
  - 基准：宽泛首轮废弃比例；以接收和废物记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：分离与调配（`separate_and_formulate`）

#### 输入

##### 产品流

###### 已制备燕麦浆或提取液（`prepared_oat_slurry_input`）

按相同质量和时期基准记录从浆料制备转移的内部中间体。

- 选定流：已制备燕麦浆或提取液，内部中间体（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：与 `prepared_oat_slurry_output` 匹配的转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个生产期的调配燕麦基料产出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_product_and_intermediate_yield`

###### 调配配料（`formulation_ingredients_input`）

按供应商流分别记录实际加入配方的油、甜味剂、盐、香料、稳定剂、矿物质、维生素及其他配料；至少分开环境相关或物质量显著的配料。

- 选定流：调配配料，产品特定（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：各配料和配方变体的领用量减退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行的合格包装燕麦奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials_and_packaging`

###### 分离与调配用电（`separation_electricity_input`）

记录筛网、离心机、卧螺机、泵、混合、冷却和调配控制的电力。

- 选定流：工厂供应电力（Tiangong UUID 未解析）
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或从工厂总表按有记录的方法分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的合格包装燕麦奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_energy`
- 数量范围：暂定分离用电筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：1.0
  - 单位：kWh/kg 包装燕麦奶
  - 基准：刻意宽泛的工厂首轮筛查；以分表或分配记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调配燕麦基料（`formulated_oat_base_output`）

按同一生产期质量基准记录转移到最终热处理的调配液体。

- 选定流：调配燕麦基料，内部中间体（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量，或罐体积变化按产品特定密度换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个生产期调配过程的产出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_product_and_intermediate_yield`

###### 用于有益用途的分离燕麦固形物（`oat_solids_coproduct_output`）

仅当工厂控制有记录的有益用途或销售，且物料满足接收规格时，才将分离燕麦固形物记录为产品输出；否则记录为废物。

- 选定流：分离燕麦固形物（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：声明期实测湿质量，加实测或有代表性的干物质比例
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的合格包装燕麦奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_waste_and_wastewater`
- 数量范围：暂定分离固形物筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.0
  - 单位：kg 湿固形物/kg 包装燕麦奶
  - 基准：对燕麦投入、提取产率和脱水高度敏感的刻意宽泛湿质量筛查；以残渣称量和干物质检测替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 作为废物管理的分离燕麦固形物（`oat_solids_waste_output`）

当分离物没有有记录的产品去向或不满足接收规格时，使用本行而不是 `oat_solids_coproduct_output`，并关联实际处理路线。

- 选定流：燕麦固形物废物（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：送往各废物处理路线的实测湿质量和声明干物质比例
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的合格包装燕麦奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_waste_and_wastewater`
- 数量范围：暂定燕麦固形物废物筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1.0
  - 单位：kg 湿固形物/kg 包装燕麦奶
  - 基准：仅在固形物为废物时使用；以残渣称量和干物质检测替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：热处理、均质、灌装与放行（`treat_fill_release`）

#### 输入

##### 产品流

###### 调配燕麦基料（`formulated_oat_base_input`）

记录从调配过程转移的内部基料，并与最终产品、损失和库存变化核对。

- 选定流：调配燕麦基料，内部中间体（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：与 `formulated_oat_base_output` 匹配的转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个生产期放行的燕麦奶
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_product_and_intermediate_yield`

###### 产品处理热能（`thermal_energy_input`）

记录用于产品处理的蒸汽、热水、直接燃料或其他热源；热回收作为单独披露的抵扣或内部转移，不得无说明地净额扣除。

- 选定流：热能载体，路线特定（Tiangong UUID 未解析）
- 流属性/单位：Energy / MJ
- 数量规则：计量载能体用量，或由实测载能体数量和有记录的转换效率计算热量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行的合格包装燕麦奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_energy`
- 数量范围：暂定热能筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：10
  - 单位：MJ/kg 包装燕麦奶
  - 基准：覆盖巴氏、UHT、损失和热回收的宽泛首轮筛查；以计量和燃料记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 最终处理和灌装用电（`final_electricity_input`）

记录均质、泵送、冷却、灭菌辅助、灌装、喷码、输送和放行控制的电力。

- 选定流：工厂供应电力（Tiangong UUID 未解析）
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或从工厂总表按有记录的方法分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的合格包装燕麦奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_energy`
- 数量范围：暂定最终用电筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：1.5
  - 单位：kWh/kg 包装燕麦奶
  - 基准：刻意宽泛的工厂首轮筛查；以分表或分配记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 初级包装与封口件（`primary_packaging_input`）

按材料和实际质量记录每项初级包装、封口、标签、密封件及直接与产品相关的部件。研究纳入二级和三级包装时，将其作为单独流。

- 选定流：初级包装部件，材料特定（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：领用包装质量，或部件件数乘经核实的单件质量，并扣除退回库存
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行的合格包装燕麦奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials_and_packaging`
- 数量范围：暂定初级包装筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：0.30
  - 单位：kg 包装/kg 包装燕麦奶
  - 基准：覆盖纸盒、瓶、袋、封口和净装量的宽泛首轮筛查；以物料清单和部件质量记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格包装燕麦奶（`oat_milk_reference_output`）

仅将满足声明质量规格并已放行的产品记录为定量参考输出。

- 选定流：Oat milk `ad17fd2f-4977-4a51-b80b-f52061c153ec`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：放行净产品质量归一化后的 1 kg 参考输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 放行的合格包装燕麦奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 不合格产品及灌装损失（`offspec_product_waste_output`）

记录未放行的燕麦饮料，包括开机、换线、灌装、取样、撒漏和不合格包装内物料，扣除同一表示时期内有记录的返工。

- 选定流：不合格燕麦饮料废物（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：实测不合格质量加不合格包装件内产品质量，减同一时期有记录的返工质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的合格包装燕麦奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_product_and_intermediate_yield`
- 数量范围：暂定产品损失筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.30
  - 单位：kg/kg 包装燕麦奶
  - 基准：开机和不合格损失的宽泛首轮筛查；以生产和拒收记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装废料（`packaging_scrap_output`）

按材料和处理路线记录未使用、损坏、裁切和不合格包装；不得包含随合格产品离厂的包装。

- 选定流：包装废料，材料特定（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：实测废料质量，或领用质量减成品包装质量和退回库存
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的合格包装燕麦奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_materials_and_packaging`
- 数量范围：暂定包装废料筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.10
  - 单位：kg 废料/kg 领用包装
  - 基准：宽泛首轮包装损失比例；以库存和废料记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：原位清洗和共享公用工程（`cleaning_and_utilities`）

#### 输入

##### 产品流

###### 清洗和消毒用水（`cleaning_water_input`）

清洗、原位清洗、冲洗和消毒用水与加入产品的水分开记录。

- 选定流：工艺水（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：计量清洗水，或经验证的单次循环体积乘经核实的循环次数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的合格包装燕麦奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 数量范围：暂定清洗水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：10
  - 单位：kg 水/kg 包装燕麦奶
  - 基准：覆盖不同工厂规模和清洗制度的宽泛首轮筛查；以计量或经验证循环记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洗与消毒化学品（`cleaning_chemicals_input`）

一致地记录配制型清洗化学品或活性物质，包括浓度和稀释基准，并将不相容的化学品类型分开。

- 选定流：清洗化学品，产品特定（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：领用的配制产品质量，或由浓度和投加记录计算的活性物质质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的合格包装燕麦奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`

###### 共享公用工程能源（`shared_utility_energy_input`）

记录尚未分配到生产过程的清洗、压缩空气、制冷、锅炉及其他共享服务的电力和热能；各载能体仍作为单独清单流。

- 选定流：共享公用工程载能体（Tiangong UUID 未解析）
- 流属性/单位：Energy / kWh or MJ
- 数量规则：分表计量，或从共享工厂总表按有记录的方法分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的合格包装燕麦奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_energy`
- 数量范围：暂定共享能源筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：5.0
  - 单位：MJ 或 kWh，保留载能体/kg 包装燕麦奶
  - 基准：刻意宽泛的首轮筛查；以分表和分配记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工艺及清洗废水（`wastewater_output`）

记录离开工厂或进入厂内处理的废水，包括实测数量和路线；研究要求且有实测时，另行记录物质污染指标。

- 选定流：废水，路线特定（Tiangong UUID 未解析）
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：出水流量计读数或水衡算结果，并尽可能按处理路线区分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的合格包装燕麦奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_waste_and_wastewater`
- 数量范围：暂定废水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：12
  - 单位：kg 废水/kg 包装燕麦奶
  - 基准：覆盖工艺损失和清洗水的宽泛首轮筛查；以出水计量或水衡算记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 制冷剂直接排放（`refrigerant_emissions_output`）

前景边界包含制冷或冷却设备时，记录制冷剂向空气的直接损失，并明确制冷剂物质和补充量基准。

- 选定流：制冷剂排放至空气，物质特定（Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：年度或生产期制冷剂补充量加有记录的损失，并分配到所表示生产期
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行的合格包装燕麦奶
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_and_energy`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_avoid_first` | 多产品和共享过程 | 首先通过分别计量或拆分燕麦奶操作、配方、包装线、清洗循环和公用工程避免分配；只要记录允许就应实施。 | `iso-14044-2006`; `eu-pef-2021-2279` |
| `al_residue_status` | 分离燕麦固形物 | 仅在存在有记录的有益去向和接收规格时，将分离固形物归类为产品/共产品；否则作为废物并关联实际处理路线。同一质量不得同时记入两行。 | `iso-14044-2006`; `mass-balance-identity` |
| `al_physical_basis` | 无法避免的共产品分配 | 当拆分不能解决共享负荷且适用研究或项目未规定其他方法时，采用反映过程的有记录物理关系，例如燕麦奶和分离固形物的干物质质量。记录湿质量、干物质测定、公式和分配比例；比例之和必须为一。 | `iso-14044-2006`; `eu-pef-2021-2279` |
| `al_economic_exception` | 缺少合理物理关系的共产品 | 仅在无法建立合理物理关系或适用项目要求时使用经济分配。采用代表性价格期，说明价格基准和币种，披露波动并进行敏感性分析。 | `iso-14044-2006`; `eu-pef-2021-2279` |
| `al_recycling_substitution` | 避免产品或替代声明 | 除非声明研究方法要求，不得应用替代或避免负荷抵扣。替代功能、数据集、替代率和敏感性应与前景清单分开说明。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_materials_and_packaging` | `prepare_oat_slurry`; `separate_and_formulate`; `treat_fill_release` | 燕麦配料、调配材料、加工助剂和包装 | 接收、领用、退料、配方、物料清单和库存记录 | 物料 id；供应商；批次；接收质量；领用质量；退回质量；水分或浓度；包装件数；部件质量；配方变体 | 经校准的接收或生产线秤、库存系统、供应商证明及经核实的物料清单 | kg；item；质量分数 | 每次交付和生产领用；按月汇总 | 连续 12 个月或声明的代表性生产期 | 代表性工厂和声明的产品变体 | 用期初库存 + 接收 - 期末库存 - 退料核对领用或消耗质量；按放行净产品质量归一化 | 校准记录；库存核对；供应商规格；批准配方和物料清单 |
| `cp_water_and_energy` | all processes | 工艺水、电力、热、燃料、制冷和共享公用工程 | 总表、分表、账单、燃料接收及运行时数记录 | 仪表 id；期初和期末读数；单位；载能体；过程或产线；运行期；生产期；分配驱动量；热回收转移 | 优先使用经校准的总表或分表；否则从工厂总量按有记录的工程方法分配 | kg；m3；kWh；MJ；载能体特定单位 | 可得时连续或逐批；按月汇总 | 连续 12 个月或声明的代表性生产期 | 所表示生产线及披露的共享服务 | 扣除有记录的非生产使用和重复分表；按因果驱动量分配共享总量；保留载能体身份 | 仪表校准或核查；账单核对；分配工作表；运行日志 |
| `cp_product_and_intermediate_yield` | `prepare_oat_slurry`; `separate_and_formulate`; `treat_fill_release` | 中间体转移、最终产品、返工、不合格品和库存变化 | 罐体、流量计、灌装计数、地磅、放行、不合格品和库存记录 | 批次 id；罐期初和期末质量或体积；密度；转移质量；灌装件数；净装量；放行质量；不合格质量；返工质量；库存变化 | 经校准的罐体或流量测量及放行包装核对 | kg；L 加密度换算；item | 每批或每生产期；按产品变体和月份汇总 | 连续 12 个月或声明的代表性生产期 | 所表示工艺链和声明的产品变体 | 核对匹配转移；仅按合格放行净产品质量归一化 | 校准；放行证明；密度测量；灌装控制检查；批次核对 |
| `cp_residue_waste_and_wastewater` | all processes | 燕麦固形物、废弃物、废物和废水 | 容器秤、地磅、干物质检测、出水表、转移联单和处理发票 | 物料类型；湿质量；干物质比例；去向；产品或废物状态；处理路线；出水体积；检测结果；时期 | 每次发运或每容器称量；出水计量；按工厂计划取样 | kg 湿基；kg 干物质；m3；浓度单位 | 每次发运及连续或逐批出水读数；按月汇总 | 连续 12 个月或声明的代表性生产期 | 全部所表示废物和共产品去向 | 产品输出与废物分开；用于分配时湿基换算干基；核对废物发运和出水总量 | 秤或仪表校准；实验室结果；接收规格；转移单；处理联单 |
| `cp_cleaning_records` | `cleaning_and_utilities` | 清洗水、化学品、循环和消毒能源 | 原位清洗配方、投加、循环计数、水表、化学品领用及温度-时间日志 | 回路；循环类型；循环次数；水量；化学品；浓度；投加量；温度；持续时间；服务产线 | 优先使用自动清洗日志和分表；否则采用经验证配方乘循环次数 | kg；m3；L；质量分数；cycle；kWh；MJ | 每次清洗循环；按月汇总 | 连续 12 个月或声明的代表性生产期 | 服务于所表示燕麦奶生产的回路和共享系统 | 专用循环直接归属；共享循环按清洗回路时间或产品接触体积等因果驱动量分配 | 经验证清洗配方；投加校准；卫生验证；计量记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_reference_normalisation` | 每个清单数量 | 归一化数量 = 归属于所表示产品的数量 / 放行合格包装燕麦奶 kg | 可归属流数量；放行净产品质量 | 每 1 kg 参考流的流数量 | `mass-balance-identity`; `epd-international-pcr-2025-03` |
| `cr_volume_to_mass` | 产品和水的体积记录 | 质量 = 实测体积 x 记录工况下的实测或披露密度 | 体积；密度；温度或测量工况 | kg 物料 | `mass-balance-identity` |
| `cr_packaging_mass` | 按件计数的包装记录 | 包装质量 = 部件件数 x 经核实的单件质量；并与领用质量和废料核对 | 部件件数；部件质量；领用质量；退回库存；废料 | 各材料包装 kg | `mass-balance-identity` |
| `cr_dry_matter` | 燕麦配料和分离固形物 | 干物质质量 = 湿质量 x 实测干物质比例 | 湿质量；干物质比例 | kg 干物质 | `mass-balance-identity` |
| `cr_mass_balance` | 每个过程和所表示时期 | 残差 = 总质量投入 + 期初库存 - 产品输出 - 共产品输出 - 废物输出 - 实测基本流质量输出 - 期末库存；调查并披露显著残差，不得强制放入虚构流 | 全部实测质量流；期初和期末库存 | 质量衡算残差及核对说明 | `mass-balance-identity` |
| `cr_coproduct_fraction` | 无法避免的物理分配 | 输出 i 的分配比例 = 输出 i 的选定物理量 / 全部共产品选定物理量之和；全部输出采用相同湿基或干物质基准 | 统一物理基准的输出量 | 总和为 1 的分配比例 | `iso-14044-2006`; `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和配方 | 保留足以将所表示燕麦奶与排除产品区分的产品规格、配方或物料清单、燕麦配料形态、工艺路线、净装量、包装、放行状态和必需限定信息。 | 批准产品规格；配方；批次和放行记录 |
| `dq_temporal` | 前景数据期 | 存在代表性年度生产时使用连续 12 个月；较短生产期仅在能表示季节性、开机、清洗、产品组合和停机，或披露排除影响时可接受。 | 带日期的仪表、生产、采购、清洗、废物和放行记录；代表性说明 |
| `dq_technology` | 过程和公用工程记录 | 提取、分离、酶处理、热处理、均质、灌装、清洗和制冷技术应与声明路线匹配；披露合并或代理操作。 | 设备清单；工艺流程图；运行日志；分配工作表 |
| `dq_geography` | 上游和公用工程数据集 | 对显著流使用与声明采购和生产地理区域匹配的数据集；披露替代及可能的偏差方向。 | 供应商产地；工厂位置；电力和燃料合同；数据集元数据 |
| `dq_completeness` | 质量、水、能源、包装、残渣、废物和直接排放 | 纳入采集协议中的全部显著流，并核对产品、共产品、废物、水和能源记录。解释缺失记录、零值和质量衡算残差。 | 完整性清单；质量和水衡算；账单与仪表核对；废物联单 |
| `dq_precision` | 实测和计算值 | 保留原始读数、单位、密度或干物质换算、校准状态、汇总公式和分配比例，使归一化值可复现。 | 源记录；校准证据；计算工作簿或机器可读转换 |
| `dq_provisional_ranges` | 每个 `reasoned_estimate` 范围 | 范围仅作审核和 QA 筛查。没有明确情景决策时，不得以其中点或边界替代缺失前景值；关键发布使用前以经审核证据替换。 | 范围来源标志；替换或例外审核记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `va_product_identity` | 产品元数据 | 产品并非主要以燕麦制成、以乳制奶作为混合基料、不是成品液态饮料，或缺少必需产品和路线限定信息时，身份校验失败。 | `cpc-3-24425`; `eu-jrc-fdm-bref-2019` |
| `va_reference_flow` | 定量参考 | 归一化后必须恰有一个参考输出，使用 Oat milk `ad17fd2f-4977-4a51-b80b-f52061c153ec`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 和 1 kg。 |  |
| `va_process_coverage` | 过程图和清单 | 要求全部四个 `required` 过程，或明确披露的合并；合并后仍须保留投入、输出、产率、清洗和公用工程负荷且不得重复。 | `eu-jrc-fdm-bref-2019` |
| `va_transfer_reconciliation` | 内部中间体 | 同期并考虑有记录的库存变化和损失后，`prepared_oat_slurry_output` 应与 `prepared_oat_slurry_input` 匹配，`formulated_oat_base_output` 应与 `formulated_oat_base_input` 匹配。 | `mass-balance-identity` |
| `va_mass_balance` | 每个前景过程 | 计算并报告 `cr_mass_balance`；调查显著残差，且不得通过加入无依据的排放、废物或水流闭合衡算。 | `mass-balance-identity` |
| `va_residue_exclusivity` | 分离燕麦固形物 | 禁止将同一分离固形物质量同时报告为 `oat_solids_coproduct_output` 和 `oat_solids_waste_output`；要求去向、状态、湿质量和干物质证据。 | `iso-14044-2006`; `mass-balance-identity` |
| `va_allocation` | 多产品和共享过程 | 要求有记录的分配避免工作、选定分配规则、因果或物理基准、公式、源记录及总和为一的比例；经济分配还要求敏感性披露。 | `iso-14044-2006`; `eu-pef-2021-2279` |
| `va_range_use` | 暂定范围 | 将每个 `reasoned_estimate` 标为暂定；如其在没有获准情景或替换证据时被用作最终前景值，则关键发布校验失败。 |  |
| `va_completeness` | 数据包 | 对燕麦配料、调配材料、工艺水和清洗水、电力、热能、包装、产品产率、残渣、废物、废水以及适用时的制冷剂直接排放，要求原始记录链接或有记录的缺口。 | `eu-jrc-fdm-bref-2019`; `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景燕麦奶生产数据集，经审核、校验并关联上游数据集后可发布为 secondary_dataset 或 background_dataset |
| downstream_use | 与声明边界和项目规则一致的产品碳足迹、环境足迹、EPD 支撑 LCA、过程数据集和 lifecyclemodel 投影 |
| allowed_use | 在产品限定信息、地理、时期、上游数据集、分配和数据质量可见时，用于场址或路线特定的包装燕麦奶建模 |
| excluded_use | 未限定的营养或消费者功能比较；表示其他植物饮料或乳制奶混合饮料；无情景披露地用暂定范围替代缺失前景数据；超出建模边界的声明 |
| required_metadata | canonical PCR id；产品和配方变体；燕麦配料形态和来源；工厂地理；生产期；工艺路线；热处理；包装；储存制度；参考流 UUID 和单位；纳入边界；上游数据集；共产品状态；分配方法；采集协议 |
| required_quality_disclosure | 时间、地理、技术和产品代表性；实测与分配记录；仪表和秤覆盖；质量衡算残差；缺失或代理流；暂定估算；分配敏感性；外部处理路线 |
| update_trigger | 显著配方或燕麦来源变化；新的提取、酶、分离、热处理、灌装、包装、清洗、能源或废物技术；共产品去向或分配变化；电力或燃料供应变化；数据超过声明代表期；UUID 或来源证据更正 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `cpc-3-24425` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 24425, Oat milk | 产品类别身份和范围语境 |
| `epd-international-pcr-2025-03` | standard | EPD International, PCR 2025:03 Food and beverage products (main PCR), version 1.0.1, valid to 2030-07-14, https://www.environdec.com/pcr-library/pcr_fbd3e8c6-483c-48f5-d22f-08da0b49f7f5（检索于 2026-08-11） | 行业级声明单位和 EPD 建模语境；上游和下游边界披露 |
| `eu-jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, 2019, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/food-drink-and-milk-industries（检索于 2026-08-11） | 工厂过程覆盖；水、能源、清洗、废物和排放采集语境 |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I: Product Environmental Footprint method, Official Journal L 471, 30 December 2021, http://data.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-11） | 生命周期边界、数据质量、分配和披露规则 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines, including Amendments 1:2017 and 2:2020 | 分配层级、多输出建模、透明度和敏感性要求 |
| `mass-balance-identity` | method_factor | 本 PCR 计算规则所应用的质量守恒 | 转移核对、干物质换算、包装计算、质量衡算和分配比例 QA |
