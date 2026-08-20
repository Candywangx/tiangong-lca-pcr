---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-camels-and-camelids-frozen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 骆驼和骆驼科动物肉，冷冻

## 1. 范围与适用性

本 PCR 适用于取自单峰骆驼、双峰骆驼、美洲驼、羊驼或其他已声明骆驼科动物物种，并以 CPC 21137 投放市场的净可食冷冻肉。覆盖形态可包括整胴体、四分体、带骨分割肉、去骨分割肉或肉修整料，前提是声明产品为冷冻肉且不含内脏。

前景边界始于屠宰场接收的验收合格活体动物，止于包装和冻藏后在工厂门口放行的合格冷冻肉。边界覆盖暂养、屠宰、放血、剥皮、去内脏、胴体整理、条件性分割或剔骨、预冷、冻结、包装、冻藏、清洗、消毒以及条件性场内废水处理。动物养殖和入厂运输属于上游；配送、零售、使用和寿命终止属于下游。

鲜或冷藏的骆驼或骆驼科动物肉、可食内脏、作为独立产品出售的不可食内脏以及非骆驼科动物肉均不属于参考产品范围。过程清单仍记录具体回收器官、原皮、血液、脂肪、骨、废物、废水和直接排放，以保持前景质量平衡与环境平衡完整。所列来源仅支持分类范围、过程结构、初级数据要求、分配、透明度、数据质量和核查，不为本 PCR 提供定量默认值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-camels-and-camelids-frozen |
| classification_refs | CPC 3.0：21137，精确 |
| covered_products | 来自已声明骆驼或骆驼科动物物种的冷冻可食肉，包括冷冻整胴体、四分体、带骨分割肉、去骨分割肉或肉修整料 |
| excluded_products | 鲜或冷藏骆驼科动物肉；冷冻可食内脏；作为独立产品的不可食内脏；非骆驼科动物肉 |
| representative_product | 屠宰场或肉类加工设施工厂门口的净合格冷冻骆驼或骆驼科动物肉 |
| production_route | 验收活体动物；暂养；屠宰；放血；剥皮；去内脏；胴体整理；条件性分割或剔骨；预冷；冻结；包装；冻藏；卫生作业；条件性场内废水处理 |
| market_state | 冷冻，并声明物种、产品形态、带骨状态、冻结曲线、发运温度、包装配置和产品净质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供取自已声明骆驼或骆驼科动物物种的可食冷冻肉，不含内脏和包装质量 |
| How much | 1 kg 净合格冷冻产品 |
| How well | 产品符合场址放行规格和适用食品安全要求，并声明物种、产品形态、带骨状态、冷冻状态和发运温度 |
| How long or cycle | 一个生产批次直至工厂门口放行；声明预冷、冻结和冻藏时长 |
| reference_flow_link | 75e4eb25-986c-4684-ad73-33ba3528f571 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净合格冷冻产品，包装质量不计入 |
| 参考产品流 | 冷冻骆驼和驼科动物肉 `75e4eb25-986c-4684-ad73-33ba3528f571` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 骆驼科动物物种；整胴体、四分体、分割肉或修整料；带骨或去骨状态；脂肪和修整规格；冷冻状态；冻结方法和曲线；发运和储存温度；包装或散装配置；不含包装的产品净质量；场址和批次；排除鲜或冷藏产品的证据；排除可食内脏的证据 |

构建前景数据包时，每项必需限定信息均须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失限定信息会使该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将参考流固定为恰好 1 kg 净合格冷冻肉，并排除所有包装质量。 |
| `net_product_mass` | 产品、中间体、副产品、不合格品和固体废物质量 | Mass | kg | 使用校准的毛重和皮重测量或可审计等效方法；每个物理质量批次只报告一次。 |
| `frozen_state` | 参考产品 | Mass | kg | 通过声明的冻结曲线和发运或储存温度记录证明放行时的冷冻状态；不得以鲜或冷藏肉替代。 |
| `electricity_energy` | 每项阶段特定电力投入 | Energy | kWh | 分别记录接收、屠宰、胴体整理、预冷、冻结、包装、冻藏、卫生作业和废水处理电力。 |
| `thermal_energy` | 外购蒸汽或外购热水 | Energy | MJ | 分别计量每种外购热载体；原始记录采用其他能源单位时须披露换算假设。 |
| `fuel_quantity` | 天然气、柴油或液化石油气 | Volume or Mass | m3 or kg | 用校准仪表或库存平衡分别记录每种燃料，并记录所有密度或能量换算。 |
| `water_volume` | 工艺水或已命名废水流 | Volume | m3 | 可行时在混合前分别记录每个水或废水流，并核对场址取水、转移、处理和排放。 |
| `refrigerant_balance` | 每种制冷剂物质 | Mass | kg | 对场址存在的 R-717、R-134a 和 R-744 分别核对期初库存、采购、回收、转移、期末库存和损失。 |
| `emission_mass` | 每项空气或水排放 | Mass | kg | 分别报告每种污染物和环境介质；仅根据相匹配的前景活动和测量记录计算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 屠宰场接收的活单峰骆驼、双峰骆驼、美洲驼、羊驼或其他已声明骆驼科动物物种 |
| starting_condition_role | 前景进入条件；不得在本 PCR 内重新建立上游养殖和入厂运输 |
| product_classification_scope | 仅限 CPC 21137 冷冻骆驼或骆驼科动物肉；参考产品排除鲜或冷藏肉和内脏 |
| recursive_input_rule | 冷冻骆驼或骆驼科动物肉重新进入前景操作时，将其作为产品投入记录一次并关联其上游数据集；不得递归复制其生产清单 |
| upstream_dataset_requirement | 研究范围包含相关负荷时，对动物养殖、饲料、兽医投入、入厂运输、外购公用工程、化学品、包装和场外废物处理使用透明上游数据集 |
| disclosure | 声明物种、产品形态、带骨状态、冻结路线、温度、包装、场址、期间、分配、回收物料状态、废水路线、制冷剂和所有排除项 |

### 边界规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_foreground_stages` | 前景系统 | 纳入接收、暂养、屠宰、放血、剥皮、去内脏、胴体整理、条件性分割、预冷、冻结、包装、冻藏、清洗、消毒和适用的场内废水处理。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `boundary_upstream_downstream` | 研究边界 | 将动物养殖和入厂运输视为上游，将配送、零售、使用和寿命终止视为下游；披露任何研究特定扩展。 | `eu-pef-2021-2279` |
| `boundary_product_exclusions` | 参考产品 | 从参考产品中排除鲜或冷藏肉以及可食或不可食内脏；具体内脏或残余物流跨越前景边界时仍在清单中保留。 | `unsd-cpc-3-21137`; `ec-jrc-sa-bref-jrc135916` |
| `boundary_wastewater_condition` | 场内废水处理 | 仅在已命名前景废水流于场内处理时纳入处理过程；否则保留每个转移至场外处理的边界交换。 | `ec-jrc-sa-bref-jrc135916` |
| `boundary_completeness` | 清单 | 不得仅因天工 UUID 未解决而遗漏物料、能源、水、制冷剂、废物、废水或直接排放交换。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `camelid_receipt_and_holding` | 骆驼科动物接收与暂养 | `required` | 从验收活体动物开展屠宰生产时始终纳入。 | 建立按物种区分的活体动物接收、验收、暂养公用工程和接收损失。 | 与 1 kg 参考产出关联的验收活体动物质量。 |
| `slaughter_bleeding_skinning_evisceration` | 屠宰、放血、剥皮与去内脏 | `required` | 从验收合格的活骆驼科动物生产时始终纳入。 | 将验收活体转化为剥皮去内脏胴体，并分别记录公用工程、副产品、废物、废水和燃烧排放。 | 与 1 kg 参考产出关联的剥皮去内脏胴体质量。 |
| `carcass_dressing_and_cutting` | 胴体整理与分割 | `required` | 所有产品均纳入胴体整理；仅在声明产品形态需要时纳入分割和剔骨操作。 | 整理合格胴体，并在声明时分离具体肉块，同时分别记录骨、脂肪、不合格品、废水、水和电力。 | 与 1 kg 参考产出关联的合格整理胴体或分割肉质量。 |
| `precooling_and_freezing` | 预冷与冻结 | `required` | 为形成冷冻市场状态始终纳入；仅记录场址实际存在的制冷剂物质。 | 将合格肉预冷并冻结至声明的冷冻状态，同时把电力、制冷剂补充、制冷剂泄漏、水、冰、废水和压缩机油分别记录。 | 与 1 kg 参考产出关联的合格冷冻肉质量。 |
| `packaging_and_frozen_storage` | 包装与冻藏 | `required` | 始终纳入产品放行包装和工厂门口前冻藏；每种包装组件和保护气体仅在使用时纳入。 | 接收冷冻肉，分别记录每种包装组件和冻藏公用工程，剔除不合格品，并放行唯一的 1 kg 参考产品。 | 恰好 1 kg 净合格冷冻参考产品，包装质量不计入。 |
| `cleaning_and_disinfection` | 清洗与消毒 | `required` | 始终纳入场址卫生作业；每种化学品和热载体仅在实际使用时记录，共享清洗记录只分配一次。 | 分别记录卫生用水、电力、蒸汽、热水、每种燃料、每种清洗化学品、每种化学品特定废水、地面清扫物和燃烧排放。 | 分配至 1 kg 参考产出的卫生作业。 |
| `onsite_wastewater_treatment` | 场内废水处理 | `conditional` | 仅在一个或多个已命名前景废水流于排放或转移前在场内处理时纳入。 | 处理每个已命名废水投入，记录每种处理耗材，分开记录每种污泥或油脂产出，并逐项报告最终水或空气排放。 | 分配至 1 kg 参考产出的处理作业和排放。 |

### 过程：骆驼科动物接收与暂养（`camelid_receipt_and_holding`）

#### 输入

##### 产品流

###### 接收的活单峰骆驼（`receipt_live_dromedary_camel`）

Live dromedary camel 是作为接收的活单峰骆驼进入“骆驼科动物接收与暂养”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Live dromedary camel
- 流属性/单位：Mass / kg
- 数量规则：根据校准地磅或平台秤记录采集活体净质量，并扣除运输设备皮重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_animal_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 接收的活双峰骆驼（`receipt_live_bactrian_camel`）

Live Bactrian camel 是作为接收的活双峰骆驼进入“骆驼科动物接收与暂养”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Live Bactrian camel
- 流属性/单位：Mass / kg
- 数量规则：根据校准地磅或平台秤记录采集活体净质量，并扣除运输设备皮重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_animal_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 接收的活美洲驼（`receipt_live_llama`）

Live llama 是作为接收的活美洲驼进入“骆驼科动物接收与暂养”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Live llama
- 流属性/单位：Mass / kg
- 数量规则：根据校准地磅或平台秤记录采集活体净质量，并扣除运输设备皮重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_animal_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 接收的活羊驼（`receipt_live_alpaca`）

