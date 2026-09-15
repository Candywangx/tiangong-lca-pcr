---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.jams-fruit-jellies-marmalades-fruit-or-nut-purree-and-fruit-or-nut-pastes
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 果酱、水果果冻、橘皮酱、水果或坚果泥及水果或坚果糊

## 1. 范围与适用性

本 PCR 为可销售的果酱、水果果冻、橘皮酱、水果泥/水果糊和坚果泥/坚果糊规定通用的工厂门前景数据规则。一个具体数据包应代表一种已声明的产品、配方、路线、生产场址、报告期和市场状态，不得以类别平均名称替代这些限定信息。

路线声明应采用以下路线族之一：

1. `cxs_jam_jelly_marmalade`：供直接消费且声称符合 CXS 296-2009 的果酱、果冻、柑橘橘皮酱、非柑橘橘皮酱或果冻橘皮酱。
2. `non_cxs_fruit_preserve`：仍处于本语义产品类别内，但不在 CXS 296-2009 范围内的其他果酱、果冻、橘皮酱、水果涂抹酱、减糖产品、特殊膳食产品、甜味剂配制产品或拟进一步加工产品。应声明适用法规或采购方规格，不得类推套用 CXS 组成限值。
3. `fruit_puree_or_paste`：经预处理和粒度减小制成的可销售水果泥或水果糊，可按路线包含过筛、热烫、脱气、浓缩、保藏或无菌处理。
4. `nut_puree_or_paste`：经预处理和研磨或精炼制成的可销售坚果泥或坚果糊，可按路线包含烘烤、热烫、脱皮、均质、稳定化或保藏。

CXS 296-2009 将水果泥定义为果酱的一种可能原料，但这并不构成适用于全部成品水果泥、坚果泥或水果/坚果糊的标准。其组成、可溶性固形物、装量、缺陷、添加剂和标签要求，仅适用于标准明示范围内并符合相应产品定义的产品。UNECE 鲜果和干制农产品商业质量标准没有为本整个成品类别建立通用规则，因此不作为类别级证据。

本 PCR 不包括作为此类产品销售的未加工鲜果或坚果、作为饮料销售的果汁和花蜜、作为此类产品销售的冷冻水果或坚果、仅经干燥的水果或坚果、作为此类产品销售的烘烤或盐渍坚果、产品身份不是水果或坚果泥/糊的糖果，以及声明身份不属于所覆盖产品名称的产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.jams-fruit-jellies-marmalades-fruit-or-nut-purree-and-fruit-or-nut-pastes |
| classification_refs | UNSD CPC 3.0：21494，“Jams, fruit jellies, marmalades, fruit or nut purree and fruit or nut pastes” |
| covered_products | 可销售的果酱、水果果冻、柑橘和非柑橘橘皮酱、水果泥/水果糊及坚果泥/坚果糊，包括包装或散装的工厂门产品，以及符合 CXS 和明确不适用 CXS 的路线 |
| excluded_products | 作为此类产品销售的未加工、冷冻或仅干燥水果/坚果；作为饮料销售的果汁或花蜜；作为此类产品销售的烘烤或盐渍坚果；不属于已声明水果或坚果蜜饯、泥或糊身份的产品 |
| representative_product | 四个路线族之一的一种已声明可销售产品，按工厂门净产品质量归一化 |
| production_route | 原料接收与预处理；且仅一个已声明转化路线；最终调理与包装出厂；场址公用工程、清洗和废水处理 |
| market_state | 在工厂门处为常温稳定、冷藏、冷冻、无菌或其他方式保藏，并已销售包装或装入已声明散装容器的产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产一种已声明的果酱、水果果冻、橘皮酱、水果泥/糊或坚果泥/糊 |
| How much | 1 kg 可销售净产品，不含包装质量 |
| How well | 满足已声明的路线特定组成、食品安全放行、质量、保藏和市场规格；只有声明 `cxs_jam_jelly_marmalade` 时才适用 CXS 296-2009 要求 |
| How long or cycle | 工厂门处一个已放行生产批次；声明保质期及其对包装的依赖属于元数据，但门后储存损失和服务不在本工厂门单位内 |
| reference_flow_link | 参考流是实现所述工厂门功能所需的已放行产品净质量归一化量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 工厂门处 1 kg 可销售净产品 |
| 参考产品流 | 果酱、果冻、橘子酱、水果或坚果泥以及水果或坚果糊 `7d119b90-a5ca-4bbc-8ab7-b1b3e3f878f9` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 路线族；产品名称及水果或坚果物种；配方和原料质量分数；CXS 适用性及声称的产品定义；可溶性固形物或干物质基准及测试方法；保藏技术；包装或散装市场状态；包装形式和净装量；声明保质期和储存条件；生产地域；生产场址；报告期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以最终质量处置后的放行净产品质量归一化，不含一次、二次和运输包装质量。 |
| `mass_input_consistency` | 原料、水、产品、残余物、废物和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 保留测得的湿质量；声明从体积、干物质、浓缩物或配方记录进行的任何换算，并保留密度、水分或固形物证据。 |
| `solids_basis_declaration` | 可溶性固形物或干物质结果 | 路线特定分析属性 | 报告所用质量百分比或 °Brix | 声明分析方法、样品状态、适用时的温度修正，以及该数值属于可溶性固形物、总固形物还是干物质；不得互换这些量。 |
| `energy_carrier_separation` | 电力、燃料、蒸汽和外购热 | 载能体特定能量属性 | 按计量记录使用 kWh、MJ、kg 或 m3 | 保留每种载能体的计量单位，仅使用已披露换算因子转换；不得把电力和热能合并为无依据的能源总量。 |

