---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.scallops-frozen-smoked-dried-salted-or-in-brine
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷冻、熏制、干制、盐渍或盐水浸渍扇贝

## 1. 范围与适用性

本 PCR 适用于以一种已声明主要路线保藏并销售的可食扇贝产品：冷冻、熏制、干制、盐渍或盐水浸渍。一个前景数据包的五种主要路线标签互斥。所选路线可包含必要的辅助步骤，例如熏制中的预先盐渍或干燥，但这些步骤不构成额外主要路线。混合产品和连续采用多种主要保藏路线的产品需要单独且明确记录的研究范围。

前景边界始于保藏工厂接收合格原料扇贝批次，止于在声明储存条件下放行的合格包装产品的工厂门。养殖或野生捕捞、上岸以及运至工厂的运输由上游数据集表示。除非研究扩展边界并披露该扩展，否则零售、使用和生命末期不属于前景边界。

下列数值范围均为刻意设置得较宽的暂定编写和 QA 筛查范围，证据类型为 `reasoned_estimate`。它们只在尚无路线和场址特定前景记录时适用，不是符合性限值；获得实测批次记录或经评审且有来源支持的范围时必须替换。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.scallops-frozen-smoked-dried-salted-or-in-brine |
| classification_refs | CPC 3.0：21264，exact |
| covered_products | 按已声明主要保藏路线销售的冷冻、熏制、干制、盐渍或盐水浸渍可食扇贝肉或可食扇贝部分 |
| excluded_products | 活、鲜或仅冷藏扇贝；非扇贝软体动物；预制餐食；混合海产品；未声明的主要保藏路线组合 |
| representative_product | 保藏工厂门处合格可销售的可食扇贝产品 |
| production_route | 恰好一种主要路线：`frozen`、`smoked`、`dried`、`salted` 或 `brine`；披露路线固有的辅助步骤 |
| market_state | 在已声明冷冻、冷藏、常温或其他经验证储存条件下的包装可销售产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供供食品制备或进一步食品加工使用的保藏可食扇贝产品 |
| How much | 1 kg 净可食扇贝产品内容物 |
| How well | 对已声明主要路线和产品形态合格且可销售；包装、贝壳、不可食组织、游离盐水和冷冻冰衣不计入参考质量 |
| How long or cycle | 保藏工厂门处一个已放行生产批次；数据集附带已声明保质期和储存条件 |
| reference_flow_link | 功能单位由按照适用路线特定质量规则计量的恰好 1 kg 参考产品流实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 合格可销售可食产品 |
| 参考产品流 | 扇贝，冷冻、烟熏、干制、盐渍或盐水浸泡 `bc4bc819-06b0-4452-bc14-5b08c6e3abf0` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 扇贝物种或商品名称；原料形态；主要保藏路线；可食产品形态；如适用，带壳状态和可食率；销售时水分状态；盐含量或盐水状态；冷冻产品冰衣比例和去冰衣方法；盐水浸渍产品沥干方法和时间；包装层级；储存温度或条件；生产地域和时期 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录恰好 1 kg 合格可销售可食产品内容物，排除全部包装、贝壳、不可食组织、游离液体和非产品冰衣。 |
| `frozen_net_mass` | 冷冻路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按已记录的去冰衣方法确定产品净质量；单独记录冰衣质量或比例，冰衣不得计入参考流。 |
| `brined_drained_mass` | 盐水浸渍路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按已声明沥干方法和时间使用沥干后的可食扇贝质量；包装盐水单独记录。 |
| `route_composition` | 熏制、干制、盐渍和盐水浸渍路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按销售状态计量产品，并在适用时报告水分状态和盐含量或盐度；干物质或无盐基准比较仅作为补充计算，不得替代销售状态参考质量。 |
| `in_shell_conversion` | 任一带壳销售形态 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流排除贝壳质量，并保留同一批次的实测总质量、可食质量和可食率换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 保藏工厂门处接收合格的原料扇贝批次，并声明来源、物种或商品名称、捕捞或养殖系统、进料形态、温度和质量基准 |
| starting_condition_role | 前景起始条件；上游扇贝生产和进厂运输仍作为相连的上游数据集 |
| product_classification_scope | 与 CPC 3.0 代码 21264 完全对齐的语义保藏扇贝类别，但不使用 CPC 作为规范 PCR 身份 |
| recursive_input_rule | 已在同一类别中保藏的输入仅以其已披露路线和质量基准作为上游产品数据集连接一次；不得递归地重新应用完整前景路线 |
| upstream_dataset_requirement | 对跨越所选研究边界的养殖或野生捕捞、上岸或初级处理、配料、包装、能源、供水、运输和废物处理采用具有代表性的数据集 |
| disclosure | 声明纳入和排除阶段、唯一所选主要保藏路线、辅助步骤、原料形态、可食率基准、储存条件、分配、截断和全部数据缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_exclusivity` | 前景路线 | 恰好建模一种主要路线（`frozen`、`smoked`、`dried`、`salted` 或 `brine`）；只纳入该路线实际使用的辅助步骤并予以披露。 | `unsd-cpc-v3-2025`; `codex-cxc-52-2003` |
| `boundary_foreground` | 全部前景过程 | 纳入准备、所选路线保藏、包装、放行前场内储存，以及全部已知材料和能源投入、直接排放、产品输出、共产品和废物。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `boundary_upstream` | 进厂原料扇贝和外购投入 | 将捕捞或养殖及进厂供应链负荷保留在相连的上游数据集中；不得从扩展产品系统遗漏。 | `eu-pef-2021-2279` |
| `boundary_exclusions` | 任一排除过程或流 | 避免截断；完成的研究必须明确任何排除，说明理由并评估其重要性。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_preparation` | 原料扇贝接收与准备 | `required` | 始终纳入；去壳、修整、清洗、分级或解冻仅在报告工厂实际执行时纳入 | 前景原料准备 | 每 kg 准备后可食扇贝输出 |
| `route_preservation` | 路线特定保藏 | `required` | 恰好一种已声明主要路线；仅记录所选路线及其实有辅助操作 | 前景保藏 | 每 kg 保藏扇贝输出 |
| `packaging_storage` | 包装和放行前场内储存 | `required` | 包装层级和储存制度与已声明产品路线及销售状态一致 | 前景后处理和工厂门放行 | 每 1 kg 参考产品 |

