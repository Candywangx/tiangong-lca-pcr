---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.pig-meat-cuts-salted-dried-or-smoked-bacon-and-ham
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 盐渍、干制或熏制猪肉块（培根和火腿）

## 1. 范围与适用性

本 PCR 适用于通过盐渍、干制或熏制保存并达到上市状态的猪肉块（包括培根和火腿）的工厂大门生产。前景边界始于接收冷藏或冷冻猪肉块，止于包装和所声明的冷藏储存之后。边界覆盖修整；且只声明一种腌制方法（`dry_cure`、`brine_injection` 或 `brine_immersion`）；随路线适用的滚揉、熟制、熏制、干燥或熟成及切片；冷却或冷藏；包装；制冷；清洗消毒；以及存在时的厂内废水处理。

本 PCR 不包括接收前的生猪养殖、屠宰和胴体初级分割；香肠、碎肉制品、完整餐食、罐头肉，以及采用 CPC 21181 范围外方法保存的产品；工厂大门之外的分销；零售、消费者烹饪和生命终期。只有当产品仍属于本类别的盐渍、干制或熏制猪肉块时，才纳入熟火腿路线。每个数据包都必须声明一条真实生产路线；不得把互斥的腌制路线和可选保存工序叠加成虚构的默认路线。

## 2. 产品类别标识

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.pig-meat-cuts-salted-dried-or-smoked-bacon-and-ham |
| classification_refs | CPC 3.0：21181，精确范围引用 |
| covered_products | 通过盐渍、干制或熏制保存的整肌或切块猪肉，包括培根、湿腌火腿、干腌火腿和其他符合范围的腌制猪肉块 |
| excluded_products | 鲜猪肉或仅经冷冻的猪肉；香肠和碎肉制品；罐头肉；完整预制餐食；非猪肉；未通过盐渍、干制或熏制保存的产品 |
| representative_product | 以接收的猪肉块为原料，采用一种已声明腌制方法及适用后续路线制成的包装冷藏培根或火腿 |
| production_route | 接收并修整；在干腌、盐水注射或盐水浸渍中只声明一种；仅在实际使用时纳入滚揉；仅对熟火腿纳入熟制；仅对熏制路线纳入熏制；仅对干制路线纳入干燥或熟成；冷却或冷藏；仅在适用时切片；包装并冷藏 |
| market_state | 在工厂大门处按照声明的产品规格完成包装、贴标、冷藏或其他储存；必须声明即食或非即食状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 提供什么 | 提供通过盐渍、干制或熏制保存并达到上市状态的猪肉块，且已声明安全、组成和路线属性 |
| 提供多少 | 在声明的工厂大门冷藏期结束时，1 kg 不含包装的产品净质量 |
| 达到何种质量 | 符合声明的培根、火腿或其他猪肉块规格，以及声明的腌制、熟制、熏制、干燥、切片、包装和储存条件 |
| 持续时间或周期 | 一个生产批次经历声明的工厂大门储存期；必须报告储存时长和温度 |
| reference_flow_link | 参考产品输出行 `packaged_refrigerated_product` 实现该功能单位 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 产品净重 |
| 参考产品流 | 盐渍、干制或熏制猪肉块（培根和火腿）— 天工 UUID 未解析 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必填限定信息 | 产品形态；猪肉部位；`curing_method` 必须为 `dry_cure`、`brine_injection` 或 `brine_immersion` 中的一种；`cooking_status`；`smoking_status` 和烟源；`drying_ripening_status`；`slicing_status`；即食状态；配方配料清单；包装组件清单；冷藏温度和时长；生产地域；参考期；技术 |

构建前景数据包时，必须在数据集元数据、过程说明、参考流注释、产品描述或等效数据包字段中声明“必填限定信息”所列项目。缺少任一必填限定信息，均会使该数据包的参考流定义不完整。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告冷却、包装操作和所声明工厂大门储存期之后的产品净质量；不含包装质量。 |
| `mass_balance_basis` | 猪肉、配料、产品、联产品、不合格品、废物、废水、污泥、烟材、制冷剂和包装 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在每项交换跨越其过程边界的位置记录湿重，并归一化至 1 kg 参考产品。不得在未保留换算记录的情况下把干物质、盐含量或水分含量换算为湿重。 |
| `energy_carrier_separation` | 电力、蒸汽、外购热和天然气 | 与所购能源载体相适用的能量或质量 | kWh、MJ 或 kg | 保留发票或计量单位，仅使用有记录的因子进行换算。电力、蒸汽、外购热和每种燃料均保持为独立交换。 |
| `ingredient_identity` | 每种配方配料 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录每种化学或物理上特定配料的质量；不得把亚硝酸盐或硝酸盐有效成分质量与配制腌制盐质量混淆。 |
| `refrigerant_balance` | 每种制冷剂 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 根据初始充注、补充、回收和期末存量，分别计算每种已声明制冷剂的泄漏量；不得报告合并制冷剂流。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在加工厂大门接收的冷藏或冷冻猪肉块，并记录接收质量、温度、肉块标识、供应商批次和先前保存状态 |
| starting_condition_role | 上游产品输入；生猪生产、屠宰和胴体初级分割由所链接的上游数据集表示，不在本前景中重复 |
| product_classification_scope | 在 CPC 3.0 子类 21181 内通过盐渍、干制或熏制形成市场身份的猪肉块，包括培根和火腿 |
| recursive_input_rule | 如果接收的输入已经是同一类别的盐渍、干制或熏制猪肉块，则将其作为直接产品输入记录，并在接收处停止类别递归；披露其先前加工，并排除重叠的前景工序 |
| upstream_dataset_requirement | 为接收猪肉块、配料、公用工程、燃料、烟材、清洗剂、包装和废物处理链接供应商特定或有代表性的上游数据集，不得与前景操作重复计算 |
| disclosure | 声明猪肉部位、接收状态、且仅一种腌制方法、每项适用的可选路线工序、熟制和即食状态、烟源、干燥或熟成条件、切片、包装组件、冷藏条件、联产品去向、废水路线和全部数据缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_received_cuts` | foreground_start | 从有记录的猪肉块接收处开始；排除动物生产、屠宰和初级分割，但链接其上游数据集。 | `unsd-cpc-3-0`; `eu-commission-pef-2021-2279` |
| `boundary_route_exclusivity` | curing_and_preservation_route | 只声明一种腌制方法。熟制仅适用于熟火腿，熏制仅适用于熏制产品，干燥或熟成仅适用于干制产品，切片仅适用于切片产品。 | `usda-fsis-bacon-food-safety`; `usda-fsis-hams-food-safety`; `usda-fsis-rte-salt-cured-dried-2023` |
| `boundary_support_operations` | foreground_support | 纳入声明批次所需并经分配的设施公用工程、清洗消毒、制冷、包装、废水处理和厂内处理。 | `eu-jrc-fdm-bref-2019`; `eu-commission-pef-2021-2279` |
| `boundary_no_route_averaging` | dataset_representativeness | 不得将互斥的干腌、注射、浸渍、熟制、熏制或干制路线平均成一套默认清单，除非生产加权的市场平均数据集明确报告路线份额。 | `eu-commission-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入方式 | 纳入条件 | 作用 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_trimming` | 接收与修整 | `required` | 始终纳入 | 前景物料准备 | kg 接收猪肉块 |
| `dry_curing` | 干腌 | `conditional` | 仅在以下条件纳入：`curing_method = dry_cure` | 前景腌制 | kg 进入干腌的修整猪肉 |
| `brine_curing` | 盐水配制及注射或浸渍 | `conditional` | 仅当 `curing_method = brine_injection` 或 `brine_immersion` 时纳入；声明具体一种 | 前景腌制 | kg 进入盐水腌制的修整猪肉 |
| `tumbling` | 滚揉或按摩 | `conditional` | 仅在实际采用时纳入，通常位于盐水腌制之后 | 前景调理 | kg 接受滚揉的盐水腌制猪肉 |
| `cooking` | 熟制 | `conditional` | 仅对熟火腿纳入 | 前景热处理 | kg 进入熟制的腌制猪肉 |
| `smoking` | 熏制 | `conditional` | 仅对以下情形纳入：已声明熏制路线 | 前景熏制处理 | kg 进入熏制的腌制或熟制猪肉 |
| `drying_ripening` | 干燥与熟成 | `conditional` | 仅对以下情形纳入：已声明干制或熟成路线 | 前景保存 | kg 进入干燥或熟成的腌制猪肉 |
| `cooling_chilling` | 冷却与冷藏 | `required` | 采用实际处理后的冷却或冷藏调理路线 | 前景温度控制 | kg 进入冷却或冷藏的产品 |
| `slicing` | 切片 | `conditional` | 仅对以下情形纳入：切片产品 | 前景后处理 | kg 进入切片的冷藏产品 |
| `packaging` | 包装与贴标 | `required` | 始终纳入；仅包含实际组件组合 | 前景后处理 | kg 包装产品净重 |
| `refrigerated_storage` | 冷藏储存 | `required` | 声明的工厂大门冷藏期始终纳入 | 前景储存 | kg 包装产品及储存时长 |
| `facility_utilities` | 设施公用工程与直接燃烧 | `required` | 采用计量或有记录的物理驱动因素，将实际公用工程分配至声明路线 | 前景支持 | 1 kg 参考产品 |
| `facility_sanitation` | 清洗与消毒 | `required` | 纳入按批次和按期间分配的清洗消毒 | 前景支持 | 1 kg 参考产品 |
| `onsite_wastewater_treatment` | 厂内废水处理 | `conditional` | 仅在废水于厂内处理时纳入；否则记录离开边界的废水 | 前景支持 | kg 处理废水 |

### 过程：接收与修整 (`receipt_trimming`)

#### 输入

##### 产品流

###### 接收的猪肉块 (`received_pig_meat_cuts`)

本原子交换记录“接收的猪肉块”跨越本过程边界的数量。

- 选定流：冷藏或冷冻猪肉块
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在接收时称量验收的供应商批次，并扣除运输包装和托盘
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_trimming`
- 来源：`unsd-cpc-3-0`; `fao-who-codex-cxc-58-2005`