## 5. 系统边界

前景边界始于水果、坚果、水果来源中间体、甜味原料、其他配方原料、包装、公用工程和清洗材料进入生产场址；止于已放行净产品及其声明包装或散装容器离开工厂门。上游生产和入厂运输通过次级数据集连接。工厂门后的分销、零售与消费者储存、使用、门后食品损失和报废阶段不属于本前景数据集；相关时应由下游全生命周期模型补充。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_known_flows` | foreground_manufacturing | 记录所有已知的生产过程产品、能源、水、废物、废水和直接基本流，避免截断。若下游 PEF 研究应用截断，只能在 PEF 累计 3% 条件内排除，并应明确说明环境显著性理由。 | `eu-pef-recommendation-2021-2279` |
| `boundary_packaging` | packaging_and_packout | 纳入工厂门处所需的一次、二次、运输和散装容器包装生产及场内包装损失；1 kg 净参考产品不含包装质量。 | `eu-pef-recommendation-2021-2279` |
| `boundary_route_evidence` | route_specific_processes | 只有声明产品和市场用途落入 CXS 296-2009 范围时才应用其要求。非 CXS 蜜饯/涂抹产品和所有成品水果或坚果泥/糊路线采用实际前景规格及适用法规或采购方要求，不外推 CXS 阈值。 | `codex-cxs-296-2009` |
| `boundary_upstream_links` | purchased_inputs | 将每项外购原料、包装材料、载能体、水供应和外部处理废物连接至在地域、技术和时间方面具有代表性的上游数据集；披露代理和缺失连接。 | `eu-pef-recommendation-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在生产场址边界接收的全部水果、坚果、中间体、甜味及其他配方原料、包装、公用工程和清洗材料的实测数量及声明状态 |
| starting_condition_role | 工厂门前景生产起始条件 |
| product_classification_scope | CPC 3.0 代码 21494 所代表的语义类别；具体数据集通过强制产品和路线限定信息缩小范围 |
| recursive_input_rule | 若外购投入本身是果酱、果冻、橘皮酱、水果/坚果泥或水果/坚果糊，则将其作为技术圈产品投入并连接供应商数据集，不在接收过程中递归重建其生产 |
| upstream_dataset_requirement | 水果和坚果生产或加工、甜味料及其他原料、包装、能源、水、入厂运输和外部处理均需要供应商特定或具有代表性的次级数据集 |
| disclosure | 声明路线族、CXS 适用性、投入状态和来源、保藏技术、包装或散装状态、分配选择、截断、代理、数据缺口和排除的下游阶段 |

## 6. 过程清单结构

