---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.products-n-e-c-of-fish-crustaceans-molluscs-or-other-aquatic-invertebrates-dead-fish-cr-ab4063b5
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 鱼、甲壳类、软体类或其他水生无脊椎动物未另分类产品；不适合人类食用的死鱼、甲壳类、软体类或其他水生无脊椎动物

## 1. 范围与适用性

本 PCR 覆盖 CPC 3.0 子类 21299 的精确通用范围。它适用于鱼、甲壳类、软体类或其他水生无脊椎动物的其他未另分类产品，以及在离开前景场址时作为非食品产品的不适合人类食用的死水生动物。必须明确保留产品身份、法律状态、非食品处置原因、预期非食品用途、物理状态和路线。参考流不得被描述、校验或建模为食品。

可食用水产品、活水生动物、归入 CPC 21291 的不可食用面粉、粗粉和团粒，以及在参考点具有法定废物身份的输出均不在范围内。上游捕捞、卸货、水产养殖和供应商加工在适用时以关联上游数据集表示，不在本前景边界内重复构建。本候选 PCR 支持直接出厂和一种声明的调理路线；不得把多条路线的清单合并成仿佛同时发生的清单。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.products-n-e-c-of-fish-crustaceans-molluscs-or-other-aquatic-invertebrates-dead-fish-cr-ab4063b5 |
| classification_refs | CPC 3.0：21299，精确 |
| covered_products | 鱼、甲壳类、软体类或其他水生无脊椎动物的其他未另分类非食品产品；不适合人类食用并作为产品供应给声明的非食品用途的死水生动物 |
| excluded_products | 预期或被表述为食品的产品；活水生动物；CPC 21291 不可食用面粉、粗粉和团粒；包装；单独报告的游离液体或可去除冰；在参考点具有法定废物身份的输出 |
| representative_product | 明确归类为非食品、以散装或包装形式发往声明非食品用途的一批死亡或衍生水生材料 |
| production_route | 每个数据集仅选一个路线代码：`direct_dispatch`、`chilled_or_iced`、`frozen_or_glazed`、`salted_or_brined` 或 `dried_or_other_stabilized` |
| market_state | 前景场址门口的非食品产品；可为整只、分块、混合水生材料或其他声明形态，并声明保藏状态和目的地 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供明确用于非食品用途的合格 CPC 21299 水生产品 |
| How much | 前景场址门口 1 kg 产品净质量 |
| How well | 产品身份、非食品状态及原因、预期用途、路线、形态、状况和适用质量限定信息均已声明并可追溯到批次 |
| How long or cycle | 最终质量确定和出厂时的一个生产批次；不表示服务持续时间 |
| reference_flow_link | 功能单位由下列唯一的天工参考产品流实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 合格产品净质量 |
| 参考产品流 | 鱼类、甲壳类、软体动物或其他水生无脊椎动物的未另作规定的产品，不适合人类食用的死鱼、甲壳类、软体动物或其他水生无脊椎动物 `96594bec-f1eb-4559-b4b2-2be03ec8f1cf` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 非食品状态以及不适合人类食用或作非食品处置的原因；预期非食品用途和目的地；水生分类群或声明的混合材料组成；整只、分块或其他物理形态；路线代码；保藏和温度状态；来源的产品或废物法律状态；产品净质量和称量基准；材料相关时的水分含量或声明的湿基/干基；`salted_or_brined` 的盐含量或盐水盐度；`frozen_or_glazed` 的毛重、去冰衣净质量和去冰衣方法；液装产品的沥干质量、毛重和沥干方法；包装状态；场址、地理范围和批次期间 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失适用限定信息时，参考流不完整。包装、可单独去除的冰衣或冰以及游离包装液不计入 1 kg 产品净质量；其质量仍作为单独清单流记录。商业记录采用其他基准时，必须同时报告商业质量和换算后的参考净质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在扣除包装、游离包装液和可单独去除的冰或冰衣后，将全部清单归一化至 1 kg 产品净质量。记录经校准的毛重、皮重和扣除质量。 |
| `moisture_basis` | 湿态、干燥或组成敏感产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明质量是按接收态、湿基、沥干基还是干基；当湿干基换算会显著改变结果时，对代表性批次样品测定水分。 |
| `salt_brine_basis` | `salted_or_brined` 路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别报告加盐量以及移除或保留的盐水；声明产品盐含量或盐水盐度、取样方法，以及数值为实测还是计算值。 |
| `glaze_and_drained_mass` | `frozen_or_glazed` 或液装产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告毛重、去冰衣或沥干净质量、扣除的冰衣或游离液体质量及有记录的去冰衣或沥干方法；仅以合格产品净质量作为参考。 |