Live alpaca 是作为接收的活羊驼进入“骆驼科动物接收与暂养”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Live alpaca
- 流属性/单位：Mass / kg
- 数量规则：根据校准地磅或平台秤记录采集活体净质量，并扣除运输设备皮重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_animal_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 暂养饮用水（`receipt_holding_water`）

Process water 是作为暂养饮用水进入“骆驼科动物接收与暂养”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：根据专用水表、储罐记录或共享校准水表的书面分配采集工艺水体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 暂养区电网电力（`receipt_holding_electricity`）

Electricity, medium voltage 是作为暂养区电网电力进入“骆驼科动物接收与暂养”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：根据阶段专用分表采集电力；使用共享电表时，按书面记录的时间、负荷或吞吐量分配，且不得合并其他能源载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格的单峰骆驼（`receipt_accepted_dromedary_camel`）

Accepted dromedary camel 是作为验收合格的单峰骆驼离开“骆驼科动物接收与暂养”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Accepted dromedary camel
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_animal_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 验收合格的双峰骆驼（`receipt_accepted_bactrian_camel`）

Accepted Bactrian camel 是作为验收合格的双峰骆驼离开“骆驼科动物接收与暂养”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Accepted Bactrian camel
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_animal_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 验收合格的美洲驼（`receipt_accepted_llama`）

Accepted llama 是作为验收合格的美洲驼离开“骆驼科动物接收与暂养”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Accepted llama
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_animal_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 验收合格的羊驼（`receipt_accepted_alpaca`）

Accepted alpaca 是作为验收合格的羊驼离开“骆驼科动物接收与暂养”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Accepted alpaca
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_animal_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

###### 到厂死亡单峰骆驼胴体废物（`receipt_doa_dromedary_carcass`）

Dead-on-arrival dromedary camel carcass 是作为到厂死亡单峰骆驼胴体废物离开“骆驼科动物接收与暂养”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Dead-on-arrival dromedary camel carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 到厂死亡双峰骆驼胴体废物（`receipt_doa_bactrian_carcass`）

Dead-on-arrival Bactrian camel carcass 是作为到厂死亡双峰骆驼胴体废物离开“骆驼科动物接收与暂养”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Dead-on-arrival Bactrian camel carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 到厂死亡美洲驼胴体废物（`receipt_doa_llama_carcass`）

Dead-on-arrival llama carcass 是作为到厂死亡美洲驼胴体废物离开“骆驼科动物接收与暂养”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Dead-on-arrival llama carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 到厂死亡羊驼胴体废物（`receipt_doa_alpaca_carcass`）

Dead-on-arrival alpaca carcass 是作为到厂死亡羊驼胴体废物离开“骆驼科动物接收与暂养”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Dead-on-arrival alpaca carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 骆驼科动物粪便废物（`receipt_camelid_manure`）

Camelid manure 是作为骆驼科动物粪便废物离开“骆驼科动物接收与暂养”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid manure
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 暂养区冲洗废水（`receipt_holding_wash_wastewater`）

Holding-area wash wastewater 是作为暂养区冲洗废水离开“骆驼科动物接收与暂养”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Holding-area wash wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 基本流

### 过程：屠宰、放血、剥皮与去内脏（`slaughter_bleeding_skinning_evisceration`）

#### 输入

##### 产品流

###### 验收单峰骆驼投入（`slaughter_accepted_dromedary_camel`）

Accepted dromedary camel 是作为验收单峰骆驼投入进入“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Accepted dromedary camel
- 流属性/单位：Mass / kg
- 数量规则：根据校准地磅或平台秤记录采集活体净质量，并扣除运输设备皮重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_animal_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 验收双峰骆驼投入（`slaughter_accepted_bactrian_camel`）

Accepted Bactrian camel 是作为验收双峰骆驼投入进入“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Accepted Bactrian camel
- 流属性/单位：Mass / kg
- 数量规则：根据校准地磅或平台秤记录采集活体净质量，并扣除运输设备皮重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_animal_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 验收美洲驼投入（`slaughter_accepted_llama`）

Accepted llama 是作为验收美洲驼投入进入“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Accepted llama
- 流属性/单位：Mass / kg
- 数量规则：根据校准地磅或平台秤记录采集活体净质量，并扣除运输设备皮重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_animal_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 验收羊驼投入（`slaughter_accepted_alpaca`）

Accepted alpaca 是作为验收羊驼投入进入“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Accepted alpaca
- 流属性/单位：Mass / kg
- 数量规则：根据校准地磅或平台秤记录采集活体净质量，并扣除运输设备皮重。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_animal_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 屠宰工艺水（`slaughter_process_water`）

Process water 是作为屠宰工艺水进入“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：根据专用水表、储罐记录或共享校准水表的书面分配采集工艺水体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 屠宰阶段电网电力（`slaughter_electricity`）

Electricity, medium voltage 是作为屠宰阶段电网电力进入“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：根据阶段专用分表采集电力；使用共享电表时，按书面记录的时间、负荷或吞吐量分配，且不得合并其他能源载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 屠宰阶段外购蒸汽（`slaughter_purchased_steam`）

Steam, purchased 是作为屠宰阶段外购蒸汽进入“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：根据蒸汽表或供应商记录采集送至本阶段的外购蒸汽；相关时按有据可查的凝结水回收处理。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 屠宰阶段外购热水（`slaughter_purchased_hot_water`）

Hot water, purchased 是作为屠宰阶段外购热水进入“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：根据校准流量与温度记录或供应商热量表采集送至本阶段的外购热水热量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 屠宰阶段天然气（`slaughter_natural_gas`）

Natural gas 是作为屠宰阶段天然气进入“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：天然气
- 流属性/单位：Volume / m3
- 数量规则：根据校准燃气表或经核对的供应商发票采集分配给本阶段的天然气体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 屠宰阶段柴油（`slaughter_diesel`）

Diesel fuel 是作为屠宰阶段柴油进入“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：柴油燃料
- 流属性/单位：Mass / kg
- 数量规则：根据油罐领用、采购和期末库存记录采集本阶段柴油消耗量，使用实测质量或有据可查的密度换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 屠宰阶段液化石油气（`slaughter_lpg`）

Liquefied petroleum gas 是作为屠宰阶段液化石油气进入“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：液化石油气
- 流属性/单位：Mass / kg
- 数量规则：根据钢瓶、储罐、采购和库存记录采集分配给本阶段的液化石油气消耗量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 剥皮去内脏单峰骆驼胴体（`slaughter_dromedary_carcass`）

Skinned eviscerated dromedary camel carcass 是作为剥皮去内脏单峰骆驼胴体离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Skinned eviscerated dromedary camel carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 剥皮去内脏双峰骆驼胴体（`slaughter_bactrian_carcass`）

Skinned eviscerated Bactrian camel carcass 是作为剥皮去内脏双峰骆驼胴体离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Skinned eviscerated Bactrian camel carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 剥皮去内脏美洲驼胴体（`slaughter_llama_carcass`）

Skinned eviscerated llama carcass 是作为剥皮去内脏美洲驼胴体离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Skinned eviscerated llama carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 剥皮去内脏羊驼胴体（`slaughter_alpaca_carcass`）

Skinned eviscerated alpaca carcass 是作为剥皮去内脏羊驼胴体离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Skinned eviscerated alpaca carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 回收的骆驼科动物血液副产品（`slaughter_recovered_blood`）

Camelid blood 是作为回收的骆驼科动物血液副产品离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid blood
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和去向记录采集净回收质量；仅在该物料具有书面有益用途时作为产品产出记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_coproduct_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 回收的骆驼科动物原皮副产品（`slaughter_recovered_hide`）

Raw camelid hide 是作为回收的骆驼科动物原皮副产品离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Raw camelid hide
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和去向记录采集净回收质量；仅在该物料具有书面有益用途时作为产品产出记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_coproduct_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 回收的骆驼科动物肝副产品（`slaughter_recovered_liver`）

Camelid liver 是作为回收的骆驼科动物肝副产品离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid liver
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和去向记录采集净回收质量；仅在该物料具有书面有益用途时作为产品产出记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_coproduct_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 回收的骆驼科动物心副产品（`slaughter_recovered_heart`）

Camelid heart 是作为回收的骆驼科动物心副产品离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid heart
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和去向记录采集净回收质量；仅在该物料具有书面有益用途时作为产品产出记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_coproduct_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 回收的骆驼科动物肾副产品（`slaughter_recovered_kidney`）

Camelid kidney 是作为回收的骆驼科动物肾副产品离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid kidney
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和去向记录采集净回收质量；仅在该物料具有书面有益用途时作为产品产出记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_coproduct_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 回收的骆驼科动物脂肪副产品（`slaughter_recovered_fat`）

Camelid fat 是作为回收的骆驼科动物脂肪副产品离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid fat
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和去向记录采集净回收质量；仅在该物料具有书面有益用途时作为产品产出记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_coproduct_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 回收的骆驼科动物头副产品（`slaughter_recovered_head`）

Camelid head 是作为回收的骆驼科动物头副产品离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid head
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和去向记录采集净回收质量；仅在该物料具有书面有益用途时作为产品产出记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_coproduct_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

###### 废弃骆驼科动物血液（`slaughter_discarded_blood`）

Discarded camelid blood 是作为废弃骆驼科动物血液离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Discarded camelid blood
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_waste_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废弃骆驼科动物原皮（`slaughter_discarded_hide`）

Discarded raw camelid hide 是作为废弃骆驼科动物原皮离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Discarded raw camelid hide
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_waste_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废弃骆驼科动物肝（`slaughter_discarded_liver`）

Discarded camelid liver 是作为废弃骆驼科动物肝离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Discarded camelid liver
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_waste_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废弃骆驼科动物心（`slaughter_discarded_heart`）

Discarded camelid heart 是作为废弃骆驼科动物心离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Discarded camelid heart
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_waste_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废弃骆驼科动物肾（`slaughter_discarded_kidney`）

Discarded camelid kidney 是作为废弃骆驼科动物肾离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Discarded camelid kidney
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_waste_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废弃骆驼科动物脂肪（`slaughter_discarded_fat`）

Discarded camelid fat 是作为废弃骆驼科动物脂肪离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Discarded camelid fat
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_waste_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废弃骆驼科动物头（`slaughter_discarded_head`）

Discarded camelid head 是作为废弃骆驼科动物头离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Discarded camelid head
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_waste_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 骆驼科动物肺组织废物（`slaughter_lung_tissue`）

Camelid lung tissue 是作为骆驼科动物肺组织废物离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid lung tissue
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_waste_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 骆驼科动物脾组织废物（`slaughter_spleen_tissue`）

Camelid spleen tissue 是作为骆驼科动物脾组织废物离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid spleen tissue
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_waste_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 骆驼科动物胃组织废物（`slaughter_stomach_tissue`）