#### 输出

##### 产品流

###### 修整后的猪肉块 (`trimmed_pig_meat_cut`)

本原子交换记录“修整后的猪肉块”跨越本过程边界的数量。

- 选定流：修整后的猪肉块
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量放行至已声明腌制路线的修整肉块
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_trimming`
- 来源：`fao-who-codex-cxc-58-2005`

###### 可食用猪脂肪修整料 (`edible_pork_fat_trimmings`)

本原子交换记录“可食用猪脂肪修整料”跨越本过程边界的数量。

- 选定流：可食用猪脂肪修整料
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在作为可食用联产品出售或转移时分别称量
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_trimming`
- 来源：`eu-commission-pef-2021-2279`

###### 可食用猪皮修整料 (`edible_pork_skin_trimmings`)

本原子交换记录“可食用猪皮修整料”跨越本过程边界的数量。

- 选定流：可食用猪皮修整料
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在作为可食用联产品出售或转移时分别称量
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_trimming`
- 来源：`eu-commission-pef-2021-2279`

##### 废物流

###### 不可食用肉修整料 (`inedible_meat_trimmings`)

本原子交换记录“不可食用肉修整料”跨越本过程边界的数量。

- 选定流：不可食用猪肉修整料
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量送往废物或动物副产品处理的物料
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_trimming`
- 来源：`fao-who-codex-cxc-58-2005`

###### 拒收猪肉 (`rejected_received_pig_meat`)

本原子交换记录“拒收猪肉”跨越本过程边界的数量。

- 选定流：拒收猪肉块
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量拒收或判废的接收肉，并按去向记录
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_trimming`
- 来源：`fao-who-codex-cxc-58-2005`

### 过程：干腌 (`dry_curing`)

#### 输入

##### 产品流

###### 进入干腌的猪肉 (`dry_cure_meat_input`)

本原子交换记录“进入干腌的猪肉”跨越本过程边界的数量。

- 选定流：修整后的猪肉块
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量装入干腌工序的修整猪肉
- 数值模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_curing`
- 来源：`usda-fsis-bacon-food-safety`; `usda-fsis-rte-salt-cured-dried-2023`

###### 干腌用氯化钠 (`dry_cure_sodium_chloride`)

本原子交换记录“干腌用氯化钠”跨越本过程边界的数量。

- 选定流：氯化钠
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录实际施用于该批次的氯化钠质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_curing`
- 来源：`usda-fsis-bacon-food-safety`; `usda-fsis-rte-salt-cured-dried-2023`

###### 干腌用亚硝酸钠 (`dry_cure_sodium_nitrite`)

本原子交换记录“干腌用亚硝酸钠”跨越本过程边界的数量。

- 选定流：亚硝酸钠
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：配方声明使用时，记录亚硝酸钠有效成分质量；否则将此原子行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_curing`
- 来源：`usda-fsis-bacon-food-safety`; `usda-fsis-hams-food-safety`

###### 干腌用硝酸钠 (`dry_cure_sodium_nitrate`)

本原子交换记录“干腌用硝酸钠”跨越本过程边界的数量。

- 选定流：硝酸钠
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：配方声明使用时，记录硝酸钠有效成分质量；否则将此原子行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_curing`
- 来源：`usda-fsis-hams-food-safety`; `usda-fsis-rte-salt-cured-dried-2023`

###### 干腌用蔗糖 (`dry_cure_sucrose`)

本原子交换记录“干腌用蔗糖”跨越本过程边界的数量。

- 选定流：蔗糖
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：配方声明使用时，记录蔗糖质量；否则将此原子行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_curing`
- 来源：`usda-fsis-bacon-food-safety`; `usda-fsis-hams-food-safety`

###### 干腌用黑胡椒 (`dry_cure_black_pepper`)

本原子交换记录“干腌用黑胡椒”跨越本过程边界的数量。

- 选定流：黑胡椒
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：配方声明使用时，记录黑胡椒质量；否则将此原子行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_curing`
- 来源：`usda-fsis-bacon-food-safety`; `fao-who-codex-cxc-58-2005`

###### 干腌用大蒜 (`dry_cure_garlic`)

本原子交换记录“干腌用大蒜”跨越本过程边界的数量。

- 选定流：大蒜
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：配方声明使用时，记录大蒜质量；否则将此原子行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_curing`
- 来源：`fao-who-codex-cxc-58-2005`

###### 干腌用抗坏血酸钠 (`dry_cure_sodium_ascorbate`)

本原子交换记录“干腌用抗坏血酸钠”跨越本过程边界的数量。

- 选定流：抗坏血酸钠
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：配方声明使用时，记录抗坏血酸钠质量；否则将此原子行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_curing`
- 来源：`usda-fsis-hams-food-safety`

###### 干腌用磷酸钠 (`dry_cure_sodium_phosphate`)

本原子交换记录“干腌用磷酸钠”跨越本过程边界的数量。

- 选定流：磷酸钠
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：配方声明使用时，记录磷酸钠质量；否则将此原子行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_curing`
- 来源：`usda-fsis-hams-food-safety`

#### 输出

##### 产品流

###### 干腌猪肉块 (`dry_cured_pig_meat_cut`)

本原子交换记录“干腌猪肉块”跨越本过程边界的数量。

- 选定流：干腌猪肉块
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在声明的均衡或腌制保持结束后，称量离开干腌工序的产品
- 数值模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_curing`
- 来源：`usda-fsis-rte-salt-cured-dried-2023`

##### 废物流

###### 废干腌料 (`spent_dry_cure_mixture`)

本原子交换记录“废干腌料”跨越本过程边界的数量。

- 选定流：废干腌料
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量送往处理的未使用或清除干腌料
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_curing`
- 来源：`eu-jrc-fdm-bref-2019`

###### 干腌渗出液 (`dry_cure_purge`)

本原子交换记录“干腌渗出液”跨越本过程边界的数量。

- 选定流：干腌肉渗出液
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：收集并称量液体渗出物，且与清除干腌料分开记录
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_curing`
- 来源：`eu-jrc-fdm-bref-2019`

###### 不合格干腌肉 (`off_spec_dry_cured_meat`)

本原子交换记录“不合格干腌肉”跨越本过程边界的数量。

- 选定流：不合格干腌猪肉
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量不合格干腌产品并按最终去向记录
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dry_curing`
- 来源：`fao-who-codex-cxc-58-2005`

### 过程：盐水配制及注射或浸渍 (`brine_curing`)

#### 输入

##### 产品流

###### 进入盐水腌制的猪肉 (`brine_cure_meat_input`)

本原子交换记录“进入盐水腌制的猪肉”跨越本过程边界的数量。

- 选定流：修整后的猪肉块
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量装入已声明注射或浸渍路线的修整猪肉
- 数值模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brine_curing`
- 来源：`usda-fsis-bacon-food-safety`; `usda-fsis-hams-food-safety`

###### 盐水用水 (`brine_water`)

本原子交换记录“盐水用水”跨越本过程边界的数量。

- 选定流：饮用水级工艺用水
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量加入腌制盐水的水
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brine_curing`
- 来源：`usda-fsis-hams-food-safety`; `fao-who-codex-cxc-58-2005`

###### 盐水中的氯化钠 (`brine_sodium_chloride`)

本原子交换记录“盐水中的氯化钠”跨越本过程边界的数量。