## 5. 系统边界

前景边界遵循以下规则：

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | 前景系统 | 从接收声明的水生来源材料或已供应的 CPC 21299 产品开始，纳入场内接收、非食品身份核验、分选、选定的唯一调理路线、最终质量确定、使用时的包装，以及拒收物、废水或废盐水至下一处理或转移接口的管理。 | `codex-cxc-52-2003`, `eu-pef-2021-2279` |
| `boundary_non_food_identity` | 所有含产品过程 | 全程保留明确的非食品身份和预期非食品目的地；Codex 操作概念仅用于追溯、温度和计量实践，不得解释为食品合格性。 | `unsd-cpc-3-0-21299`, `codex-cxc-52-2003` |
| `boundary_route_exclusivity` | 调理 | 恰好选择一个路线代码。仅当路线不是 `direct_dispatch` 时纳入 `conditioning_stabilization`，并且只记录所选路线实际使用的输入和输出。 | `eu-pef-2021-2279` |
| `boundary_exclusions` | 前景系统 | 排除捕捞、水产养殖、卸货、供应商加工、场址门口后的配送、非食品使用和生命周期终结；关联材料上游数据集并披露任何研究特定扩展，不得静默截断。 | `eu-pef-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 水生材料或现有 CPC 21299 产品在前景场址接收，且已声明供应商、批次、物理状态、温度或保藏状态、产品或废物法律状态以及非食品处置原因 |
| starting_condition_role | 非食品分类、条件性调理和出厂的前景输入门口 |
| product_classification_scope | 仅限精确通用 CPC 3.0 子类 21299；CPC 21291 面粉、粗粉和团粒以及食品均不在范围内 |
| recursive_input_rule | 已购入且已属于 CPC 21299 的输入仍作为明确产品输入，并且只关联一次供应商数据集；不得在接收过程中递归重建同类别的上游生产 |
| upstream_dataset_requirement | 对捕捞、水产养殖、卸货、前期加工、到场运输及任何外购 CPC 21299 输入使用供应商或路线代表性上游数据集；披露缺口和替代 |
| disclosure | 声明来源身份、法律状态、非食品原因和目的地、路线代码、排除的上游阶段、质量基准、水分、适用时的盐度或盐含量、冰衣或沥干质量、包装以及所有废物或回收目的地 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_classification` | 接收、非食品分类与分选 | `required` | 始终 | 在不把材料视为食品的情况下建立合格 CPC 21299 身份和批次质量平衡 | kg 接收批次和 kg 合格批次 |
| `conditioning_stabilization` | 路线特定调理或稳定化 | `conditional` | 仅对 `chilled_or_iced`、`frozen_or_glazed`、`salted_or_brined` 或 `dried_or_other_stabilized` 纳入；恰好选择一条路线 | 保持或调整声明的非食品产品状态 | kg 路线输出 |
| `final_mass_dispatch` | 净质量确定、包装与出厂 | `required` | 始终；仅在使用包装时记录包装输入 | 在场址门口生产合格非食品参考产品 | 1 kg 合格净产品 |

### 过程：接收、非食品分类与分选（`receipt_classification`）

#### 输入

##### 产品流

###### 接收水生来源批次（`incoming_aquatic_lot`）

接收批次跨越前景门口以开展身份核验和分选。记录供应商质量、法律状态、物理状态和有文件记录的非食品处置原因。

