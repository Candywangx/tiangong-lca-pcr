---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.lobsters-frozen-dried-salted-or-in-brine
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷冻、干制、盐渍或盐水腌制龙虾

## 1. 范围与适用性

本 PCR 适用于采用一种已声明路线保藏龙虾的前景生产：冷冻、干制、盐渍或盐水腌制。只有当连续组合确为实际声明的生产路线时才予以纳入；不得跨不同路线产品平均路线特定的投入和产出。前景边界始于加工厂门接收的活体、生鲜、冷藏或其他未保藏龙虾，止于现场贮存后的工厂门包装保藏龙虾。

捕捞或养殖、外购物料和公用工程的生产、分销、零售、消费者制备以及包装报废处置不在前景边界内，应采用适当的上游或下游数据集。食品安全合规是数据验收前提，不是环境绩效声明。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.lobsters-frozen-dried-salted-or-in-brine |
| classification_refs | CPC 3.0: 21253, Lobsters, frozen, dried, salted or in brine |
| covered_products | CPC 21253 语义范围内通过冷冻、干制、干盐渍、湿盐渍或盐水腌制保藏的龙虾；声明后可包括生制或熟制，以及带壳、尾部或龙虾肉形态 |
| excluded_products | 活体、鲜或冷藏龙虾；岩龙虾及其他海螯虾；挪威海螯虾；蟹；虾；预制餐食；无法将龙虾含量与其他食品配料分离的产品 |
| representative_product | 符合已声明物种、产品形态和保藏路线的包装保藏龙虾 |
| production_route | 接收和预处理、一种已声明的保藏路线（或明确声明的连续组合）、包装和现场贮存 |
| market_state | 冷冻、干制、盐渍或盐水腌制；声明生制或熟制、产品形态和贮存条件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 具有已声明物种、产品形态和保藏路线，且适用于已声明市场用途的保藏龙虾 |
| How much | 1 kg 目标龙虾产品净质量 |
| How well | 符合适用的产品规格和食品安全验收准则；声明路线、产品形态和组成 |
| How long or cycle | 完成已声明的保藏和现场贮存期后的工厂门状态 |
| reference_flow_link | 参考产品产出行 `final_lobster_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净质量 |
| 参考产品流 | Lobsters, frozen, dried, salted or in brine `e7ed95ac-7ca1-4d41-8a1b-9a26e6259795` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种的常用名和学名；保藏路线；生制或熟制状态；带壳、尾部或龙虾肉形态；净质量约定；适用时的水分或水分活度；适用时的盐浓度以及干盐渍或盐水腌制；冰衣和游离盐水的处理；包装形式；贮存温度和持续时间；生产地域和参考期 |

目标产品净质量不包括包装、外部冰衣和游离覆盖盐水。如法规规定的商业净质量或沥干质量约定不同，应同时报告二者并保留换算记录。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有质量归一化的清单结果 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 归一化至 1 kg 目标产品净质量；分母排除包装、冰衣和游离盐水，并记录任何沥干质量换算。 |
| `route_separation` | 路线相关活动数据 | 原生计量属性或质量属性 | 按记录使用 kg、kWh、MJ、h、°C 或 % | 保留实测原生单位和路线/批次标识；仅用有记录的因子换算，且没有已声明的按产量加权计算时不得合并冷冻、干制、盐渍和盐水腌制观测值。 |
| `mass_balance` | 接收龙虾、产品、残余物、废水、水分损失、冰衣和盐水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在一致边界上闭合批次湿质量平衡；分别识别产品保留水分、去除水分、游离盐水、冰衣、固体残余物和废水。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工厂门接收的活体、生鲜、冷藏或其他未保藏龙虾，并声明物种、来源、状态、温度、质量和上游数据集 |
| starting_condition_role | 进入前景接收和预处理的上游产品投入 |
| product_classification_scope | 仅限 CPC 21253 语义边界内的龙虾产品 |
| recursive_input_rule | 如果外购投入已是本类别内的冷冻、干制、盐渍或盐水腌制龙虾，应以具有进厂保藏状态和质量的上游产品数据集表示；不得递归重建其保藏过程，也不得在前景路线中重复计算该保藏。 |
| upstream_dataset_requirement | 要求采用地域和技术代表性适当的捕捞或养殖及外购物料数据集；披露缺口、代理、分配和时间不匹配。 |
| disclosure | 声明龙虾来源和物种、接收状态、熟制状态、保藏路线、过程产率、质量约定、贮存条件、包装、共产品、废物以及所有排除项。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground` | 所有前景数据集 | 纳入接收、预处理、实际声明的保藏步骤、包装、现场贮存、拒收品和残余物、废水或废盐水、制冷剂直接损失以及现场公用工程使用；排除未实施的替代路线操作。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `boundary_upstream` | 外购龙虾、水、冰、盐、包装、能源和处理服务 | 为各物料投入和输出的处理服务链接代表性上游数据集，并防止已保藏龙虾投入重复计算。 | `eu-pef-2021-2279` |
| `boundary_food_safety` | 产品验收和路线记录 | 保留适用 Codex 路线指南要求的时间、温度、卫生、盐/盐水和干制控制记录；拒收或返工批次仍应进入质量和能源清单。 | `codex-cxc-52-2003`; `codex-cxs-95-1981` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | 接收和预处理 | `required` | 始终纳入 | 前景接收、清洗、适用时熟制、切割或取肉以及预处理 | 离开该过程的预处理龙虾 kg |
| `preservation_route` | 已声明的保藏路线 | `required` | 仅纳入属于已声明冷冻、干制、盐渍、盐水腌制或明确连续路线的流卡 | 前景保藏 | 离开路线的保藏龙虾 kg |
| `packing_storage` | 包装和现场贮存 | `required` | 始终纳入；冷藏和制冷剂流卡仅适用于冷冻产品 | 前景成品处理和工厂门产出 | 1 kg 目标产品净质量 |