Camelid stomach tissue 是作为骆驼科动物胃组织废物离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid stomach tissue
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_waste_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 骆驼科动物肠组织废物（`slaughter_intestinal_tissue`）

Camelid intestinal tissue 是作为骆驼科动物肠组织废物离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid intestinal tissue
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_waste_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 骆驼科动物胃内容物废物（`slaughter_stomach_contents`）

Camelid stomach contents 是作为骆驼科动物胃内容物废物离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid stomach contents
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_waste_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 骆驼科动物肠内容物废物（`slaughter_intestinal_contents`）

Camelid intestinal contents 是作为骆驼科动物肠内容物废物离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid intestinal contents
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_waste_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 判废骆驼科动物胴体（`slaughter_condemned_carcass`）

Condemned camelid carcass 是作为判废骆驼科动物胴体离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Condemned camelid carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_waste_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 高有机负荷屠宰废水（`slaughter_high_load_wastewater`）

High-organic-load slaughter wastewater 是作为高有机负荷屠宰废水离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：High-organic-load slaughter wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_wastewater`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 基本流

###### 屠宰化石二氧化碳排放（`slaughter_fossil_co2_air`）

Carbon dioxide, fossil, to air 是作为屠宰化石二氧化碳排放离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据单独采集的燃料用量与有据可查的场址特定因子、烟道实测或法规报告结果计算这一单项空气排放；本规则不规定默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_combustion_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 屠宰氮氧化物排放（`slaughter_nox_air`）

Nitrogen oxides, to air 是作为屠宰氮氧化物排放离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据单独采集的燃料用量与有据可查的场址特定因子、烟道实测或法规报告结果计算这一单项空气排放；本规则不规定默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_combustion_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 屠宰二氧化硫排放（`slaughter_so2_air`）

Sulfur dioxide, to air 是作为屠宰二氧化硫排放离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Sulfur dioxide, to air
- 流属性/单位：Mass / kg
- 数量规则：根据单独采集的燃料用量与有据可查的场址特定因子、烟道实测或法规报告结果计算这一单项空气排放；本规则不规定默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_combustion_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 屠宰细颗粒物排放（`slaughter_pm25_air`）

Particulate matter, < 2.5 µm, to air 是作为屠宰细颗粒物排放离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Particulate matter, < 2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：根据单独采集的燃料用量与有据可查的场址特定因子、烟道实测或法规报告结果计算这一单项空气排放；本规则不规定默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_combustion_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 屠宰粗颗粒物排放（`slaughter_pm10_fraction_air`）

Particulate matter, 2.5-10 µm, to air 是作为屠宰粗颗粒物排放离开“屠宰、放血、剥皮与去内脏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：颗粒物（2.5–10微米），排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据单独采集的燃料用量与有据可查的场址特定因子、烟道实测或法规报告结果计算这一单项空气排放；本规则不规定默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_combustion_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### 过程：胴体整理与分割（`carcass_dressing_and_cutting`）

#### 输入

##### 产品流

###### 单峰骆驼胴体投入（`dressing_dromedary_carcass_input`）

Skinned eviscerated dromedary camel carcass 是作为单峰骆驼胴体投入进入“胴体整理与分割”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Skinned eviscerated dromedary camel carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_input_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 双峰骆驼胴体投入（`dressing_bactrian_carcass_input`）

Skinned eviscerated Bactrian camel carcass 是作为双峰骆驼胴体投入进入“胴体整理与分割”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Skinned eviscerated Bactrian camel carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_input_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 美洲驼胴体投入（`dressing_llama_carcass_input`）

Skinned eviscerated llama carcass 是作为美洲驼胴体投入进入“胴体整理与分割”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Skinned eviscerated llama carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_input_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 羊驼胴体投入（`dressing_alpaca_carcass_input`）

Skinned eviscerated alpaca carcass 是作为羊驼胴体投入进入“胴体整理与分割”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Skinned eviscerated alpaca carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_input_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 胴体整理工艺水（`dressing_process_water`）

Process water 是作为胴体整理工艺水进入“胴体整理与分割”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：根据专用水表、储罐记录或共享校准水表的书面分配采集工艺水体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 胴体整理阶段电网电力（`dressing_electricity`）

Electricity, medium voltage 是作为胴体整理阶段电网电力进入“胴体整理与分割”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：根据阶段专用分表采集电力；使用共享电表时，按书面记录的时间、负荷或吞吐量分配，且不得合并其他能源载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 整理后的单峰骆驼胴体（`dressing_dromedary_carcass_output`）

Dressed dromedary camel carcass 是作为整理后的单峰骆驼胴体离开“胴体整理与分割”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Dressed dromedary camel carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 整理后的双峰骆驼胴体（`dressing_bactrian_carcass_output`）

Dressed Bactrian camel carcass 是作为整理后的双峰骆驼胴体离开“胴体整理与分割”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Dressed Bactrian camel carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 整理后的美洲驼胴体（`dressing_llama_carcass_output`）

Dressed llama carcass 是作为整理后的美洲驼胴体离开“胴体整理与分割”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Dressed llama carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 整理后的羊驼胴体（`dressing_alpaca_carcass_output`）

Dressed alpaca carcass 是作为整理后的羊驼胴体离开“胴体整理与分割”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Dressed alpaca carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 骆驼科动物里脊肉（`dressing_loin_meat`）

Camelid loin meat 是作为骆驼科动物里脊肉离开“胴体整理与分割”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid loin meat
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 骆驼科动物肩肉（`dressing_shoulder_meat`）

Camelid shoulder meat 是作为骆驼科动物肩肉离开“胴体整理与分割”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid shoulder meat
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 骆驼科动物腿肉（`dressing_leg_meat`）

Camelid leg meat 是作为骆驼科动物腿肉离开“胴体整理与分割”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid leg meat
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 骆驼科动物肋肉（`dressing_rib_meat`）

Camelid rib meat 是作为骆驼科动物肋肉离开“胴体整理与分割”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid rib meat
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 骆驼科动物肉修整料（`dressing_meat_trimmings`）

Camelid meat trimmings 是作为骆驼科动物肉修整料离开“胴体整理与分割”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid meat trimmings
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 回收的骆驼科动物骨副产品（`dressing_recovered_bone`）

Recovered camelid bone 是作为回收的骆驼科动物骨副产品离开“胴体整理与分割”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Recovered camelid bone
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和去向记录采集净回收质量；仅在该物料具有书面有益用途时作为产品产出记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_coproduct_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 回收的骆驼科动物分离脂肪副产品（`dressing_recovered_fat`）

Recovered separated camelid fat 是作为回收的骆驼科动物分离脂肪副产品离开“胴体整理与分割”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Recovered separated camelid fat
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和去向记录采集净回收质量；仅在该物料具有书面有益用途时作为产品产出记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_coproduct_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

###### 废弃骆驼科动物骨（`dressing_discarded_bone`）

Discarded camelid bone 是作为废弃骆驼科动物骨离开“胴体整理与分割”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Discarded camelid bone
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废弃骆驼科动物分离脂肪（`dressing_discarded_fat`）

Discarded separated camelid fat 是作为废弃骆驼科动物分离脂肪离开“胴体整理与分割”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Discarded separated camelid fat
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 判废骆驼科动物肉（`dressing_condemned_meat`）

Condemned camelid meat 是作为判废骆驼科动物肉离开“胴体整理与分割”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Condemned camelid meat
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 胴体整理废水（`dressing_wash_wastewater`）

Carcass dressing wastewater 是作为胴体整理废水离开“胴体整理与分割”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Carcass dressing wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dressing_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 基本流

### 过程：预冷与冻结（`precooling_and_freezing`）

#### 输入

##### 产品流

###### 整理后单峰骆驼胴体投入（`freezing_dromedary_carcass_input`）

Dressed dromedary camel carcass 是作为整理后单峰骆驼胴体投入进入“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Dressed dromedary camel carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_input_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 整理后双峰骆驼胴体投入（`freezing_bactrian_carcass_input`）

Dressed Bactrian camel carcass 是作为整理后双峰骆驼胴体投入进入“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Dressed Bactrian camel carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_input_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 整理后美洲驼胴体投入（`freezing_llama_carcass_input`）

Dressed llama carcass 是作为整理后美洲驼胴体投入进入“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Dressed llama carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_input_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 整理后羊驼胴体投入（`freezing_alpaca_carcass_input`）

Dressed alpaca carcass 是作为整理后羊驼胴体投入进入“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Dressed alpaca carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_input_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 骆驼科动物里脊肉投入（`freezing_loin_input`）

Camelid loin meat 是作为骆驼科动物里脊肉投入进入“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid loin meat
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_input_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 骆驼科动物肩肉投入（`freezing_shoulder_input`）

Camelid shoulder meat 是作为骆驼科动物肩肉投入进入“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid shoulder meat
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_input_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 骆驼科动物腿肉投入（`freezing_leg_input`）

Camelid leg meat 是作为骆驼科动物腿肉投入进入“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid leg meat
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_input_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 骆驼科动物肋肉投入（`freezing_rib_input`）

Camelid rib meat 是作为骆驼科动物肋肉投入进入“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid rib meat
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_input_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 骆驼科动物肉修整料投入（`freezing_trimmings_input`）

Camelid meat trimmings 是作为骆驼科动物肉修整料投入进入“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Camelid meat trimmings
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_input_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 预冷工艺水（`freezing_precooling_water`）

Process water 是作为预冷工艺水进入“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：根据专用水表、储罐记录或共享校准水表的书面分配采集工艺水体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 预冷用冰（`freezing_ice`）

Ice 是作为预冷用冰进入“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Ice
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 预冷电网电力（`freezing_precooling_electricity`）

Electricity, medium voltage 是作为预冷电网电力进入“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：根据阶段专用分表采集电力；使用共享电表时，按书面记录的时间、负荷或吞吐量分配，且不得合并其他能源载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冻结阶段电网电力（`freezing_stage_electricity`）

Electricity, medium voltage 是作为冻结阶段电网电力进入“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：根据阶段专用分表采集电力；使用共享电表时，按书面记录的时间、负荷或吞吐量分配，且不得合并其他能源载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 氨制冷剂补充（`freezing_ammonia_makeup`）

Ammonia refrigerant R-717 是作为氨制冷剂补充进入“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Ammonia refrigerant R-717
- 流属性/单位：Mass / kg
- 数量规则：根据该具体物质的钢瓶称量、采购、回收、转移和设备维修记录采集制冷剂补充质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_refrigerant_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-134a 制冷剂补充（`freezing_r134a_makeup`）

1,1,1,2-Tetrafluoroethane refrigerant R-134a 是作为R-134a 制冷剂补充进入“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：1,1,1,2-Tetrafluoroethane refrigerant R-134a
- 流属性/单位：Mass / kg
- 数量规则：根据该具体物质的钢瓶称量、采购、回收、转移和设备维修记录采集制冷剂补充质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_refrigerant_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-744 制冷剂补充（`freezing_r744_makeup`）

Carbon dioxide refrigerant R-744 是作为R-744 制冷剂补充进入“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Carbon dioxide refrigerant R-744
- 流属性/单位：Mass / kg
- 数量规则：根据该具体物质的钢瓶称量、采购、回收、转移和设备维修记录采集制冷剂补充质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_refrigerant_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷冻单峰骆驼胴体（`freezing_frozen_dromedary_carcass`）

Frozen dromedary camel carcass 是作为冷冻单峰骆驼胴体离开“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Frozen dromedary camel carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻双峰骆驼胴体（`freezing_frozen_bactrian_carcass`）

Frozen Bactrian camel carcass 是作为冷冻双峰骆驼胴体离开“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Frozen Bactrian camel carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻美洲驼胴体（`freezing_frozen_llama_carcass`）

Frozen llama carcass 是作为冷冻美洲驼胴体离开“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Frozen llama carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻羊驼胴体（`freezing_frozen_alpaca_carcass`）

Frozen alpaca carcass 是作为冷冻羊驼胴体离开“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Frozen alpaca carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻骆驼科动物里脊肉（`freezing_frozen_loin`）

Frozen camelid loin meat 是作为冷冻骆驼科动物里脊肉离开“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Frozen camelid loin meat
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻骆驼科动物肩肉（`freezing_frozen_shoulder`）

Frozen camelid shoulder meat 是作为冷冻骆驼科动物肩肉离开“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Frozen camelid shoulder meat
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻骆驼科动物腿肉（`freezing_frozen_leg`）

Frozen camelid leg meat 是作为冷冻骆驼科动物腿肉离开“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Frozen camelid leg meat
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻骆驼科动物肋肉（`freezing_frozen_rib`）

Frozen camelid rib meat 是作为冷冻骆驼科动物肋肉离开“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Frozen camelid rib meat
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻骆驼科动物肉修整料（`freezing_frozen_trimmings`）

Frozen camelid meat trimmings 是作为冷冻骆驼科动物肉修整料离开“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Frozen camelid meat trimmings
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次生产记录采集净产出质量；每个质量批次只分类一次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_output_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

###### 预冷废水（`freezing_precooling_wastewater`）

Pre-cooling wastewater 是作为预冷废水离开“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Pre-cooling wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 融霜废水（`freezing_defrost_wastewater`）

Defrost wastewater 是作为融霜废水离开“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Defrost wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废制冷压缩机油（`freezing_waste_compressor_oil`）

Waste refrigeration compressor oil 是作为废制冷压缩机油离开“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Waste refrigeration compressor oil
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 基本流

###### 氨制冷剂排放（`freezing_ammonia_air`）

Ammonia, to air 是作为氨制冷剂排放离开“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：按物质特定库存质量平衡或直接维修损失记录计算这一单项制冷剂排放；不得合并其他制冷剂。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_refrigerant_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-134a 制冷剂排放（`freezing_r134a_air`）

1,1,1,2-Tetrafluoroethane, to air 是作为R-134a 制冷剂排放离开“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：1,1,1,2-四氟乙烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：按物质特定库存质量平衡或直接维修损失记录计算这一单项制冷剂排放；不得合并其他制冷剂。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_refrigerant_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 化石来源 R-744 二氧化碳排放（`freezing_r744_fossil_co2_air`）

Carbon dioxide, fossil, to air 是作为化石来源 R-744 二氧化碳排放离开“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：按物质特定库存质量平衡或直接维修损失记录计算这一单项制冷剂排放；不得合并其他制冷剂。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_refrigerant_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 生物源 R-744 二氧化碳排放（`freezing_r744_biogenic_co2_air`）

Carbon dioxide, biogenic, to air 是作为生物源 R-744 二氧化碳排放离开“预冷与冻结”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：生物源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：按物质特定库存质量平衡或直接维修损失记录计算这一单项制冷剂排放；不得合并其他制冷剂。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_refrigerant_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### 过程：包装与冻藏（`packaging_and_frozen_storage`）

#### 输入

##### 产品流

###### 冷冻单峰骆驼胴体投入（`packaging_frozen_dromedary_carcass`）

Frozen dromedary camel carcass 是作为冷冻单峰骆驼胴体投入进入“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Frozen dromedary camel carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_product_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻双峰骆驼胴体投入（`packaging_frozen_bactrian_carcass`）

Frozen Bactrian camel carcass 是作为冷冻双峰骆驼胴体投入进入“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Frozen Bactrian camel carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_product_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻美洲驼胴体投入（`packaging_frozen_llama_carcass`）

Frozen llama carcass 是作为冷冻美洲驼胴体投入进入“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Frozen llama carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_product_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻羊驼胴体投入（`packaging_frozen_alpaca_carcass`）

Frozen alpaca carcass 是作为冷冻羊驼胴体投入进入“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Frozen alpaca carcass
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_product_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻骆驼科动物里脊肉投入（`packaging_frozen_loin`）

Frozen camelid loin meat 是作为冷冻骆驼科动物里脊肉投入进入“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Frozen camelid loin meat
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_product_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻骆驼科动物肩肉投入（`packaging_frozen_shoulder`）

Frozen camelid shoulder meat 是作为冷冻骆驼科动物肩肉投入进入“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Frozen camelid shoulder meat
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_product_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻骆驼科动物腿肉投入（`packaging_frozen_leg`）

Frozen camelid leg meat 是作为冷冻骆驼科动物腿肉投入进入“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Frozen camelid leg meat
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_product_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻骆驼科动物肋肉投入（`packaging_frozen_rib`）

Frozen camelid rib meat 是作为冷冻骆驼科动物肋肉投入进入“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Frozen camelid rib meat
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_product_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冷冻骆驼科动物肉修整料投入（`packaging_frozen_trimmings`）

Frozen camelid meat trimmings 是作为冷冻骆驼科动物肉修整料投入进入“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Frozen camelid meat trimmings
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和批次转移记录采集净转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_product_mass`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 包装阶段电网电力（`packaging_stage_electricity`）