- 选定流：氯化钠
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录实际加入盐水的氯化钠质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brine_curing`
- 来源：`usda-fsis-bacon-food-safety`; `usda-fsis-hams-food-safety`

###### 盐水中的亚硝酸钠 (`brine_sodium_nitrite`)

本原子交换记录“盐水中的亚硝酸钠”跨越本过程边界的数量。

- 选定流：亚硝酸钠
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：配方声明使用时，记录亚硝酸钠有效成分质量；否则将此原子行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brine_curing`
- 来源：`usda-fsis-bacon-food-safety`; `usda-fsis-hams-food-safety`

###### 盐水中的硝酸钠 (`brine_sodium_nitrate`)

本原子交换记录“盐水中的硝酸钠”跨越本过程边界的数量。

- 选定流：硝酸钠
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：配方声明使用时，记录硝酸钠有效成分质量；否则将此原子行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brine_curing`
- 来源：`usda-fsis-hams-food-safety`

###### 盐水中的蔗糖 (`brine_sucrose`)

本原子交换记录“盐水中的蔗糖”跨越本过程边界的数量。

- 选定流：蔗糖
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：配方声明使用时，记录蔗糖质量；否则将此原子行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brine_curing`
- 来源：`usda-fsis-bacon-food-safety`; `usda-fsis-hams-food-safety`

###### 盐水中的黑胡椒 (`brine_black_pepper`)

本原子交换记录“盐水中的黑胡椒”跨越本过程边界的数量。

- 选定流：黑胡椒
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：配方声明使用时，记录黑胡椒质量；否则将此原子行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brine_curing`
- 来源：`usda-fsis-bacon-food-safety`; `fao-who-codex-cxc-58-2005`

###### 盐水中的大蒜 (`brine_garlic`)

本原子交换记录“盐水中的大蒜”跨越本过程边界的数量。

- 选定流：大蒜
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：配方声明使用时，记录大蒜质量；否则将此原子行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brine_curing`
- 来源：`fao-who-codex-cxc-58-2005`

###### 盐水中的抗坏血酸钠 (`brine_sodium_ascorbate`)

本原子交换记录“盐水中的抗坏血酸钠”跨越本过程边界的数量。

- 选定流：抗坏血酸钠
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：配方声明使用时，记录抗坏血酸钠质量；否则将此原子行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brine_curing`
- 来源：`usda-fsis-bacon-food-safety`; `usda-fsis-hams-food-safety`

###### 盐水中的磷酸钠 (`brine_sodium_phosphate`)

本原子交换记录“盐水中的磷酸钠”跨越本过程边界的数量。

- 选定流：磷酸钠
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：配方声明使用时，记录磷酸钠质量；否则将此原子行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brine_curing`
- 来源：`usda-fsis-hams-food-safety`

#### 输出

##### 产品流

###### 盐水腌制猪肉块 (`brine_cured_pig_meat_cut`)

本原子交换记录“盐水腌制猪肉块”跨越本过程边界的数量。

- 选定流：盐水腌制猪肉块
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在声明的注射或浸渍保持及沥液后称量腌制肉
- 数值模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brine_curing`
- 来源：`usda-fsis-hams-food-safety`

##### 废物流

###### 废腌制盐水 (`spent_curing_brine`)

本原子交换记录“废腌制盐水”跨越本过程边界的数量。

- 选定流：废腌制盐水
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或称量注射或浸渍系统排出的废盐水
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brine_curing`
- 来源：`eu-jrc-fdm-bref-2019`

###### 盐水腌制渗出液 (`brine_cure_purge`)

本原子交换记录“盐水腌制渗出液”跨越本过程边界的数量。

- 选定流：盐水腌制肉渗出液
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：收集并称量沥液和腌制保持期间释放的渗出液
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brine_curing`
- 来源：`usda-fsis-bacon-food-safety`; `eu-jrc-fdm-bref-2019`

###### 不合格盐水腌制肉 (`off_spec_brine_cured_meat`)

本原子交换记录“不合格盐水腌制肉”跨越本过程边界的数量。

- 选定流：不合格盐水腌制猪肉
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量不合格盐水腌制产品并按最终去向记录
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_brine_curing`
- 来源：`fao-who-codex-cxc-58-2005`

### 过程：滚揉或按摩 (`tumbling`)

#### 输入

##### 产品流

###### 进入滚揉的盐水腌制肉 (`tumbling_meat_input`)

本原子交换记录“进入滚揉的盐水腌制肉”跨越本过程边界的数量。

- 选定流：盐水腌制猪肉块
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量装入滚揉机的肉
- 数值模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tumbling`
- 来源：`usda-fsis-hams-food-safety`; `petit-et-al-2021-cooked-ham-lca`

#### 输出

##### 产品流

###### 滚揉后的盐水腌制猪肉 (`tumbled_pig_meat`)

本原子交换记录“滚揉后的盐水腌制猪肉”跨越本过程边界的数量。

- 选定流：滚揉后的盐水腌制猪肉块
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量滚揉后排出的产品
- 数值模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tumbling`
- 来源：`usda-fsis-hams-food-safety`

##### 废物流

###### 滚揉渗出液 (`tumbling_purge`)

本原子交换记录“滚揉渗出液”跨越本过程边界的数量。

- 选定流：滚揉肉渗出液
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：收集并称量留在滚揉机内或排入排水系统的渗出液
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tumbling`
- 来源：`eu-jrc-fdm-bref-2019`

### 过程：熟制 (`cooking`)

#### 输入

##### 产品流

###### 进入熟制的腌制肉 (`cooking_meat_input`)

本原子交换记录“进入熟制的腌制肉”跨越本过程边界的数量。

- 选定流：腌制猪肉块
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量装入蒸煮设备或烤炉的腌制猪肉
- 数值模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking`
- 来源：`fao-who-codex-cxc-58-2005`; `petit-et-al-2021-cooked-ham-lca`

#### 输出

##### 产品流

###### 熟制腌制火腿 (`cooked_cured_ham`)

本原子交换记录“熟制腌制火腿”跨越本过程边界的数量。

- 选定流：熟制腌制猪火腿
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在熟制后、冷却前称量产品；保留时间—温度记录
- 数值模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking`
- 来源：`fao-who-codex-cxc-58-2005`; `petit-et-al-2021-cooked-ham-lca`

##### 废物流

###### 熟制滴液损失 (`cooking_drip_loss`)

本原子交换记录“熟制滴液损失”跨越本过程边界的数量。

- 选定流：熟肉滴液损失
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：收集并称量从熟制设备清除的液体和脂肪滴液
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking`
- 来源：`eu-jrc-fdm-bref-2019`

###### 不合格熟火腿 (`off_spec_cooked_ham`)

本原子交换记录“不合格熟火腿”跨越本过程边界的数量。

- 选定流：不合格熟制腌制火腿
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量不合格熟火腿并按最终去向记录
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooking`
- 来源：`fao-who-codex-cxc-58-2005`

### 过程：熏制 (`smoking`)

#### 输入

##### 产品流

###### 进入熏制的肉 (`smoking_meat_input`)

本原子交换记录“进入熏制的肉”跨越本过程边界的数量。

- 选定流：用于熏制的腌制猪肉块
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量装入烟熏室的腌制或熟制猪肉
- 数值模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoking`
- 来源：`usda-fsis-bacon-food-safety`; `fao-who-codex-cxc-68-2009`

###### 硬木木片 (`smoking_hardwood_chips`)

本原子交换记录“硬木木片”跨越本过程边界的数量。

- 选定流：硬木木片
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量投入烟气发生过程的硬木木片；声明木材树种
- 数值模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoking`
- 来源：`us-epa-ap42-meat-smokehouses-1995`; `fao-who-codex-cxc-68-2009`

###### 硬木锯末 (`smoking_hardwood_sawdust`)

本原子交换记录“硬木锯末”跨越本过程边界的数量。

- 选定流：硬木锯末
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量投入烟气发生过程的硬木锯末；声明木材树种；否则将此行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoking`
- 来源：`us-epa-ap42-meat-smokehouses-1995`; `fao-who-codex-cxc-68-2009`

#### 输出

##### 产品流

###### 熏制猪肉块 (`smoked_pig_meat_cut`)

本原子交换记录“熏制猪肉块”跨越本过程边界的数量。

- 选定流：熏制腌制猪肉块
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量离开烟熏室的产品
- 数值模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoking`
- 来源：`usda-fsis-bacon-food-safety`; `fao-who-codex-cxc-68-2009`

##### 废物流

###### 烟气发生器木灰 (`smoke_generator_wood_ash`)

本原子交换记录“烟气发生器木灰”跨越本过程边界的数量。

- 选定流：烟气发生过程产生的硬木灰
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量从烟气发生器清除的灰分
- 数值模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoking`
- 来源：`fao-who-codex-cxc-68-2009`

###### 烟气洗涤废水 (`smoke_scrubber_wastewater`)

本原子交换记录“烟气洗涤废水”跨越本过程边界的数量。

