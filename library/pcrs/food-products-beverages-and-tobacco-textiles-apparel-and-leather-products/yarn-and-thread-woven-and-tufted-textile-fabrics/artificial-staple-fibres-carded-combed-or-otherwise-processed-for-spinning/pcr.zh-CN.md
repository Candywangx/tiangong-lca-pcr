---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.artificial-staple-fibres-carded-combed-or-otherwise-processed-for-spinning
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 经梳理、精梳或其他纺前加工的人工短纤维

## 1. 范围与适用性

本 PCR 适用于人工短纤维在纺纱前的从门到门加工；销售中间产品已经梳理、精梳或其他机械纺前加工，但尚未成为纱线。“人工纤维”限于以天然有机聚合物或其衍生物为基础的非合成人造纤维，包括短纤维形态的粘胶、莫代尔、莱赛尔、铜氨、醋酯、三醋酯、海藻酸盐和再生蛋白质纤维。数据集必须声明实际纤维家族，不能用合成纤维路线替代。

前景边界从场址接收已识别人工短纤维开始，到已加工纤维、条子、卷、粗纱或其他明确纺前形态完成包装并到达工厂门口结束。纤维制造、溶解浆和聚合物制备、纤维生产商完成的切短、入厂运输、纺纱、织物制造、湿法染色、使用和寿命终结不在前景内；更广系统仍须链接相关上游数据集。

必须按实际路线条件化。只纳入实际发生的梳理、精梳、并条、针梳、牵切等操作。纤维家族和路线结果保持分开；不得对不同材料作无条件平均。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.artificial-staple-fibres-carded-combed-or-otherwise-processed-for-spinning |
| classification_refs | CPC 3.0: 26220（精确通用映射语境） |
| covered_products | 以天然有机聚合物或其衍生物为基础，经梳理、精梳、并条、针梳、牵切或其他声明机械纺前加工后供应的人工短纤维 |
| excluded_products | 合成短纤维、连续长丝、纺前未加工人工短纤维、纱线和线、各类织物，以及未在声明前景操作内进行的纤维制造和湿法整理 |
| representative_product | 一个声明人工短纤维家族和一种声明纺前交付形态；不定义跨纤维家族平均代表产品 |
| production_route | 接收和开松/混合，随后至少采用梳理、梳理后精梳或另一项有记录的纺前加工；调湿、处理剂和包装仅在实际发生时纳入 |
| market_state | 工厂门口已加工短纤维、条子、卷、粗纱或等效中间产品，并声明纤维家族、组成、含水率、处理剂、交付形态和路线 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供达到声明纺纱要求状态的机械加工人工短纤维中间产品 |
| How much | 工厂门口 1 kg 已加工人工短纤维 |
| How well | 符合声明纤维家族、混纺组成、加工路线、交付形态、含水率基准、处理剂状态和产品规范 |
| How long or cycle | 使用期限功能不适用；一个工厂生产批次归一化为 1 kg 输出 |
| reference_flow_link | 下列 Tiangong 产品流是 CPC 26220 的精确通用身份；不编码具体纤维、路线、含水率或形态，必须附全部限定信息 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 粗梳、精梳或用别的方法纺前加工的人造纺织纤维 `4f65996d-819a-4b51-8c1a-e3c3ecaa96b2` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 人工纤维家族和纤维名称；单纤维或混纺质量组成；来料形态与供应商；实际操作路线；交付状态；可得时的长度与线密度；含水率基准；处理剂、润滑剂或抗静电剂；再生含量；场址、技术、地理和期间；分配；包装 |

构建数据包时须声明全部限定信息。产品流核验信息为 version 01.01.000、state_code=100、Product flow、CPC 26220、Mass；PCR 仅存 UUID，且该核验不提供清单数值。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 已加工输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 全部结果归一化为 1 kg 声明输出。 |
| `moisture_basis` | 纤维投入与输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 声明交付态、调湿态或干态并记录投入与输出含水率；未经显式换算不得混用。 |
| `composition_basis` | 单纤维与混纺 | 纤维质量分数 | 质量 % | 逐一报告每种纤维组分；合成聚合物不得归入人工纤维。 |
| `route_separation` | 共享公用系统与多路线 | 视情况为能量或质量 | kWh、MJ 或 kg | 可行时按路线计量，否则使用有记录的机器时间、吞吐量或其他因果物理驱动因素。 |
| `mass_balance_period` | 纺前加工 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 投入、输出、次级产品、内部返料、各废物和收集粉尘采用同一协调期间。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 到场人工短纤维，并声明家族、组成、供应商、来料形态、含水率、处理剂、再生含量和入厂包装 |
| starting_condition_role | 纺前中间产品的前景门与上游链接条件 |
| product_classification_scope | 离场时已梳理、精梳或其他纺前加工的人工短纤维；CPC 26220 仅为映射语境 |
| recursive_input_rule | 已符合本 PCR 的来料仍是显式技术系统投入并保留其上游数据集；不得重复展开其上游纺前加工 |
| upstream_dataset_requirement | 纤维家族特定上游数据集及适用的各原子能源、水、配方、包装、处理与运输数据集 |
| disclosure | 声明实际路线、纤维家族、全部原子投入输出、内部返料、次级输出、各废物、废水和排放、治理、期间、分配及估算 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | 前景边界 | 纳入接收、开松、清洁/混合、实际纺前操作、条件性调湿或处理剂、除尘、废物处理和包装。 | `un-cpc-3-0-2025`; `hse-textile-machinery-standards` |
| `boundary_route_conditioning` | 路线选择 | 至少启用梳理、梳理后精梳或另一项明确纺前操作；不导入非实际路线，也不无条件平均不同纤维或路线。 | `hse-textile-machinery-standards`; `eu-environmental-footprint-2021` |
| `boundary_upstream_links` | 上游链接 | 纤维制造在前景门外；精确通用产品 UUID 不授权通用上游纤维生产数据。 | `eu-textiles-bref-2023`; `eu-environmental-footprint-2021` |
| `boundary_environmental_outputs` | 环境边界流 | 逐一记录颗粒物、收集粉尘、各纤维废物、各包装废物、废水、配方和处理输出，区分废物流与基本流。 | `eu-textiles-bat-2022`; `hse-textile-dust-guidance` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `prepared_fibre_gate_to_gate` | 人工短纤维从门到门纺前加工 | required | 声明实际操作序列；通常包含开松/混合与包装，并至少启用梳理、梳理后精梳、并条、针梳、牵切、粗纱成形或另一项明确命名的机械纺前操作之一 | 接收分别识别的人工短纤维投入并生产带限定信息的工厂门口中间产品，不混入非实际路线清单 | 1 kg 工厂门口已加工人工短纤维 |

### 过程：人工短纤维从门到门纺前加工（`prepared_fibre_gate_to_gate`）

#### 输入