以下全部暂定范围的证据类型均为 `reasoned_estimate`。这些范围是有意设置得较宽的编制和 QA 先验，不是合规限值，也不能替代前景记录。每个范围都应以批次质量平衡，以及计量表、发票、配方、废物或废水记录进行核验；一旦获得场址特定记录或经评审的外部证据、方法成熟度将提升至 candidate 以上之前，或前景值超出范围时，就应替换该范围。超范围结果触发调查和披露，而不是自动拒绝。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `ingredient_preparation` | 原料接收与预处理 | required | 每条路线均纳入；无操作或使用已预处理投入时也应明确记录 | 前景接收、分选、清洗、修整、去核、脱壳或预处理 | kg 已预处理原料流 |
| `fruit_preserve_transformation` | 果酱、果冻、橘皮酱或其他水果蜜饯/涂抹产品转化 | conditional | 路线族为 `cxs_jam_jelly_marmalade` 或 `non_cxs_fruit_preserve` 时纳入 | 按适用情况进行前景配料、提取、蒸煮、浓缩、凝胶和保藏 | kg 散装水果蜜饯/涂抹产品输出 |
| `puree_paste_transformation` | 水果或坚果泥/糊转化 | conditional | 路线族为 `fruit_puree_or_paste` 或 `nut_puree_or_paste` 时纳入 | 按适用情况进行前景打浆、过筛、研磨、精炼、浓缩、烘烤或稳定化 | kg 散装泥或糊输出 |
| `final_conditioning_packout` | 最终调理与包装出厂 | required | 纳入放行调理及包装或散装灌装；未单独调理时明确记录 | 前景冷却、脱气、热保持或无菌保持、灌装、封口和包装出厂 | 1 kg 已放行净产品 |
| `site_utilities_cleaning` | 场址公用工程、清洗与废水处理 | required | 纳入归属于声明产品的场址服务；未使用某载能体时以证据记录零值 | 前景公用工程供应、原位清洗或其他卫生处理及废水转移 | 每 1 kg 已放行净产品 |

### 过程：原料接收与预处理（`ingredient_preparation`）

#### 输入

##### 产品流

###### 水果、坚果或水果来源主要原料（`main_ingredient_input`）

按物种、来源、状态和供应商批次分别记录每种主要原料。若无透明的配方计算，不得把鲜果、冷冻果、果肉、果泥、果汁、浓缩物或坚果合并。

- 选定流：路线特定水果、坚果、果肉、果汁、果泥、浓缩物或其他主要原料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至已放行产品批次的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_formula_records`
- 数量范围：主要原料暂定筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.05
  - 上限：5
  - 单位：kg/kg 参考产品
  - 基准：覆盖稀释、加糖和浓缩路线变体的每 kg 已放行净产品接收主要原料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 替换触发条件：以产品特定物料清单及地磅或批次秤证据替换；超出暂定范围时调查路线身份或质量平衡。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已预处理水果或坚果流（`prepared_main_stream`）

记录预处理后转入已声明转化路线的质量。

- 选定流：已预处理路线特定水果或坚果流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入转化过程的已预处理流实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_formula_records`
- 数量范围：已预处理流暂定筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.03
  - 上限：5
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品的已预处理主要原料流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 替换触发条件：以转移秤或经核对批次记录替换；超范围时调查未记录的水、残余物、蒸发或库存变化。

##### 废物流

###### 分选、修整、果核、果皮、坚果壳或预处理残余物（`preparation_residues`）

按材料类型和去向记录每个残余物流，包括食用回收、饲料、副产品销售、处理或处置。

- 选定流：路线特定预处理残余物或废物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开原料预处理的残余物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 数量范围：预处理残余物暂定筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品的预处理残余物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 替换触发条件：按物种和预处理路线以称重残余物记录替换；超范围时调查质量平衡缺口。

##### 基本流

### 过程：果酱、果冻、橘皮酱或其他水果蜜饯/涂抹产品转化（`fruit_preserve_transformation`）

#### 输入

##### 产品流

###### 已预处理水果、果汁、提取物、果肉或果泥（`preserve_fruit_input`）

记录实际使用的水果原料形态。对于 CXS 路线，保留计算适用第 3.1.2 节水果含量和水提取液用水扣除所需的数据。