Electricity, medium voltage 是作为包装阶段电网电力进入“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：根据阶段专用分表采集电力；使用共享电表时，按书面记录的时间、负荷或吞吐量分配，且不得合并其他能源载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_energy`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 冻藏电网电力（`storage_stage_electricity`）

Electricity, medium voltage 是作为冻藏电网电力进入“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：根据阶段专用分表采集电力；使用共享电表时，按书面记录的时间、负荷或吞吐量分配，且不得合并其他能源载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_energy`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 线性低密度聚乙烯薄膜（`packaging_lldpe_film`）

Linear low-density polyethylene film 是作为线性低密度聚乙烯薄膜进入“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Linear low-density polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：采集发放给合格产品的这一单一包装组件净质量；可重复使用物品须计入有据可查的补充消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 高密度聚乙烯内衬（`packaging_hdpe_liner`）

High-density polyethylene liner 是作为高密度聚乙烯内衬进入“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：High-density polyethylene liner
- 流属性/单位：Mass / kg
- 数量规则：采集发放给合格产品的这一单一包装组件净质量；可重复使用物品须计入有据可查的补充消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 聚酰胺薄膜（`packaging_polyamide_film`）

Polyamide film 是作为聚酰胺薄膜进入“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Polyamide film
- 流属性/单位：Mass / kg
- 数量规则：采集发放给合格产品的这一单一包装组件净质量；可重复使用物品须计入有据可查的补充消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 纸标签（`packaging_paper_label`）

Paper label 是作为纸标签进入“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：纸质标签
- 流属性/单位：Mass / kg
- 数量规则：采集发放给合格产品的这一单一包装组件净质量；可重复使用物品须计入有据可查的补充消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 瓦楞纸箱（`packaging_corrugated_box`）

Corrugated fibreboard box 是作为瓦楞纸箱进入“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：瓦楞纸箱
- 流属性/单位：Mass / kg
- 数量规则：采集发放给合格产品的这一单一包装组件净质量；可重复使用物品须计入有据可查的补充消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 聚丙烯捆扎带（`packaging_pp_strap`）

Polypropylene strap 是作为聚丙烯捆扎带进入“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Polypropylene strap
- 流属性/单位：Mass / kg
- 数量规则：采集发放给合格产品的这一单一包装组件净质量；可重复使用物品须计入有据可查的补充消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 可重复使用高密度聚乙烯周转箱（`packaging_hdpe_crate`）

High-density polyethylene reusable crate 是作为可重复使用高密度聚乙烯周转箱进入“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：High-density polyethylene reusable crate
- 流属性/单位：Mass / kg
- 数量规则：采集发放给合格产品的这一单一包装组件净质量；可重复使用物品须计入有据可查的补充消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 可重复使用木托盘（`packaging_wooden_pallet`）

Wooden pallet 是作为可重复使用木托盘进入“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：木托盘
- 流属性/单位：Mass / kg
- 数量规则：采集发放给合格产品的这一单一包装组件净质量；可重复使用物品须计入有据可查的补充消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 干冰冷却投入（`packaging_dry_ice`）

Carbon dioxide, solid 是作为干冰冷却投入进入“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Carbon dioxide, solid
- 流属性/单位：Mass / kg
- 数量规则：根据化学品库存、投加、采购和退库记录采集本阶段净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 氮气保护气投入（`packaging_nitrogen_gas`）

Nitrogen gas 是作为氮气保护气投入进入“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Nitrogen gas
- 流属性/单位：Mass / kg
- 数量规则：根据化学品库存、投加、采购和退库记录采集本阶段净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格冷冻骆驼或骆驼科动物肉参考产出（`reference_frozen_camelid_meat`）

Meat of camels and camelids, frozen 是离开前景系统的唯一参考产品，数量固定为 1 kg 净合格冷冻肉，且不计包装质量。