- 选定流：水生来源材料或已供应的 CPC 21299 产品
- 流属性/单位：Mass / kg
- 数量规则：批次实测接收净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 同批次出厂的合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_lot`
- 数量范围：暂定接收到输出筛选估算；仅适用于未加工或机械处理批次，并须在至少三个代表性批次的场址质量平衡经审查后或转 active 前替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.00
  - 上限：2.00
  - 单位：kg/kg 参考产品
  - 基准：每 kg 合格参考产品的接收批次质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格非食品批次（`eligible_non_food_lot`）

该中间输出仅包含仍具有产品身份并符合声明的 CPC 21299 非食品身份的材料。

- 选定流：合格非食品水生材料
- 流属性/单位：Mass / kg
- 数量规则：接收净质量减去实测拒收物和实测留存异物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每接收批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_receipt_lot`

##### 废物流

###### 接收和分选拒收物（`receipt_rejects`）

按法律状态和目的地记录拒收物；不适合人类食用的材料并不自动成为废物。

- 选定流：分选拒收物，目的地特定
- 流属性/单位：Mass / kg
- 数量规则：按目的地实测拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 接收水生批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_lot`
- 数量范围：暂定拒收比例筛选值；仅在无代表性场址记录时适用，并须在三个代表性批次后或转 active 前替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.50
  - 单位：kg/kg 接收批次
  - 基准：拒收物占接收批次的质量分数
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：路线特定调理或稳定化（`conditioning_stabilization`）

#### 输入

##### 产品流

###### 进入所选路线的合格批次（`route_material_input`）

记录进入唯一声明路线的合格质量；绕过的材料属于 `direct_dispatch`，不进入本过程。

- 选定流：合格非食品水生材料
- 流属性/单位：Mass / kg
- 数量规则：实测路线输入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每路线批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_route`

###### 所选路线的水或冰（`conditioning_water_or_ice`）

仅记录为所选冷却、冰衣、冲洗或其他调理操作而跨越过程边界的水或冰。

- 选定流：工艺水或冰
- 流属性/单位：Mass / kg
- 数量规则：计量或称量的供水和供冰量；回用水从毛供应量中扣除并单独记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 路线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_route`
- 数量范围：暂定水或冰筛选值；仅适用于使用水或冰的路线，并须在三个代表性生产期后或转 active 前以路线特定计量表或采购记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2.0
  - 单位：kg/kg 路线输出
  - 基准：每 kg 路线输出的供水和供冰量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 盐或配制盐水（`conditioning_salt_or_brine`）

仅对 `salted_or_brined` 路线记录本行；在记录允许时分别记录干盐、补充水和回用盐水。

- 选定流：盐或配制盐水
- 流属性/单位：Mass / kg
- 数量规则：实测盐和盐水输入，并声明盐水盐度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 盐渍或盐水渍路线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_route`
- 数量范围：暂定盐和盐水筛选值；仅适用于 `salted_or_brined`，并须在取得三个代表性生产期的配方和盐度记录后或转 active 前替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.50
  - 单位：kg/kg 路线输出
  - 基准：每 kg 路线输出的盐和配制盐水投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 调理用电（`conditioning_electricity`）

记录冻结、冷却、干燥、泵送或其他所选路线设备的计量电力；排除属于其他路线的用途。

- 选定流：电力，场址供应组合
- 流属性/单位：Energy / kWh
- 数量规则：分表电耗，或按第 7 节分配的设备电表用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 路线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_route`
- 数量范围：暂定调理电耗筛选值；仅在使用电力调理时适用，并须在三个代表性生产期后或转 active 前以分表或工程证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5.0
  - 单位：kWh/kg 路线输出
  - 基准：每 kg 路线输出的所选路线设备用电
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 调理后的非食品路线输出（`conditioned_route_output`）

记录路线输出质量，以及所选路线适用的水分、盐、冰衣或沥干质量限定信息。

- 选定流：调理后的非食品水生产品
- 流属性/单位：Mass / kg
- 数量规则：按声明基准实测的合格路线输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每路线批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_route`

##### 废物流

###### 废水或废盐水（`conditioning_liquid_waste`）