### 过程：原料扇贝接收与准备（`raw_preparation`）

#### 输入

##### 产品流

###### 接收合格的原料扇贝（`raw_scallops_input`）

记录进入前景准备过程的合格批次质量和形态，包括活体、冷藏、冷冻、带壳或去壳状态。

- 选定流：已声明进料形态的原料扇贝
- 流属性/单位：Mass / kg
- 数量规则：分配至该批次的实测接收批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 准备后可食扇贝输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_mass_balance`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定进料质量筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：20
  - 单位：kg 原料扇贝/kg 准备后可食输出
  - 基准：覆盖去壳和带壳进料形态的宽泛筛查；仅在没有批次特定可食率时适用
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 准备用水和冰（`preparation_water`）

记录清洗、解冻、温控或其他实际准备操作中使用的计量或核算水和冰。

- 选定流：过程用水和冰
- 流属性/单位：Mass / kg
- 数量规则：归属于该批次的实测水和冰质量之和
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 准备后可食扇贝输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_mass_balance`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定水和冰筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 准备后可食输出
  - 基准：仅限实际执行的操作；以计量或批次核算记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 准备后的可食扇贝（`prepared_scallops_output`）

根据同批次质量平衡计算准备后的可食输出，并将其传递至所选保藏路线。

- 选定流：准备后的可食扇贝
- 流属性/单位：Mass / kg
- 数量规则：进料原料质量减去实测贝壳、不可食组织、次品和其他分离质量，并核算保留或移除的水分
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个准备批次
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_raw_mass_balance`
- 数量范围：暂定可食率筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：1
  - 单位：kg 准备后可食输出/kg 接收原料扇贝
  - 基准：覆盖带壳和去壳输入的宽泛筛查；以同批次质量平衡替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 贝壳、不可食组织和剔除扇贝（`preparation_residues`）

按去向记录分离材料；作为共产品销售的材料不记录为废物。

- 选定流：扇贝准备残余物
- 流属性/单位：Mass / kg
- 数量规则：按材料和处理去向实测分离质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 准备后可食扇贝输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_raw_mass_balance`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定残余物筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：19
  - 单位：kg/kg 准备后可食输出
  - 基准：取决于进料形态的宽泛筛查；以同批次残余物记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：路线特定保藏（`route_preservation`）

#### 输入

##### 产品流

###### 准备后的可食扇贝（`preservation_scallops_input`）

传递准备后的输出，不重复上游扇贝负荷。