### 过程：接收和预处理（`receiving_preparation`）

#### 输入

##### 产品流

###### 接收龙虾（`received_lobster`）

记录进入工厂的龙虾质量和状态，并链接适用的上游捕捞或养殖数据集。

- 选定流：未保藏龙虾，Tiangong UUID 待审
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测接收批次质量，归一化至最终产品净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 目标产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_mass_balance`
- 数量范围：暂定产率筛查投入
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：3.0
  - 单位：kg/kg 目标产品净质量
  - 基准：每 1 kg 目标产品净质量的接收龙虾
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理用水和冰（`preparation_water_ice`）

记录清洗、冷却、解冻、熟制或冷却所用的计量或采购水和冰；在原始记录中保持水和冰数量可区分。

- 选定流：工艺水和冰，各自 Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：实测水加冰质量，并保留分项值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理龙虾产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_mass_balance`
- 数量范围：暂定水和冰合计筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 预处理龙虾
  - 基准：每 1 kg 预处理龙虾产出的工艺水和冰合计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预处理龙虾中间品（`prepared_lobster`）

记录转入保藏的预处理龙虾，并保留物种、产品形态、熟制/生制状态和批次标识。

- 选定流：预处理龙虾中间品，Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个预处理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`

##### 废物流

###### 固体拒收品和残余物（`preparation_residues`）

记录外壳、内脏、受损产品及其他单独管理的固体；区分出售的共产品与废物。

- 选定流：龙虾预处理残余物，Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：按去向和法规状态实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理龙虾产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_mass_balance`
- 数量范围：暂定残余物筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg 预处理龙虾
  - 基准：每 1 kg 预处理龙虾产出的固体
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理废水（`preparation_wastewater`）

记录送至现场或场外处理的废水，排除产品中保留的水以及单独记录的废盐水。

- 选定流：废水，Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：实测排放量或水量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 预处理龙虾产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_mass_balance`
- 数量范围：暂定废水筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 预处理龙虾
  - 基准：每 1 kg 预处理龙虾产出的预处理废水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：已声明的保藏路线（`preservation_route`）

#### 输入

##### 产品流

###### 进入保藏的预处理龙虾（`preservation_lobster_input`）

记录进入已声明路线的预处理中间品；路线标识应贯穿所有路线特定记录。

- 选定流：预处理龙虾中间品，Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个保藏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`

###### 保藏用电或热（`preservation_energy`）

冷冻产品记录冷冻用电；干制产品分别记录干燥机用电和热能；盐渍或盐水腌制仅在实际消耗能源时纳入。

- 选定流：电力和热能载体，各自 Tiangong UUID 待审
- 流属性/单位：Energy / kWh 和 MJ，原始字段中分别记录
- 数量规则：按能源载体计量或分配的路线特定能源
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保藏龙虾产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 数量范围：暂定保藏能源筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：100
  - 单位：MJ-eq/kg 保藏龙虾
  - 基准：按有记录的换算合计用电和热能，每 1 kg 路线产出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 盐和盐水用水（`salt_brine_inputs`）

干盐渍产品纳入盐，湿盐渍或盐水腌制产品纳入盐和水；仅冷冻或无盐干制路线排除此行。

