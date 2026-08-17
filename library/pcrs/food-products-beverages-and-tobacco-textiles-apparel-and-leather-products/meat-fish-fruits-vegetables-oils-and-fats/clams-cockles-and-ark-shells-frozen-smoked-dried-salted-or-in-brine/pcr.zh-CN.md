---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.clams-cockles-and-ark-shells-frozen-smoked-dried-salted-or-in-brine
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷冻、烟熏、干制、盐腌或盐水浸泡的蛤蜊、鸟蛤和蚶类

## 1. 范围与适用性

本 PCR 适用于带壳或不带壳、供人食用，并经且仅经一种申报的主要保藏路线投放市场的蛤蜊、鸟蛤和蚶类：`frozen`、`smoked`、`dried`、`salted` 或 `brine`。也包括由这些软体动物制成且适合人类食用的粉、粗粉和团粒。五个路线值是互斥的适用性选择；数据包不得叠加其清单。接受一种以上主要保藏处理的产品须经单独扩展评审，不得在本 PCR 下自动组合。

本 PCR 不包括活、鲜或冷藏产品，其他加工或保藏产品，不可食用的粉、粗粉或团粒，死亡或不适合食用的产品，以及出厂后的配送、零售、制备、消费和生命末期。前景终点为产品经适用包装和受控暂存后在加工设施放行的合格可销售产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.clams-cockles-and-ark-shells-frozen-smoked-dried-salted-or-in-brine |
| classification_refs | CPC 3.0：21265（精确范围参考） |
| covered_products | 带壳或去壳、经冷冻、烟熏、干制、盐腌或盐水浸泡的食用蛤蜊、鸟蛤和蚶类；由这些软体动物制成的可食用粉、粗粉和团粒 |
| excluded_products | 活、鲜或冷藏软体动物；其他加工或保藏产品；不可食用粉、粗粉或团粒；死亡或不适合食用的软体动物 |
| representative_product | 通用合格可销售 CPC 21265 产品，并申报物种或商品组、产品形态和主要保藏路线 |
| production_route | `frozen`、`smoked`、`dried`、`salted` 或 `brine` 中且仅一个；组合主要路线须单独评审 |
| market_state | 经适用即时包装和受控暂存后，在加工设施门口的合格可销售产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在申报产品形态和单一主要保藏路线下，合格可销售的蛤蜊、鸟蛤或蚶类食品 |
| How much | 按申报可销售质量基准计 1 kg 产品内容物；不含即时包装 |
| How well | 符合生产者放行规范和适用食品安全控制，并报告路线、产品形态和质量状态限定信息 |
| How long or cycle | 一个生产和放行周期，终点为加工设施门口；不表示使用期服务 |
| reference_flow_link | `packaging_holding_release` 的输出 `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Clams, cockles and ark shells, frozen, smoked, dried, salted or in brine `7a159b9e-de7a-4ef0-906e-8f2e8615d6cd` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或商品组；带壳、去壳或粉/粗粉/团粒形态；且仅一种主要路线；烟熏含熟制时的熟制状态；参考质量基准；最终含水状态；适用时的盐或盐水状态；冷冻且有冰衣时的冰衣量和去冰衣质量；盐水产品的沥干质量或净含量基准及填充介质比例；设施地理位置；生产期间；技术 |

构建前景数据包时，`必需限定信息` 中的每一项均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中申报。缺少限定信息时，参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将定量参考设为设施放行时恰好 1 kg 合格可销售产品内容物；排除即时包装质量。 |
| `presentation_mass_basis` | 带壳、去壳及粉碎形态 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 带壳销售时，壳质量属于产品内容物质量；去壳或粉/粗粉/团粒产品只计销售内容物。相关时另报可食部分比例；未换算不得比较不同形态。 |
| `frozen_glaze_basis` | 有冰衣的冷冻产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用设施有文件记录的控制方法记录冷冻毛重、冰衣质量和去冰衣产品质量。参考基准采用去冰衣产品质量；适用市场规范另有规定时应披露该基准。 |
| `brine_mass_basis` | 盐水或其他填充介质中的产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 销售规范声明沥干质量时采用沥干质量；否则采用净含量并报告产品与填充介质比例。不得混用沥干质量和净含量数据集。 |
| `moisture_salt_condition` | 干制、盐腌、烟熏或盐水产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按申报检测基准报告最终含水率和盐浓度。除非明确需要干物质换算且披露实测换算值，否则按销售状态归一化。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 活、原料态或此前经冷藏/冷冻的双壳贝类投入到达加工设施，并记录批次身份、来源、捕捞或供应商状态、进料质量、带壳状态及温度或状态 |
| starting_condition_role | 前景接收、预处理和保藏的上游产品投入 |
| product_classification_scope | 与物种和设施无关的 CPC 3.0 子类 21265 精确通用语义范围 |
| recursive_input_rule | 购入投入本身已是 CPC 21265 保藏产品时，将其作为具有自身数据集的上游产品流记录一次，不在本前景系统内重建其保藏清单；披露其路线和质量基准。 |
| upstream_dataset_requirement | 通过交付投入连接养殖或野生捕捞、上岸、前序处理、配料、能源载体和包装生产的代表性上游数据集；披露代理。 |
| disclosure | 申报来源区域或供应商、追溯批次、进料状态、带壳状态、前序处理、所选主要路线、设施门口、地理位置、期间、技术、包装和受控暂存条件。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | 前景加工 | 纳入接收、分选和清洗、所选单一路线、即时包装、适用的设施内受控暂存、公用工程、过程水、配料、拒收物、废水、直接排放及产品放行前处理。 | eu-pef-2021-2279, codex-cxc-52-2003 |
| `boundary_route_exclusivity` | 保藏路线 | `frozen`、`smoked`、`dried`、`salted` 或 `brine` 中且仅纳入一个；路线不适用的投入和操作应不存在，不得以零值填充造成已实施的含义。 | unsd-cpc-3-0-21265 |
| `boundary_upstream_downstream` | 连接的生命周期阶段 | 使用连接数据集建模养殖或野生捕捞、上岸及交付的上游材料。本前景数据集排除出厂后的配送、零售、制备、消费和生命末期，但下游生命周期模型可继续纳入。 | eu-pef-2021-2279 |
| `boundary_shellfish_control` | 双壳贝类接收与放行 | 保留批次追溯及适用的生长区、捕捞、净化或批准加工控制证据；在放行前维持可防止污染和微生物失控生长的条件。 | codex-cxc-52-2003 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | 接收与预处理 | required | 所有数据集 | 前景接收、追溯、分选、清洗和形态预处理 | kg 验收后的预处理双壳贝类物料 |
| `primary_preservation` | 主要保藏 | required | 且仅执行一种申报路线 | 前景冷冻、烟熏、干制、盐腌或盐水浸泡 | kg 离开所选路线的保藏产品 |
| `packaging_holding_release` | 包装、受控暂存与放行 | required | 所有数据集；仅在需要时应用路线特定暂存控制 | 前景即时包装、设施内暂存和产品放行 | 1 kg 合格可销售参考产品 |

### 过程：接收与预处理（`receiving_preparation`）

#### 输入

##### 产品流

###### 接收的双壳贝类物料（`received_bivalves`）

记录所有跨越设施门口的活、原料态或此前经冷藏/冷冻的双壳贝类物料，包括壳和前序处理状态。

- 选定流：Received clams, cockles or ark shells
- 流属性/单位：Mass / kg
- 数量规则：实测批次投入质量；暂定范围仅用于同路线、同形态 QA 筛选，并在获得完整报告期批次质量平衡后替换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_traceability_mass`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定接收物料筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：20
  - 单位：kg/kg 合格可销售产品
  - 基准：仅限同一申报路线和产品形态；在评审使用前以报告期质量平衡替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理用水（`preparation_water`）