- 选定流：烟气洗涤废水
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用湿式洗涤器时，计量离开烟气处理装置的废水
- 数值模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoking`
- 来源：`us-epa-ap42-meat-smokehouses-1995`

###### 不合格熏制肉 (`off_spec_smoked_meat`)

本原子交换记录“不合格熏制肉”跨越本过程边界的数量。

- 选定流：不合格熏制猪肉
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量不合格熏制产品并按最终去向记录
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoking`
- 来源：`fao-who-codex-cxc-58-2005`

##### 基本流

###### 排入空气的细颗粒物 (`smoke_pm2_5_to_air`)

本原子交换记录“排入空气的细颗粒物”跨越本过程边界的数量。

- 选定流：颗粒物（空气动力学直径小于 2.5 微米），排入空气
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用烟道测量或有记录的烟熏室特定计算；记录控制装置状态
- 数值模式：计算值（`calculated_value`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_smoking`
- 来源：`us-epa-ap42-meat-smokehouses-1995`

###### 排入空气的一氧化碳 (`smoke_carbon_monoxide_to_air`)

本原子交换记录“排入空气的一氧化碳”跨越本过程边界的数量。

- 选定流：一氧化碳，排入空气
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用烟道测量或有记录的烟熏室特定计算
- 数值模式：计算值（`calculated_value`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_smoking`
- 来源：`us-epa-ap42-meat-smokehouses-1995`

###### 排入空气的丙烯醛 (`smoke_acrolein_to_air`)

本原子交换记录“排入空气的丙烯醛”跨越本过程边界的数量。

- 选定流：丙烯醛，排入空气
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：开展监测时报告实测丙烯醛排放；否则披露未量化排放缺口
- 数值模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoking`
- 来源：`us-epa-ap42-meat-smokehouses-1995`

###### 排入空气的乙醛 (`smoke_acetaldehyde_to_air`)

本原子交换记录“排入空气的乙醛”跨越本过程边界的数量。

- 选定流：乙醛，排入空气
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：开展监测时报告实测乙醛排放；否则披露未量化排放缺口
- 数值模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoking`
- 来源：`us-epa-ap42-meat-smokehouses-1995`

###### 排入空气的甲醛 (`smoke_formaldehyde_to_air`)

本原子交换记录“排入空气的甲醛”跨越本过程边界的数量。

- 选定流：甲醛，排入空气
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用烟道测量或有记录的烟熏室特定计算
- 数值模式：计算值（`calculated_value`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_smoking`
- 来源：`us-epa-ap42-meat-smokehouses-1995`; `fao-who-codex-cxc-68-2009`

###### 排入空气的乙酸 (`smoke_acetic_acid_to_air`)

本原子交换记录“排入空气的乙酸”跨越本过程边界的数量。

- 选定流：乙酸，排入空气
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用烟道测量或有记录的烟熏室特定计算
- 数值模式：计算值（`calculated_value`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_smoking`
- 来源：`us-epa-ap42-meat-smokehouses-1995`

###### 排入空气的氮氧化物 (`smoke_nitrogen_oxides_to_air`)

本原子交换记录“排入空气的氮氧化物”跨越本过程边界的数量。

- 选定流：氮氧化物，排入空气
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告实测氮氧化物，或根据燃料及引用的场址适用因子计算
- 数值模式：计算值（`calculated_value`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_smoking`
- 来源：`us-epa-ap42-meat-smokehouses-1995`; `fao-who-codex-cxc-68-2009`

###### 排入空气的硫氧化物 (`smoke_sulfur_oxides_to_air`)

本原子交换记录“排入空气的硫氧化物”跨越本过程边界的数量。

- 选定流：硫氧化物，排入空气
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：报告实测硫氧化物，或根据燃料硫含量及引用的场址适用因子计算
- 数值模式：计算值（`calculated_value`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_smoking`
- 来源：`fao-who-codex-cxc-68-2009`

###### 排入空气的苯并[a]芘 (`smoke_benzo_a_pyrene_to_air`)

本原子交换记录“排入空气的苯并[a]芘”跨越本过程边界的数量。

- 选定流：苯并[a]芘，排入空气
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：作为单项 PAH 监测时报告实测苯并[a]芘；否则披露未量化排放缺口
- 数值模式：前景记录（`foreground_record`）
- 特异性：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_smoking`
- 来源：`fao-who-codex-cxc-68-2009`

### 过程：干燥与熟成 (`drying_ripening`)

#### 输入

##### 产品流

###### 进入干燥或熟成的腌制肉 (`drying_meat_input`)

本原子交换记录“进入干燥或熟成的腌制肉”跨越本过程边界的数量。

- 选定流：用于干燥的腌制猪肉块
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量进入干燥或熟成室的腌制猪肉
- 数值模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_ripening`
- 来源：`usda-fsis-rte-salt-cured-dried-2023`; `fao-who-codex-cxc-58-2005`

#### 输出

##### 产品流

###### 干燥或熟成猪肉块 (`dried_ripened_pig_meat_cut`)

本原子交换记录“干燥或熟成猪肉块”跨越本过程边界的数量。

- 选定流：干燥或熟成的腌制猪肉块
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量离开干燥或熟成工序的产品，并保留时间、温度、湿度和产品判据记录
- 数值模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_ripening`
- 来源：`usda-fsis-rte-salt-cured-dried-2023`; `fao-who-codex-cxc-58-2005`

##### 废物流

###### 不合格干制肉 (`off_spec_dried_meat`)

本原子交换记录“不合格干制肉”跨越本过程边界的数量。

- 选定流：不合格干制腌制猪肉
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量不合格干燥或熟成产品并按最终去向记录
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_ripening`
- 来源：`fao-who-codex-cxc-58-2005`

### 过程：冷却与冷藏 (`cooling_chilling`)

#### 输入

##### 产品流

###### 进入冷却或冷藏的产品 (`cooling_product_input`)

本原子交换记录“进入冷却或冷藏的产品”跨越本过程边界的数量。

- 选定流：冷却前经处理的猪肉块
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量进入声明的冷却或冷藏调理工序的产品
- 数值模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooling_chilling`
- 来源：`fao-who-codex-cxc-58-2005`; `usda-fsis-bacon-food-safety`

#### 输出

##### 产品流

###### 冷却或冷藏猪肉块 (`cooled_chilled_pig_meat_cut`)

本原子交换记录“冷却或冷藏猪肉块”跨越本过程边界的数量。

- 选定流：冷却或冷藏的腌制猪肉块
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量经验证冷却或冷藏曲线后放行的产品，并保留时间—温度记录
- 数值模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooling_chilling`
- 来源：`fao-who-codex-cxc-58-2005`; `usda-fsis-bacon-food-safety`

### 过程：切片 (`slicing`)

#### 输入

##### 产品流

###### 进入切片的冷藏产品 (`slicing_product_input`)

本原子交换记录“进入切片的冷藏产品”跨越本过程边界的数量。

- 选定流：冷藏腌制猪肉块
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量装入切片工序的冷藏整块或块状产品
- 数值模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slicing`
- 来源：`usda-fsis-bacon-food-safety`; `beigbeder-et-al-2022-dry-cured-ham-packaging`

#### 输出

##### 产品流

###### 切片腌制猪肉 (`sliced_cured_pig_meat`)

本原子交换记录“切片腌制猪肉”跨越本过程边界的数量。

- 选定流：切片腌制猪肉
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量放行至包装的可售切片产品
- 数值模式：前景记录（`foreground_record`）
- 特异性：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slicing`
- 来源：`beigbeder-et-al-2022-dry-cured-ham-packaging`

###### 可食用切片边角料 (`edible_slicing_offcuts`)

本原子交换记录“可食用切片边角料”跨越本过程边界的数量。

- 选定流：可食用腌制猪肉切片边角料
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转移作食用用途时分别称量
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slicing`
- 来源：`eu-commission-pef-2021-2279`

##### 废物流

###### 不合格切片肉 (`off_spec_sliced_meat`)

本原子交换记录“不合格切片肉”跨越本过程边界的数量。

- 选定流：不合格切片腌制猪肉
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量不合格切片并按最终去向记录
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slicing`
- 来源：`fao-who-codex-cxc-58-2005`

### 过程：包装与贴标 (`packaging`)

#### 输入

##### 产品流

###### 进入包装的产品 (`packaging_product_input`)

本原子交换记录“进入包装的产品”跨越本过程边界的数量。

- 选定流：包装前的腌制猪肉产品
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量进入包装线的产品净重
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`fao-who-codex-cxc-58-2005`

###### 聚酰胺-聚乙烯真空袋 (`pa_pe_vacuum_pouch`)

本原子交换记录“聚酰胺-聚乙烯真空袋”跨越本过程边界的数量。