- 选定流：食品级盐和水，各自 Tiangong UUID 待审
- 流属性/单位：Mass / kg，分别记录
- 数量规则：按批次实测盐和盐水用水投入
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 盐渍或盐水腌制路线产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_route_control_records`
- 数量范围：暂定盐和盐水筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：12
  - 单位：kg 合计投入/kg 盐渍或盐水腌制产出
  - 基准：每 1 kg 适用路线产出的盐和盐水用水合计，并保留分项
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 保藏龙虾中间品（`preserved_lobster`）

仅记录实际路线产出及其路线特定状态；不得把不同路线产出聚合为一个前景观测值。

- 选定流：保藏龙虾中间品，Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：实测路线产出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每个保藏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`

##### 废物流

###### 保藏拒收品和废盐水（`preservation_waste`）

记录拒收产品，并在盐渍或盐水腌制路线中按处理去向记录废盐水；原始记录中保持各分项独立。

- 选定流：保藏废物和废盐水，各自 Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：按废物类型和去向实测或质量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 保藏龙虾产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_mass_balance`
- 数量范围：暂定保藏废物筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：12
  - 单位：kg/kg 保藏龙虾
  - 基准：每 1 kg 路线产出的拒收品和废盐水合计，并保留分项
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 干制过程释放的水分（`drying_moisture`）

仅在干制路线中纳入，并根据质量和水分记录计算去除的水；披露冷凝水是否作为废水而非大气排放。

- 选定流：排向空气的水或冷凝水，路线特定 Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：计算去除的水并与质量平衡核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 干制龙虾产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_route_control_records`
- 数量范围：暂定干制水分筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.1
  - 上限：10
  - 单位：kg/kg 干制龙虾
  - 基准：每 1 kg 干制路线产出所去除的水
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：包装和现场贮存（`packing_storage`）

#### 输入

##### 产品流

###### 进入包装的保藏龙虾（`packing_lobster_input`）

记录进入包装的具有路线限定信息的保藏龙虾。

- 选定流：保藏龙虾中间品，Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个包装批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass_balance`

###### 包装材料（`packaging_materials`）

按材料和再生含量规格分别记录初级、次级及分配的三级包装。

- 选定流：包装材料，各材料 Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：实测领用量或物料清单质量减去有记录的退料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 目标产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_mass_balance`
- 数量范围：暂定包装筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.005
  - 上限：0.2
  - 单位：kg/kg 目标产品净质量
  - 基准：每 1 kg 目标产品净质量的包装领用总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冷冻贮存用电（`cold_storage_electricity`）

仅对冷冻产品纳入，并根据已声明的现场贮存时长，采用分表计量或有记录的物理分配记录用电。

- 选定流：电力，Tiangong UUID 待审
- 流属性/单位：Energy / kWh
- 数量规则：计量或按物理关系分配的冷库用电
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷冻目标产品及已声明贮存时长
- 基准类型：贮存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_records`
- 数量范围：暂定冷冻贮存用电筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：10
  - 单位：kWh/kg 冷冻目标产品
  - 基准：每 1 kg 产品的已声明现场冷冻贮存期
  - 基准类型：贮存时长（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 最终包装保藏龙虾（`final_lobster_output`）

这是参考产品产出；目标产品净质量排除包装、外部冰衣和游离覆盖盐水。

- 选定流：Lobsters, frozen, dried, salted or in brine `e7ed95ac-7ca1-4d41-8a1b-9a26e6259795`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次归一化后 1 kg 目标产品净质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_batch_mass_balance`

##### 废物流

##### 基本流

###### 冷冻和冷藏的制冷剂损失（`refrigerant_loss`）

仅在制冷设备服务于冷冻路线时纳入；识别制冷剂，并根据充注和维修记录计算损失。