记录进入清洗、除砂、辅助去壳和卫生操作的计量或平衡核算用水。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：分配至验收预处理输出的实测用水量；当路线生产线分表或经平衡核对的批次记录覆盖报告期时替换暂定范围
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收后的预处理双壳贝类物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_waste_balance`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定预处理用水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 验收预处理物料
  - 基准：仅适用于跨越本过程边界的用水；以计量或平衡核对的前景记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收后的预处理双壳贝类物料（`prepared_bivalves`）

根据实测进料、拒收、去除壳和转移质量计算验收物料，并保留产品形态身份。

- 选定流：Prepared clams, cockles or ark shells
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_preparation_mass_balance` 平衡核对的实测验收输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个预处理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_traceability_mass`
- 来源：

##### 废物流

###### 拒收物料与去除壳（`preparation_rejects_shells`）

记录被拒收个体、杂物及从去壳销售产品中去除的壳；单独销售的输出应归类为共产品而不是废物。

- 选定流：Bivalve preparation rejects and shells
- 流属性/单位：Mass / kg
- 数量规则：按去向实测质量；获得完整批次或报告期质量平衡时替换暂定范围
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 接收双壳贝类物料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_waste_balance`
- 来源：
- 数量范围：暂定拒收和去除壳比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.95
  - 单位：kg/kg 接收双壳贝类物料
  - 基准：路线和形态特定筛选；以按去向实测质量替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理废水（`preparation_wastewater`）