- 选定流：聚酰胺-聚乙烯多层真空袋
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量合格包装耗用的袋；否则将此行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`pauer-et-al-2020-bacon-packaging`

###### 无定形 PET 成型托盘 (`apet_forming_tray`)

本原子交换记录“无定形 PET 成型托盘”跨越本过程边界的数量。

- 选定流：无定形聚对苯二甲酸乙二醇酯成型托盘
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量合格包装耗用的托盘；否则将此行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`pauer-et-al-2020-bacon-packaging`; `beigbeder-et-al-2022-dry-cured-ham-packaging`

###### 聚乙烯封口膜 (`polyethylene_sealing_film`)

本原子交换记录“聚乙烯封口膜”跨越本过程边界的数量。

- 选定流：聚乙烯封口膜
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量合格包装耗用的封口膜；否则将此行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`pauer-et-al-2020-bacon-packaging`; `beigbeder-et-al-2022-dry-cured-ham-packaging`

###### 瓦楞纸板运输箱 (`corrugated_board_carton`)

本原子交换记录“瓦楞纸板运输箱”跨越本过程边界的数量。

- 选定流：瓦楞纸板运输箱
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量分配给包装参考产品的纸箱
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`eu-commission-pef-2021-2279`

###### 印刷纸标签 (`graphic_paper_label`)

本原子交换记录“印刷纸标签”跨越本过程边界的数量。

- 选定流：印刷纸标签
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量分配给包装参考产品的标签
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`pauer-et-al-2020-bacon-packaging`

#### 输出

##### 产品流

###### 包装腌制猪肉 (`packaged_cured_pig_meat`)

本原子交换记录“包装腌制猪肉”跨越本过程边界的数量。

- 选定流：包装腌制猪肉产品
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 产品净重
- 数量规则：称量包装后的合格产品净重，不含包装质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`fao-who-codex-cxc-58-2005`

##### 废物流

###### PA-PE 薄膜包装废物 (`pa_pe_film_waste`)

本原子交换记录“PA-PE 薄膜包装废物”跨越本过程边界的数量。

- 选定流：聚酰胺-聚乙烯薄膜废物
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分别称量袋和薄膜边料废物
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`pauer-et-al-2020-bacon-packaging`

###### PET 托盘废物 (`pet_tray_waste`)

本原子交换记录“PET 托盘废物”跨越本过程边界的数量。

- 选定流：聚对苯二甲酸乙二醇酯托盘废物
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分别称量废弃或损坏的托盘材料
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`beigbeder-et-al-2022-dry-cured-ham-packaging`

###### 聚乙烯薄膜废物 (`polyethylene_film_waste`)

本原子交换记录“聚乙烯薄膜废物”跨越本过程边界的数量。

- 选定流：聚乙烯薄膜废物
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分别称量封口膜边料和废膜
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`beigbeder-et-al-2022-dry-cured-ham-packaging`

###### 瓦楞纸板废物 (`corrugated_board_waste`)

本原子交换记录“瓦楞纸板废物”跨越本过程边界的数量。

- 选定流：瓦楞纸板废物
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分别称量损坏纸箱和纸板边料
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`eu-commission-pef-2021-2279`

###### 纸标签废物 (`paper_label_waste`)

本原子交换记录“纸标签废物”跨越本过程边界的数量。

- 选定流：印刷纸标签废物
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分别称量废标签和纸质离型底纸废物
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`pauer-et-al-2020-bacon-packaging`

###### 不合格包装产品 (`off_spec_packaged_product`)

本原子交换记录“不合格包装产品”跨越本过程边界的数量。

- 选定流：不合格包装腌制猪肉
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 产品净重
- 数量规则：称量不合格包装产品，并记录产品与包装是否分离
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`fao-who-codex-cxc-58-2005`

### 过程：冷藏储存 (`refrigerated_storage`)

#### 输入

##### 产品流

###### 进入储存的包装产品 (`storage_product_input`)

本原子交换记录“进入储存的包装产品”跨越本过程边界的数量。

- 选定流：包装腌制猪肉产品
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 产品净重
- 数量规则：称量置于工厂大门冷藏库的包装产品
- 数值模式：前景记录（`foreground_record`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerated_storage`
- 来源：`fao-who-codex-cxc-58-2005`

#### 输出

##### 产品流

###### 包装冷藏参考产品 (`packaged_refrigerated_product`)

本原子交换记录“包装冷藏参考产品”跨越本过程边界的数量。

- 选定流：盐渍、干制或熏制猪肉块（培根和火腿）— 天工 UUID 未解析
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 产品净重
- 数量规则：声明储存期结束后的固定参考输出：1 kg 合格产品净重
- 数值模式：固定值（`fixed_value`）
- 特异性：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`unsd-cpc-3-0`; `mass-balance-identity`

### 过程：设施公用工程与直接燃烧 (`facility_utilities`)

#### 输入

##### 产品流

###### 电网电力 (`facility_grid_electricity`)

本原子交换记录“电网电力”跨越本过程边界的数量。

- 选定流：电网电力
- 流属性 / 单位：能量 / kWh
- 数量规则：计量电力，并采用过程分表或有记录的物理驱动因素分配至声明路线
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_facility_utilities`
- 来源：`eu-commission-pef-2021-2279`; `petit-et-al-2021-cooked-ham-lca`

###### 外购蒸汽 (`facility_purchased_steam`)

本原子交换记录“外购蒸汽”跨越本过程边界的数量。

- 选定流：外购蒸汽
- 流属性 / 单位：能量 / MJ
- 数量规则：计量或计算供应至声明路线的外购蒸汽；否则将此行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_facility_utilities`
- 来源：`eu-commission-pef-2021-2279`

###### 外购工业热 (`facility_purchased_heat`)

本原子交换记录“外购工业热”跨越本过程边界的数量。

- 选定流：外购工业热
- 流属性 / 单位：能量 / MJ
- 数量规则：计量供应至声明路线的外购热；否则将此行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_facility_utilities`
- 来源：`eu-commission-pef-2021-2279`

###### 天然气 (`facility_natural_gas`)

本原子交换记录“天然气”跨越本过程边界的数量。

- 选定流：天然气
- 流属性 / 单位：能量 / MJ
- 数量规则：计量声明路线在厂内燃烧的天然气；实际使用的每种其他燃料均须新增独立原子行
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_facility_utilities`
- 来源：`eu-commission-pef-2021-2279`; `eu-jrc-fdm-bref-2019`

###### 公用工程工艺用水 (`facility_process_water`)

本原子交换记录“公用工程工艺用水”跨越本过程边界的数量。

- 选定流：饮用水级工艺用水
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量尚未作为配方用水或清洗消毒用水记录的工艺用水，并按路线分配
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_facility_utilities`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-commission-pef-2021-2279`

###### 氨制冷剂补充量 (`facility_ammonia_refrigerant`)

本原子交换记录“氨制冷剂补充量”跨越本过程边界的数量。

- 选定流：氨制冷剂
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据制冷剂维护和存量记录计算可归属于声明路线的补充量；否则将此行标记为不适用
- 数值模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_facility_utilities`
- 来源：`eu-commission-pef-2021-2279`

###### R-404A 制冷剂补充量 (`facility_r404a_refrigerant`)

本原子交换记录“R-404A 制冷剂补充量”跨越本过程边界的数量。

- 选定流：制冷剂 R-404A
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据制冷剂维护和存量记录计算可归属于声明路线的补充量；否则将此行标记为不适用
- 数值模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_facility_utilities`
- 来源：`eu-commission-pef-2021-2279`

#### 输出

##### 基本流

###### 厂内燃料产生的化石二氧化碳 (`facility_fossil_co2_to_air`)

本原子交换记录“厂内燃料产生的化石二氧化碳”跨越本过程边界的数量。

- 选定流：二氧化碳（化石），排入空气
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据每项厂内燃料记录和引用的燃料特定因子计算，不含外购能源的燃烧
- 数值模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_facility_utilities`
- 来源：`eu-commission-pef-2021-2279`

###### 厂内燃料产生的一氧化碳 (`facility_carbon_monoxide_to_air`)

本原子交换记录“厂内燃料产生的一氧化碳”跨越本过程边界的数量。

- 选定流：一氧化碳，排入空气
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用烟道测量，或根据每项厂内燃料记录和引用的燃料特定因子计算
- 数值模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_facility_utilities`
- 来源：`eu-commission-pef-2021-2279`

###### 厂内燃料产生的氮氧化物 (`facility_nitrogen_oxides_to_air`)

本原子交换记录“厂内燃料产生的氮氧化物”跨越本过程边界的数量。

- 选定流：氮氧化物，排入空气
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用烟道测量，或根据每项厂内燃料记录和引用的燃料特定因子计算
- 数值模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_facility_utilities`
- 来源：`eu-commission-pef-2021-2279`