- 选定流：冷冻骆驼和驼科动物肉 `75e4eb25-986c-4684-ad73-33ba3528f571`
- 流属性/单位：Mass / kg
- 数量规则：将参考产出固定为 1 kg 净合格冷冻产品；包装质量不计入。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unsd-cpc-3-21137`; `eu-pef-2021-2279`

##### 废物流

###### 不合格冷冻骆驼科动物肉（`packaging_off_spec_frozen_meat`）

Off-spec frozen camelid meat 是作为不合格冷冻骆驼科动物肉离开“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Off-spec frozen camelid meat
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废线性低密度聚乙烯薄膜（`packaging_waste_lldpe_film`）

Waste linear low-density polyethylene film 是作为废线性低密度聚乙烯薄膜离开“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Waste linear low-density polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废高密度聚乙烯内衬（`packaging_waste_hdpe_liner`）

Waste high-density polyethylene liner 是作为废高密度聚乙烯内衬离开“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Waste high-density polyethylene liner
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废聚酰胺薄膜（`packaging_waste_polyamide_film`）

Waste polyamide film 是作为废聚酰胺薄膜离开“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Waste polyamide film
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废纸标签（`packaging_waste_paper_label`）

Waste paper label 是作为废纸标签离开“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：废纸质标签
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废瓦楞纸箱（`packaging_waste_corrugated_box`）

Waste corrugated fibreboard box 是作为废瓦楞纸箱离开“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Waste corrugated fibreboard box
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废聚丙烯捆扎带（`packaging_waste_pp_strap`）

Waste polypropylene strap 是作为废聚丙烯捆扎带离开“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Waste polypropylene strap
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废高密度聚乙烯周转箱（`packaging_waste_hdpe_crate`）

Waste high-density polyethylene crate 是作为废高密度聚乙烯周转箱离开“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Waste high-density polyethylene crate
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废木托盘（`packaging_waste_wooden_pallet`）

Waste wooden pallet 是作为废木托盘离开“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：废木托盘
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 包装区冲洗废水（`packaging_area_wash_wastewater`）

Packaging-area wash wastewater 是作为包装区冲洗废水离开“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Packaging-area wash wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 基本流

###### 化石来源干冰二氧化碳排放（`packaging_dry_ice_fossil_co2_air`）

Carbon dioxide, fossil, to air 是作为化石来源干冰二氧化碳排放离开“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据对应物料平衡或直接校准测量计算这一单项气体排放，并保留其声明来源和环境介质。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_gas_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 生物源干冰二氧化碳排放（`packaging_dry_ice_biogenic_co2_air`）

Carbon dioxide, biogenic, to air 是作为生物源干冰二氧化碳排放离开“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：生物源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据对应物料平衡或直接校准测量计算这一单项气体排放，并保留其声明来源和环境介质。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_gas_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 保护用氮气排放（`packaging_nitrogen_air`）

Nitrogen, to air 是作为保护用氮气排放离开“包装与冻藏”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Nitrogen, to air
- 流属性/单位：Mass / kg
- 数量规则：根据对应物料平衡或直接校准测量计算这一单项气体排放，并保留其声明来源和环境介质。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_gas_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### 过程：清洗与消毒（`cleaning_and_disinfection`）

#### 输入

##### 产品流

###### 卫生工艺水（`sanitation_process_water`）

Process water 是作为卫生工艺水进入“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：根据专用水表、储罐记录或共享校准水表的书面分配采集工艺水体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 卫生作业电网电力（`sanitation_electricity`）

Electricity, medium voltage 是作为卫生作业电网电力进入“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：根据阶段专用分表采集电力；使用共享电表时，按书面记录的时间、负荷或吞吐量分配，且不得合并其他能源载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 卫生作业外购蒸汽（`sanitation_purchased_steam`）

Steam, purchased 是作为卫生作业外购蒸汽进入“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：根据蒸汽表或供应商记录采集送至本阶段的外购蒸汽；相关时按有据可查的凝结水回收处理。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 卫生作业外购热水（`sanitation_purchased_hot_water`）

Hot water, purchased 是作为卫生作业外购热水进入“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：根据校准流量与温度记录或供应商热量表采集送至本阶段的外购热水热量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 卫生作业天然气（`sanitation_natural_gas`）

Natural gas 是作为卫生作业天然气进入“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：天然气
- 流属性/单位：Volume / m3
- 数量规则：根据校准燃气表或经核对的供应商发票采集分配给本阶段的天然气体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 卫生作业柴油（`sanitation_diesel`）

Diesel fuel 是作为卫生作业柴油进入“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：柴油燃料
- 流属性/单位：Mass / kg
- 数量规则：根据油罐领用、采购和期末库存记录采集本阶段柴油消耗量，使用实测质量或有据可查的密度换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 卫生作业液化石油气（`sanitation_lpg`）

Liquefied petroleum gas 是作为卫生作业液化石油气进入“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：液化石油气
- 流属性/单位：Mass / kg
- 数量规则：根据钢瓶、储罐、采购和库存记录采集分配给本阶段的液化石油气消耗量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_utilities`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 氢氧化钠清洗剂（`sanitation_sodium_hydroxide`）

Sodium hydroxide 是作为氢氧化钠清洗剂进入“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：根据化学品库存、投加、采购和退库记录采集本阶段净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_chemical_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 硝酸清洗剂（`sanitation_nitric_acid`）

Nitric acid 是作为硝酸清洗剂进入“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：硝酸
- 流属性/单位：Mass / kg
- 数量规则：根据化学品库存、投加、采购和退库记录采集本阶段净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_chemical_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 磷酸清洗剂（`sanitation_phosphoric_acid`）

Phosphoric acid 是作为磷酸清洗剂进入“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：磷酸
- 流属性/单位：Mass / kg
- 数量规则：根据化学品库存、投加、采购和退库记录采集本阶段净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_chemical_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 过氧乙酸消毒剂（`sanitation_peracetic_acid`）

Peracetic acid 是作为过氧乙酸消毒剂进入“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：过氧乙酸
- 流属性/单位：Mass / kg
- 数量规则：根据化学品库存、投加、采购和退库记录采集本阶段净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_chemical_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 次氯酸钠消毒剂（`sanitation_sodium_hypochlorite`）

Sodium hypochlorite 是作为次氯酸钠消毒剂进入“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：次氯酸钠
- 流属性/单位：Mass / kg
- 数量规则：根据化学品库存、投加、采购和退库记录采集本阶段净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_chemical_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 苯扎氯铵消毒剂（`sanitation_benzalkonium_chloride`）

Benzalkonium chloride 是作为苯扎氯铵消毒剂进入“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：苯扎氯铵
- 流属性/单位：Mass / kg
- 数量规则：根据化学品库存、投加、采购和退库记录采集本阶段净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_chemical_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 氢氧化钠卫生废水（`sanitation_alkaline_wastewater`）

Sodium-hydroxide sanitation wastewater 是作为氢氧化钠卫生废水离开“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Sodium-hydroxide sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 硝酸卫生废水（`sanitation_nitric_wastewater`）

Nitric-acid sanitation wastewater 是作为硝酸卫生废水离开“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Nitric-acid sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 磷酸卫生废水（`sanitation_phosphoric_wastewater`）

Phosphoric-acid sanitation wastewater 是作为磷酸卫生废水离开“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Phosphoric-acid sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 过氧乙酸卫生废水（`sanitation_peracetic_wastewater`）

Peracetic-acid sanitation wastewater 是作为过氧乙酸卫生废水离开“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Peracetic-acid sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 次氯酸钠卫生废水（`sanitation_hypochlorite_wastewater`）

Sodium-hypochlorite sanitation wastewater 是作为次氯酸钠卫生废水离开“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Sodium-hypochlorite sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 苯扎氯铵卫生废水（`sanitation_benzalkonium_wastewater`）

Benzalkonium-chloride sanitation wastewater 是作为苯扎氯铵卫生废水离开“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Benzalkonium-chloride sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 末次漂洗卫生废水（`sanitation_final_rinse_wastewater`）

Final-rinse sanitation wastewater 是作为末次漂洗卫生废水离开“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：末次冲洗消毒废水
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 场址地面清扫废物（`sanitation_floor_sweepings`）

Facility floor sweepings 是作为场址地面清扫废物离开“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Facility floor sweepings
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_wastewater_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 基本流

###### 卫生作业化石二氧化碳排放（`sanitation_fossil_co2_air`）

Carbon dioxide, fossil, to air 是作为卫生作业化石二氧化碳排放离开“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据单独采集的燃料用量与有据可查的场址特定因子、烟道实测或法规报告结果计算这一单项空气排放；本规则不规定默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_combustion_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 卫生作业氮氧化物排放（`sanitation_nox_air`）

Nitrogen oxides, to air 是作为卫生作业氮氧化物排放离开“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据单独采集的燃料用量与有据可查的场址特定因子、烟道实测或法规报告结果计算这一单项空气排放；本规则不规定默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_combustion_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 卫生作业二氧化硫排放（`sanitation_so2_air`）

Sulfur dioxide, to air 是作为卫生作业二氧化硫排放离开“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Sulfur dioxide, to air
- 流属性/单位：Mass / kg
- 数量规则：根据单独采集的燃料用量与有据可查的场址特定因子、烟道实测或法规报告结果计算这一单项空气排放；本规则不规定默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_combustion_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 卫生作业细颗粒物排放（`sanitation_pm25_air`）

Particulate matter, < 2.5 µm, to air 是作为卫生作业细颗粒物排放离开“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Particulate matter, < 2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：根据单独采集的燃料用量与有据可查的场址特定因子、烟道实测或法规报告结果计算这一单项空气排放；本规则不规定默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_combustion_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 卫生作业粗颗粒物排放（`sanitation_pm10_fraction_air`）