记录在连接任何处理数据集之前离开前景过程的废水。

- 选定流：Preparation wastewater
- 流属性/单位：Mass / kg
- 数量规则：实测排放或按水量平衡计算；排放计量或经平衡核对的水量平衡覆盖报告期时替换暂定范围
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收后的预处理双壳贝类物料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_waste_balance`
- 来源：
- 数量范围：暂定预处理废水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/kg 验收预处理物料
  - 基准：仅适用于跨越本过程边界的废水；以计量或平衡核对记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：主要保藏（`primary_preservation`）

#### 输入

##### 产品流

###### 预处理双壳贝类投入（`prepared_bivalve_input`）

仅转移分配至申报路线的验收预处理物料。

- 选定流：Prepared clams, cockles or ark shells
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个保藏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_inputs_energy`
- 来源：

###### 路线用电（`route_electricity`）

记录所选冷冻、烟熏、干制、盐腌或盐水路线使用的电力；不得混合路线记录。

- 选定流：Electricity, delivered
- 流属性/单位：Energy / kWh
- 数量规则：所申报路线的计量或分配电量；暂定范围仅作路线内筛选，当路线生产线电表或经平衡核对的能源记录覆盖报告期时替换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 保藏路线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_inputs_energy`
- 来源：
- 数量范围：暂定路线用电筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kWh/kg 保藏路线输出
  - 基准：仅在同一申报路线和技术内使用；不得用于跨路线比较；以计量或平衡核对记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 盐或盐水配料（`route_salt_brine`）

仅对 `salted` 或 `brine` 路线记录盐、水和其他盐水配料；实施清单中应按配料拆分。

- 选定流：Salt or brine ingredient
- 流属性/单位：Mass / kg
- 数量规则：实测配料领用量减有记录退回量；其他路线不存在；当配方和批次领料记录覆盖报告期时替换暂定范围
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 盐腌或盐水路线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_inputs_energy`
- 来源：
- 数量范围：暂定盐或盐水投入筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 盐腌或盐水路线输出
  - 基准：仅适用于所选 `salted` 或 `brine` 路线；以配方和批次领料记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 烟熏介质（`route_smoking_medium`）

仅对 `smoked` 路线记录发烟材料或烟制剂；能源燃料应保留为单独载体行。