###### 氨制冷剂泄漏 (`ammonia_refrigerant_leakage`)

本原子交换记录“氨制冷剂泄漏”跨越本过程边界的数量。

- 选定流：氨，排入空气
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据制冷剂质量平衡计算可归属于该路线的氨泄漏量
- 数值模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_facility_utilities`
- 来源：`eu-commission-pef-2021-2279`

###### R-404A 制冷剂泄漏 (`r404a_refrigerant_leakage`)

本原子交换记录“R-404A 制冷剂泄漏”跨越本过程边界的数量。

- 选定流：制冷剂 R-404A，排入空气
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据制冷剂质量平衡计算可归属于该路线的 R-404A 泄漏量
- 数值模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_facility_utilities`
- 来源：`eu-commission-pef-2021-2279`

### 过程：清洗与消毒 (`facility_sanitation`)

#### 输入

##### 产品流

###### 清洗消毒用水 (`sanitation_water`)

本原子交换记录“清洗消毒用水”跨越本过程边界的数量。

- 选定流：饮用水级清洗用水
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量预冲洗、清洗剂清洗、消毒和最终冲洗用水，并分配至声明路线
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_facility_sanitation`
- 来源：`eu-jrc-fdm-bref-2019`; `fao-who-codex-cxc-58-2005`

###### 氢氧化钠清洗剂 (`sodium_hydroxide_cleaner`)

本原子交换记录“氢氧化钠清洗剂”跨越本过程边界的数量。

- 选定流：氢氧化钠
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录所耗碱性清洗剂中的氢氧化钠有效成分质量
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_facility_sanitation`
- 来源：`eu-jrc-fdm-bref-2019`

###### 硝酸清洗剂 (`nitric_acid_cleaner`)

本原子交换记录“硝酸清洗剂”跨越本过程边界的数量。

- 选定流：硝酸
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录所耗酸性清洗剂中的硝酸有效成分质量；否则将此行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_facility_sanitation`
- 来源：`eu-jrc-fdm-bref-2019`

###### 次氯酸钠消毒剂 (`sodium_hypochlorite_disinfectant`)

本原子交换记录“次氯酸钠消毒剂”跨越本过程边界的数量。

- 选定流：次氯酸钠
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：记录所耗消毒剂中的次氯酸钠有效成分质量；否则将此行标记为不适用
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_facility_sanitation`
- 来源：`eu-jrc-fdm-bref-2019`; `fao-who-codex-cxc-58-2005`

#### 输出

##### 废物流

###### 肉类加工清洗废水 (`cleaning_wastewater`)

本原子交换记录“肉类加工清洗废水”跨越本过程边界的数量。

- 选定流：肉类加工清洗废水
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量送往厂内处理、下水道或厂外处理的清洗消毒废水
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_facility_sanitation`
- 来源：`eu-jrc-fdm-bref-2019`

###### 清洗筛除肉类固体 (`screened_meat_solids`)

本原子交换记录“清洗筛除肉类固体”跨越本过程边界的数量。

- 选定流：清洗筛除肉类固体
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量废水排放前清除的固体
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_facility_sanitation`
- 来源：`eu-jrc-fdm-bref-2019`

### 过程：厂内废水处理 (`onsite_wastewater_treatment`)

#### 输入

##### 废物流

###### 进入处理的合并肉类加工废水 (`wastewater_to_onsite_treatment`)

本原子交换记录“进入处理的合并肉类加工废水”跨越本过程边界的数量。

- 选定流：肉类加工废水
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量进入厂内处理设施的废水，包括已分别记录的盐水、渗出液、洗涤器废水和清洗废水流
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`eu-jrc-fdm-bref-2019`

#### 输出

##### 废物流

###### 废水处理污泥 (`wastewater_treatment_sludge`)

本原子交换记录“废水处理污泥”跨越本过程边界的数量。

- 选定流：肉类加工废水处理污泥
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量脱水污泥，并记录干物质含量和去向
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`eu-jrc-fdm-bref-2019`

###### 排入下水道的已处理废水 (`treated_wastewater_to_sewer`)

本原子交换记录“排入下水道的已处理废水”跨越本过程边界的数量。

- 选定流：排入下水道的已处理肉类加工废水
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量转移至下游下水道或厂外处理的已处理出水；直接排入环境时改用基本流输出行
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

###### 排入水体的化学需氧量 (`cod_to_water`)

本原子交换记录“排入水体的化学需氧量”跨越本过程边界的数量。

- 选定流：化学需氧量，排入水体
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据实测出水浓度和直接排放体积计算排放的 COD
- 数值模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`eu-jrc-fdm-bref-2019`

###### 排入水体的总氮 (`total_nitrogen_to_water`)

本原子交换记录“排入水体的总氮”跨越本过程边界的数量。

- 选定流：氮（总量），排入水体
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据实测出水浓度和直接排放体积计算排放的总氮
- 数值模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`eu-jrc-fdm-bref-2019`

###### 排入水体的总磷 (`total_phosphorus_to_water`)

本原子交换记录“排入水体的总磷”跨越本过程边界的数量。

- 选定流：磷（总量），排入水体
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据实测出水浓度和直接排放体积计算排放的总磷
- 数值模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`eu-jrc-fdm-bref-2019`

###### 排入水体的氯化物 (`chloride_to_water`)

本原子交换记录“排入水体的氯化物”跨越本过程边界的数量。