- 选定流：已声明水果蜜饯/涂抹产品的已预处理水果原料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入生产批次的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_formula_records`
- 来源：`codex-cxs-296-2009`

###### 甜味原料（`sweetening_ingredient_input`）

分别记录每种糖、水果糖、糖浆、蜂蜜或其他已声明甜味原料。采用甜味剂配制的非 CXS 路线应识别为非 CXS，不得类推视为符合标准。

- 选定流：路线特定甜味原料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按原料记录配方实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_formula_records`
- 来源：`codex-cxs-296-2009`
- 数量范围：甜味原料暂定筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg 参考产品
  - 基准：CXS 和非 CXS 产品每 kg 已放行净产品的甜味原料总量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 替换触发条件：以放行配方和批次投料记录替换；超范围时调查配方身份或浓缩损失。

###### 其他配方原料（`preserve_other_ingredients`）

使用且法律允许时，分别记录果胶或其他凝胶剂、酸、盐、香辛料、植物原料、油、消泡剂、防腐剂、色素和香料。

- 选定流：路线特定配方原料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按原料记录配方实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_formula_records`
- 来源：`codex-cxs-296-2009`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 散装果酱、果冻、橘皮酱或水果蜜饯/涂抹产品（`bulk_preserve_output`）

记录包装出厂前转移的散装产品质量和路线特定质量处置。

- 选定流：已声明散装水果蜜饯/涂抹产品
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入最终调理和包装出厂的合格散装产品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_release_records`
- 来源：`codex-cxs-296-2009`

##### 废物流

###### 不合格水果蜜饯/涂抹产品和过程残余物（`preserve_offspec_waste`）

返工应与离开产品系统并进入处理或处置的材料分别记录。

- 选定流：不合格水果蜜饯/涂抹产品或过程残余物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按处置方式记录实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 数量范围：水果蜜饯/涂抹产品废物暂定筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品的不合格产品和残余物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 替换触发条件：以批次处置和废物秤记录替换；超范围时调查返工核算和收率。

##### 基本流

### 过程：水果或坚果泥/糊转化（`puree_paste_transformation`）

#### 输入

##### 产品流

###### 已预处理水果或坚果流（`puree_paste_main_input`）

水果路线记录打浆、过筛及可选的热烫、脱气、浓缩和保藏；坚果路线记录可选的烘烤、热烫或脱皮、研磨或精炼、均质、稳定化和保藏。这些操作是路线候选项，仅在实际执行时纳入。

- 选定流：已预处理路线特定水果或坚果流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入泥或糊路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_formula_records`

###### 泥或糊配方原料（`puree_paste_other_ingredients`）

根据实际配方记录每项添加水、油、甜味料、盐、酸、稳定剂、抗氧化剂或其他原料。CXS 296-2009 不为这类成品路线提供组成限值。

- 选定流：路线特定泥或糊配方原料
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按原料记录配方实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_formula_records`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 散装水果或坚果泥/糊（`bulk_puree_paste_output`）

记录合格散装输出，以及适用时测得的干物质或可溶性固形物、粒度或质构规格、保藏状态和质量处置。

- 选定流：已声明散装水果或坚果泥/糊
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入最终调理和包装出厂的合格散装输出实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_release_records`

##### 废物流

###### 过筛残余物、皮、壳、细粉或不合格泥/糊（`puree_paste_residues`）

按类型、质量和去向记录分离材料及不合格产品。回收的共产品不得重标为零负担废物。

- 选定流：路线特定泥/糊残余物或废物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按处置方式记录实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_byproduct_records`
- 数量范围：泥/糊残余物暂定筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品的路线残余物和不合格产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 替换触发条件：以路线特定分离器、残余物和处置记录替换；超范围时调查收率或共产品分类。

##### 基本流

### 过程：最终调理与包装出厂（`final_conditioning_packout`）

#### 输入

##### 产品流

###### 合格散装产品（`accepted_bulk_product`）

记录从且仅从一个已声明转化路线接收的合格散装流。