按处理目的地记录排放水或盐水；回用液体仍为内部循环并单独披露。

- 选定流：废水或废盐水，目的地特定
- 流属性/单位：Mass / kg
- 数量规则：实测排放质量，或由计量输入、产品留存水和库存变化计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 路线输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_route`
- 数量范围：暂定液体废物筛选值；仅适用于产生废水或废盐水的路线，并须在三个代表性生产期后或转 active 前以实测排放或经审查的质量平衡记录替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2.0
  - 单位：kg/kg 路线输出
  - 基准：每 kg 路线输出送处理的液体废物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：净质量确定、包装与出厂（`final_mass_dispatch`）

#### 输入

##### 产品流

###### 进入最终质量确定的批次（`final_lot_input`）

使用合格的直接出厂批次或唯一所选调理路线的输出；同一产品质量不得同时使用两者。

- 选定流：最终质量确定前的合格非食品水生批次
- 流属性/单位：Mass / kg
- 数量规则：进入最终称量的实测批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每出厂批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_mass_dispatch`

###### 使用的包装材料（`dispatch_packaging`）

仅在实际使用时记录每种包装材料；散装无包装出厂的包装量记录为零。

- 选定流：包装材料，材料特定
- 流属性/单位：Mass / kg
- 数量规则：实测或采购核算的包装质量，不含声明边界外的可重复使用包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_mass_dispatch`
- 数量范围：暂定包装筛选值；仅适用于包装出厂，并须在转 active 前以物料清单或包装称量证据替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.50
  - 单位：kg/kg 参考产品
  - 基准：每 kg 合格净产品的包装质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格 CPC 21299 非食品参考产品（`reference_product_output`）

这是精确通用 CPC 21299 产品流。必须明确保留不适合人类食用或其他声明的非食品身份；不得建模为食品。

- 选定流：鱼类、甲壳类、软体动物或其他水生无脊椎动物的未另作规定的产品，不适合人类食用的死鱼、甲壳类、软体动物或其他水生无脊椎动物 `96594bec-f1eb-4559-b4b2-2be03ec8f1cf`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：应用所有适用质量扣除和换算后，按定义恰好为 1 kg 合格净产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`mass-balance-identity`
- 数量范围：精确归一化和 QA 等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 参考流
  - 基准：每一参考流的合格产品净质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

###### 最终称量或包装拒收物（`dispatch_rejects`）

按法律状态和目的地分别记录产品损失、洒落材料和破损包装。

- 选定流：最终阶段拒收物，目的地特定
- 流属性/单位：Mass / kg
- 数量规则：按材料和目的地实测拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_mass_dispatch`
- 数量范围：暂定最终拒收筛选值；仅在无代表性批次记录时适用，并须在三个代表性批次后或转 active 前替换
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg 参考产品
  - 基准：每 kg 合格净产品的最终阶段拒收质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