- 选定流：按物质区分的制冷剂排放，Tiangong UUID 待审
- 流属性/单位：Mass / kg
- 数量规则：计算年度或生产期制冷剂损失并分配至冷冻产品产量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 冷冻目标产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cold_chain_records`
- 数量范围：暂定制冷剂损失筛查估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg 制冷剂/kg 冷冻目标产品
  - 基准：按每 1 kg 冷冻产品分配的制冷系统损失
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 批次、路线及独立计量操作 | 首先区分批次和保藏路线并使用直接质量和公用工程记录；不得分配未实施路线的负担，也不得平均不同路线清单。 | `eu-pef-2021-2279` |
| `allocation_shared_inputs` | 共享公用工程、贮存和共同预处理 | 优先采用设备时间、热负荷或计量用量等有记录的物理因果参数。仅在质量合理代表物理关系时采用质量分配；如无法论证物理关系，则采用有记录的经济分配并报告敏感性结果。 | `eu-pef-2021-2279` |
| `allocation_residues` | 外壳、肉类组分及其他次级产出 | 将丢弃或送处理的物料作为废物并纳入处理。如果产出是有意生产并销售的共产品，披露其状态、数量、价格或物理关系、分配方法及敏感性；不得对未经核实的市场给予抵扣。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_mass_balance` | `receiving_preparation`; `preservation_route`; `packing_storage` | 物料投入、转移、产出、残余物、废水、包装 | 秤、发票、领用记录、排水计量或批次质量平衡 | batch_id, route_id, species, presentation, received_mass_kg, water_kg, ice_kg, prepared_mass_kg, salt_kg, brine_water_kg, preserved_mass_kg, packaging_by_material_kg, final_net_mass_kg, glaze_kg, free_brine_kg, residues_by_destination_kg, wastewater_kg, spent_brine_kg | 使用经校准的秤和计量器；按批次核对转移量 | kg | 每批；公用工程采用最短的代表性计量间隔 | 代表性生产年度，并识别季节和异常批次 | 每个纳入的工厂和路线 | 先按同质路线和批次求和，再按合格最终净质量归一化；保留路线特定结果后方可按产量加权 | 校准、发票、批次单、核对记录、去向记录和缺失数据日志 |
| `cp_utility_records` | `preservation_route`; `packing_storage` | 电力和热能 | 分表、燃料记录、发票、设备运行时间和额定负荷 | meter_id, carrier, opening_reading, closing_reading, unit, route_id, equipment_id, runtime_h, allocation_driver, storage_duration | 尽可能按操作计量；否则记录物理分配 | 原生 kWh、MJ、kg 或 m3 | 计量间隔或每个生产期 | 与生产相同的代表期 | 服务于纳入操作的每个能源系统 | 末读数减初读数，扣除排除负荷，按已披露物理驱动因素分配，并保留能源载体特定结果 | 计量器校准、发票核对、负荷图和分配工作表 |
| `cp_route_control_records` | `preservation_route` | 保藏控制和产品验收 | 批次控制、实验室和食品安全记录 | route_id, time, product_temperature, room_temperature, salt_mass_fraction, brine_concentration, moisture, water_activity, cooking_state, nonconformance, rework | 记录适用路线规格和抽样方案要求的参数 | 包括 h、°C、% 和水分活度的原生单位 | 每批或经验证的连续记录间隔 | 完整的纳入生产期 | 每条路线和生产线 | 保留路线特定分布，并将拒收或返工批次链接至质量平衡 | 经校准的仪器、实验室方法、记录器完整性和纠正措施记录 |
| `cp_cold_chain_records` | `packing_storage` | 冷冻贮存和制冷剂 | 温度记录器、制冷剂存量和维修日志 | equipment_id, refrigerant_identity, opening_charge_kg, additions_kg, recovered_kg, closing_charge_kg, frozen_throughput_kg, storage_duration, temperature_series | 连续温度记录和经核对的制冷剂平衡 | °C、h 或 day、kg | 连续温度；每次维修事件和年度/生产期平衡 | 完整冷冻产品期 | 服务于纳入产品的每个制冷系统 | 仅按已披露驱动因素向所服务的冷冻产品产量分配计算损失和能源 | 记录器校准/完整性及签字维修记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单数量 | 归一化数量 = 合格路线特定数量 / 最终目标产品净质量；分母排除包装、冰衣和游离盐水 | 路线特定采集数量；final_net_mass_kg | 每 1 kg 参考流的数量 |  |
| `calc_mass_balance` | 每批和每条路线 | 未解释质量 = 总质量投入 - 已识别的产品、共产品、废物、废水、水分及其他产出；报告带符号差值并调查重大不平衡 | `cp_batch_mass_balance` 的所有质量字段和 `cp_route_control_records` 的水分 | 产率、残余物比例和未解释质量 |  |
| `calc_route_weighting` | 多批次报告 | 分别计算每条已声明路线；如需产品组合结果，按合格产品净质量对路线结果进行产量加权，并同时发布路线份额和路线特定结果 | 路线特定归一化结果；路线 final_net_mass_kg | 透明的路线特定结果及可选组合结果 |  |
| `calc_refrigerant_loss` | 冷冻路线制冷 | 损失 = 期初充注量 + 添加量 - 回收量 - 期末充注量；仅按有记录的制冷服务驱动因素分配经核对的正损失 | 制冷剂充注和维修字段；所服务的冷冻产品产量 | 每 kg 冷冻目标产品的制冷剂排放 kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和路线 | 物种、CPC 范围、保藏路线、产品形态、生制/熟制状态、净质量约定、来源和批次链接应完整。 | 产品规格、供应商记录、批次追溯和批次单；`unsd-cpc-3-0`; `codex-cxc-52-2003` |
| `dq_measurement` | 质量、公用工程、控制参数和制冷剂 | 使用经校准或核对的测量；保留原生单位、换算因子、分配驱动因素和处理去向。 | 校准证书、发票、计量记录、实验室方法、维修日志；`eu-pef-2021-2279` |
| `dq_temporal` | 代表性生产 | 覆盖代表性生产年度或说明较短生产期的理由；披露季节性、停机、异常损失和贮存时长。 | 覆盖报告和生产计划；`eu-pef-2021-2279` |
| `dq_completeness` | 前景清单 | 核对从接收龙虾到合格产品的每条纳入路线，并识别未计量的水、冰、能源、盐/盐水、包装、残余物、废水、水分和制冷剂流。 | 质量/能源核对和缺失数据日志 |
| `dq_food_safety` | 路线验收 | 保留适用的卫生和保藏控制证据。对于速冻龙虾，核验适用温度要求并记录偏差及纠正措施。 | 路线控制记录；`codex-cxc-52-2003`; `codex-cxs-95-1981` |
| `dq_estimates` | 暂定范围和替代数据 | 推理估算范围仅为 QA 筛查，不是前景值；披露所有代理，并在激活前用经审查的证据替换。 | 数据质量披露和 manifest 审查元数据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考流和产品元数据 | 如参考数量不是 1 kg 目标产品净质量、产品 UUID 或 Mass UUID/单位组不同，或缺少任何必需产品或路线限定信息，则失败。 | `unsd-cpc-3-0` |
| `validate_route` | 过程清单 | 如纳入了没有实际声明路线的替代路线投入、无条件平均不同路线，或连续保藏缺少批次证据，则失败。 | `codex-cxc-52-2003` |
| `validate_balance` | 批次质量和能源记录 | 标记未解释质量、计算得到的负制冷剂损失、缺失换算因子或未解决分配；生产者应调查并披露处理结果，不得静默平衡。 | `eu-pef-2021-2279` |
| `validate_frozen_control` | 冷冻产品 | 要求完整的时间-温度记录并符合适用的速冻龙虾规格；不合格或返工批次仍应体现在资源和废物流中。 | `codex-cxc-52-2003`; `codex-cxs-95-1981` |
| `validate_sources_and_estimates` | 证据和数据质量 | 在非参考流 UUID 或暂定推理估算范围的来源支持替代项仍未解决时，激活就绪校验失败；候选状态使用时应披露这些限制。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂门保藏龙虾前景生产数据集 |
| downstream_use | 经审查和发布后用于 `secondary_dataset`; `background_dataset` |
| allowed_use | 与已声明龙虾物种、来源、保藏路线、产品形态、地域、技术和参考期相匹配的产品足迹和 LCA 模型 |
| excluded_use | 鲜或活龙虾；其他甲壳类；未声明的冷冻、干制、盐渍和盐水腌制混合；即食餐食；忽略重大路线、来源或分配差异的比较 |
| required_metadata | PCR id/version、工厂和地域、期间、物种和来源、生制/熟制状态、产品形态、保藏路线、净质量约定、产率、贮存时间和温度、包装、分配、上游数据集、代理和估算标志 |
| required_quality_disclosure | 路线特定覆盖、测量和校准、缺失数据、质量/能源平衡、冷链和食品安全记录、共产品/废物处理、分配敏感性、暂定估算、UUID 缺口和来源代表性 |
| update_trigger | 物种/来源、保藏路线、熟制或产品形态、工厂技术、能源/制冷剂系统、产率、包装、分配、法规/规格变化，或数据超过可接受代表性期间 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, code 21253, https://unstats.un.org/unsd/classifications/Econ/cpc (retrieved 2026-08-11) | 产品类别边界和排除项 |
| `codex-cxc-52-2003` | `standard` | Codex Alimentarius, Code of Practice for Fish and Fishery Products, CXC 52-2003, https://www.fao.org/input/download/standards/10196/CXP_052e.pdf (retrieved 2026-08-11) | 加工路线分解、卫生、保藏控制和不合格产品记录 |
| `codex-cxs-95-1981` | `standard` | Codex Alimentarius, Standard for Quick Frozen Lobsters, CXS 95-1981, https://www.fao.org/input/download/standards/11099/CXS_095e.pdf (retrieved 2026-08-11) | 冷冻龙虾产品和时间-温度合规 |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (retrieved 2026-08-11) | 边界完整性、分配层级、数据质量、代表性和披露 |