- 选定流：合格散装水果蜜饯/涂抹产品、水果泥/糊或坚果泥/糊
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入最终调理和包装出厂的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_release_records`

###### 包装和散装容器材料（`packaging_input`）

分别记录一次包装、封口、标签、二次包装、运输包装和散装容器材料；适用时包括可重复使用容器周转次数或损失数据。

- 选定流：材料特定包装或散装容器投入
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发出包装质量减去退回未用材料，并分配至已放行产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-recommendation-2021-2279`
- 数量范围：包装暂定筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品的包装和散装容器
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 替换触发条件：以包装材料清单、皮重、发退料和可重复使用次数记录替换；超范围时调查市场状态或净装量不一致。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已放行参考产品（`released_reference_product`）

这是唯一参考产品输出，其数量不含包装质量。

- 选定流：果酱、果冻、橘子酱、水果或坚果泥以及水果或坚果糊 `7d119b90-a5ca-4bbc-8ab7-b1b3e3f878f9`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以实测已放行净产品质量归一化后为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_product_release_records`
- 来源：`eu-pef-recommendation-2021-2279`

##### 废物流

###### 包装废料和不合格容器（`packaging_waste`）

按材料和去向记录包装废料、破损、不合格容器、标签、封口件和未回收的可重复使用容器损失。

- 选定流：材料特定包装废物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测或库存核对得到的包装废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 数量范围：包装废物暂定筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品的包装废物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 替换触发条件：以废物秤或包装库存核对记录替换；超范围时调查破损和发退料核算。

##### 基本流

### 过程：场址公用工程、清洗与废水处理（`site_utilities_cleaning`）

#### 输入

##### 产品流

###### 过程和清洗用水（`process_cleaning_water`）

按来源和用途记录水，尽可能把配料水与过程、冷却和清洗用水分开。

- 选定流：来源特定供水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：供给所纳入前景过程的计量或核对用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 数量范围：过程用水暂定筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 参考产品
  - 基准：场址记录的每 kg 已放行净产品配料、过程、冷却和清洗用水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 替换触发条件：以按用途分表或核对用水记录替换；超范围时调查回用环路、泄漏、蒸发和废水平衡。

###### 电力（`electricity_input`）

记录计量电力和适用供应商或电网组合，并与燃料和外购热分开。

- 选定流：场址特定电力供应
- 流属性/单位：Electric energy / kWh
- 数量规则：归属于所纳入过程的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 数量范围：电力暂定筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kWh/kg 参考产品
  - 基准：每 kg 已放行净产品的可归属场址电力
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 替换触发条件：以分表或可辩护分配记录及供应商/电网证据替换；超范围时调查过程范围和仪表边界。

###### 燃料、蒸汽或外购热（`thermal_energy_input`）

按计量单位分别记录每种燃料、蒸汽或外购热，并保留用于任何 MJ 归一化筛选的换算。

- 选定流：载能体特定燃料、蒸汽或外购热
- 流属性/单位：载能体特定能量或质量单位
- 数量规则：归属于所纳入过程的计量或采购量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_records`
- 数量范围：热能暂定筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：MJ/kg 参考产品
  - 基准：每 kg 已放行净产品的可归属低位热值能量或外购热
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 替换触发条件：以载能体特定仪表、发票、热值和分配记录替换；超范围时调查蒸煮、浓缩、烘烤、热保藏和清洗范围。

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 送往处理的生产废水（`manufacturing_wastewater`）

记录废水质量或体积、去向以及实测污染物负荷或浓度。场内回用水不计入离厂废水量。

- 选定流：场址特定生产废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开前景边界的计量废水，或由体积和密度换算的废水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已放行净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 数量范围：废水暂定筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 参考产品
  - 基准：每 kg 已放行净产品的离厂废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）