- 选定流：准备后的可食扇贝
- 流属性/单位：Mass / kg
- 数量规则：进入所选保藏路线的实测批次投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 保藏扇贝输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_batch`

###### 路线用水、冰、盐或盐水配料（`route_ingredients`）

仅记录实际使用的配料：冷冻路线的冷冻或冰衣用水，盐渍或盐水浸渍路线的食品级盐和水，以及仅在熏制或干制路线实际使用时记录的预先盐渍用盐或水。

- 选定流：路线特定的水、冰、食品级盐和盐水配料
- 流属性/单位：Mass / kg
- 数量规则：按组分实测采购或配制的配料质量；不得将盐和水合并成无组成记录的盐水总量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 保藏扇贝输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_batch`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定路线配料筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg 路线配料总量/kg 保藏输出
  - 基准：适用组分取决于所选路线；以配方和批次记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 发烟材料（`smoke_material`）

仅对熏制路线记录木材、植物材料或烟熏制剂，并识别熏制技术。

- 选定流：发烟材料或烟熏制剂
- 流属性/单位：Mass / kg
- 数量规则：归属于熏制批次的实测消耗量；非熏制路线为零或不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 熏制扇贝输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_batch`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定发烟材料筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 熏制输出
  - 基准：仅适用于熏制路线；以设备和批次消耗记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 电力和热能（`preservation_energy`）

分别记录冷冻、冻藏、熏制、干燥、盐水配制、泵送和其他实际路线操作的计量电力以及燃料或外购热量。

- 选定流：电力和路线特定热能载体
- 流属性/单位：Energy / 按载体分别使用 kWh 和 MJ
- 数量规则：按载体和操作计量或核算的消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保藏扇贝输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_energy`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定电力筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kWh/kg 保藏输出
  - 基准：宽泛路线和技术筛查；以计量记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 数量范围：暂定热能筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：MJ/kg 保藏输出
  - 基准：宽泛路线和技术筛查；以燃料或热量记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 保藏扇贝中间产品（`preserved_scallops_output`）

按所选路线适用的质量条件计量输出，并传递至包装过程。

- 选定流：所选路线的保藏可食扇贝
- 流属性/单位：Mass / kg
- 数量规则：实测输出质量，并按适用情况记录水分、盐或盐度、冰衣和沥干条件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每个保藏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preservation_batch`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定保藏得率筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：2
  - 单位：kg 保藏输出/kg 准备后扇贝投入
  - 基准：反映水分移除或吸收的宽泛路线筛查；以路线特定批次质量平衡替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 废水、废盐水和保藏次品（`preservation_waste`）

按组成和处理去向分别记录液态和固态废物；不得将这些流与产品输出净额相抵。

- 选定流：废水、废盐水和保藏次品
- 流属性/单位：Mass / kg
- 数量规则：按废物流，依据同批次水、配料和质量平衡记录实测或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 保藏扇贝输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preservation_batch`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定保藏废物筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 保藏输出
  - 基准：路线相关筛查；以批次质量平衡和排放记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：包装和放行前场内储存（`packaging_storage`）

#### 输入

##### 产品流

###### 保藏扇贝产品（`packaging_product_input`）

按参考流所用的相同路线特定计量条件记录进入包装的保藏产品。

- 选定流：所选路线的保藏可食扇贝
- 流属性/单位：Mass / kg
- 数量规则：进入最终包装的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`

###### 包装材料（`packaging_materials`）

按材料和质量分别记录初级、次级和三级包装；包装绝不计入 1 kg 参考产品质量。

- 选定流：按材料类型区分的包装材料
- 流属性/单位：Mass / kg
- 数量规则：实测物料清单、采购核算或包装线记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定包装筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：1
  - 单位：kg 包装/kg 参考产品
  - 基准：宽泛包装形态筛查；以产品特定物料清单替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 场内储存用电（`release_storage_energy`）

记录从包装到工厂门放行期间冷冻、冷藏、湿度控制或其他场内储存用电。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：按占用容量和时间或其他已披露物理驱动因素分配的计量储存用电
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定场内储存能耗筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg 参考产品
  - 基准：取决于路线和时长的筛查；以计量储存和占用记录替换
  - 基准类型：储存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格可销售参考产品（`reference_product_output`）

按适用路线特定质量条件放行恰好 1 kg 合格可食扇贝产品。

- 选定流：扇贝，冷冻、烟熏、干制、盐渍或盐水浸泡 `bc4bc819-06b0-4452-bc14-5b08c6e3abf0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：一个参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 包装废料和剔除的包装产品（`packaging_waste`）

按材料和处理去向分别记录包装废料和剔除的包装产品。