- 选定流：氯化物，排入水体
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据实测出水浓度和直接排放体积计算排放的氯化物
- 数值模式：计算值（`calculated_value`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`eu-jrc-fdm-bref-2019`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | all_shared_operations | 首先细分路线特定加工以及直接计量的公用工程、清洗消毒、制冷、包装、废物和排放。不得向参考产品分配已排除或不适用路线的负荷。 | `eu-commission-pef-2021-2279` |
| `allocation_physical_driver` | shared_facility_inputs | 无法细分时，使用反映因果关系且有记录的物理驱动因素分配共享电力、蒸汽、热、天然气、水、清洗消毒和储存，例如分表运行时间、设备负荷、产品质量—时间或占用冷藏容积—时间。 | `eu-commission-pef-2021-2279` |
| `allocation_trimming_coproducts` | edible_pork_fat_trimmings_and_edible_pork_skin_trimmings | 将可售食用脂肪和猪皮保持为独立联产品输出。优先过程细分；仍有剩余负荷时，记录物理关系或其他合理分配基准并披露因子。不得把可售联产品作为零负荷废物。 | `eu-commission-pef-2021-2279` |
| `allocation_rework_and_rejects` | off_specification_product | 将返工料送回原过程，不得虚构避免产品；跟踪重复投入和损失。仅按不合格物料有记录的最终去向分配处理负荷和收益。 | `fao-who-codex-cxc-58-2005`; `eu-commission-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频次 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_trimming` | `receipt_trimming` | 接收肉、修整产品、联产品、修整料、不合格品 | 地磅、秤、批次去向记录 | lot_id; cut; received_state; gross_mass; tare; accepted_mass; trimmed_mass; each output mass; destination | 用校准秤称量，并与批次及去向记录核对 | kg | 每批供应商批次或生产批次 | 有代表性的生产年度，包括季节性产品 | 数据集范围内全部场址 | 汇总每项原子交换；归一化至参考输出；核对输入、输出和已记录损失 | 校准证书；供应商批次；去向记录；质量平衡核对 |
| `cp_dry_curing` | `dry_curing` | 肉、每种干配料、腌制输出、渗出液、废腌料、不合格品 | 配方领用、秤、批次表 | batch_id; ingredient_identity; active_concentration; issued_mass; returned_mass; meat_in; product_out; purge; spent_cure; reject; cure_time; cure_temperature | 校准称量和批次核对 | kg | 每批 | 有代表性的生产年度 | 每条干腌线和场址 | 分别汇总每种配料和输出；按参考输出归一化 | 批准配方；秤校准；批次表；腌制控制记录 |
| `cp_brine_curing` | `brine_curing` | 肉、水、每种盐水配料、腌制输出、废盐水、渗出液、不合格品 | 盐水配制、注射或浸渍日志、秤、仪表 | batch_id; curing_method; water_mass; each ingredient identity and active mass; meat_in; injection_or_immersion_mass; product_out; spent_brine; purge; reject; hold_time; temperature | 采用仪表和校准秤；核对配制、保留、回收和排弃的盐水 | kg | 每批 | 有代表性的生产年度 | 每条盐水腌制线和场址 | 分开注射与浸渍路线；将原子交换归一化至参考输出 | 批准配方；仪表及秤校准；设备和保持记录 |
| `cp_tumbling` | `tumbling` | 滚揉肉和渗出液 | 批次秤和滚揉机日志 | batch_id; meat_in; meat_out; purge; duration; duty_cycle; temperature | 校准称量和设备日志 | kg | 每批 | 有代表性的生产年度 | 每台使用的滚揉机 | 核对输入质量、产品输出和渗出液；归一化至参考输出 | 秤校准；滚揉机批次记录 |
| `cp_cooking` | `cooking` | 熟制产品、滴液、不合格品 | 熟制设备批次表和秤 | batch_id; meat_in; product_out; drip; reject; equipment_id; time_temperature_profile; core_temperature | 校准称量和经验证的时间—温度记录 | kg | 每批 | 有代表性的生产年度 | 每台蒸煮设备或烤炉 | 核对质量并保留路线特定热处理记录 | 秤和温度校准；经验证熟制计划 |
| `cp_smoking` | `smoking` | 肉、每种烟材、灰、洗涤废水、不合格品、每种空气排放 | 批次表、秤、烟道测试、控制装置日志 | batch_id; meat_in; meat_out; wood_species; chips_mass; sawdust_mass; ash_mass; wastewater_mass; reject; pollutant_identity; concentration; gas_flow; test_duration; control_status | 校准称量；烟道测量或有记录的污染物特定计算 | kg | 物料每批；排放采用代表性测试及必要监测 | 有代表性的生产年度和运行/控制状态 | 每个烟熏室 | 分别计算每种污染物；不得使用合并 VOC 或 PAH 交换；归一化至参考输出 | 烟道测试报告；实验室 QA；控制装置日志；秤校准 |
| `cp_drying_ripening` | `drying_ripening` | 干制产品和不合格品 | 批次秤和房间控制记录 | batch_id; product_in; product_out; reject; time; temperature; relative_humidity; target_product_criterion | 校准称量和连续房间监测 | kg | 每批 | 有代表性的生产年度 | 每个干燥或熟成室 | 核对质量并保留声明路线条件 | 秤和传感器校准；经验证产品判据 |
| `cp_cooling_chilling` | `cooling_chilling` | 冷却前后产品 | 批次秤和时间—温度记录仪 | batch_id; product_in; product_out; start_time; end_time; product_temperature_profile; room_temperature | 校准称量和连续温度记录 | kg | 每批 | 有代表性的生产年度 | 每套冷却或冷藏系统 | 归一化产品质量并保留路线特定冷却曲线 | 秤和温度校准；冷却验证 |
| `cp_slicing` | `slicing` | 切片输出、可食用边角料、不合格品 | 生产线秤和生产日志 | batch_id; product_in; sliced_output; edible_offcuts; reject; disposition | 校准生产线秤和质量核对 | kg | 每批 | 有代表性的生产年度 | 每条切片线 | 按 row_id 核对产品、联产品和不合格品 | 秤校准；生产及去向记录 |
| `cp_packaging` | `packaging` | 产品净重、每种包装组件、每种包装废物、不合格品 | 物料清单、领用记录、秤、生产线计数器 | batch_id; net_product; component_identity; component_mass; issued_count; unit_mass; returned_count; each waste mass; reject_mass | 将产品特定物料清单与领用和废物核对 | kg | 每次包装生产期 | 有代表性的生产年度 | 每条包装线和规格 | 分开每种聚合物、托盘、纸箱和标签；归一化至参考产品净重 | 供应商规格；BOM；数量—质量核对；废物记录 |
| `cp_refrigerated_storage` | `refrigerated_storage` | 储存产品和储存服务 | 库存、温度、容积和时间日志 | lot_id; net_product_mass; entry_time; exit_time; temperature_profile; occupied_volume | 库存核对和连续温度记录 | kg 和 day | 每批产品 | 有代表性的生产年度 | 每座工厂大门冷库 | 归一化产品输出；采用有记录的质量—时间或容积—时间分配共享储存 | 库存记录；经校准温度记录仪；储存分配工作表 |
| `cp_facility_utilities` | `facility_utilities` | 每种能源载体、燃料、水、制冷剂和直接排放 | 仪表、发票、储罐及制冷剂日志、烟道数据 | meter_id; process_id; start_reading; end_reading; carrier; fuel_identity; energy_content; water; refrigerant_identity; charge; addition; recovery; ending_inventory; pollutant; factor_source | 优先过程分表；核对发票和存量；分别计算每项排放 | kWh、MJ 或 kg | 连续或每个账单/维护期 | 有代表性的生产年度 | 全部设施和路线设备 | 扣除非生产及已排除路线；采用有记录的物理驱动因素分配；归一化至参考输出 | 仪表校准；发票；燃料及制冷剂核对；排放计算记录 |
| `cp_facility_sanitation` | `facility_sanitation` | 水、每种清洗或消毒化学品、废水、筛除固体 | 化学品领用、有效浓度、水及出水仪表、固体秤 | sanitation_event; area_or_equipment; water; chemical_identity; product_concentration; active_fraction; issued_mass; wastewater; screened_solids | 以有效物质计量和称量每种化学品；分配生产期和期间清洗消毒 | kg | 每次清洗消毒事件或班次 | 有代表性的生产年度 | 所有纳入的过程区域 | 保持每种化学品为原子行；按有记录的清洗消毒驱动因素分配；归一化至参考输出 | 清洗消毒 SOP；浓度证书；仪表和秤校准 |
| `cp_wastewater_treatment` | `onsite_wastewater_treatment` | 废水、污泥、已处理出水、COD、氮、磷、氯化物 | 进出水仪表、混合样、污泥秤 | flow_volume; density; sludge_wet_mass; sludge_dry_matter; COD; total_nitrogen; total_phosphorus; chloride; discharge_route | 流量比例混合采样和认可分析；校准流量计 | kg | 流量连续；按许可或代表性频次采混合样 | 有代表性的生产年度 | 每座厂内处理设施 | 对每种污染物计算浓度乘流量；归一化至参考输出；区分下水道转移和直接排放 | 实验室认可；样品监管链；仪表校准；排放记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | all_inventory_rows | 归一化数量 = 路线可归属数量 / 声明储存后合格参考产品净重（kg） | 原子交换数量；`packaged_refrigerated_product` 净质量 | 每 1 kg 参考产品的数量 | `eu-commission-pef-2021-2279` |
| `calc_mass_reconciliation` | each_material_process | 输入质量 = 产品输出 + 联产品 + 废物 + 实测渗出液或滴液 + 有记录的库存变化；调查残差，不得把残差分配给虚构流 | 该批次全部质量行 | 批次质量平衡残差及完整性发现 | `mass-balance-identity` |
| `calc_active_ingredient` | nitrite_nitrate_ascorbate_phosphate_and_cleaners | 有效物质质量 = 配制产品质量 × 有记录的有效成分比例 | 领用产品质量；供应商有效成分比例 | 有效成分质量 | `eu-commission-pef-2021-2279` |
| `calc_refrigerant_leak` | each_refrigerant | 泄漏量 = 期初充注量 + 补充量 − 回收量 − 期末充注量 − 有记录的转移量；使用制冷服务驱动因素分配结果 | 制冷剂存量及维护记录 | 排入空气的一种指定制冷剂质量（kg） | `eu-commission-pef-2021-2279` |
| `calc_effluent_load` | each_direct_water_pollutant | 排放负荷 = 实测浓度 × 直接排放体积，并记录单位和密度换算 | 污染物浓度；排放体积 | 排入水体的污染物质量（kg） | `eu-jrc-fdm-bref-2019`; `eu-commission-pef-2021-2279` |
| `calc_smoke_emission` | each_smoke_pollutant | 污染物质量 = 实测烟道浓度 × 干烟气流量 × 测试时长，或活动数据 × 一个有记录的烟熏室特定因子；不得把某污染物或控制状态的因子用于另一项 | 污染物特定烟道或活动记录 | 排入空气的一种指定污染物质量（kg） | `us-epa-ap42-meat-smokehouses-1995`; `eu-commission-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_route_identity` | product and process map | 记录一种腌制方法，以及实际熟制、熏制、干燥、切片、包装和制冷路线；不得隐式平均互斥过程。 | 批次路线声明、配方、设备记录、产品规格 |
| `dq_atomic_bill_of_materials` | ingredients, utilities, fuels, refrigerants, packaging, wastes, emissions | 物料清单和过程清单须对每项具体交换设置一行。对尚未表示的每种声明配料、燃料、制冷剂、包装组件、废物或排放新增原子行。 | 产品特定 BOM、供应商规格、直接读取流审核 |
| `dq_mass_completeness` | each batch and annual aggregation | 核对接收肉、保留在产品中的配料、产品输出、联产品、渗出液、滴液、不合格品、废物和库存变化；调查物料残差。 | 批次质量平衡和年度核对 |
| `dq_temporal_coverage` | foreground records | 覆盖有代表性的连续 12 个月；季节性或低频产品采用更短生产期时须说明理由；披露异常生产和停产。 | 带日期记录和代表性声明 |
| `dq_measurement` | meters, scales, laboratory data | 使用经校准设备，并保留实测公用工程和排放的方法、频次、检出限、缺失数据处理及不确定性。 | 校准、实验室 QA、维护和缺失数据日志 |
| `dq_source_and_factor` | calculated values | 为每个外部因子保留确切来源、版本、适用性、单位换算和控制状态；仅用于过程拆分的来源不得提供数量。 | 计算工作簿和原始来源 |
| `dq_range_evidence` | all important flows | 不得由单个案例或单点编写经验范围。未来推断范围必须具有至少两项独立核验原文，且边界、单位和归一化基准相容。 | 范围证据审核；未解决范围登记 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | 确认 1 kg 参考产品净重、Mass UUID、Units of mass UUID、kg 和全部必填限定信息；如果用更窄的仅培根、仅火腿或更宽的加工肉 UUID 替代未解析的 CPC 21181 身份，则验证失败。 | `unsd-cpc-3-0` |
| `validate_route_exclusivity` | process_map | 要求 `dry_cure`、`brine_injection` 或 `brine_immersion` 中恰好一种。拒绝非熟火腿路线的熟制、非熏制路线的熏制、非干制路线的干燥或熟成，以及非切片路线的切片。 | `usda-fsis-bacon-food-safety`; `usda-fsis-hams-food-safety`; `usda-fsis-rte-salt-cured-dried-2023` |
| `validate_atomic_inventory` | process_inventory | 拒绝任何合并配料、能源载体、燃料、制冷剂、包装、废物、废水、污泥或排放集合行；发布前，每个选定流都必须解析为一个天工流。 | `eu-commission-pef-2021-2279` |
| `validate_recipe_completeness` | curing | 将每种声明配方配料对应到一个输入行和有效成分质量记录，包括盐、亚硝酸盐、硝酸盐、糖、每种香辛料、抗坏血酸盐、磷酸盐和任何附加配料。 | `usda-fsis-bacon-food-safety`; `usda-fsis-hams-food-safety`; `fao-who-codex-cxc-58-2005` |
| `validate_smoke_inventory` | smoking | 天然烟熏路线须提供烟材身份，并逐项评估 PM2.5、一氧化碳、丙烯醛、乙醛、甲醛、乙酸、氮氧化物、硫氧化物和苯并[a]芘；每项记录测量、计算、不适用依据或已披露数据缺口。 | `us-epa-ap42-meat-smokehouses-1995`; `fao-who-codex-cxc-68-2009` |
| `validate_mass_balance` | each_material_process | 检查批次和年度质量平衡残差，并追踪全部联产品、渗出液、滴液、不合格品、废水、污泥和包装废物的去向。 | `mass-balance-identity`; `eu-commission-pef-2021-2279` |
| `validate_data_quality` | foreground_dataset | 验证路线、技术、地域和时间代表性；校准测量；有记录的分配；来源适用性；以及前景记录与外部证据的分离。 | `eu-commission-pef-2021-2279`; `fao-who-codex-cxc-58-2005` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 由已完成并经审核的前景数据包形成的 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 为工厂大门处采用声明盐渍、干制或熏制路线保存的猪肉块构建过程和生命周期模型 |
| allowed_use | 所表示的产品形态、猪肉部位、腌制方法、条件性过程路线、配方、包装、地域、技术、参考期和储存条件 |
| excluded_use | 未表示的腌制或保存路线；鲜猪肉；香肠或碎肉制品；非猪肉；消费者烹饪；分销；以未解析或近似 UUID 替代 |
| required_metadata | PCR 标识和版本；产品及路线限定信息；参考流；地域；参考期；技术；场址覆盖；分配驱动因素；上游链接；数据来源；UUID 解析状态 |
| required_quality_disclosure | 数据覆盖和缺口；质量平衡残差；仪表和实验室质量；来源和因子适用性；平均时的路线份额；联产品处理；废水路线；排放和制冷剂缺口；无合格范围 |
| update_trigger | 产品范围、腌制方法、配方、熟制、熏制或干燥技术、包装、制冷系统、废水路线、分配驱动因素、地域、代表期、法规或已确认天工身份发生变化 |