- 选定流：Smoking medium
- 流属性/单位：Mass / kg
- 数量规则：分配至烟熏输出的实测消耗量；其他路线不存在；当批次领用和退回记录覆盖报告期时替换暂定范围
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 烟熏路线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_inputs_energy`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定烟熏介质筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg 烟熏路线输出
  - 基准：仅适用于所选 `smoked` 路线和申报介质；以批次记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 冰衣用水（`route_glazing_water`）

仅对带冰衣的 `frozen` 路线记录作为保护冰衣保留的水；与其他过程水分开。

- 选定流：Glazing water
- 流属性/单位：Mass / kg
- 数量规则：依据毛重与去冰衣质量平衡计算的实测冰衣添加量；无冰衣或其他路线不存在；当冰衣检查覆盖每个所代表产品系列时替换暂定范围
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 去冰衣冷冻路线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_condition_mass`
- 来源：
- 数量范围：暂定冰衣比例筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 去冰衣冷冻产品
  - 基准：仅适用于带冰衣冷冻产品；以有文件记录的毛重/去冰衣检查替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 保藏双壳贝类产品（`preserved_bivalves`）

记录单一申报路线的输出，并带有路线特定含水率、盐、冰衣或填充介质状态。

- 选定流：Preserved clams, cockles or ark shells
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_route_yield` 平衡核对的实测路线输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每个保藏批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_condition_mass`
- 来源：`codex-cxc-52-2003`

##### 废物流

###### 废盐水和路线废水（`route_brine_wastewater`）

仅在所选路线产生时，记录连接处理之前的废盐水和过程废水。

- 选定流：Spent brine or route wastewater
- 流属性/单位：Mass / kg
- 数量规则：实测排放或经核对的路线水盐平衡；未产生时不存在；路线特定排放记录覆盖报告期时替换暂定范围
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 保藏路线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_waste_balance`
- 来源：
- 数量范围：暂定废盐水和废水筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 保藏路线输出
  - 基准：仅适用于所选路线产生该流的情况；以排放记录或经平衡核对的路线平衡替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：包装、受控暂存与放行（`packaging_holding_release`）

#### 输入

##### 产品流

###### 保藏产品投入（`preserved_product_input`）

记录进入最终调理和放行的保藏产品，不混合路线或产品形态记录。

- 选定流：Preserved clams, cockles or ark shells
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个放行批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_holding_release`
- 来源：

###### 即时包装（`immediate_packaging`）

记录跨越设施边界的每一种初级和次级包装材料；包装是清单投入，但不属于 1 kg 参考质量。

- 选定流：Immediate packaging material
- 流属性/单位：Mass / kg
- 数量规则：物料清单或实测包装领用量减有记录退回量；当包装规范覆盖所有代表性规格时替换暂定范围
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_holding_release`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定即时包装筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.5
  - 单位：kg/kg 合格可销售产品
  - 基准：仅含申报规格的即时包装；以物料清单或领用记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 受控暂存用电（`holding_electricity`）

记录冷冻贮存或其他规定的设施内温湿度暂存至放行的电力；无需受控暂存时不存在。

- 选定流：Electricity, delivered
- 流属性/单位：Energy / kWh
- 数量规则：按实际暂存时长计量或分配电量；当设备电表和批次停留时间记录覆盖报告期时替换暂定范围
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格可销售参考产品
- 基准类型：贮存持续时间（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_holding_release`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定受控暂存用电筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh/kg 合格可销售产品
  - 基准：仅适用于申报的设施内受控暂存及实际时长；以计量和停留时间记录替换
  - 基准类型：贮存持续时间（`storage_duration`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格可销售参考产品（`reference_product`）

这是按申报路线、产品形态和可销售质量基准定义的天工 CPC 21265 精确通用产品流。

- 选定流：Clams, cockles and ark shells, frozen, smoked, dried, salted or in brine `7a159b9e-de7a-4ef0-906e-8f2e8615d6cd`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰好 1 kg 合格可销售产品内容物，不含即时包装
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 来源：`unsd-cpc-3-0-21265`

##### 废物流

###### 包装废料（`packaging_scrap`）

按材料和去向记录未装入放行单元的边角料、破损包装及其他包装材料。