##### 产品流

###### 粘胶短纤维投入（`viscose_staple_fibre_input`）

原子流名称：Viscose staple fibre, at spinning mill gate。方向与流类型由所在标题继承。适用条件：仅当声明产品含该单一纤维家族时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Viscose staple fibre, at spinning mill gate
- direction: input
- flow_type: product
- applicability: 仅当声明产品含该单一纤维家族时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–1.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.001
- 选定流：粘胶短纤维 `a64ce209-6dee-404e-a22c-9bbddb1cf295`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1.5
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 莫代尔短纤维投入（`modal_staple_fibre_input`）

原子流名称：莫代尔短纤维投入。方向与流类型由所在标题继承。适用条件：仅当声明产品含该单一纤维家族时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Modal staple fibre
- direction: input
- flow_type: product
- applicability: 仅当声明产品含该单一纤维家族时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–1.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- 选定流：Modal staple fibre
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1.5
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 莱赛尔短纤维投入（`lyocell_staple_fibre_input`）

原子流名称：莱赛尔短纤维投入。方向与流类型由所在标题继承。适用条件：仅当声明产品含该单一纤维家族时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Lyocell staple fibre
- direction: input
- flow_type: product
- applicability: 仅当声明产品含该单一纤维家族时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–1.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- 选定流：Lyocell staple fibre
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1.5
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 铜氨短纤维投入（`cupro_staple_fibre_input`）

原子流名称：铜氨短纤维投入。方向与流类型由所在标题继承。适用条件：仅当声明产品含该单一纤维家族时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Cupro staple fibre
- direction: input
- flow_type: product
- applicability: 仅当声明产品含该单一纤维家族时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–1.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- 选定流：Cupro staple fibre
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1.5
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 醋酸纤维素短纤维投入（`acetate_staple_fibre_input`）

原子流名称：醋酸纤维素短纤维投入。方向与流类型由所在标题继承。适用条件：仅当声明产品含该单一纤维家族时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Cellulose acetate staple fibre
- direction: input
- flow_type: product
- applicability: 仅当声明产品含该单一纤维家族时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–1.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- 选定流：Cellulose acetate staple fibre
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1.5
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 三醋酸纤维素短纤维投入（`triacetate_staple_fibre_input`）

原子流名称：三醋酸纤维素短纤维投入。方向与流类型由所在标题继承。适用条件：仅当声明产品含该单一纤维家族时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Cellulose triacetate staple fibre
- direction: input
- flow_type: product
- applicability: 仅当声明产品含该单一纤维家族时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–1.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- 选定流：Cellulose triacetate staple fibre
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1.5
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 海藻酸盐短纤维投入（`alginate_staple_fibre_input`）

原子流名称：海藻酸盐短纤维投入。方向与流类型由所在标题继承。适用条件：仅当声明产品含该单一纤维家族时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Alginate staple fibre
- direction: input
- flow_type: product
- applicability: 仅当声明产品含该单一纤维家族时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–1.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- 选定流：Alginate staple fibre
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1.5
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 再生蛋白质短纤维投入（`regenerated_protein_staple_fibre_input`）

原子流名称：再生蛋白质短纤维投入。方向与流类型由所在标题继承。适用条件：仅当声明产品含该单一纤维家族时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Regenerated protein staple fibre
- direction: input
- flow_type: product
- applicability: 仅当声明产品含该单一纤维家族时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–1.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- 选定流：Regenerated protein staple fibre
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1.5
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 电力投入（`electricity_input`）

原子流名称：Alternating current; <1 kV; consumption mix; electricity mix。方向与流类型由所在标题继承。适用条件：仅当声明路线实际使用或产生这一具体原子流时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Alternating current; <1 kV; consumption mix; electricity mix
- direction: input
- flow_type: product
- applicability: 仅当声明路线实际使用或产生这一具体原子流时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: MJ
- value_or_formula_or_rule: Metered electricity in kWh multiplied by 3.6 MJ/kWh and assigned to active preparation equipment
- range_or_uncertainty: 0.0036–18 MJ/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; version 01.01.003
- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：Metered electricity in kWh multiplied by 3.6 MJ/kWh and assigned to active preparation equipment
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.0036
  - 上限：18
  - 单位：MJ/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 压缩空气投入（`compressed_air_input`）

原子流名称：Compressed air。方向与流类型由所在标题继承。适用条件：仅当声明路线实际使用或产生这一具体原子流时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Compressed air
- direction: input
- flow_type: product
- applicability: 仅当声明路线实际使用或产生这一具体原子流时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: m3
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–10 m3/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; version 01.01.001
- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：m3/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 蒸汽投入（`steam_input`）

原子流名称：Steam; 0.45 MPaG; production mix at plant。方向与流类型由所在标题继承。适用条件：仅当外购蒸汽为 0.45 MPaG 时适用；其他压力等级须另建原子行。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Steam; 0.45 MPaG; production mix at plant
- direction: input
- flow_type: product
- applicability: 仅当外购蒸汽为 0.45 MPaG 时适用；其他压力等级须另建原子行
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.000
- 选定流：蒸汽 `aefdb9e8-b74c-4d25-bbfa-c4a1ff59dcdc`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 热水投入（`hot_water_input`）

原子流名称：热水投入。方向与流类型由所在标题继承。适用条件：仅当声明路线实际使用或产生这一具体原子流时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Hot water
- direction: input
- flow_type: product
- applicability: 仅当声明路线实际使用或产生这一具体原子流时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–10 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact mass-referenced hot-water product flow; steam, process-heat, boiler-equipment, and water candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact mass-referenced hot-water product flow; steam, process-heat, boiler-equipment, and water candidates were rejected
- 选定流：热水
- 流属性/单位：Mass / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 天然气投入（`natural_gas_input`）

原子流名称：Natural gas in the gaseous state; consumption mix; pipeline supplied。方向与流类型由所在标题继承。适用条件：仅当声明路线实际使用或产生这一具体原子流时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Natural gas in the gaseous state; consumption mix; pipeline supplied
- direction: input
- flow_type: product
- applicability: 仅当声明路线实际使用或产生这一具体原子流时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.001
- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 柴油投入（`diesel_input`）

原子流名称：Diesel oil; generic refinery production mix。方向与流类型由所在标题继承。适用条件：仅当声明路线实际使用或产生这一具体原子流时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Diesel oil; generic refinery production mix
- direction: input
- flow_type: product
- applicability: 仅当声明路线实际使用或产生这一具体原子流时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–0.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.002
- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 液化石油气投入（`lpg_input`）