采用以下层级：

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivision` | 共用前景操作 | 在技术可行时，通过分开路线批次、直接计量或过程细分避免分配。 | `eu-pef-2021-2279` |
| `allocation_output_status` | 产品、共产品与废物 | 根据有文件记录的预期用途、法律状态和目的地对每项输出分类。非食品或不适合人类食用的状态本身不会使输出成为废物，也不能据此给予零负担。 | `eu-pef-2021-2279` |
| `allocation_fallback` | 无法避免的共用负担 | 无法细分时采用可证明的物理因果关系；不能建立因果关系时，采用经济关系或其他经论证的关系，并披露方法、价格或物理参数、期间和敏感性。 | `eu-pef-2021-2279` |
| `allocation_recovery` | 再循环、回收或废物处理 | 保持处理负担以及回收材料或能源收益与所选 PEF 兼容的生命周期终结方法一致；未声明被替代功能和方法时不得加入避免产品信用。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_lot` | `receipt_classification` | 接收批次、合格批次和拒收物 | 磅单、供应商记录、检查与处置记录 | lot_id; supplier; taxon_or_composition; legal_status; non_food_reason; intended_destination; gross_mass; tare_mass; net_received_mass; reject_mass_by_destination; eligible_mass; receipt_condition; receipt_time | 经校准称量，加上有记录的批次检查和核对 | kg | 每批 | 代表性报告期，通常至少 12 个月；季节性生产则覆盖全部生产期 | 每个纳入的前景场址 | 按批次和目的地求和，再按合格参考产品质量归一化；调查未解决质量差 | 校准记录、供应商声明、检查记录、处置记录和签字核对 |
| `cp_conditioning_route` | `conditioning_stabilization` | 路线输入、输出和液体废物 | 批次日志和计量记录 | batch_id; route_code; input_mass; water_mass; ice_mass; salt_or_brine_mass; salinity; electricity_kwh; output_mass; moisture; glaze_mass; drained_mass; liquid_waste_mass; inventory_change | 经校准称量、计量表、路线日志及适用的水分或盐度测试 | kg；kWh；声明的组成单位 | 每调理批次 | 覆盖季节和路线变化的代表性期间 | 按每条路线和场址分别记录 | 在同一路线和场址内汇总；核对质量；按路线输出和参考产品归一化 | 校准、测试方法、路线日志、批次核对和异常记录 |
| `cp_final_mass_dispatch` | `final_mass_dispatch` | 净产品、扣除质量、包装和拒收物 | 出厂称量和包装记录 | lot_id; route_code; gross_mass; tare_mass; packaging_mass; glaze_or_ice_mass; free_liquid_mass; drained_mass; net_product_mass; moisture; salt_or_salinity; reject_mass; destination; dispatch_time | 经校准毛重-皮重称量、适用的去冰衣或沥干及包装核对 | kg；声明的组成单位 | 每出厂批次 | 代表性期间，通常至少 12 个月或全部季节性生产期 | 每个纳入的前景场址 | 净产品与包装、可去除冰衣、游离液体和拒收物分开；归一化至 1 kg 净产品 | 校准、去冰衣或沥干记录、包装规格、出厂记录和批次签字确认 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_received_net_mass` | 接收批次 | 接收净质量 = 接收毛重 - 皮重 | gross_mass; tare_mass | net_received_mass | `mass-balance-identity` |
| `calc_reference_net_mass` | 最终出厂批次 | 参考净质量 = 出厂毛重 - 皮重和包装质量 - 可单独去除的冰衣或冰 - 游离包装液；液装时采用有记录的沥干质量 | gross_mass; tare_mass; packaging_mass; glaze_or_ice_mass; free_liquid_mass; drained_mass | qualified_net_product_mass | `codex-cxc-52-2003`, `mass-balance-identity` |
| `calc_route_mass_balance` | 每个接收或调理批次 | 未解决质量差 = 实测输入 + 期初库存 - 实测产品 - 实测废物 - 期末库存；有实质影响时分别披露蒸发或留存水 | input_masses; opening_inventory; product_masses; waste_masses; closing_inventory; moisture_or_water_change | unresolved_mass_difference | `mass-balance-identity`, `eu-pef-2021-2279` |
| `calc_normalized_inventory` | 所有清单行 | 归一化量 = 报告期可归属量 / 同路线同期间合格净参考产品质量 | attributable_amount; qualified_net_product_mass | 每 kg 参考产品的数量 | `eu-pef-2021-2279`, `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 每批 | 保留分类群或混合材料描述、供应商、法律状态、非食品原因、预期目的地、路线和批次关联；任何记录均不得暗示食品合格性。 | 供应商声明、检查和处置记录、批次标识及出厂记录 |
| `dq_measurement` | 质量、能源、水分和盐度记录 | 使用经校准仪器或有记录的采购核算；保留水分、盐度、冰衣和沥干质量的测试方法、精度与换算。 | 校准证书、计量表记录、实验室或运行测试单及计算工作簿 |
| `dq_temporal_route_coverage` | 前景平均值 | 覆盖代表性的季节和路线变化；路线数据分开，并披露排除的生产期、异常事件和数据缺口。 | 按月份、场址和路线编制的覆盖表及异常日志 |
| `dq_completeness_balance` | 每个过程和报告期 | 核对材料输入、合格输出、拒收物、液体废物和材料库存；调查并披露有实质影响的未解决差异。 | 签字的批次质量平衡和纠正措施记录 |
| `dq_secondary_data` | 上游和处理关联 | 记录每个次级数据集的地理、技术、期间、截断、分配和替代理由。 | 数据集元数据和 PEF 数据质量评价 |