- 选定流：Packaging scrap
- 流属性/单位：Mass / kg
- 数量规则：实测或按包装领用减包装产品输出平衡计算；当材料特定领用和废料记录覆盖报告期时替换暂定范围
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 即时包装投入
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_holding_release`
- 来源：
- 数量范围：暂定包装废料比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.25
  - 单位：kg/kg 即时包装投入
  - 基准：材料特定筛选；以经平衡核对的领用和废料记录替换
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 路线、产品和生产线负荷 | 首先通过路线特定记录、过程细分和直接计量避免分配。不得把五种互斥保藏路线平均为一个前景结果。 | eu-pef-2021-2279 |
| `allocation_coproduct` | 可销售壳、肉、粉或其他共产品 | 无法细分时采用有文件记录的物理因果关系；仅在没有可辩护物理关系时采用经济分配，并报告方法、因子基准、价格和敏感性。 | eu-pef-2021-2279 |
| `allocation_waste_credit` | 拒收物、壳、废盐水和包装废物 | 持有人丢弃或付费处理的输出按废物处理。除非明确选择并记录单独的后果型或循环性情景，否则不得在本前景数据集内计入避免负荷抵扣。 | eu-pef-2021-2279 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_traceability_mass` | `receiving_preparation` | 接收和验收双壳贝类质量 | 收货批次和校准秤记录 | lot_id; supplier; source_area; harvest_or_supplier_status; species_or_group; incoming_state; shell_presentation; prior_treatment; receipt_temperature; gross_mass; tare_mass; accepted_mass; reject_mass | 每批称量并将记录连接至追溯文件 | kg；记录时为 deg C | 每个接收批次 | 完整代表性生产期，通常连续 12 个月或有理由的季节性生产批次 | 所代表的全部来源供应商和设施接收点 | 按路线、形态和去向汇总净质量；不得跨路线平均 | 秤校准；批次核对；追溯及适用捕捞/加工控制证据 |
| `cp_water_waste_balance` | `receiving_preparation`; `primary_preservation` | 水、废水、拒收物和废盐水 | 水表、批次、罐体和废物去向记录 | meter_start; meter_end; batch_water; retained_water; discharge_mass_or_volume; salt_mass; reject_mass; waste_destination | 可用时计量，否则采用带换算证据的批次平衡核对 | kg；以实测密度换算时为 m3 | 每批或至少每月水表区间 | 完整代表性生产期 | 所有纳入生产线和排放点 | 仅按有文件记录的因果驱动分配，再按相关过程输出归一化 | 水表校准；罐体校准；平衡闭合；去向凭证 |
| `cp_route_inputs_energy` | `primary_preservation` | 路线投入、电力、燃料和烟熏介质 | 路线批次表、水电表、发票及物料领退记录 | route; batch_id; input_mass; output_mass; ingredient_mass; electricity_kwh; fuel_quantity; smoking_medium_issue; returned_quantity; operating_time | 按且仅一种路线分离记录，并将发票与计量或批次领用核对 | kg；kWh；载体特定单位 | 每批并每月核对 | 完整代表性生产期或有理由的路线生产批次 | 每条纳入路线生产线和技术 | 扣除有记录退回量；按实测运行驱动分配共用公用工程；按路线输出归一化 | 计量校准；发票核对；配方和批次授权 |
| `cp_product_condition_mass` | `primary_preservation`; `packaging_holding_release` | 含水率、盐、冰衣、填充介质和可销售质量状态 | 实验室、QA 和检重记录 | route; presentation; cooked_state; moisture_value_and_basis; salt_value_and_basis; gross_frozen_mass; deglazed_mass; glaze_mass; net_contents; drained_mass; packing_medium_mass; release_status | 使用有文件记录的设施方法和校准衡器；结果保留检测基准 | kg；按申报为质量分数或百分比 | 每个放行批次或统计上合理的批次计划 | 覆盖所有代表性产品系列和期间 | 每一种路线-形态-质量基准组合 | 对每个申报组合分别计算平均值；不得汇总不兼容基准 | 方法标识；实验室或 QA 记录；校准；抽样计划 |
| `cp_packaging_holding_release` | `packaging_holding_release` | 包装、暂存能源、时长、废料和放行产品 | 物料清单、包装领用、贮存电表、库存移动和放行记录 | packaging_material; packaging_issue; returned_packaging; scrap_mass; storage_zone; meter_reading; entry_time; release_time; released_content_mass; release_specification | 将物料领用和贮存能源与放行批次及实际停留时间核对 | kg；kWh；小时或日 | 每批并每月核对 | 完整代表性生产期 | 所有包装规格和设施内受控贮存区 | 按放行产品内容物质量归一化材料和分配的暂存能源 | 规范版本；电表和秤校准；领退核对；放行授权 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | 参考产品 | 选择申报质量基准：带壳或销售去壳内容物；有冰衣冷冻产品采用去冰衣质量，另有市场基准时披露；盐水产品在销售基准为沥干质量时采用沥干质量，否则采用净含量并报告填充介质比例。排除即时包装。 | 放行质量；产品形态；毛重和去冰衣质量；沥干质量；净含量；填充介质质量；放行规范 | kg 合格可销售产品内容物 | codex-cxc-52-2003 |
| `calc_preparation_mass_balance` | 接收与预处理 | 验收预处理质量 = 接收净质量 - 拒收物 - 去除壳 - 其他有记录损失；另报滞留水 | 接收净质量；拒收物；去除壳；其他损失；滞留水 | kg 验收预处理物料和平衡闭合 |  |
| `calc_route_yield` | 主要保藏 | 路线收率 = 保藏路线输出质量 / 预处理路线投入质量；按每种路线、形态及含水/盐状态分别计算 | 预处理投入质量；保藏输出质量；路线和状态限定信息 | 路线特定质量收率 |  |
| `calc_specific_inventory` | 所有前景输入和输出 | 单位量 = 分配至过程的核对量 / 流行中所述对应过程输出或 PCR 参考质量 | 采集量；分配驱动；过程输出；参考质量 | 按申报基准的流行数量 | eu-pef-2021-2279 |
| `calc_holding_energy` | 受控暂存 | 批次暂存电量 = 区域电量 x 有记录的批次占用驱动 / 区域总占用驱动；保留实际暂存时长，不向绕过贮存的批次分配 | 区域电量；进入和放行时间；质量或托盘占用驱动 | 适用批次的 kWh/kg 放行内容物 | eu-pef-2021-2279 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 接收和放行产品 | 保留批次级来源、物种或商品组、进料状态、路线、产品形态和放行身份，以及适用的捕捞、生长区、净化或批准加工证据。 | 收货记录、供应商文件、追溯链接和放行记录；`codex-cxc-52-2003` |
| `dq_route_separation` | 所有清单 | 为每条互斥路线和每个不兼容质量基准保留单独批次或分配记录；报告共用公用工程分配驱动。 | 路线批次表、计量和分配工作表 |
| `dq_temporal_coverage` | 前景活动数据 | 通常代表连续 12 个月；仅当较短季节性生产批次覆盖完整生产季且说明代表性时才可采用。 | 带日期源记录和代表性说明 |
| `dq_mass_condition` | 参考流 | 适用时保留实测或规定的含水率、盐、冰衣、沥干质量或净含量数据；不得因湿质量相同推定跨路线等价。 | QA 检测、检重和放行规范 |
| `dq_completeness` | 前景边界 | 核对产品、水、盐/盐水、能源、包装、废物和直接排放记录；披露缺失流、代理和排除操作。 | 质量/能源核对与完整性清单；`eu-pef-2021-2279` |
| `dq_reasoned_estimates` | 所有暂定范围 | 每个 `reasoned_estimate` 范围只作候选阶段 QA 筛选，不得作为实测默认值或发布关键允许范围。当数量规则或基准中所述的流特定触发条件满足时替换；替换前披露用途、路线、条件和不确定性。 | 与前景采集缺口和替换证据连接的估算登记 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考流 | 要求产品流 UUID `7a159b9e-de7a-4ef0-906e-8f2e8615d6cd`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、单位 kg 和参考数量恰好为 1。 | unsd-cpc-3-0-21265 |
| `validate_scope_route` | 产品类别 | 要求涵盖的产品形态，且 `frozen`、`smoked`、`dried`、`salted` 或 `brine` 中且仅一个路线 token；拒绝活/鲜/冷藏、其他保藏、不可食用或不合格产品，以及未评审的组合路线。 | unsd-cpc-3-0-21265 |
| `validate_mass_basis` | 参考产品 | 接受 1 kg 参考之前，要求排除包装，并完整声明所有适用的带壳/去壳、含水率、盐、冰衣/去冰衣、沥干质量/净含量和填充介质信息。 | codex-cxc-52-2003 |
| `validate_processes` | 过程图 | 要求三个过程清单，并确认路线不适用的保藏行不存在；实际跨越前景边界时，要求增加能源载体、制冷剂、配料、排放或废物流行。 | eu-pef-2021-2279 |
| `validate_traceability_control` | 双壳贝类接收与放行 | 要求批次链接及适用的来源区域、捕捞、净化或批准加工控制证据，并要求受控贮存和操作条件。 | codex-cxc-52-2003 |
| `validate_inventory_records` | 前景数量 | 采集或计算行须连接采集协议，采用兼容归一化基准和路线分离计算，并披露代理或缺失记录。 | eu-pef-2021-2279 |
| `validate_allocation` | 共用过程和输出 | 首先要求过程细分或直接计量；仍需分配时，要求给出所选因果或经济基准、因子、数据期间和敏感性披露。 | eu-pef-2021-2279 |
| `validate_reasoned_estimates` | 暂定 QA 范围 | 将每个已使用的 `reasoned_estimate` 标记为临时且路线/条件特定；替换触发条件已满足但尚未用前景或有来源证据替换时，评审使用应失败。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针对一种申报 CPC 21265 产品路线、形态和可销售质量基准的前景加工数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 所代表路线、技术、地理位置、期间、产品形态和质量状态的归因型建模；连接至有文件记录的上游养殖或捕捞数据集及下游配送或生命周期模型 |
| excluded_use | 活、鲜或冷藏软体动物；其他加工或保藏产品；不适合食用产品；路线平均替代；未评审多路线产品；未明确换算而比较带壳/去壳、湿基/干基、有冰衣/去冰衣或沥干/净含量基准 |
| required_metadata | 物种或商品组；来源和追溯基准；进料状态；带壳状态；且仅一种路线；熟制状态；最终含水率和盐状态；冰衣和去冰衣质量；沥干质量或净含量基准及填充介质比例；包装；设施地理位置；生产期间；技术；暂存条件；上游数据集链接 |
| required_quality_disclosure | 时间和场址覆盖；电表和秤校准；质量和能源平衡闭合；路线分离；分配方法；拒收批次；废物去向；代理；缺失流；所有 `reasoned_estimate` 使用及替换状态 |
| update_trigger | 路线、物种/形态组合、质量基准规范、食品安全控制、配方、技术、包装、暂存制度、分配基准、来源要求或上游数据集发生变化；或获得可替换暂定估算的前景/来源证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21265` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 21265, `CPC_Ver_3.0_Structure_30Jun2025.csv`, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-08-11） | 精确通用产品范围、纳入与排除项及互斥路线词汇 |
| `codex-cxc-52-2003` | standard | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, https://workspace.fao.org/sites/codex/Standards/CXC%2052-2003/CXC_052e.pdf（访问于 2026-08-11） | 双壳贝类追溯、来源区域和捕捞控制、卫生加工、包装、贮存及路线控制要求 |
| `eu-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method, http://data.europa.eu/eli/reco/2021/2279/oj（访问于 2026-08-11） | 功能单位、系统边界、清单完整性、分配层级、数据质量和生命周期数据集用途 |