原子流名称：Liquefied petroleum gas; industrial fuel and feedstock input at plant。方向与流类型由所在标题继承。适用条件：仅当声明路线实际使用或产生这一具体原子流时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Liquefied petroleum gas; industrial fuel and feedstock input at plant
- direction: input
- flow_type: product
- applicability: 仅当声明路线实际使用或产生这一具体原子流时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–0.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.000
- 选定流：液化石油气 `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### R-134a 制冷剂补充（`r134a_refrigerant_makeup`）

原子流名称：Refrigerant R134a; industrial processing plant; make-up for leakage。方向与流类型由所在标题继承。适用条件：仅当声明路线实际使用或产生这一具体原子流时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Refrigerant R134a; industrial processing plant; make-up for leakage
- direction: input
- flow_type: product
- applicability: 仅当声明路线实际使用或产生这一具体原子流时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–0.01 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.000
- 选定流：制冷剂 R134a `a4facd51-1e5c-422e-8461-e9562c045164`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.01
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### R-32 制冷剂补充（`r32_refrigerant_makeup`）

原子流名称：R-32 制冷剂补充。方向与流类型由所在标题继承。适用条件：仅当声明路线实际使用或产生这一具体原子流时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Difluoromethane (R-32)
- direction: input
- flow_type: product
- applicability: 仅当声明路线实际使用或产生这一具体原子流时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–0.01 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact R-32/difluoromethane product flow after name, CAS 75-10-5, and methylene-fluoride searches; R404A, R134a, unspecified refrigerant, and fluoride candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact R-32/difluoromethane product flow after name, CAS 75-10-5, and methylene-fluoride searches; R404A, R134a, unspecified refrigerant, and fluoride candidates were rejected
- 选定流：Difluoromethane (R-32)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.01
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 工艺水投入（`process_water_input`）

原子流名称：Process Water。方向与流类型由所在标题继承。适用条件：仅当声明路线实际使用或产生这一具体原子流时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Process Water
- direction: input
- flow_type: product
- applicability: 仅当声明路线实际使用或产生这一具体原子流时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.001
- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 合成酯润滑剂配方投入（`synthetic_ester_lubricant_input`）

原子流名称：合成酯润滑剂配方投入。方向与流类型由所在标题继承。适用条件：仅当声明路线实际使用或产生这一具体原子流时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Synthetic-ester textile lubricant formulation
- direction: input
- flow_type: product
- applicability: 仅当声明路线实际使用或产生这一具体原子流时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–0.1 kg formulation/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact declared formulation; generic lubricant, POY oil, and unspecified processing-aid candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact declared formulation; generic lubricant, POY oil, and unspecified processing-aid candidates were rejected
- 选定流：Synthetic-ester textile lubricant formulation
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.1
  - 单位：kg formulation/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 抗静电剂配方投入（`antistatic_agent_input`）

原子流名称：抗静电剂配方投入。方向与流类型由所在标题继承。适用条件：仅当声明路线实际使用或产生这一具体原子流时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Antistatic textile-finish formulation
- direction: input
- flow_type: product
- applicability: 仅当声明路线实际使用或产生这一具体原子流时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–0.1 kg formulation/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact declared formulation; generic lubricant, POY oil, and unspecified processing-aid candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact declared formulation; generic lubricant, POY oil, and unspecified processing-aid candidates were rejected
- 选定流：Antistatic textile-finish formulation
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.1
  - 单位：kg formulation/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 瓦楞纸箱投入（`corrugated_cardboard_box_input`）

原子流名称：Corrugated board boxes; 16.6% primary fibre; 83.4% recycled fibre; production mix at plant。方向与流类型由所在标题继承。适用条件：仅当声明路线实际使用或产生这一具体原子流时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Corrugated board boxes; 16.6% primary fibre; 83.4% recycled fibre; production mix at plant
- direction: input
- flow_type: product
- applicability: 仅当声明路线实际使用或产生这一具体原子流时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–0.2 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 03.00.002
- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### LDPE 袋或膜投入（`ldpe_bag_film_input`）

原子流名称：LDPE 袋或膜投入。方向与流类型由所在标题继承。适用条件：仅当声明路线实际使用或产生这一具体原子流时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Low-density polyethylene bag or film
- direction: input
- flow_type: product
- applicability: 仅当声明路线实际使用或产生这一具体原子流时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–0.2 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact LDPE bag-or-film product flow; generic polyethylene and unrelated film candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact LDPE bag-or-film product flow; generic polyethylene and unrelated film candidates were rejected
- 选定流：Low-density polyethylene bag or film
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 聚丙烯捆扎带投入（`polypropylene_strap_input`）

原子流名称：聚丙烯捆扎带投入。方向与流类型由所在标题继承。适用条件：仅当声明路线实际使用或产生这一具体原子流时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Polypropylene strapping
- direction: input
- flow_type: product
- applicability: 仅当声明路线实际使用或产生这一具体原子流时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–0.05 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact polypropylene strapping product flow; resin, fibre, twine, cable-tie, and mixed-packaging candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact polypropylene strapping product flow; resin, fibre, twine, cable-tie, and mixed-packaging candidates were rejected
- 选定流：聚丙烯捆扎带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 木托盘投入（`wood_pallet_input`）

原子流名称：Wooden pallets; production mix at lumber mill; wooden boards and slats。方向与流类型由所在标题继承。适用条件：仅当声明路线实际使用或产生这一具体原子流时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Wooden pallets; production mix at lumber mill; wooden boards and slats
- direction: input
- flow_type: product
- applicability: 仅当声明路线实际使用或产生这一具体原子流时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- range_or_uncertainty: 0–0.5 kg allocated pallet/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.001
- 选定流：木质托盘 `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量归属于声明纤维家族、路线和生产批次的该单一投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.5
  - 单位：kg allocated pallet/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 供纺纱用已加工人工短纤维（`prepared_artificial_staple_fibres`）

原子流名称：Artificial staple fibres, carded, combed or otherwise processed for spinning。方向与流类型由所在标题继承。适用条件：始终适用，并附全部纤维家族与路线限定信息。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：已核验的精确通用 Tiangong 产品流；作者编写时核验 version 01.01.000、state_code=100，但 PCR 不存版本。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为归一化恒等式。