- 替换触发条件：以出水仪表或体积-密度记录和处理转移文件替换；超范围时调查水平衡和场内回用。

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | multi_product_lines_and_shared_services | 首先通过产品特定批次记录、分表、过程细分或系统扩展避免分配。可以细分时，只采集可直接归属于声明产品的流。 | `eu-pef-recommendation-2021-2279` |
| `allocation_physical_second` | unavoidable_shared_inputs_and_outputs | 无法细分或系统扩展时，采用并说明能够代表资源使用的可计量因果物理关系，例如批次质量、运行时间、计量能源或设备吞吐量。 | `eu-pef-recommendation-2021-2279` |
| `allocation_other_last` | no_defensible_physical_relationship | 只有在记录无法采用细分、系统扩展和物理分配的原因后，才使用经济关系或其他关系；使用过程阶段市场价值，并披露期间、地域、价格和敏感性。 | `eu-pef-recommendation-2021-2279` |
| `allocation_residue_status` | preparation_and_transformation_outputs | 具有功能或价值的食用或可销售残余物应归类为共产品；只有送处理或处置的物流才归类为废物。返工应记录为内部循环，而不是共产品或避免负担。 | `eu-pef-recommendation-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_formula_records` | `ingredient_preparation` | 主要原料、配方原料和已预处理转移 | 批次和库存记录 | lot_id; product_code; ingredient_id; species; origin; received_state; opening_stock; receipts; issued_mass; returns; closing_stock; formulation_version; prepared_transfer_mass | 校准秤、地磅、带经验证密度的罐液位以及库存核对 | kg | 每次接收和每个批次 | 完整声明报告期 | 所有纳入的接收、预处理和配料区域 | 核对期初库存加接收减期末库存和非产品处置；仅按有文件的批次关联分配 | 校准证书、供应商批次记录、配方批准、库存核对和差异调查 |
| `cp_product_release_records` | `final_conditioning_packout` | 散装转移、路线质量和已放行净产品 | 批次、实验室、装量和放行记录 | route_family; cxs_applicability; product_definition; batch_id; bulk_mass; net_fill; released_units; released_net_mass; soluble_solids_or_dry_matter; method; preservation_state; shelf_life; disposition | 校准转移/灌装计量和经批准实验室或质量记录 | kg 及声明质量单位 | 每批次和放行批 | 完整声明报告期 | 所有纳入的转化和包装线 | 汇总不含包装的已放行净质量；分别保留路线特定质量结果和拒收或返工量 | 秤校准、测试方法、抽样方案、放行批准和批次追溯 |
| `cp_waste_byproduct_records` | `ingredient_preparation` | 预处理残余物、共产品、返工和转化废物 | 废物、副产品和处置记录 | batch_id; stream_id; material_type; mass; moisture_or_solids_if_used; destination; waste_or_coproduct_status; revenue_if_economic_allocation; rework_return | 校准秤、带经验证皮重的容器计数和转移文件 | kg | 每批次或每次移出 | 完整声明报告期 | 所有纳入过程区域和去向 | 按物流和处置汇总；扣除有文件证明返回同一产品系统的返工 | 秤或皮重证据、转移单、处理收据、销售记录和分类理由 |
| `cp_packaging_records` | `final_conditioning_packout` | 包装投入和废物 | 包装材料清单及发退料记录 | packaging_item; material; unit_mass; issued_count; returned_count; rejected_count; reusable_trips; loss_rate; net_fill | 经抽样皮重验证的供应商规格和库存核对 | kg 和件数 | 每包装批次和生产批次 | 完整声明报告期 | 所有一次包装、封口、标签、二次包装、运输包装和散装容器材料 | 用经验证单位质量把件数换为质量；扣除未使用退料；分别记录可重复使用周转分配和损失 | 供应商规格、抽样皮重、产线发退料记录和废物核对 |
| `cp_utility_records` | `site_utilities_cleaning` | 水、电力、燃料、蒸汽、外购热和清洗材料 | 仪表、发票和运行记录 | meter_id; carrier; opening_reading; closing_reading; unit; calibration; batch_or_line; operating_time; heating_value_if_used; cleaning_cycle; internal_reuse | 优先分表；否则采用主表或发票并以有文件的物理驱动因素分配 | 载能体特定单位 | 连续、每班、每批或结算周期 | 完整声明报告期及完整仪表核对 | 所有纳入的生产、公用工程和卫生区域 | 读数作差，扣除有文件的排除负荷，按第 7 节层级分配共享负荷，并保留载能体单位 | 仪表校准、发票、控制系统导出、运行日志和分配工作表 |
| `cp_wastewater_records` | `site_utilities_cleaning` | 废水量和污染物数据 | 出水仪表、采样和转移记录 | outlet_id; volume; density_if_mass_conversion; flow_period; COD; BOD; suspended_solids; nutrients; pH; treatment_destination; internal_reuse | 校准出水仪表加代表性采样或经验证外部处理记录 | kg 或 m3 及分析物特定单位 | 连续或每次排放及采样事件 | 完整声明报告期 | 所有纳入废水出口 | 仅使用有文件的密度把体积换算为质量；按流量加权污染物浓度；排除经验证场内回用 | 仪表校准、实验室报告、样品监管链、许可证监测和处理收据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 报告期可归属数量 / 已放行净产品质量；分母不含包装质量 | 可归属流量；已放行净产品质量 | 每 1 kg 参考产品的流量 | `eu-pef-recommendation-2021-2279` |
| `calc_batch_mass_balance` | 每个转化路线 | 质量平衡残差 = 实测投入总量 - 已放行产品 - 共产品 - 废物 - 废水 - 实测或计算蒸发水 - 有文件的库存变化；报告残差和调查 | 全部批次投入和输出质量；库存变化；蒸发证据 | 经核对质量平衡和残差 |  |
| `calc_cxs_fruit_content` | 已声明 CXS 果酱、果冻或橘皮酱路线 | 按适用 CXS 296-2009 第 3.1.2 节条款计算水果原料占成品百分比；果冻按要求扣除制备水提取液所用水；应用水果特定和混合水果条款而非通用阈值 | 按种类的水果原料质量；成品质量；水提取液用水；声明的 CXS 产品定义 | CXS 水果含量结果和适用阈值 | `codex-cxs-296-2009` |
| `calc_packaging_mass` | 包装投入 | 包装质量 = 各材料净发出件数乘经验证单位质量之和，并按有文件的可重复使用周转或损失调整 | 件数；单位质量；退料；不合格件；可重复使用周转数据 | 每 kg 参考产品的 kg 包装 | `eu-pef-recommendation-2021-2279` |
| `calc_shared_service_allocation` | 共享公用工程和服务 | 应用第 7 节层级，以分表用量或有理由的物理驱动因素计算声明产品份额；经济分配为最后手段 | 共享总量；产品特定仪表或物理驱动因素；最后手段时的共产品价值 | 可归属共享服务量和分配因子 | `eu-pef-recommendation-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_completeness_consistency` | 前景数据集 | 纳入所含过程的全部已知投入和输出，并把过程、批次、公用工程、包装、废物和废水记录核对至同一报告期和产品范围。 | 完整性检查表、核对结果以及有文件的截断或数据缺口；PEF 完整性和方法一致性原则 |
| `dq_representativeness` | 前景和次级数据 | 评价技术、地域和时间代表性及精度；声明产品、路线、场址、地域、报告期、计量基础和不确定性或代理状态。 | 按 Recommendation (EU) 2021/2279 的 DQR 或等效书面评价 |
| `dq_cxs_scope` | CXS 声称 | 保留产品定义、直接消费用途、配方、水果含量、可溶性固形物、装量、标签和适用国家选择符合相关 CXS 条款的证据。不得把非 CXS 路线标为符合。 | 经批准规格、配方、实验室结果、装量记录、标签和适用法规评审 |
| `dq_reasoned_estimates` | 全部 `reasoned_estimate` 范围 | 所有暂定范围仅用于筛选。用前景记录验证，并在成熟度超过 candidate 前以场址特定或经评审证据替换；调查和披露任何超范围结果。 | 范围替换日志、前景记录、经评审来源和差异调查 |
| `dq_source_traceability` | 外购投入和处理服务 | 把每项材料上游和处理数据集连接至供应商、地域、技术、时期和任何代理决定；存在产品特定信息时不得使用无条件类别平均。 | 供应商记录、数据集元数据和代理理由 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_reference` | dataset_identity | 确认 manifest PCR id、通用产品流 UUID、Mass 流属性 UUID、Units of mass UUID、kg 单位、路线族、产品身份、净质量基准和全部必需限定信息存在且一致。 | `unsd-cpc-3-0-21494` |
| `validate_exactly_one_route` | process_inventory | 确认参考产品由且仅由一个转化路线族描述，并纳入匹配的条件过程；除非对单独计量的联合生产进行明确建模和分配，否则排除另一个转化过程。 |  |
| `validate_cxs_scope_and_composition` | cxs_jam_jelly_marmalade | 仅对声明 CXS 路线，验证范围、适用 CXS 产品定义和第 3.1.2 节配方：果酱/果冻采用适用的 45% 或 35% 通用条款及所列水果例外和混合水果调整；柑橘橘皮酱每 1000 g 成品至少使用 200 g 柑橘原料且其中至少 75 g 来自内果皮；非柑橘橘皮酱通常至少含 30% 水果，姜制品为 11%。不得把这些阈值用于非 CXS 产品、成品水果泥或坚果糊。 | `codex-cxs-296-2009` |
| `validate_cxs_solids_fill` | cxs_jam_jelly_marmalade | 仅对声明 CXS 路线，验证可溶性固形物适用国家选择及 CXS 条款：第 3.1.2(a-c) 节产品按适用规则为 60-65% 或更高，非柑橘橘皮酱按适用规则为 40-65% 或更低；容器装量至少为水容量的 90%，扣除必要顶隙。保留测试和装量证据。 | `codex-cxs-296-2009` |
| `validate_non_cxs_boundary` | non_cxs_and_puree_paste_routes | 确认数据包未以 CXS 阈值作为减糖或进一步加工蜜饯/涂抹产品、特殊膳食或甜味剂配制产品，以及任何成品水果泥、坚果泥或水果/坚果糊的合规证据；改按已声明适用规格验证。 | `codex-cxs-296-2009` |
| `validate_mass_and_allocation` | foreground_inventory | 核对参考产品、原料、包装、残余物、共产品、废物、废水、蒸发和库存变化；确认共享流遵循分配层级，且分配总量的全部因子之和为一。 | `eu-pef-recommendation-2021-2279` |
| `validate_data_quality_and_ranges` | foreground_and_secondary_data | 确认完整性、方法一致性、技术/地域/时间代表性、精度、来源追溯，以及每个推理估算范围和超范围值的处置。 | `eu-pef-recommendation-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种已声明路线和市场状态的产品特定工厂门前景数据包及所得单元过程数据集 |
| downstream_use | `secondary_dataset`；按本库生命周期合同评审和发布后可作 `background_dataset` |
| allowed_use | 用于已声明产品、路线、场址、地域、报告期和包装或散装状态的产品系统建模；下游模型可增加分销、储存、使用、损失和报废阶段 |
| excluded_use | 无限定条件的类别平均声称；不同路线族或产品规格之间的比较性声称；非 CXS 产品的 CXS 符合性声称；直接外推至果汁、整果或整坚果及其他排除产品 |
| required_metadata | PCR id；UUID 引用；路线族；产品和物种；配方；CXS 适用性；质量和固形物基准；保藏技术；包装或散装状态；净装量；保质期和储存条件；场址、地域、报告期；分配；截断；上游数据集；代理；数据缺口 |
| required_quality_disclosure | 记录覆盖和核对；计量及计算方法；校准；代表性和精度；适用时的 CXS 证据；分配和截断；推理估算状态及替换；超范围调查；不确定性和缺失流限制 |
| update_trigger | 产品身份、配方、路线、保藏、包装、场址、公用工程供应、分配或适用法规/标准发生实质变化；官方 CPC 或 CXS 范围修订；新评审证据替换推理估算；或数据质量发现改变结果或适用性 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21494` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类》第 3.0 版，子类 21494 “Jams, fruit jellies, marmalades, fruit or nut purree and fruit or nut pastes”，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（访问日期 2026-08-11） | 仅用于分类身份；不提供过程、组成或定量清单规则 |
| `codex-cxs-296-2009` | 标准（`standard`） | Codex Alimentarius，CXS 296-2009，《果酱、果冻和橘皮酱标准》，2009 年通过，官方文本修订至 2025 年，https://workspace.fao.org/sites/codex/Standards/CXS%20296-2009/CXS_296e.pdf（访问日期 2026-08-11） | 范围、产品定义、适用水果含量和可溶性固形物条款、质量、装量，以及与非覆盖产品的明确边界 |
| `eu-pef-recommendation-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会 Recommendation (EU) 2021/2279（2021 年 12 月 15 日），附件 I Product Environmental Footprint Method，CELEX 32021H2279，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（访问日期 2026-08-11） | 功能单位和参考流、供应链和包装边界、企业特定数据、截断、分配层级、数据质量和报告 |