- 选定流：包装废料和剔除的包装扇贝产品
- 流属性/单位：Mass / kg
- 数量规则：实测废料和剔除产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- 数量范围：暂定包装废物筛查估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 参考产品
  - 基准：宽泛产线损失筛查；以包装线记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 多功能前景操作 | 首先通过过程细分，或在研究目标有正当理由时通过系统扩展来避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical` | 不可分离的共享投入和排放 | 如过程细分或系统扩展不可行，采用反映导致共享负荷之功能的已记录物理关系进行分配。 | `eu-pef-2021-2279` |
| `allocation_other` | 不存在可辩护的物理关系 | 仅在记录前述选项失败的原因、所用价格和时期以及选择敏感性后，才使用包括经济分配在内的其他关系。 | `eu-pef-2021-2279` |
| `allocation_residue_status` | 贝壳、修整物、废盐水和剔除产品 | 在每个输出离开过程时将其分类为产品、共产品或废物；不向废物流分配上游负荷，但纳入其处理和处置。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_raw_mass_balance` | `raw_preparation` | 进料扇贝、水或冰、准备后输出、残余物 | 批次质量平衡 | 批次号；物种；进料形态；总质量；可食质量；贝壳和剔除物质量；水和冰；温度 | 经校准秤具、仪表、生产和去向记录 | kg；°C | 每批次 | 包含正常波动的代表性报告期 | 报告工厂和在运营控制下的委托准备 | 按批次核算投入、输出、保留水分和损失，再按产量加权 | 秤具和仪表校准；批次可追溯性；核算残差 |
| `cp_preservation_batch` | `route_preservation` | 配料、保藏输出和废物 | 路线批次记录 | 路线；辅助步骤；配方质量；投入和输出质量；水分；盐或盐度；冰衣；沥干方法和时间；废水；次品 | 经校准秤具、配方记录、实验室或经验证的工厂测量 | kg；质量分数；盐度 | 每批次 | 按路线划分的代表性报告期 | 报告工厂和已声明保藏生产线 | 每条路线分别计算；不得在主要路线之间平均 | 校准；配方领用记录；测试方法；路线特定质量平衡 |
| `cp_preservation_energy` | `route_preservation` | 电力、燃料、热量和直接排放 | 仪表和燃料记录 | 仪表读数；燃料量；能源载体；设备；运行时间；批次产量；直接排放测量值或因子 | 分表、发票核算、燃料日志以及排放监测或计算 | kWh；MJ；载体单位；kg 排放 | 每批次或生产期 | 按路线和季节划分的代表性报告期 | 报告工厂的保藏设备和共享公用工程 | 可用时采用直接计量；否则按已披露物理驱动因素分配 | 仪表校准；发票；运行日志；因子身份 |
| `cp_packaging_release` | `packaging_storage` | 产品质量、包装、储存能耗、废料和放行条件 | 包装和放行记录 | 产品质量；包装材料和质量；废料；储存温度或湿度；入库和放行时间；占用容量；电力；最终质量放行 | 物料清单、产线计数和秤具、储存仪表和库存记录、放行证书 | kg；件；kWh；°C；小时或日 | 每包装批次和储存期 | 代表性报告期 | 包装线和截至工厂门的场内储存 | 将材料和分配的储存能耗归一化至合格放行产品 | 物料清单版本；秤具和仪表校准；库存核算；放行证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | 放行产品 | 冷冻：去冰衣净可食质量；盐水浸渍：沥干可食质量；其他路线：销售状态可食质量。排除包装、贝壳、不可食组织、游离盐水和冰衣。 | 实测总质量、排除部分、路线特定测试条件 | kg 参考产品 | `codex-cxc-52-2003` |
| `calc_inventory_normalization` | 每个前景流 | 归属于合格输出的流量除以合格参考产品质量 | 批次流量；如适用的分配因子；放行参考产品质量 | 每 1 kg 参考产品的流量 | `eu-pef-2021-2279` |
| `calc_route_mass_balance` | 准备和保藏 | 核算实测投入与产品、共产品、废物、废水、蒸发、冰衣和游离盐水；调查并披露残差 | 同批次质量记录和组成条件 | 已核算的路线质量平衡 | `codex-cxc-52-2003` |
| `calc_shared_storage` | 场内储存 | 除非有更直接的计量，否则按占用容量乘以停留时间分配计量储存能耗 | 储存用电；占用容量；停留时间 | 每 1 kg 参考产品的 kWh | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_route` | 产品和过程身份 | 保持批次可追溯性，并声明物种或商品名称、进料形态、唯一主要路线、辅助操作、产品形态、地域和时期。 | 批次记录；路线记录；产品规格 |
| `dq_mass_condition` | 参考质量和得率计量 | 使用经校准质量测量并保留适用的冰衣、沥干、水分、盐或盐度和可食率条件；未协调这些基准时不得比较路线得率。 | 校准记录；测试方法；同批次质量平衡 |
| `dq_completeness` | 前景清单 | 核算全部已知材料、水、能源、直接排放、产品、共产品和废物流；记录并评估排除项。 | 核算；仪表；发票；废物联单；局限性日志 |
| `dq_temporal_technology` | 前景活动数据 | 采用代表正常运行和路线技术的报告期，包括相关季节或储存变化。 | 生产日历；设备身份；覆盖说明 |
| `dq_reasoned_estimates` | 全部暂定范围 | 每个 `reasoned_estimate` 仅作为临时编写或 QA 筛查。披露任何实际采用情况，并在获得路线和场址特定记录或经评审且有来源支持的证据时替换。 | 数据集局限性说明；替换评审记录 |
| `dq_storage_shelf_life` | 放行产品 | 声明经验证的储存条件和保质期；若扩展 PEF 研究对下游损失建模，应一致纳入包装和保质期影响。 | 产品规格；放行证书；保质期证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求产品流 UUID `bc4bc819-06b0-4452-bc14-5b08c6e3abf0`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg 和数量 1。 |  |
| `validate_route` | 数据集身份 | 要求恰好一种主要路线并拒绝未声明的路线组合；只允许路线相关的过程投入和条件。 | `unsd-cpc-v3-2025`; `codex-cxc-52-2003` |
| `validate_mass_basis` | 参考产品 | 拒绝计入包装、贝壳、不可食组织、游离盐水或冰衣的参考质量；要求适用的去冰衣、沥干、水分、盐和可食率披露。 | `codex-cxc-52-2003` |
| `validate_process_coverage` | 前景清单 | 要求全部三个 process id 以及所选路线的实际材料、能源、产品、废物和直接排放记录，或明确且有理由的零/不适用说明。 | `eu-pef-2021-2279` |
| `validate_mass_balance` | 准备和保藏 | 要求同条件下核算的质量平衡；无法解释的残差和跨路线平均属于发现项。 | `codex-cxc-52-2003` |
| `validate_allocation` | 多功能操作 | 使用分配时要求记录分配层级、因子、基准、时期和敏感性。 | `eu-pef-2021-2279` |
| `validate_provisional_ranges` | 任一实际采用的 `reasoned_estimate` | 要求明确暂定披露和替换触发条件；暂定范围不得声称为发布关键的允许区间。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 保藏工厂门处的前景保藏扇贝生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 产品形态、主要保藏路线、质量条件、地域、时期、技术和储存制度与本数据集匹配的 LCA process 或 lifecyclemodel 投影 |
| excluded_use | 活、鲜或仅冷藏扇贝；其他软体动物；预制餐食；混合路线；未协调水分、盐、冰衣、沥干、可食率、包装和边界条件的跨路线比较 |
| required_metadata | PCR id；参考 UUID；CPC 引用；物种或商品名称；原料形态和来源系统；主要路线和辅助步骤；产品形态；计量条件；包装物料清单；储存条件和保质期；地域；时期；技术；分配和截断 |
| required_quality_disclosure | 前景覆盖和代表性；校准和测试方法；同批次质量平衡残差；上游数据集；分配；排除项；代理数据；不确定性；所有保留的推理估算及其替换触发条件 |
| update_trigger | 产品流身份或参考属性变化；路线、配方、包装、储存、技术或法规变化；前景数据发生实质变化；获得可替代推理估算的实测记录或经评审且有来源支持的范围 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | `official_guidance` | 联合国统计司，《产品总分类》第 3.0 版结构，代码 21264，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-08-11） | 官方类别标题和互为替代的保藏路线范围 |
| `codex-cxc-52-2003` | `standard` | Codex Alimentarius, Code of Practice for Fish and Fishery Products, CXC 52-2003, https://www.fao.org/input/download/standards/10273/CXP_052e.pdf（检索日期 2026-08-11） | 双壳贝类接收和准备；冷冻、冰衣和净质量；盐渍、盐水浸渍、干燥、熏制、包装、储存及路线特定计量控制 |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint method, CELEX 32021H2279, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng（检索日期 2026-08-11） | 功能单位和参考流；系统边界；企业特定数据；归一化；分配层级；排除和数据质量 |