Particulate matter, 2.5-10 µm, to air 是作为卫生作业粗颗粒物排放离开“清洗与消毒”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：颗粒物（2.5–10微米），排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据单独采集的燃料用量与有据可查的场址特定因子、烟道实测或法规报告结果计算这一单项空气排放；本规则不规定默认因子。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_combustion_emissions`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理电网电力（`wwt_electricity`）

Electricity, medium voltage 是作为废水处理电网电力进入“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：根据阶段专用分表采集电力；使用共享电表时，按书面记录的时间、负荷或吞吐量分配，且不得合并其他能源载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_consumable_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 氯化铁混凝剂（`wwt_ferric_chloride`）

Ferric chloride 是作为氯化铁混凝剂进入“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：氯化铁
- 流属性/单位：Mass / kg
- 数量规则：根据化学品库存、投加、采购和退库记录采集本阶段净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_consumable_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 阴离子聚丙烯酰胺絮凝剂（`wwt_polyacrylamide`）

Anionic polyacrylamide 是作为阴离子聚丙烯酰胺絮凝剂进入“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：阴离子聚丙烯酰胺
- 流属性/单位：Mass / kg
- 数量规则：根据化学品库存、投加、采购和退库记录采集本阶段净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_consumable_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废水处理氢氧化钠（`wwt_sodium_hydroxide`）

Sodium hydroxide 是作为废水处理氢氧化钠进入“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：根据化学品库存、投加、采购和退库记录采集本阶段净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_consumable_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废水处理硫酸（`wwt_sulfuric_acid`）

Sulfuric acid 是作为废水处理硫酸进入“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：硫酸
- 流属性/单位：Mass / kg
- 数量规则：根据化学品库存、投加、采购和退库记录采集本阶段净领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_consumable_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 聚合物配制用水（`wwt_polymer_makeup_water`）

Process water 是作为聚合物配制用水进入“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：根据专用水表、储罐记录或共享校准水表的书面分配采集工艺水体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_consumable_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

###### 暂养区冲洗废水进水（`wwt_holding_wash_influent`）

Holding-area wash wastewater 是作为暂养区冲洗废水进水进入“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Holding-area wash wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 高有机负荷屠宰废水进水（`wwt_slaughter_high_load_influent`）

High-organic-load slaughter wastewater 是作为高有机负荷屠宰废水进水进入“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：High-organic-load slaughter wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 胴体整理废水进水（`wwt_dressing_wash_influent`）

Carcass dressing wastewater 是作为胴体整理废水进水进入“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Carcass dressing wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 预冷废水进水（`wwt_precooling_influent`）

Pre-cooling wastewater 是作为预冷废水进水进入“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Pre-cooling wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 融霜废水进水（`wwt_defrost_influent`）

Defrost wastewater 是作为融霜废水进水进入“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Defrost wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 包装区冲洗废水进水（`wwt_packaging_wash_influent`）

Packaging-area wash wastewater 是作为包装区冲洗废水进水进入“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Packaging-area wash wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 氢氧化钠卫生废水进水（`wwt_alkaline_sanitation_influent`）

Sodium-hydroxide sanitation wastewater 是作为氢氧化钠卫生废水进水进入“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Sodium-hydroxide sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 硝酸卫生废水进水（`wwt_nitric_sanitation_influent`）

Nitric-acid sanitation wastewater 是作为硝酸卫生废水进水进入“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Nitric-acid sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 磷酸卫生废水进水（`wwt_phosphoric_sanitation_influent`）

Phosphoric-acid sanitation wastewater 是作为磷酸卫生废水进水进入“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Phosphoric-acid sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 过氧乙酸卫生废水进水（`wwt_peracetic_sanitation_influent`）

Peracetic-acid sanitation wastewater 是作为过氧乙酸卫生废水进水进入“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Peracetic-acid sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 次氯酸钠卫生废水进水（`wwt_hypochlorite_sanitation_influent`）

Sodium-hypochlorite sanitation wastewater 是作为次氯酸钠卫生废水进水进入“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Sodium-hypochlorite sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 苯扎氯铵卫生废水进水（`wwt_benzalkonium_sanitation_influent`）

Benzalkonium-chloride sanitation wastewater 是作为苯扎氯铵卫生废水进水进入“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Benzalkonium-chloride sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 末次漂洗卫生废水进水（`wwt_final_rinse_influent`）

Final-rinse sanitation wastewater 是作为末次漂洗卫生废水进水进入“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：末次冲洗消毒废水
- 流属性/单位：Volume / m3
- 数量规则：在混合前，根据专用流量计、储罐记录或书面水力分配单独采集这一废水流体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_influent_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 基本流

#### 输出

##### 产品流

###### 回收的废水油脂副产品（`wwt_recovered_grease`）

Recovered wastewater grease 是作为回收的废水油脂副产品离开“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Recovered wastewater grease
- 流属性/单位：Mass / kg
- 数量规则：根据校准秤和去向记录采集净回收质量；仅在该物料具有书面有益用途时作为产品产出记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_output_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 废物流

###### 废水筛渣（`wwt_screenings`）

Wastewater screenings 是作为废水筛渣离开“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Wastewater screenings
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_output_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 溶气气浮污泥（`wwt_daf_sludge`）

Dissolved-air-flotation sludge 是作为溶气气浮污泥离开“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Dissolved-air-flotation sludge
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_output_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 生化废水污泥（`wwt_biological_sludge`）

Biological wastewater sludge 是作为生化废水污泥离开“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Biological wastewater sludge
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_output_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 废弃废水油脂（`wwt_discarded_grease`）

Discarded wastewater grease 是作为废弃废水油脂离开“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Discarded wastewater grease
- 流属性/单位：Mass / kg
- 数量规则：根据校准容器称量、废物台账和去向记录采集废物净质量；同一质量不得同时作为副产品报告。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_output_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### 基本流

###### 处理出水排放（`wwt_treated_effluent`）

Treated wastewater effluent, to surface water 是作为处理出水排放离开“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Treated wastewater effluent, to surface water
- 流属性/单位：Volume / m3
- 数量规则：根据最终排放流量计采集与污染物测量同一报告期的处理出水体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwt_discharge_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 五日生化需氧量排放（`wwt_bod5_water`）

Biochemical oxygen demand, 5-day, to water 是作为五日生化需氧量排放离开“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Biochemical oxygen demand, 5-day, to water
- 流属性/单位：Mass / kg
- 数量规则：根据同一排放期的实测出水体积和代表性实测浓度计算这一单项水排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_discharge_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 化学需氧量排放（`wwt_cod_water`）

Chemical oxygen demand, to water 是作为化学需氧量排放离开“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：化学需氧量，排入水体
- 流属性/单位：Mass / kg
- 数量规则：根据同一排放期的实测出水体积和代表性实测浓度计算这一单项水排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_discharge_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 总悬浮固体排放（`wwt_tss_water`）

Total suspended solids, to water 是作为总悬浮固体排放离开“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Total suspended solids, to water
- 流属性/单位：Mass / kg
- 数量规则：根据同一排放期的实测出水体积和代表性实测浓度计算这一单项水排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_discharge_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 总氮排放（`wwt_total_n_water`）

Nitrogen, total, to water 是作为总氮排放离开“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Nitrogen, total, to water
- 流属性/单位：Mass / kg
- 数量规则：根据同一排放期的实测出水体积和代表性实测浓度计算这一单项水排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_discharge_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 总磷排放（`wwt_total_p_water`）

Phosphorus, total, to water 是作为总磷排放离开“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Phosphorus, total, to water
- 流属性/单位：Mass / kg
- 数量规则：根据同一排放期的实测出水体积和代表性实测浓度计算这一单项水排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_discharge_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 氯化物排放（`wwt_chloride_water`）

Chloride, to water 是作为氯化物排放离开“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Chloride, to water
- 流属性/单位：Mass / kg
- 数量规则：根据同一排放期的实测出水体积和代表性实测浓度计算这一单项水排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_discharge_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 铵排放（`wwt_ammonium_water`）

Ammonium, to water 是作为铵排放离开“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Ammonium, to water
- 流属性/单位：Mass / kg
- 数量规则：根据同一排放期的实测出水体积和代表性实测浓度计算这一单项水排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_discharge_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 生物源甲烷排放（`wwt_biogenic_methane_air`）

Methane, biogenic, to air 是作为生物源甲烷排放离开“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：生物源甲烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据对应物料平衡或直接校准测量计算这一单项气体排放，并保留其声明来源和环境介质。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_air_emission_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 生物源二氧化碳排放（`wwt_biogenic_co2_air`）

Carbon dioxide, biogenic, to air 是作为生物源二氧化碳排放离开“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：生物源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：根据对应物料平衡或直接校准测量计算这一单项气体排放，并保留其声明来源和环境介质。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_air_emission_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### 氧化亚氮排放（`wwt_nitrous_oxide_air`）

Nitrous oxide, to air 是作为氧化亚氮排放离开“场内废水处理”前景边界的单一交换，数量仅按本卡所述规则取得。

- 选定流：Nitrous oxide, to air
- 流属性/单位：Mass / kg
- 数量规则：根据对应物料平衡或直接校准测量计算这一单项气体排放，并保留其声明来源和环境介质。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门口净合格冷冻骆驼或骆驼科动物肉，包装质量不计入
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_wwt_air_emission_records`
- 来源：`ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoidance` | 前景多功能性 | 首先寻求过程细分或可辩护的系统扩展。多功能性仍存在时，采用反映底层过程的书面物理关系；仅在质量为可辩护关系时使用质量分配。 | `eu-pef-2021-2279` |
| `allocation_recovered_outputs` | 血液、原皮、肝、心、肾、头、脂肪、骨、油脂或其他回收产出 | 根据书面法律状态和去向，将每项数量仅分类一次为回收产品或废物，随后披露分配方法和敏感性。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `allocation_mass_balance` | 屠宰和分割得率 | 保持验收活体质量、合格肉、回收产出、判废物料、废水固体和其他实测损失之间的批次质量平衡，且不得对同一质量重复分配。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `allocation_waste_treatment` | 废物和废水 | 将前景收集与场内处理负荷分配给本产品系统；按声明的废物边界约定分配下游处理负荷，并单独披露抵扣。 | `eu-pef-2021-2279` |
| `allocation_reusable_packaging` | 可重复使用周转箱或木托盘 | 使用实际领用、退回、寿命和补充记录，仅把已消耗份额分配给声明产品；披露损耗和重复使用假设。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_animal_mass` | `camelid_receipt_and_holding` | 物种特定或物料特定质量交换 | 地磅、校准秤和批次质量记录 | row_id; species_or_material; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | 用校准设备采集毛重和皮重，计算净质量，并按批次核对投入、产出、副产品和不合格批次。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 秤具校准；称量单；批次台账；质量平衡核对 |
| `cp_receipt_utilities` | `camelid_receipt_and_holding` | 单一水、电力、热量或燃料交换 | 仪表、发票、储罐、钢瓶和分配记录 | row_id; meter_or_stock_id; opening_reading; closing_reading; delivered_quantity; return_quantity; unit; allocation_driver; batch_id | 分别读取每种载体，核对采购和库存，并在归一化前记录所有共享仪表分配。 | 按卡片声明使用 m3、kWh、MJ 或 kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 仪表校准；供应商发票；库存核对；分配工作表 |
| `cp_receipt_waste_records` | `camelid_receipt_and_holding` | 单一已命名废物、废水、污泥、油脂或不合格品交换 | 废物秤、流量计、容器、联单和去向记录 | row_id; batch_id; container_id; gross_quantity; tare_quantity; net_quantity; unit; destination; classification; timestamp | 可行时在混合前测量每个已命名流，并保留分类和去向；回收产品和废物只报告一次。 | 按卡片声明使用 kg 或 m3 | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 秤具或仪表校准；废物联单；去向回执；质量或水平衡 |
| `cp_slaughter_animal_mass` | `slaughter_bleeding_skinning_evisceration` | 物种特定或物料特定质量交换 | 地磅、校准秤和批次质量记录 | row_id; species_or_material; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | 用校准设备采集毛重和皮重，计算净质量，并按批次核对投入、产出、副产品和不合格批次。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 秤具校准；称量单；批次台账；质量平衡核对 |
| `cp_slaughter_utilities` | `slaughter_bleeding_skinning_evisceration` | 单一水、电力、热量或燃料交换 | 仪表、发票、储罐、钢瓶和分配记录 | row_id; meter_or_stock_id; opening_reading; closing_reading; delivered_quantity; return_quantity; unit; allocation_driver; batch_id | 分别读取每种载体，核对采购和库存，并在归一化前记录所有共享仪表分配。 | 按卡片声明使用 m3、kWh、MJ 或 kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 仪表校准；供应商发票；库存核对；分配工作表 |
| `cp_slaughter_output_mass` | `slaughter_bleeding_skinning_evisceration` | 物种特定或物料特定质量交换 | 地磅、校准秤和批次质量记录 | row_id; species_or_material; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | 用校准设备采集毛重和皮重，计算净质量，并按批次核对投入、产出、副产品和不合格批次。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 秤具校准；称量单；批次台账；质量平衡核对 |
| `cp_slaughter_coproduct_mass` | `slaughter_bleeding_skinning_evisceration` | 物种特定或物料特定质量交换 | 地磅、校准秤和批次质量记录 | row_id; species_or_material; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | 用校准设备采集毛重和皮重，计算净质量，并按批次核对投入、产出、副产品和不合格批次。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 秤具校准；称量单；批次台账；质量平衡核对 |
| `cp_slaughter_waste_mass` | `slaughter_bleeding_skinning_evisceration` | 单一已命名废物、废水、污泥、油脂或不合格品交换 | 废物秤、流量计、容器、联单和去向记录 | row_id; batch_id; container_id; gross_quantity; tare_quantity; net_quantity; unit; destination; classification; timestamp | 可行时在混合前测量每个已命名流，并保留分类和去向；回收产品和废物只报告一次。 | 按卡片声明使用 kg 或 m3 | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 秤具或仪表校准；废物联单；去向回执；质量或水平衡 |
| `cp_slaughter_wastewater` | `slaughter_bleeding_skinning_evisceration` | 单一已命名废水流或排放参数 | 流量计、混合样、实验室和排放记录 | row_id; sampling_point; start_time; end_time; effluent_volume; concentration; analyte; unit; laboratory_method; detection_limit | 单独测量流体积，并将代表性浓度结果与同一报告期和排放点配对。 | 按卡片声明使用 m3 或 kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 仪表校准；采样计划；实验室报告；样品交接链；排放台账 |
| `cp_slaughter_combustion_emissions` | `slaughter_bleeding_skinning_evisceration` | 单项燃烧空气排放 | 燃料记录、烟道结果、场址因子和计算记录 | row_id; fuel_row_id; fuel_quantity; fuel_unit; factor_or_measurement; factor_unit; source_reference; calculated_mass; reporting_period | 使用单独采集的燃料数量和这一污染物的场址特定因子或直接烟道结果。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 燃料核对；烟道报告或因子证据；计算工作表；复核签字 |
| `cp_dressing_input_mass` | `carcass_dressing_and_cutting` | 物种特定或物料特定质量交换 | 地磅、校准秤和批次质量记录 | row_id; species_or_material; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | 用校准设备采集毛重和皮重，计算净质量，并按批次核对投入、产出、副产品和不合格批次。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 秤具校准；称量单；批次台账；质量平衡核对 |
| `cp_dressing_utilities` | `carcass_dressing_and_cutting` | 单一水、电力、热量或燃料交换 | 仪表、发票、储罐、钢瓶和分配记录 | row_id; meter_or_stock_id; opening_reading; closing_reading; delivered_quantity; return_quantity; unit; allocation_driver; batch_id | 分别读取每种载体，核对采购和库存，并在归一化前记录所有共享仪表分配。 | 按卡片声明使用 m3、kWh、MJ 或 kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 仪表校准；供应商发票；库存核对；分配工作表 |
| `cp_dressing_output_mass` | `carcass_dressing_and_cutting` | 物种特定或物料特定质量交换 | 地磅、校准秤和批次质量记录 | row_id; species_or_material; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | 用校准设备采集毛重和皮重，计算净质量，并按批次核对投入、产出、副产品和不合格批次。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 秤具校准；称量单；批次台账；质量平衡核对 |
| `cp_dressing_coproduct_mass` | `carcass_dressing_and_cutting` | 物种特定或物料特定质量交换 | 地磅、校准秤和批次质量记录 | row_id; species_or_material; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | 用校准设备采集毛重和皮重，计算净质量，并按批次核对投入、产出、副产品和不合格批次。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 秤具校准；称量单；批次台账；质量平衡核对 |
| `cp_dressing_waste_records` | `carcass_dressing_and_cutting` | 单一已命名废物、废水、污泥、油脂或不合格品交换 | 废物秤、流量计、容器、联单和去向记录 | row_id; batch_id; container_id; gross_quantity; tare_quantity; net_quantity; unit; destination; classification; timestamp | 可行时在混合前测量每个已命名流，并保留分类和去向；回收产品和废物只报告一次。 | 按卡片声明使用 kg 或 m3 | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 秤具或仪表校准；废物联单；去向回执；质量或水平衡 |
| `cp_freezing_input_mass` | `precooling_and_freezing` | 物种特定或物料特定质量交换 | 地磅、校准秤和批次质量记录 | row_id; species_or_material; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | 用校准设备采集毛重和皮重，计算净质量，并按批次核对投入、产出、副产品和不合格批次。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 秤具校准；称量单；批次台账；质量平衡核对 |
| `cp_freezing_utilities` | `precooling_and_freezing` | 单一水、电力、热量或燃料交换 | 仪表、发票、储罐、钢瓶和分配记录 | row_id; meter_or_stock_id; opening_reading; closing_reading; delivered_quantity; return_quantity; unit; allocation_driver; batch_id | 分别读取每种载体，核对采购和库存，并在归一化前记录所有共享仪表分配。 | 按卡片声明使用 m3、kWh、MJ 或 kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 仪表校准；供应商发票；库存核对；分配工作表 |
| `cp_freezing_refrigerant_records` | `precooling_and_freezing` | 物质特定制冷剂补充或排放 | 钢瓶称量、采购、回收、转移和维修记录 | row_id; refrigerant_substance; opening_inventory; purchases; recovered_mass; transferred_mass; closing_inventory; direct_loss; unit; equipment_id | 对每种制冷剂分别建立质量平衡，并与维修和回收记录核对。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 钢瓶秤校准；维修日志；采购发票；回收证明；质量平衡工作表 |
| `cp_freezing_output_mass` | `precooling_and_freezing` | 物种特定或物料特定质量交换 | 地磅、校准秤和批次质量记录 | row_id; species_or_material; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | 用校准设备采集毛重和皮重，计算净质量，并按批次核对投入、产出、副产品和不合格批次。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 秤具校准；称量单；批次台账；质量平衡核对 |
| `cp_freezing_waste_records` | `precooling_and_freezing` | 单一已命名废物、废水、污泥、油脂或不合格品交换 | 废物秤、流量计、容器、联单和去向记录 | row_id; batch_id; container_id; gross_quantity; tare_quantity; net_quantity; unit; destination; classification; timestamp | 可行时在混合前测量每个已命名流，并保留分类和去向；回收产品和废物只报告一次。 | 按卡片声明使用 kg 或 m3 | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 秤具或仪表校准；废物联单；去向回执；质量或水平衡 |
| `cp_packaging_product_mass` | `packaging_and_frozen_storage` | 物种特定或物料特定质量交换 | 地磅、校准秤和批次质量记录 | row_id; species_or_material; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | 用校准设备采集毛重和皮重，计算净质量，并按批次核对投入、产出、副产品和不合格批次。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 秤具校准；称量单；批次台账；质量平衡核对 |
| `cp_packaging_energy` | `packaging_and_frozen_storage` | 单一水、电力、热量或燃料交换 | 仪表、发票、储罐、钢瓶和分配记录 | row_id; meter_or_stock_id; opening_reading; closing_reading; delivered_quantity; return_quantity; unit; allocation_driver; batch_id | 分别读取每种载体，核对采购和库存，并在归一化前记录所有共享仪表分配。 | 按卡片声明使用 m3、kWh、MJ 或 kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 仪表校准；供应商发票；库存核对；分配工作表 |
| `cp_packaging_material_records` | `packaging_and_frozen_storage` | 单一化学品、处理耗材、包装组件或保护材料 | 库存领用、投加、采购、退回和批次记录 | row_id; material_identity; concentration_or_grade; opening_stock; purchases; issued_mass; returned_mass; closing_stock; unit; batch_id | 根据采购和库存记录分别核对每个已命名物料，并把净领用量关联至适用生产批次。 | 按卡片声明使用 kg、m3、kWh 或 MJ | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 发票；库存台账；投加记录；物料规格；批次领用记录 |
| `cp_packaging_waste_records` | `packaging_and_frozen_storage` | 单一已命名废物、废水、污泥、油脂或不合格品交换 | 废物秤、流量计、容器、联单和去向记录 | row_id; batch_id; container_id; gross_quantity; tare_quantity; net_quantity; unit; destination; classification; timestamp | 可行时在混合前测量每个已命名流，并保留分类和去向；回收产品和废物只报告一次。 | 按卡片声明使用 kg 或 m3 | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 秤具或仪表校准；废物联单；去向回执；质量或水平衡 |
| `cp_packaging_gas_records` | `packaging_and_frozen_storage` | 单项已命名空气气体排放 | 物料平衡、直接测量和计算记录 | row_id; source_material_row_id; input_mass; recovered_mass; retained_mass; emitted_mass; origin; compartment; reporting_period | 分别计算或测量每种气体，保留来源和环境介质，并与对应物料投入或处理作业核对。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 物料平衡工作表；校准测量；供应商来源证据；计算复核 |
| `cp_sanitation_utilities` | `cleaning_and_disinfection` | 单一水、电力、热量或燃料交换 | 仪表、发票、储罐、钢瓶和分配记录 | row_id; meter_or_stock_id; opening_reading; closing_reading; delivered_quantity; return_quantity; unit; allocation_driver; batch_id | 分别读取每种载体，核对采购和库存，并在归一化前记录所有共享仪表分配。 | 按卡片声明使用 m3、kWh、MJ 或 kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 仪表校准；供应商发票；库存核对；分配工作表 |
| `cp_sanitation_chemical_records` | `cleaning_and_disinfection` | 单一化学品、处理耗材、包装组件或保护材料 | 库存领用、投加、采购、退回和批次记录 | row_id; material_identity; concentration_or_grade; opening_stock; purchases; issued_mass; returned_mass; closing_stock; unit; batch_id | 根据采购和库存记录分别核对每个已命名物料，并把净领用量关联至适用生产批次。 | 按卡片声明使用 kg、m3、kWh 或 MJ | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 发票；库存台账；投加记录；物料规格；批次领用记录 |
| `cp_sanitation_wastewater_records` | `cleaning_and_disinfection` | 单一已命名废水流或排放参数 | 流量计、混合样、实验室和排放记录 | row_id; sampling_point; start_time; end_time; effluent_volume; concentration; analyte; unit; laboratory_method; detection_limit | 单独测量流体积，并将代表性浓度结果与同一报告期和排放点配对。 | 按卡片声明使用 m3 或 kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 仪表校准；采样计划；实验室报告；样品交接链；排放台账 |
| `cp_sanitation_combustion_emissions` | `cleaning_and_disinfection` | 单项燃烧空气排放 | 燃料记录、烟道结果、场址因子和计算记录 | row_id; fuel_row_id; fuel_quantity; fuel_unit; factor_or_measurement; factor_unit; source_reference; calculated_mass; reporting_period | 使用单独采集的燃料数量和这一污染物的场址特定因子或直接烟道结果。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 燃料核对；烟道报告或因子证据；计算工作表；复核签字 |
| `cp_wwt_consumable_records` | `onsite_wastewater_treatment` | 单一化学品、处理耗材、包装组件或保护材料 | 库存领用、投加、采购、退回和批次记录 | row_id; material_identity; concentration_or_grade; opening_stock; purchases; issued_mass; returned_mass; closing_stock; unit; batch_id | 根据采购和库存记录分别核对每个已命名物料，并把净领用量关联至适用生产批次。 | 按卡片声明使用 kg、m3、kWh 或 MJ | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 发票；库存台账；投加记录；物料规格；批次领用记录 |
| `cp_wwt_influent_records` | `onsite_wastewater_treatment` | 单一已命名废水流或排放参数 | 流量计、混合样、实验室和排放记录 | row_id; sampling_point; start_time; end_time; effluent_volume; concentration; analyte; unit; laboratory_method; detection_limit | 单独测量流体积，并将代表性浓度结果与同一报告期和排放点配对。 | 按卡片声明使用 m3 或 kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 仪表校准；采样计划；实验室报告；样品交接链；排放台账 |
| `cp_wwt_output_records` | `onsite_wastewater_treatment` | 单一已命名废物、废水、污泥、油脂或不合格品交换 | 废物秤、流量计、容器、联单和去向记录 | row_id; batch_id; container_id; gross_quantity; tare_quantity; net_quantity; unit; destination; classification; timestamp | 可行时在混合前测量每个已命名流，并保留分类和去向；回收产品和废物只报告一次。 | 按卡片声明使用 kg 或 m3 | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 秤具或仪表校准；废物联单；去向回执；质量或水平衡 |
| `cp_wwt_discharge_records` | `onsite_wastewater_treatment` | 单一已命名废水流或排放参数 | 流量计、混合样、实验室和排放记录 | row_id; sampling_point; start_time; end_time; effluent_volume; concentration; analyte; unit; laboratory_method; detection_limit | 单独测量流体积，并将代表性浓度结果与同一报告期和排放点配对。 | 按卡片声明使用 m3 或 kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 仪表校准；采样计划；实验室报告；样品交接链；排放台账 |
| `cp_wwt_air_emission_records` | `onsite_wastewater_treatment` | 单项已命名空气气体排放 | 物料平衡、直接测量和计算记录 | row_id; source_material_row_id; input_mass; recovered_mass; retained_mass; emitted_mass; origin; compartment; reporting_period | 分别计算或测量每种气体，保留来源和环境介质，并与对应物料投入或处理作业核对。 | kg | 逐批采集并按报告期核对 | 覆盖声明的整个前景报告期 | 前景场址 | 仅汇总分配给本过程和 row_id 的记录，防止重复计算，再按净合格参考产品质量归一化。 | 物料平衡工作表；校准测量；供应商来源证据；计算复核 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个非参考清单行 | 用相匹配的净合格冷冻参考产品质量除报告期或批次交换量；保留未取整的原始数量和分母。 | 交换量；净合格冷冻产品质量 | 每 1 kg 参考产品的数量 | `eu-pef-2021-2279` |
| `calc_batch_mass_balance` | 接收、屠宰、整理、冻结和包装 | 核对实测投入质量与合格产出、回收产出、废物、库存变化、实测废水固体和有记录的测量差异；不得虚构未测量平衡流。 | 校准的投入和产出质量记录；库存变化 | 已披露批次质量平衡结果 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `calc_combustion_emission` | 每个燃烧排放行 | 将单独记录的燃料量乘以该单项污染物有据可查的场址特定因子，或采用匹配的直接烟道结果；保留因子来源、单位和期间。 | 燃料量；污染物因子或烟道结果 | 污染物空气排放质量 | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | 每个制冷剂排放行 | 期初库存加采购，减去期末库存、回收量和转移量，等于无法解释的损失；将该结果与同物质直接维修损失记录核对。 | 物质特定库存和维修记录 | 制冷剂空气排放质量 | `eu-pef-2021-2279` |
| `calc_shared_meter_allocation` | 共享水表或能源表 | 仅在评估直接分表后进行分配；采用有据可查的运行时间、额定负荷、实测吞吐量或其他因果驱动因素，并保留未分配总量。 | 共享仪表总量；因果分配驱动因素 | 阶段特定交换量 | `eu-pef-2021-2279` |
| `calc_packaging_consumption` | 每个包装组件 | 净消耗等于期初库存加收货量，减去期末库存、退回量和有记录的未用转移量；可重复使用物品通过实际领用和退回记录分配已记录补充消耗。 | 组件特定库存、领用、退回和补充记录 | 包装组件质量 | `eu-pef-2021-2279` |
| `calc_effluent_load` | 每个废水污染物行 | 将相匹配的出水体积乘以同一排放期的代表性实测浓度，并明确转换单位。 | 出水体积；实测浓度 | 污染物水排放质量 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 证明 CPC 21137 范围、已声明骆驼科动物物种、冷冻状态、产品形态、带骨状态，并排除内脏和鲜或冷藏肉。 | 产品规格；批次放行记录；分类证据；温度记录 |
| `dq_primary_foreground` | 前景操作 | 对物料、能源、水、产品、废物、废水和直接排放交换使用场址特定初级数据；识别所有共享记录分配。 | 仪表；秤具；发票；库存台账；生产日志；废物联单；实验室报告 |
| `dq_temporal_coverage` | 报告期 | 覆盖能够反映生产、卫生作业、冻结、冻藏和处理波动的代表性运行期；披露停机和异常批次。 | 有日期的原始记录；生产日历；完整性核对 |
| `dq_atomic_completeness` | 清单行 | 即使多个记录来自同一来源，也须把每种载体、化学品、制冷剂、包装组件、回收产出、废物流、废水流和排放保留在独立行中。 | 有序 row_id 审计；未解决 UUID 登记；原始记录交叉映射 |
| `dq_mass_water_balance` | 场址平衡 | 核对批次质量平衡和报告期水平衡，并用证据解释重要残差，不得虚构数值。 | 质量平衡工作表；水平衡工作表；复核签字 |
| `dq_refrigerant` | 制冷系统 | 识别每种制冷剂物质，并对同一期间的补充、回收、转移、库存和排放进行核对。 | 维修日志；钢瓶称量；采购与回收记录；物质特定平衡 |
| `dq_traceability` | 计算值 | 保留原始值、单位、换算因子、计算公式、因子来源以及至精确批次或报告期的链接。 | 计算工作簿或脚本；原始记录标识；复核记录 |
| `dq_verification` | 数据包 | 在生命周期提升前，对范围、参考流、完整性、分配、计算、数据质量和排除项开展独立复核。 | 完成的验证记录；复核人身份；问题处置 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求 UUID 75e4eb25-986c-4684-ad73-33ba3528f571、Product flow 类型、CPC 21137、Mass 属性 93a60a56-a3c8-11da-a746-0800200b9a66、Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66、kg，以及恰好 1 kg 不含包装的净产品。 | `unsd-cpc-3-21137` |
| `validate_scope_exclusions` | 产品身份 | 拒绝以鲜或冷藏骆驼科动物肉、可食内脏、不可食内脏或非骆驼科动物肉替代冷冻参考产品的数据包。 | `unsd-cpc-3-21137` |
| `validate_process_coverage` | 过程清单 | 要求所有必需过程，并要求对场内废水处理的纳入或排除给出书面条件。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_atomic_rows` | 清单 | 每行只允许一个选定物理或化学交换，并拒绝选择器标签或合并的电力、热、燃料、制冷剂、化学品、包装、废物、废水污染物或排放行。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_reference_amount` | 参考产出 | 要求唯一固定值为 1 kg，且禁止为非参考行使用固定或虚构数量。 | `eu-pef-2021-2279` |
| `validate_mass_balance` | 动物、胴体、分割肉、回收产出和废物记录 | 要求批次核对，并拒绝将同一质量重复分类为回收产品和废物。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_refrigerant_balance` | R-717、R-134a 和 R-744 | 要求对场址存在的每种制冷剂提供物质特定补充和排放记录，并披露排放 R-744 二氧化碳的来源。 | `eu-pef-2021-2279` |
| `validate_water_effluent` | 水和废水 | 要求分别命名废水流、匹配排放体积和浓度，并在无场内处理时披露场外转移。 | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_unresolved_uuid` | 非参考流身份 | 仅在该行保持物理特定且其 row_id 在 manifest.yaml 中有未解决审查条目时允许 UUID 留空；禁止虚构 UUID。 | `eu-pef-2021-2279` |
| `validate_data_quality` | 前景数据包 | 要求可审计初级记录、时间与场址代表性、计算可追溯性、分配披露和复核证据。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 用于在工厂门口生产 1 kg 净合格冷冻骆驼或骆驼科动物肉的前景单元过程数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在保留所有限定信息和边界披露的前提下，用于产品碳足迹、生命周期评价、供应商数据交换、场址改进和经审查聚合 |
| excluded_use | 未经单独审查范围扩展，不得直接代表鲜或冷藏骆驼科动物肉、内脏、动物养殖、入厂运输、零售、使用或非骆驼科动物肉 |
| required_metadata | PCR id；CPC 代码；物种；产品形态；带骨状态；冷冻状态；冻结曲线；温度；包装；场址；地理；技术；报告期；分配；废水路线；制冷剂；参考 UUID；未解决 UUID 登记 |
| required_quality_disclosure | 初级数据份额；仪表和秤具覆盖；共享记录分配；质量和水平衡；制冷剂平衡；数据缺口；计算来源；回收产出去向；验证发现 |
| update_trigger | 物种组合、产品形态、冻结技术、制冷剂、热供应、包装、卫生化学品、废水路线、分配、回收产出法律状态、场址配置或代表性报告期发生变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `unsd-cpc-3-21137` | 数据集（`dataset`） | 联合国统计司，《产品总分类》第 3.0 版，代码 21137，仓库保留原始文件 CPC_Ver_3.0_Structure_30Jun2025.csv；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 冷冻骆驼及骆驼科动物肉精确类别边界，以及相邻鲜或冷藏肉和内脏类别的排除 |
| `ec-jrc-sa-bref-jrc135916` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《屠宰场、动物副产品及可食副产品行业最佳可行技术参考文件》，JRC135916，DOI 10.2760/18199；https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | 接收、屠宰、放血、剥皮、去内脏、胴体整理、冷却、清洗、公用工程、废水、具体回收物料、废物、排放和前景过程结构；不导入定量默认值 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会关于环境足迹方法使用的建议（EU）2021/2279，合并文本；https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定物料清单、企业特定前景数据、完整生命周期清单、分配、透明度、数据质量、计算可追溯性和验证 |