## 9. 校验规则

前景数据包仅在所有适用规则通过时合规：

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_identity_non_food` | 产品身份 | 声明规范 id 和 CPC 3.0 代码 21299；明确非食品状态、原因、预期用途和目的地；名称和元数据均不得把参考产品表述为食品。 | `unsd-cpc-3-0-21299` |
| `validate_reference_mass` | 参考流 | 参考量使用规定 UUID 和 Mass/kg 基准，等于 1 kg 合格净产品；扣除包装、可去除冰衣或冰和游离液体，并在适用时提供水分、盐或盐度、去冰衣或沥干质量限定信息。 | `codex-cxc-52-2003`, `mass-balance-identity` |
| `validate_route_exclusivity` | 过程图 | 恰好声明一个路线代码；`direct_dispatch` 不得含调理清单，否则只能出现所选路线的输入和输出。 | `eu-pef-2021-2279` |
| `validate_mass_balance` | 接收、调理和出厂 | 批次质量平衡在场址声明的秤量和库存不确定度内闭合；任何未解决差异必须量化、调查和披露，不得隐藏在参考产品中。 | `mass-balance-identity`, `eu-pef-2021-2279` |
| `validate_allocation_destinations` | 共用负担和输出 | 首先尝试细分；每项共产品和废物均有法律状态和目的地；任何后备分配或回收信用均有论证、参数和敏感性测试。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 精确通用 CPC 21299 非食品水生产品的前景生产数据集 |
| downstream_use | `secondary_dataset`；`background_dataset`；作为 `process` 和 `lifecyclemodel` 投影的输入 |
| allowed_use | 对具有相同路线、质量基准、法律状态和地理范围的声明非食品 CPC 21299 产品，从规定接收状态到场址门口进行建模 |
| excluded_use | 食品；CPC 21291 面粉、粗粉或团粒；未声明的路线混合；在无明确范围扩展时替代捕捞、水产养殖、炼制、饲料、肥料、处置、使用或生命周期终结数据集 |
| required_metadata | 规范 PCR id、CPC 参考、产品 UUID、Mass 和单位组 UUID、非食品原因和目的地、分类群或组成、法律状态、路线、状况、场址和期间、上游关联、净质量基准、水分、盐度或盐、适用时的冰衣或沥干质量、包装、分配和废物目的地 |
| required_quality_disclosure | 初级数据占比、路线和季节覆盖、校准与测试方法、质量平衡差异、推理估算替代、次级数据集质量、分配敏感性和局限 |
| update_trigger | 在获得经审查的路线和场址特定证据时或转 active 审查前替换每项暂定推理估算；产品法律状态、路线、参考流 UUID、计量方法、分配方法或重要过程技术变化时更新 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21299` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类》3.0 版，子类 21299，https://unstats.un.org/unsd/classifications/Econ/cpc，作者参考日期 2026-08-11 | 精确产品类别身份、范围和非食品措辞 |
| `codex-cxc-52-2003` | 标准（`standard`） | 国际食品法典委员会，CXC 52-2003，《鱼和水产品操作规范》，https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/，作者参考日期 2026-08-11 | 直接相关的水产品操作概念、批次控制、温度和水或冰记录，以及净质量、去冰衣或沥干质量实践；不作为食品身份依据 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会关于使用环境足迹方法的建议（EU）2021/2279，CELEX 32021H2279，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279，作者参考日期 2026-08-11 | 系统边界、过程细分、分配层级、回收一致性、数据质量和归一化 |
| `mass-balance-identity` | 方法因子（`method_factor`） | 适用于实测前景输入、输出和库存变化的质量守恒恒等式 | 净质量计算、归一化和过程质量平衡校验 |