## 11. 数据来源

| 来源标识 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | `standard` | United Nations Statistics Division, Central Product Classification Version 3.0, structure and explanatory notes, CPC 21181, https://unstats.un.org/unsd/classifications/Econ/CPC（访问于 2026-08-24） | 产品类别范围和排除项 |
| `fao-who-codex-cxc-58-2005` | `standard` | FAO/WHO Codex Alimentarius, CXC 58-2005, Code of Hygienic Practice for Meat, https://workspace.fao.org/sites/codex/Standards/CXC%2058-2005/CXC_058e.pdf（访问于 2026-08-24） | 肉类加工边界、卫生、清洗消毒、温度控制、熟制、熏制、干燥、腌制、包装、储存、不合格品和验证记录 |
| `fao-who-codex-cxc-68-2009` | `standard` | FAO/WHO Codex Alimentarius, CXC 68-2009, Code of Practice for the Reduction of Contamination of Food with PAH from Smoking and Direct Drying Processes, https://workspace.fao.org/sites/codex/Standards/CXC%2068-2009/CXC_068e.pdf（访问于 2026-08-24） | 烟材披露、熏制控制和燃烧污染物身份 |
| `usda-fsis-bacon-food-safety` | `official_guidance` | USDA Food Safety and Inspection Service, Bacon and Food Safety, https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/meat-catfish/bacon-and-food-safety（访问于 2026-08-24） | 培根修整、干腌、泵注、浸渍、配料、热处理、熏制、冷藏、切片和包装路线拆分 |
| `usda-fsis-hams-food-safety` | `official_guidance` | USDA Food Safety and Inspection Service, Hams and Food Safety, https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/meat-catfish/hams-and-food-safety（访问于 2026-08-24） | 火腿湿腌和干腌、注射、滚揉、配料、熟制、熏制、干燥及产品状态声明 |
| `usda-fsis-rte-salt-cured-dried-2023` | `official_guidance` | USDA FSIS-GD-2023-0002, Ready-to-Eat Fermented, Salt-Cured, and Dried Products Guideline, https://fsistraining.fsis.usda.gov/pluginfile.php/34201/mod_resource/content/1/FSIS%20Ready-to-Eat%20Fermented%2C%20Salt-Cured%2C%20and%20Dried%20Products%20Guideline%20.pdf（访问于 2026-08-24） | 干腌火腿过程拆分、腌制、均衡、干燥控制、产品判据和科学支持限制 |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | European Commission JRC, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, EUR 29978 EN, doi:10.2760/243911, https://publications.jrc.ec.europa.eu/repository/handle/JRC118627（访问于 2026-08-24） | 肉类加工公用工程、清洗顺序、清洗化学品、水、废水、固体、污染控制和环境数据采集 |
| `us-epa-ap42-meat-smokehouses-1995` | `method_factor` | US EPA AP-42, Section 9.5.2 Meat Smokehouses, September 1995, https://www.epa.gov/sites/default/files/2020-10/documents/c9s05-2.pdf（访问于 2026-08-24） | 烟熏室过程和污染物身份；污染物特定测量或计算设计；未采用任何 AP-42 数值作为 PCR 范围 |
| `eu-commission-pef-2021-2279` | `standard` | European Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, http://data.europa.eu/eli/reco/2021/2279/oj（访问于 2026-08-24） | 功能单位、企业特定输入输出、物料清单、直接排放、分配、数据质量、完整性和文件记录 |
| `petit-et-al-2021-cooked-ham-lca` | `literature` | Petit, G. et al. (2021), Comparing Innovative Versus Conventional Ham Processes via Environmental Life Cycle Assessment Supplemented with the Assessment of Nitrite Impacts on Human Health, Applied Sciences 11(1), 451, doi:10.3390/app11010451 | 同行评审熟火腿制造和 LCI 过程拆分；不作为定量范围证据 |
| `pauer-et-al-2020-bacon-packaging` | `literature` | Pauer, E. et al. (2020), Sustainability of flexible multilayer packaging: Environmental impacts and recyclability of packaging for bacon in block, Cleaner Environmental Systems 1, 100001, doi:10.1016/j.cesys.2020.100001 | 同行评审培根包装组件及包装过程拆分；不作为定量范围证据 |
| `beigbeder-et-al-2022-dry-cured-ham-packaging` | `literature` | Beigbeder, J., Allal, A., and Robert, N. (2022), Ex-ante life cycle assessment of a partially reusable packaging system for dry-cured ham slices, Clean Technologies and Recycling 2(3), 119-135, doi:10.3934/ctr.2022007 | 同行评审干腌火腿切片及托盘/薄膜热封过程拆分；不作为定量范围证据 |
| `mass-balance-identity` | `method_factor` | 批次及年度前景核对所采用的质量守恒 | 参考归一化、过程产率核对和完整性检查 |