- flow_name: Artificial staple fibres, carded, combed or otherwise processed for spinning
- direction: output
- flow_type: product
- applicability: 始终适用，并附全部纤维家族与路线限定信息
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 以采集的包装后输出质量归一化，参考流固定为 1 kg
- range_or_uncertainty: 1–1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.000
- 选定流：粗梳、精梳或用别的方法纺前加工的人造纺织纤维 `4f65996d-819a-4b51-8c1a-e3c3ecaa96b2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：以采集的包装后输出质量归一化，参考流固定为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：参考流归一化
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg factory-gate output
  - 基准：固定参考流恒等式
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`eu-environmental-footprint-2021`

###### 可销售粘胶短纤维精梳落棉（`saleable_viscose_combing_noil`）

原子流名称：可销售粘胶短纤维精梳落棉。方向与流类型由所在标题继承。适用条件：仅当粘胶短纤维精梳落棉作为单独销售产品时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Saleable viscose staple fibre combing noil
- direction: output
- flow_type: product
- applicability: 仅当粘胶短纤维精梳落棉作为单独销售产品时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一输出，并记录品质、去向与销售或转移状态
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- 选定流：Saleable viscose staple fibre combing noil
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一输出，并记录品质、去向与销售或转移状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.4
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 可销售莫代尔短纤维精梳落棉（`saleable_modal_combing_noil`）

原子流名称：可销售莫代尔短纤维精梳落棉。方向与流类型由所在标题继承。适用条件：仅当莫代尔短纤维精梳落棉作为单独销售产品时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Saleable modal staple fibre combing noil
- direction: output
- flow_type: product
- applicability: 仅当莫代尔短纤维精梳落棉作为单独销售产品时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一输出，并记录品质、去向与销售或转移状态
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- 选定流：Saleable modal staple fibre combing noil
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一输出，并记录品质、去向与销售或转移状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.4
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 可销售莱赛尔短纤维精梳落棉（`saleable_lyocell_combing_noil`）

原子流名称：可销售莱赛尔短纤维精梳落棉。方向与流类型由所在标题继承。适用条件：仅当莱赛尔短纤维精梳落棉作为单独销售产品时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Saleable lyocell staple fibre combing noil
- direction: output
- flow_type: product
- applicability: 仅当莱赛尔短纤维精梳落棉作为单独销售产品时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一输出，并记录品质、去向与销售或转移状态
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- 选定流：Saleable lyocell staple fibre combing noil
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一输出，并记录品质、去向与销售或转移状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.4
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 可销售铜氨短纤维精梳落棉（`saleable_cupro_combing_noil`）

原子流名称：可销售铜氨短纤维精梳落棉。方向与流类型由所在标题继承。适用条件：仅当铜氨短纤维精梳落棉作为单独销售产品时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Saleable cupro staple fibre combing noil
- direction: output
- flow_type: product
- applicability: 仅当铜氨短纤维精梳落棉作为单独销售产品时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一输出，并记录品质、去向与销售或转移状态
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- 选定流：Saleable cupro staple fibre combing noil
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一输出，并记录品质、去向与销售或转移状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.4
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 可销售醋酯纤维短纤维精梳落棉（`saleable_acetate_combing_noil`）

原子流名称：可销售醋酯纤维短纤维精梳落棉。方向与流类型由所在标题继承。适用条件：仅当醋酯纤维短纤维精梳落棉作为单独销售产品时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Saleable cellulose acetate staple fibre combing noil
- direction: output
- flow_type: product
- applicability: 仅当醋酯纤维短纤维精梳落棉作为单独销售产品时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一输出，并记录品质、去向与销售或转移状态
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- 选定流：Saleable cellulose acetate staple fibre combing noil
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一输出，并记录品质、去向与销售或转移状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.4
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 可销售三醋酯纤维短纤维精梳落棉（`saleable_triacetate_combing_noil`）

原子流名称：可销售三醋酯纤维短纤维精梳落棉。方向与流类型由所在标题继承。适用条件：仅当三醋酯纤维短纤维精梳落棉作为单独销售产品时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Saleable cellulose triacetate staple fibre combing noil
- direction: output
- flow_type: product
- applicability: 仅当三醋酯纤维短纤维精梳落棉作为单独销售产品时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一输出，并记录品质、去向与销售或转移状态
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- 选定流：Saleable cellulose triacetate staple fibre combing noil
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一输出，并记录品质、去向与销售或转移状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.4
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 可销售海藻酸盐短纤维精梳落棉（`saleable_alginate_combing_noil`）

原子流名称：可销售海藻酸盐短纤维精梳落棉。方向与流类型由所在标题继承。适用条件：仅当海藻酸盐短纤维精梳落棉作为单独销售产品时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Saleable alginate staple fibre combing noil
- direction: output
- flow_type: product
- applicability: 仅当海藻酸盐短纤维精梳落棉作为单独销售产品时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一输出，并记录品质、去向与销售或转移状态
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- 选定流：Saleable alginate staple fibre combing noil
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一输出，并记录品质、去向与销售或转移状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.4
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 可销售再生蛋白质短纤维精梳落棉（`saleable_regenerated_protein_combing_noil`）

原子流名称：可销售再生蛋白质短纤维精梳落棉。方向与流类型由所在标题继承。适用条件：仅当再生蛋白质短纤维精梳落棉作为单独销售产品时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Saleable regenerated protein staple fibre combing noil
- direction: output
- flow_type: product
- applicability: 仅当再生蛋白质短纤维精梳落棉作为单独销售产品时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一输出，并记录品质、去向与销售或转移状态
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- 选定流：Saleable regenerated protein staple fibre combing noil
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一输出，并记录品质、去向与销售或转移状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.4
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 开松去除异物（`opening_foreign_matter_waste`）

原子流名称：开松去除异物。方向与流类型由所在标题继承。适用条件：仅当这一具体废物流实际产生并跨越边界时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Foreign matter from bale opening
- direction: output
- flow_type: waste
- applicability: 仅当这一具体废物流实际产生并跨越边界时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact bale-opening foreign-matter waste flow; generic dregs candidate was rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact bale-opening foreign-matter waste flow; generic dregs candidate was rejected
- 选定流：Foreign matter from bale opening
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粘胶短纤维梳理拒料（`viscose_carding_reject_waste`）

原子流名称：粘胶短纤维梳理拒料。方向与流类型由所在标题继承。适用条件：仅当粘胶短纤维梳理路线启用且该拒料跨越边界时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Viscose staple fibre carding reject
- direction: output
- flow_type: waste
- applicability: 仅当粘胶短纤维梳理路线启用且该拒料跨越边界时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.3 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Viscose staple fibre carding reject
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.3
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 莫代尔短纤维梳理拒料（`modal_carding_reject_waste`）

原子流名称：莫代尔短纤维梳理拒料。方向与流类型由所在标题继承。适用条件：仅当莫代尔短纤维梳理路线启用且该拒料跨越边界时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Modal staple fibre carding reject
- direction: output
- flow_type: waste
- applicability: 仅当莫代尔短纤维梳理路线启用且该拒料跨越边界时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.3 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Modal staple fibre carding reject
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.3
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 莱赛尔短纤维梳理拒料（`lyocell_carding_reject_waste`）

原子流名称：莱赛尔短纤维梳理拒料。方向与流类型由所在标题继承。适用条件：仅当莱赛尔短纤维梳理路线启用且该拒料跨越边界时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Lyocell staple fibre carding reject
- direction: output
- flow_type: waste
- applicability: 仅当莱赛尔短纤维梳理路线启用且该拒料跨越边界时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.3 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Lyocell staple fibre carding reject
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.3
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 铜氨短纤维梳理拒料（`cupro_carding_reject_waste`）

原子流名称：铜氨短纤维梳理拒料。方向与流类型由所在标题继承。适用条件：仅当铜氨短纤维梳理路线启用且该拒料跨越边界时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Cupro staple fibre carding reject
- direction: output
- flow_type: waste
- applicability: 仅当铜氨短纤维梳理路线启用且该拒料跨越边界时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.3 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Cupro staple fibre carding reject
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.3
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 醋酯纤维短纤维梳理拒料（`acetate_carding_reject_waste`）

原子流名称：醋酯纤维短纤维梳理拒料。方向与流类型由所在标题继承。适用条件：仅当醋酯纤维短纤维梳理路线启用且该拒料跨越边界时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Cellulose acetate staple fibre carding reject
- direction: output
- flow_type: waste
- applicability: 仅当醋酯纤维短纤维梳理路线启用且该拒料跨越边界时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.3 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Cellulose acetate staple fibre carding reject
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.3
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 三醋酯纤维短纤维梳理拒料（`triacetate_carding_reject_waste`）

原子流名称：三醋酯纤维短纤维梳理拒料。方向与流类型由所在标题继承。适用条件：仅当三醋酯纤维短纤维梳理路线启用且该拒料跨越边界时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Cellulose triacetate staple fibre carding reject
- direction: output
- flow_type: waste
- applicability: 仅当三醋酯纤维短纤维梳理路线启用且该拒料跨越边界时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.3 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Cellulose triacetate staple fibre carding reject
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.3
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 海藻酸盐短纤维梳理拒料（`alginate_carding_reject_waste`）

原子流名称：海藻酸盐短纤维梳理拒料。方向与流类型由所在标题继承。适用条件：仅当海藻酸盐短纤维梳理路线启用且该拒料跨越边界时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Alginate staple fibre carding reject
- direction: output
- flow_type: waste
- applicability: 仅当海藻酸盐短纤维梳理路线启用且该拒料跨越边界时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.3 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Alginate staple fibre carding reject
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.3
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 再生蛋白质短纤维梳理拒料（`regenerated_protein_carding_reject_waste`）

原子流名称：再生蛋白质短纤维梳理拒料。方向与流类型由所在标题继承。适用条件：仅当再生蛋白质短纤维梳理路线启用且该拒料跨越边界时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Regenerated protein staple fibre carding reject
- direction: output
- flow_type: waste
- applicability: 仅当再生蛋白质短纤维梳理路线启用且该拒料跨越边界时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.3 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Regenerated protein staple fibre carding reject
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.3
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 粘胶短纤维精梳落棉废物（`viscose_combing_noil_waste`）

原子流名称：粘胶短纤维精梳落棉废物。方向与流类型由所在标题继承。适用条件：仅当粘胶短纤维精梳路线启用且落棉被归类为废物时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Viscose staple fibre combing noil waste
- direction: output
- flow_type: waste
- applicability: 仅当粘胶短纤维精梳路线启用且落棉被归类为废物时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Viscose staple fibre combing noil waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.4
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 莫代尔短纤维精梳落棉废物（`modal_combing_noil_waste`）

原子流名称：莫代尔短纤维精梳落棉废物。方向与流类型由所在标题继承。适用条件：仅当莫代尔短纤维精梳路线启用且落棉被归类为废物时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Modal staple fibre combing noil waste
- direction: output
- flow_type: waste
- applicability: 仅当莫代尔短纤维精梳路线启用且落棉被归类为废物时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Modal staple fibre combing noil waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.4
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 莱赛尔短纤维精梳落棉废物（`lyocell_combing_noil_waste`）

原子流名称：莱赛尔短纤维精梳落棉废物。方向与流类型由所在标题继承。适用条件：仅当莱赛尔短纤维精梳路线启用且落棉被归类为废物时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Lyocell staple fibre combing noil waste
- direction: output
- flow_type: waste
- applicability: 仅当莱赛尔短纤维精梳路线启用且落棉被归类为废物时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Lyocell staple fibre combing noil waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.4
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 铜氨短纤维精梳落棉废物（`cupro_combing_noil_waste`）

原子流名称：铜氨短纤维精梳落棉废物。方向与流类型由所在标题继承。适用条件：仅当铜氨短纤维精梳路线启用且落棉被归类为废物时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Cupro staple fibre combing noil waste
- direction: output
- flow_type: waste
- applicability: 仅当铜氨短纤维精梳路线启用且落棉被归类为废物时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Cupro staple fibre combing noil waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.4
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 醋酯纤维短纤维精梳落棉废物（`acetate_combing_noil_waste`）

原子流名称：醋酯纤维短纤维精梳落棉废物。方向与流类型由所在标题继承。适用条件：仅当醋酯纤维短纤维精梳路线启用且落棉被归类为废物时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Cellulose acetate staple fibre combing noil waste
- direction: output
- flow_type: waste
- applicability: 仅当醋酯纤维短纤维精梳路线启用且落棉被归类为废物时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Cellulose acetate staple fibre combing noil waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.4
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 三醋酯纤维短纤维精梳落棉废物（`triacetate_combing_noil_waste`）

原子流名称：三醋酯纤维短纤维精梳落棉废物。方向与流类型由所在标题继承。适用条件：仅当三醋酯纤维短纤维精梳路线启用且落棉被归类为废物时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Cellulose triacetate staple fibre combing noil waste
- direction: output
- flow_type: waste
- applicability: 仅当三醋酯纤维短纤维精梳路线启用且落棉被归类为废物时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Cellulose triacetate staple fibre combing noil waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.4
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 海藻酸盐短纤维精梳落棉废物（`alginate_combing_noil_waste`）

原子流名称：海藻酸盐短纤维精梳落棉废物。方向与流类型由所在标题继承。适用条件：仅当海藻酸盐短纤维精梳路线启用且落棉被归类为废物时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Alginate staple fibre combing noil waste
- direction: output
- flow_type: waste
- applicability: 仅当海藻酸盐短纤维精梳路线启用且落棉被归类为废物时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Alginate staple fibre combing noil waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.4
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 再生蛋白质短纤维精梳落棉废物（`regenerated_protein_combing_noil_waste`）

原子流名称：再生蛋白质短纤维精梳落棉废物。方向与流类型由所在标题继承。适用条件：仅当再生蛋白质短纤维精梳路线启用且落棉被归类为废物时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Regenerated protein staple fibre combing noil waste
- direction: output
- flow_type: waste
- applicability: 仅当再生蛋白质短纤维精梳路线启用且落棉被归类为废物时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Regenerated protein staple fibre combing noil waste
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.4
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收集的粘胶短纤维粉尘（`collected_viscose_fibre_dust_waste`）

原子流名称：收集的粘胶短纤维粉尘。方向与流类型由所在标题继承。适用条件：仅当粘胶短纤维粉尘被收集时适用；不得与未捕集的大气颗粒物重复。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Collected viscose staple fibre dust
- direction: output
- flow_type: waste
- applicability: 仅当粘胶短纤维粉尘被收集时适用；不得与未捕集的大气颗粒物重复
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Collected viscose staple fibre dust
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收集的莫代尔短纤维粉尘（`collected_modal_fibre_dust_waste`）

原子流名称：收集的莫代尔短纤维粉尘。方向与流类型由所在标题继承。适用条件：仅当莫代尔短纤维粉尘被收集时适用；不得与未捕集的大气颗粒物重复。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Collected modal staple fibre dust
- direction: output
- flow_type: waste
- applicability: 仅当莫代尔短纤维粉尘被收集时适用；不得与未捕集的大气颗粒物重复
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Collected modal staple fibre dust
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收集的莱赛尔短纤维粉尘（`collected_lyocell_fibre_dust_waste`）

原子流名称：收集的莱赛尔短纤维粉尘。方向与流类型由所在标题继承。适用条件：仅当莱赛尔短纤维粉尘被收集时适用；不得与未捕集的大气颗粒物重复。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Collected lyocell staple fibre dust
- direction: output
- flow_type: waste
- applicability: 仅当莱赛尔短纤维粉尘被收集时适用；不得与未捕集的大气颗粒物重复
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Collected lyocell staple fibre dust
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收集的铜氨短纤维粉尘（`collected_cupro_fibre_dust_waste`）

原子流名称：收集的铜氨短纤维粉尘。方向与流类型由所在标题继承。适用条件：仅当铜氨短纤维粉尘被收集时适用；不得与未捕集的大气颗粒物重复。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Collected cupro staple fibre dust
- direction: output
- flow_type: waste
- applicability: 仅当铜氨短纤维粉尘被收集时适用；不得与未捕集的大气颗粒物重复
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Collected cupro staple fibre dust
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收集的醋酯纤维短纤维粉尘（`collected_acetate_fibre_dust_waste`）

原子流名称：收集的醋酯纤维短纤维粉尘。方向与流类型由所在标题继承。适用条件：仅当醋酯纤维短纤维粉尘被收集时适用；不得与未捕集的大气颗粒物重复。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Collected cellulose acetate staple fibre dust
- direction: output
- flow_type: waste
- applicability: 仅当醋酯纤维短纤维粉尘被收集时适用；不得与未捕集的大气颗粒物重复
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Collected cellulose acetate staple fibre dust
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收集的三醋酯纤维短纤维粉尘（`collected_triacetate_fibre_dust_waste`）

原子流名称：收集的三醋酯纤维短纤维粉尘。方向与流类型由所在标题继承。适用条件：仅当三醋酯纤维短纤维粉尘被收集时适用；不得与未捕集的大气颗粒物重复。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Collected cellulose triacetate staple fibre dust
- direction: output
- flow_type: waste
- applicability: 仅当三醋酯纤维短纤维粉尘被收集时适用；不得与未捕集的大气颗粒物重复
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Collected cellulose triacetate staple fibre dust
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收集的海藻酸盐短纤维粉尘（`collected_alginate_fibre_dust_waste`）

原子流名称：收集的海藻酸盐短纤维粉尘。方向与流类型由所在标题继承。适用条件：仅当海藻酸盐短纤维粉尘被收集时适用；不得与未捕集的大气颗粒物重复。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Collected alginate staple fibre dust
- direction: output
- flow_type: waste
- applicability: 仅当海藻酸盐短纤维粉尘被收集时适用；不得与未捕集的大气颗粒物重复
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Collected alginate staple fibre dust
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 收集的再生蛋白质短纤维粉尘（`collected_regenerated_protein_fibre_dust_waste`）

原子流名称：收集的再生蛋白质短纤维粉尘。方向与流类型由所在标题继承。适用条件：仅当再生蛋白质短纤维粉尘被收集时适用；不得与未捕集的大气颗粒物重复。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Collected regenerated protein staple fibre dust
- direction: output
- flow_type: waste
- applicability: 仅当再生蛋白质短纤维粉尘被收集时适用；不得与未捕集的大气颗粒物重复
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- 选定流：Collected regenerated protein staple fibre dust
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 废瓦楞纸板（`corrugated_cardboard_waste`）

原子流名称：Packaging waste, cardboard; generated during packing; treatment unspecified。方向与流类型由所在标题继承。适用条件：仅当这一具体废物流实际产生并跨越边界时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Packaging waste, cardboard; generated during packing; treatment unspecified
- direction: output
- flow_type: waste
- applicability: 仅当这一具体废物流实际产生并跨越边界时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.2 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Waste flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.000
- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 废 LDPE 袋或膜（`ldpe_bag_film_waste`）

原子流名称：废 LDPE 袋或膜。方向与流类型由所在标题继承。适用条件：仅当这一具体废物流实际产生并跨越边界时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Waste low-density polyethylene bag or film
- direction: output
- flow_type: waste
- applicability: 仅当这一具体废物流实际产生并跨越边界时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.2 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact LDPE bag-or-film waste flow; returned candidate was unrelated anode sludge
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact LDPE bag-or-film waste flow; returned candidate was unrelated anode sludge
- 选定流：Waste low-density polyethylene bag or film
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 废聚丙烯捆扎带（`polypropylene_strap_waste`）

原子流名称：废聚丙烯捆扎带。方向与流类型由所在标题继承。适用条件：仅当这一具体废物流实际产生并跨越边界时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Waste polypropylene strapping
- direction: output
- flow_type: waste
- applicability: 仅当这一具体废物流实际产生并跨越边界时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.05 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact strapping waste flow; broader polypropylene waste candidate was rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact strapping waste flow; broader polypropylene waste candidate was rejected
- 选定流：Waste polypropylene strapping
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 废木托盘（`wood_pallet_waste`）

原子流名称：废木托盘。方向与流类型由所在标题继承。适用条件：仅当这一具体废物流实际产生并跨越边界时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Waste wood pallet
- direction: output
- flow_type: waste
- applicability: 仅当这一具体废物流实际产生并跨越边界时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact pallet waste flow; broader wood waste candidate was rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact pallet waste flow; broader wood waste candidate was rejected
- 选定流：Waste wood pallet
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 未使用合成酯润滑剂废物（`unused_lubricant_waste`）

原子流名称：未使用合成酯润滑剂废物。方向与流类型由所在标题继承。适用条件：仅当这一具体废物流实际产生并跨越边界时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Unused synthetic-ester textile lubricant formulation
- direction: output
- flow_type: waste
- applicability: 仅当这一具体废物流实际产生并跨越边界时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact formulation-specific unused-chemical waste flow; broader oil or textile-waste candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact formulation-specific unused-chemical waste flow; broader oil or textile-waste candidates were rejected
- 选定流：Unused synthetic-ester textile lubricant formulation
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 未使用抗静电剂废物（`unused_antistatic_agent_waste`）

原子流名称：未使用抗静电剂废物。方向与流类型由所在标题继承。适用条件：仅当这一具体废物流实际产生并跨越边界时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Unused antistatic textile-finish formulation
- direction: output
- flow_type: waste
- applicability: 仅当这一具体废物流实际产生并跨越边界时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact formulation-specific unused-chemical waste flow; broader oil or textile-waste candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact formulation-specific unused-chemical waste flow; broader oil or textile-waste candidates were rejected
- 选定流：Unused antistatic textile-finish formulation
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 受污染吸附材料废物（`contaminated_absorbent_waste`）

原子流名称：受污染吸附材料废物。方向与流类型由所在标题继承。适用条件：仅当这一具体废物流实际产生并跨越边界时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Cellulose absorbent contaminated with synthetic-ester textile lubricant
- direction: output
- flow_type: waste
- applicability: 仅当这一具体废物流实际产生并跨越边界时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.05 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact cellulose-absorbent-and-lubricant composite waste flow; generic waste-oil and waste-clay candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact cellulose-absorbent-and-lubricant composite waste flow; generic waste-oil and waste-clay candidates were rejected
- 选定流：Cellulose absorbent contaminated with synthetic-ester textile lubricant
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### HDPE 化学品容器废物（`hdpe_chemical_container_waste`）

原子流名称：HDPE 化学品容器废物。方向与流类型由所在标题继承。适用条件：仅当这一具体废物流实际产生并跨越边界时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Waste high-density polyethylene chemical container
- direction: output
- flow_type: waste
- applicability: 仅当这一具体废物流实际产生并跨越边界时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact HDPE chemical-container waste flow; broader waste-polyethylene candidate was rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact HDPE chemical-container waste flow; broader waste-polyethylene candidate was rejected
- 选定流：Waste high-density polyethylene chemical container
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 钢制化学品桶废物（`steel_chemical_drum_waste`）

原子流名称：钢制化学品桶废物。方向与流类型由所在标题继承。适用条件：仅当这一具体废物流实际产生并跨越边界时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Waste steel chemical drum
- direction: output
- flow_type: waste
- applicability: 仅当这一具体废物流实际产生并跨越边界时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–0.2 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact steel-drum waste flow; generic steel scrap and steel-production waste candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact steel-drum waste flow; generic steel scrap and steel-production waste candidates were rejected
- 选定流：Waste steel chemical drum
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 设备清洁水性废水（`equipment_cleaning_wastewater`）

原子流名称：Wastewater from cleaning; at plant; discharged to water。方向与流类型由所在标题继承。适用条件：仅当这一具体废物流实际产生并跨越边界时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Wastewater from cleaning; at plant; discharged to water
- direction: output
- flow_type: waste
- applicability: 仅当这一具体废物流实际产生并跨越边界时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 称量该单一废物流，并按实际处理去向分别记录
- range_or_uncertainty: 0–5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Waste flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.000
- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量该单一废物流，并按实际处理去向分别记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排入空气的颗粒物（`particulate_matter_to_air`）

原子流名称：排入空气的颗粒物。方向与流类型由所在标题继承。适用条件：仅当声明路线实际使用或产生这一具体原子流时适用。数量基准：每 1 kg 工厂门口输出。数据源 ID：采集协议 `cp_atomic_inventory_records`。UUID 状态：未解析；评审使用前须映射至一个 Tiangong 原子流。来源 ID 或状态：`cp_atomic_inventory_records`；候选范围为可替换的推理估算。

- flow_name: Total particulate matter to air
- direction: output
- flow_type: elementary
- applicability: 仅当声明路线实际使用或产生这一具体原子流时适用
- quantity_basis: 每 1 kg 工厂门口已加工人工短纤维
- unit: kg
- value_or_formula_or_rule: 用实测浓度、排气体积和运行时间计算治理后的未捕集排放质量
- range_or_uncertainty: 0–0.05 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact total-particulate elementary flow; available PM0.2-PM2.5 and PM2.5-PM10 compartment-specific flows cannot be combined without measured size fractions
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact total-particulate elementary flow; available PM0.2-PM2.5 and PM2.5-PM10 compartment-specific flows cannot be combined without measured size fractions
- 选定流：Total particulate matter to air
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：用实测浓度、排气体积和运行时间计算治理后的未捕集排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口已加工人工短纤维
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_atomic_inventory_records`
- 数量范围：暂定原子流 QA 筛选范围
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg factory-gate output
  - 基准：等待前景或已评审来源证据替换的宽泛候选筛选范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid` | 全部前景操作 | 可行时通过分别计量或细分路线、纤维、产品和设备避免分配。 | `eu-environmental-footprint-2021` |
| `allocation_internal_rework` | 内部返料 | 作为内部循环记录质量，不产生第二次投入负荷、输出信用或共产品。 | `eu-textiles-bat-2022` |
| `allocation_secondary_fibre` | 可销售次级纤维 | 先细分；否则使用因果物理关系；仅在无可辩护物理关系时用经济分配，并记录质量、品质、去向、价格期和敏感性。 | `eu-environmental-footprint-2021` |
| `allocation_waste` | 废物与回收 | 不因废物被收集就向其分配生产负荷；一致建模处理与回收约定并披露。 | `eu-textiles-bat-2022`; `eu-environmental-footprint-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_atomic_inventory_records` | `prepared_fibre_gate_to_gate` | 每个原子纤维投入、能源载体、水、供应商配方、包装材料、产品、次级产品、废物、废水和基本流 | 批次、物料清单、仪表、发票、维修、废物、销售和排放记录 | lot_id; fibre_name; supplier; composition; moisture_basis; route_steps; atomic_flow_name; flow_direction; flow_type; Tiangong_uuid_or_unresolved_status; quantity; unit; formulation_SKU; treatment_destination; exhaust_flow; particulate_concentration; operating_time; allocation_driver | 每个原子流和实际路线独立记录；保留计量、供应商 SKU/SDS/TDS、制冷剂维修和排放监测证据 | kg; kWh; Nm3; operating hour; 适用的浓度与排气体积 | 每批次；公用系统按仪表间隔；维修和排放按事件/监测间隔 | 至少连续 12 个代表性月份，较短生产期覆盖全部批次 | 每条纳入生产线和共享服务 | 不合并不同纤维、载能体、配方、包装、废物、废水或排放；协调库存和内部返料一次，再归一化 | 校准、仪表、发票、纤维证书、配方、SDS/TDS、包装规范、维修、废物、销售、排放及签署的协调记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_specific_input` | 各原子数量 | 原子比量 = 路线净数量 / 路线净输出质量 | 原子数量; 输出质量 | 每 kg 输出的原子数量 | `eu-environmental-footprint-2021` |
| `calc_specific_electricity` | 电力 | 比电耗 = 路线分配 kWh / 路线净输出质量；扣除无关用电 | kWh; 分配驱动因素; 输出质量 | kWh/kg | `eu-textiles-bat-2022`; `eu-environmental-footprint-2021` |
| `calc_material_balance` | 完整路线 | 协调全部纤维、保留水/配方、产品、次级产品、各废物和库存变化并披露差异 | 原子投入输出; 库存; 含水率 | 质量平衡与差异 | `eu-textiles-bat-2022` |
| `calc_particulate_release` | 颗粒物 | 排放质量 = 浓度 × 有记录排气体积，并披露换算与外推；不重复扣除收集粉尘 | 浓度; 流量; 时间; 治理边界 | kg 颗粒物/kg | `eu-textiles-bat-2022`; `hse-textile-dust-guidance` |
| `calc_route_result` | 多路线 | 各纤维和路线分别计算；合并时仅按披露组成结果与生产质量加权 | 组成清单; 生产质量; 路线标识 | 加权与组成结果 | `eu-environmental-footprint-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 身份 | 保留纤维名称、组成、状态和路线的供应商与批次证据。 | 证书、物料清单、标签、试验和路线表 |
| `dq_route_specificity` | 前景记录 | 标记纤维、路线、设备、场址、批次和期间并披露共享分配。 | 日志、仪表图和工作表 |
| `dq_measurement` | 全部数量 | 可行时使用校准计量并保留方法、单位、频率和不确定度。 | 校准、仪表和实验室记录 |
| `dq_temporal` | 期间 | 覆盖 12 个代表性月份或全部较短生产期，披露异常和缺失。 | 日历、停机和完整性说明 |
| `dq_completeness` | 清单 | 每个已知物料、水、能源、产品、废物、废水和排放建立原子行。 | 签署清单与协调 |
| `dq_estimate_replacement` | `reasoned_estimate` | 仅作候选筛选；active/published 前替换或经评审明确接受并披露。 | 评审与替换证据 |
| `dq_uuid_resolution` | 非参考流 | 评审时核验每个原子 Tiangong UUID；不从标签推断或复制通用产品 UUID。 | 查询证据与签署 |
| `dq_generic_flow_limit` | 参考产品 | 披露通用 UUID 不区分纤维、路线、品质、含水率、处理剂或形态。 | 必需限定字段 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求产品 UUID `4f65996d-819a-4b51-8c1a-e3c3ecaa96b2`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66`、数量 1 和 kg。 |  |
| `validate_required_qualifiers` | 元数据 | 缺少纤维、组成、状态、路线、含水率、处理剂、场址、地理、期间、分配或包装时失败。 | `eu-textile-fibre-names-1007-2011` |
| `validate_artificial_not_synthetic` | 范围 | 仅合成纤维或未证明人工纤维身份时失败；混纺逐一报告。 | `eu-textile-fibre-names-1007-2011`; `un-cpc-3-0-2025` |
| `validate_route_gate` | 路线 | 要求接收/开松/混合、包装及至少一项合格纺前操作。 | `hse-textile-machinery-standards` |
| `validate_no_unconditional_average` | 汇总 | 不得无条件平均不同纤维或路线；合并须披露组成、权重、地理和期间。 | `eu-environmental-footprint-2021` |
| `validate_mass_basis` | 平衡 | 要求含水率基准、统一期间、库存、返料、次级产品、各废物和差异。 | `eu-textiles-bat-2022` |
| `validate_environmental_crossings` | 排放与废物 | 对各实际路线逐一记录或说明不适用的颗粒物、粉尘、纤维废物、包装废物、水、废水、配方和配方废物。 | `eu-textiles-bat-2022`; `hse-textile-dust-guidance` |
| `validate_allocation` | 多输出 | 要求细分或有记录的物理/必要时经济分配及敏感性。 | `eu-environmental-footprint-2021` |
| `validate_estimates` | 暂定范围 | 标记为暂定；active/published 前替换或明确接受披露。 |  |
| `validate_uuid_limit` | UUID | 未核验非参考 UUID 或把通用 UUID 当路线证据时失败。 |  |
| `validate_atomic_flows` | 过程清单 | 每行只能是一种具体纤维、单一能源载体、单一供应商配方、单一包装材料、单一产品、单一废物、单一废水或单一基本流；拒绝集合占位流。 | `eu-textiles-bat-2022` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个声明纤维家族和路线的前景单元过程或从门到门数据集 |
| downstream_use | `secondary_dataset`；评审并完成证据后可作 `background_dataset` |
| allowed_use | 纤维、路线、状态、技术、地理、期间、分配和质量匹配的 LCA |
| excluded_use | 合成纤维、纤维制造、纱线/织物生产、未限定平均、把候选估算当已评审基准的比较 |
| required_metadata | PCR id、UUID 与限定信息、纤维证书、状态、路线、场址、期间、计量、全部原子行、分配、上游链接和估算标志 |
| required_quality_disclosure | 覆盖、计量、分配、完整性、平衡、估算、未解析原子 UUID、治理边界和评审状态 |
| update_trigger | 新基准或 UUID、法规/名称、技术/配方/路线/供应商变化、估算替换、分配变化或期间偏离 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | 官方指南（`official_guidance`） | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, code 26220, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（2026-08-12 检索） | 分类范围 |
| `eu-textile-fibre-names-1007-2011` | 官方指南（`official_guidance`） | Regulation (EU) No 1007/2011, Article 5 and Annex I, https://eur-lex.europa.eu/eli/reg/2011/1007/oj（2026-08-12 检索） | 纤维名称、定义和人工/合成区分 |
| `eu-textiles-bref-2023` | 官方指南（`official_guidance`） | EC JRC, Textiles Industry BREF, January 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry（2026-08-12 检索） | 纤维准备与上游边界 |
| `eu-textiles-bat-2022` | 官方指南（`official_guidance`） | Commission Implementing Decision (EU) 2022/2508, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508（2026-08-12 检索） | 原子输入输出、资源、化学品、废物和排放 |
| `hse-textile-dust-guidance` | 官方指南（`official_guidance`） | UK HSE, Dust in textiles, https://www.hse.gov.uk/textiles/dust.htm（2026-08-12 检索） | 粉尘源、捕集与排放 |
| `hse-textile-machinery-standards` | 官方指南（`official_guidance`） | UK HSE, textile machinery standards, https://www.hse.gov.uk/textiles/british-standards.htm（2026-08-12 检索） | 纺前过程分解 |
| `eu-environmental-footprint-2021` | 官方指南（`official_guidance`） | Commission Recommendation (EU) 2021/2279, https://eur-lex.europa.eu/eli/reco/2021/2279/oj（2026-08-12 检索） | 质量参考、前景记录、代表性、分配与质量 |
