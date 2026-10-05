---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.front-end-shovel-loaders-self-propelled
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 自行前端铲装装载机

## 1. 范围与适用性

本PCR适用于主要功能是通过前铲斗挖取、铲装、搬运并装载土壤、矿物或类似物料的完整自行前端装载机。实际证明主要功能与完整主机接口后，可纳入轮式、滑移转向和履带式结构，以及柴油、纯电池电动或有记录的混合动力配置。类别不由尺寸或单一厂商型号定义。记录实际转向、行走、液压、制动、驾驶防护、铲斗与快换、动力及热管理结构。

排除独立铲斗、附件和零件，推土机、平地机、铲运机与压路机，360度回转挖掘机，以及主要功能或分类须另行审查的完整挖掘装载机与混合开挖结构。真实前端装载机随附货叉或松土器，不会仅因此改变其主要类别，但须披露并盘点实际交付内容。不能由某个电机UUID推断混合结构分类。这是工厂数据集生产方法；装载性能、全寿命生产率和下游运行燃料不属于制造参考。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.front-end-shovel-loaders-self-propelled |
| classification_refs | CPC 3.0 44425 |
| covered_products | 完整自行前端轮式或履带装载机；声明实际动力结构与供应配置。 |
| excluded_products | 独立附件与零件；需单独类别审查的挖掘装载机；回转挖掘机及相邻土方主功能设备。 |
| representative_product | 一种声明配置的一台完整验收前端装载机；不是固定型号或配方。 |
| production_route | 外购完整模块，条件适用场内切割、成形、机加工、焊接与涂装，之后装配、充注、试验和发运。 |
| market_state | 工厂门口完整验收制造主机；识别交付铲斗、散装附件及保留充注物。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造一台验收完整的自行前端装载机。 |
| How much | 1千克验收主机净质量；通过实测M关联一台验收完整主机。 |
| How well | 同一声明配置通过有记录的尺寸、行走、转向、制动、铲斗与液压、泄漏及动力系统验收要求；不得编造试验负载或阈值。 |
| How long or cycle | 一个工厂生产与验收期间；不假定使用寿命。 |
| reference_flow_link | loader |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 自动推动前端斗式装载机 `2282e30c-6b3c-478d-98ce-3f74677c00b5` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；序列号与配置；主要功能；轮式、滑移或履带结构；动力传动；电池体系或发动机与后处理；铲斗、快换与交付附件；充注物；验收净质量M；场址；期间；自制外购接口；实际试验和发运状态。 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| native_units | 所有清单行 | 实际原生属性 | kg; MJ | 保留各原生分子单位。该电力参考属性的正式名称为净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66`；其已核能量单位组使用MJ，经校准电表的千瓦时按3.6兆焦/千瓦时转换。该历史属性名称不规定燃料热值计算算法。件数或长度仅在质量衡算需要时使用实际同结构转换。气体体积须有实际温压与密度；容量不是质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际接收的金属坯料和外部完整模块；声明状态、已有涂层、充注物及供应商上游边界。 |
| starting_condition_role | foreground_dataset |
| product_classification_scope | 完整自行前端装载机；分类不规定单一供应商BOM。 |
| recursive_input_rule | 实际外购同类别主机按接收状态计一次；仅展开真实场内精加工或改装，不再次制造整个输入。 |
| upstream_dataset_requirement | 须有实际原子供应的相容上游数据；外购完整模块中嵌入材料与工序计一次。 |
| disclosure | 場址、期间、配置、实际自制外购接口、模块内容、排除工序和缺失数据。 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| factory_boundary | 纳入实际制造、通过上游接口的外协处理、装配、充注、试验、不合格与返修以及发运包装。交付充注物与试机消耗介质分开。排除用户使用和无关工厂产品。 | jrc-metal-2020; volvo-l120-electric; cat-track-loaders |
| no_double_count | 外购完整模块内嵌材料、涂层和供应商工序只计一次。若场内自制，应以实际原子输入与工序替换该外购行。内部转移以相等输出输入配对，在整机汇总中抵销。 | jrc-metal-2020 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | 条件适用的部件制造与表面处理 | conditional | 仅实际场内路线与同一验收配置 | foreground | loader |
| assembly | 配置装配与出厂充注 | required | 仅实际场内路线与同一验收配置 | foreground | loader |
| test_dispatch | 验收试验与发运 | required | 仅实际场内路线与同一验收配置 | foreground | loader |

### 过程：条件适用的部件制造与表面处理 (`fabrication`)

#### 输入

##### 产品流

###### 热轧碳钢板 (`steel_plate`)

仅用于场内制造的车架、动臂或铲斗钢板；测量牌号、厚度与领料质量。

- 选定流: 热轧碳钢板
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `jrc-metal-2020`

###### 钢焊接填充焊丝 (`welding_wire`)

仅适用于实际焊接路线；记录焊丝牌号、领用和退回质量。

- 选定流: 钢焊接填充焊丝
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `jrc-metal-2020`

###### 氧气 (`oxygen`)

仅用于实际氧燃料切割，并须符合气态低温分离工厂供应与纯度；不可用环境空气替代。

- 选定流: 氧气 `4f19ca15-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `jrc-metal-2020`

###### 二氧化碳保护气 (`carbon_dioxide_gas`)

仅用于实际二氧化碳保护气供应，与排放二氧化碳分开；须声明纯度与相态。

- 选定流: 二氧化碳保护气
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `jrc-metal-2020`

###### 氩保护气 (`argon`)

仅用于实际氩保护气；混合保护气配方应另建具有独立身份的原子供应行。

- 选定流: 氩保护气
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `jrc-metal-2020`

###### 金属加工切削液 (`cutting_fluid`)

仅用于本场址实际机加工；记录供应配方、稀释、库存及单独补加水。

- 选定流: 金属加工切削液
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `jrc-metal-2020`

###### 工艺用水 (`water`)

仅用于符合身份的外购工业工艺用水，用于清洗或配制；须有实际入厂状态与供应商。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `jrc-metal-2020`

###### 交流电 (`electricity`)

仅条件适用于中国用户侧低于1千伏供电；其他电压和地区须有独立合格原子身份。计量制造用电，仅分配尚未归属的共享负荷。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `jrc-metal-2020`

###### 天然气燃料 (`natural_gas`)

仅适用于实际场内燃气切割或涂装供热；燃料与烟气排放独立计量。

- 选定流: 天然气燃料
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `jrc-metal-2020`

###### 外购工业热能 (`heat`)

仅用于实际外购热能；物理载体与净焓分开，不把供应商锅炉燃料加入场内。

- 选定流: 外购工业热能
- 流属性/单位: Energy / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `jrc-metal-2020`

###### 水性涂料 (`paint`)

仅适用于实际水性涂料且化学组成与固含相符；其他树脂或溶剂配方须另建行并取得证据。

- 选定流: 水性涂料
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `jrc-metal-2020`

###### 异丙醇 (`ipa`)

仅适用于符合身份的中国工厂化学品供应，用于实际清洗；独立核查含量、领用量与去向。

- 选定流: 异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `jrc-metal-2020`

#### 输出

##### 废物流

###### 碳钢制造废料 (`steel_scrap`)

实际分离的边角料与切屑；声明污染及接收路线。

- 选定流: 碳钢制造废料
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `jrc-metal-2020`

###### 金属加工清洗废水 (`wastewater`)

实际收集废水、组成和接收处理；不默认作为基本流直接排水。

- 选定流: 金属加工清洗废水
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `jrc-metal-2020`

###### 涂装喷房漆渣 (`paint_sludge`)

实际捕集漆渣；湿质量、干固体与溶剂保留量独立测量。

- 选定流: 涂装喷房漆渣
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `jrc-metal-2020`

##### 基本流

###### 排入空气的小于2.5微米颗粒物 (`particulates`)

仅实际控制后符合空气动力学粒径的测量；过滤捕集粉尘是废物，不是空气排放。

- 选定流: 排入空气的小于2.5微米颗粒物
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`

###### 异丙醇 (`ipa_air`)

仅实际异丙醇排入普通未指定空气；捕集、回收、保留及废水中的异丙醇不得算作空气排放。

- 选定流: 异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`

### 过程：配置装配与出厂充注 (`assembly`)

#### 输入

##### 产品流

###### 完整柴油发动机模块 (`engine`)

仅实际柴油配置；声明发动机、冷却及后处理边界。

- 选定流: 完整柴油发动机模块
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `cat-track-loaders`

###### 完整装载机变速器 (`transmission`)

按实际机械或静液压供应接口记录，不重复计入嵌入钢材。

- 选定流: 完整装载机变速器
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `volvo-l120-electric`

###### 完整装载机驱动桥 (`axle`)

实际轮式配置；每一种车桥身份独立记录，并声明结构和制动装置。

- 选定流: 完整装载机驱动桥
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `volvo-l120-electric`

###### 完整装载机液压泵 (`pump`)

实际外购泵；须声明排量与驱动接口。

- 选定流: 完整装载机液压泵
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `volvo-l120-electric`

###### 完整装载机液压缸 (`cylinder`)

实际转向、举升或翻斗缸型号分别识别；完整外购缸不是缸部件坯料。

- 选定流: 完整装载机液压缸
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `volvo-l120-electric`

###### 液压软管总成 (`hose`)

实际额定压力软管结构与接头，测量装机数量。

- 选定流: 液压软管总成
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `volvo-l120-electric`

###### 装载机充气轮胎 (`tyre`)

仅轮式配置；声明轮胎结构、规格和完整外购状态。

- 选定流: 装载机充气轮胎
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `volvo-l120-electric`

###### 完整装载机履带底盘 (`track`)

仅履带配置；完整外购模块中的履带链、履带板和支重轮仅计一次。

- 选定流: 完整装载机履带底盘
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `cat-track-loaders`

###### 完整装载机驾驶室 (`cab`)

声明玻璃、座椅、防护结构和空调内容；供应数据未包含的充注物另计。

- 选定流: 完整装载机驾驶室
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `volvo-l120-electric`

###### 完整前端装载机铲斗 (`bucket`)

仅外购并随主机交付的铲斗；若已由制造输入生产则排除重复；声明斗齿、刃板和快换接口。

- 选定流: 完整前端装载机铲斗
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `volvo-l120-electric`

###### 完整磷酸铁锂动力电池包 (`battery`)

仅实际磷酸铁锂电动配置；声明化学体系、热管理和包体；其他体系须另建原子行。

- 选定流: 完整磷酸铁锂动力电池包
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `volvo-l120-electric`

###### 完整装载机牵引电机 (`motor`)

仅电动配置；须声明实际交直流结构与完整供应驱动接口。

- 选定流: 完整装载机牵引电机
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `volvo-l120-electric`

###### 完整装载机牵引逆变器 (`inverter`)

仅实际电动结构；声明电压和包含的电子部件。

- 选定流: 完整装载机牵引逆变器
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `volvo-l120-electric`

###### 装载机车辆线束 (`wire`)

实际完整线束结构；电力电缆不能替代全部信号线。

- 选定流: 装载机车辆线束
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `volvo-l120-electric`

###### 铅酸辅助蓄电池 (`aux_battery`)

仅实际铅酸辅助电源结构；身份与动力电池分开。

- 选定流: 铅酸辅助蓄电池
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `volvo-l120-electric`

###### 液压油 (`hydraulic_oil`)

实际单独供应且符合身份的液压油；声明牌号与出厂净保留充注量。

- 选定流: 液压油
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `volvo-l120-electric`

###### 润滑油 (`lubricating_oil`)

按实际变速器、车桥或发动机润滑油牌号；不同牌号须分别识别，不能合并。

- 选定流: 润滑油
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `volvo-l120-electric`

###### 润滑脂 (`grease`)

实际完整模块之外供应的润滑脂；领用、回收和保留质量分开。

- 选定流: 润滑脂
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `volvo-l120-electric`

###### 发动机冷却液 (`coolant`)

仅实际发动机或电池热回路配方；浓缩液与预混供应分开。

- 选定流: 发动机冷却液
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `volvo-l120-electric`

###### 氮充注气 (`nitrogen`)

仅实际单独充注的制动蓄能器；声明压力、温度与纯度。

- 选定流: 氮充注气
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `volvo-l120-electric`

###### 柴油机尾气处理用尿素水溶液 (`urea`)

仅实际配有SCR的柴油机；准确溶液浓度与出厂保留、试机消耗量分别测量。

- 选定流: 柴油机尾气处理用尿素水溶液
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `cat-track-loaders`

###### 制冷剂R134a (`r134a`)

仅铭牌确认R134a空调；测量实际保留充注与损失，不使用样本充注量。

- 选定流: 制冷剂R134a
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `volvo-l120-electric`

###### 制冷剂R1234yf (`r1234yf`)

仅实际R1234yf空调铭牌；不得用R134a身份代替。

- 选定流: 制冷剂R1234yf
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`

#### 输出

### 过程：验收试验与发运 (`test_dispatch`)

#### 输入

##### 产品流

###### 柴油 (`diesel`)

柴油流未特指牌号、配方、密度、热值、炼制和供应商；这些实际限定信息须独立采集。仅柴油路线：试机消耗、可回收退回量和交付油箱存量分开；不得给定运行期燃料默认值。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `cat-track-loaders`

###### 交流电 (`test_electricity`)

仅符合中国低于1千伏身份的电力；纳入充电与验收试验计量，电池初末储能和外送量分别记录。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `volvo-l120-electric`

###### 木质装载板 (`wood`)

仅实际用于散装附件或部件的发运支撑；完整主机可无托盘发运。运输包装不计入验收净质量。

- 选定流: 木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`

###### 低密度聚乙烯薄膜（PE-LD） (`pe_film`)

仅实际非自粘、非泡沫、无增强、无层压、无支撑低密度聚乙烯薄膜；不可代表任意塑料膜。

- 选定流: 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`

#### 输出

##### 产品流

###### 自动推动前端斗式装载机 (`loader`)

一台验收完整配置的自行前端装载机；声明随主机交付铲斗、附件和保留充注物；排除运输包装与试验负载。

- 选定流: 自动推动前端斗式装载机 `2282e30c-6b3c-478d-98ce-3f74677c00b5`
- 流属性/单位: Mass / kg
- 数量规则: 1 千克
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_mass`
- 来源: `un-cpc-2025`

##### 废物流

###### 废液压油 (`oil_waste`)

实际试机或不合格主机排出的油；须声明状态与接收处理。

- 选定流: 废液压油
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `jrc-metal-2020`

###### 送拆解的不合格完整装载机 (`rejected_machine`)

仅不可恢复且转出场址的完整不合格主机；与验收产出分母和返修循环分开。

- 选定流: 送拆解的不合格完整装载机
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`
- 来源: `jrc-metal-2020`

##### 基本流

###### 二氧化碳（化石源） (`co2`)

仅实际测得化石碳燃烧、排入普通未指定空气的排放；不包括供应商上游锅炉排放。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`

###### 一氧化碳（化石源） (`co`)

实际物种专属的控制后试机尾气与独立核定逸散排入普通空气；不是碳衡算残差。

- 选定流: 一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`

###### 排入空气的二氧化氮 (`no2`)

仅实际分子NO2计量；以NO2计的NOx不是该分子身份。

- 选定流: 排入空气的二氧化氮
- 流属性/单位: Mass / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_inventory。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_inventory`

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| actual_attribution | 优先使用配置与工序独立计量记录；仅把实际同期间尚未归属的服务余量按有记录的因果驱动分配。可归属废料、不合格、返修与重复试验负荷计入验收生产，不得按有用共产品移除。记录废料接收方与处理，不自动给出避免生产收益。 | jrc-metal-2020 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | test_dispatch | reference product | weighing | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台验收序列号 | 同一生产期间 | 声明工厂 | 每台验收净质量 | 校准；关联序列号验收；交付内容表 |
| cp_inventory | all | atomic exchanges | foreground records | 行身份；领用退回量；库存；仪表；Naccepted；不合格返修试验日志；原生单位；含量；接收方 | 通过经校准秤和仪表及可追溯发票、供应接口与试验日志测量真实原子交换；每项不存在的路线以证据标为not_applicable；未知不是零。 | kg; MJ | 每批及每次试验 | 同一生产期间 | 声明工厂 | 可归属交换数量 / 验收机器数量 | 校准；供应范围；单据；库存及试验核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass; cp_inventory | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| same_period | all inventory rows | 使用同一配置和期间：Qattr包含可归属不合格、返修和试验负荷，Naccepted计完整验收主机，Dnet为经校准验收净质量之和，M=Dnet/Naccepted，q_item=Qattr/Naccepted，q_ref=Qattr/Dnet。Dnet排除运输包装、不合格质量及消耗试验负载。不同配置分开，或披露合理加权。 | cp_mass；cp_inventory；实际供应、库存、试验、测量及接收记录 |
| bom_completeness | all inventory rows | 核对实际序列号BOM与交付配置：车架动臂、铲斗快换、行走转向制动、车轮或履带、驾驶防护和驾驶室、液压控制、发动机冷却后处理或电池电机逆变器热管理、辅助电源、紧固件、充注物与交付附件。实际另有牌号、模块、涂料组分、燃料、气体、包装或废物均须独立原子行和合格身份。示例表不是通用配方。 | cp_mass；cp_inventory；实际供应、库存、试验、测量及接收记录 |
| element_balance | all inventory rows | 每项物理元素衡算使用各流实测总质量乘以自身组成含量、含水率和湿干基准，纳入库存、反应、保留及退回。合金、污染切屑或漆渣总质量不是其中铁或碳。抵销配对内部转移。独立核对外购模块内容与实际净质量，不再次展开供应商负荷。 | cp_mass；cp_inventory；实际供应、库存、试验、测量及接收记录 |
| water_balance | all inventory rows | 各进水、冷却液或溶液、湿漆渣及排水均有自身水分比例和实际温度下实测或有据密度；核对保留、蒸发、反应水、退回及库存。总水退回量只计一次。 | cp_mass；cp_inventory；实际供应、库存、试验、测量及接收记录 |
| solvent_fate | all inventory rows | 物种专属溶剂输入与实际保留、回收、捕集、破坏、废水或介质、空气及库存变化去向核对并报告不确定性。捕集不是破坏；不可把未解释残差归为空气。使用同期间同状态控制后实测物种浓度与配对气流，实际单位校正及独立逸散证据。碳闭合不能推算CO或NOx。 | cp_mass；cp_inventory；实际供应、库存、试验、测量及接收记录 |
| utility_balance | all inventory rows | 核对同期间外购电力加实际场内发电，扣外送及储能变化，与制造、装配、试验发运计量对应。共享服务只计尚未归属余量；调查负余量与不确定性，不截断。净热输入为供给质量乘自身比焓减独立实测回流质量乘自身比焓，使用同一基准。总回流只扣一次；已净供应不二次扣减。蒸汽回流物理质量与热能分开。 | cp_mass；cp_inventory；实际供应、库存、试验、测量及接收记录 |
| test_accounting | all inventory rows | 采集实际验收试验时长负载、燃料、充电、油与冷却液及泄漏；纳入失败试验与返修。初末交付燃料和电池状态属于库存，不是推定消耗。实际电池冷却加热与电机变速器冷却区分。样本工作质量、油箱容量、电池额定值、生产率、节油率及制冷剂维修充注量不规定工厂质量、能源、配方或排放。 | cp_mass；cp_inventory；实际供应、库存、试验、测量及接收记录 |
| identity_gaps | all inventory rows | 未解决身份保留明确候选缺口。数据集使用前，核实实际供应或排放的类型、化学组成、供应状态、分类、参考属性单位、供应商地区及基本流隔室；拒绝冲突身份。缺失为未知，不存在路线为有据not_applicable，测得零为独立记录事实。 | cp_mass；cp_inventory；实际供应、库存、试验、测量及接收记录 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| complete_reference | 须有完整验收主机身份、声明配置、经校准净质量M及双语明确每台到每千克关系。拒绝部件、单型号替代、包装质量或下游性能作为参考。 | un-cpc-2025 |
| inventory_closure | 验证所有存在路线与原子交换、自制外购抵销、不合格试验归属、物料水溶剂能源核对、原生单位转换及证据。报告已执行与跳过检查、错误及未解决覆盖；不得将缺口以零静默通过。 | jrc-metal-2020; volvo-l120-electric; cat-track-loaders |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 符合配置的工厂生产数据集，用于相容process或lifecyclemodel投影。 |
| excluded_use | 不具限定的通用装载机配方、全寿命装载服务比较、运行燃料基准或把候选身份当作已审查真值。 |
| required_metadata | 配置；地区；期间；净质量；实际接口；供应状态；生产试验边界；上游身份。 |
| required_quality_disclosure | 缺失身份和测量；假设；不确定性；排除项；分配；核对及原生转换证据。 |
| update_trigger | 主要功能、动力结构、化学体系、供应边界、自制外购路线、试验方案或证据改变。 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, pp. 234–235. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 完整装载机范围、挖掘机与零件邻居；不提供BOM数量。 |
| volvo-l120-electric | handbook | Volvo Construction Equipment, Product Guide L120 Electric, document 22-20064945-A, pp. 4–5, 8–9; undated manufacturer edition. https://www.volvoce.com/-/media/aprimo/pdf/electric-large-wheel-loaders/l120-electric-c2/product-guide-l120-electric-en-22-20064945-a.pdf?v=R9J1Pw | 实际轮式电动、传动液压、驾驶室充注和设备结构；型号规格不是生产默认值。 |
| cat-track-loaders | handbook | Caterpillar, Cat Track Loaders 953 - 963 - 973, ©2023, pp. 14–15; manufacturer document retained by authorised dealer Gmmco. https://api.gmmco.in/uploads/CM_20231025_a9814_5f435_944b5263ce.pdf | 履带柴油与条件适用后处理、铲斗及驾驶防护结构；不采用样本清单因子。 |
| jrc-metal-2020 | literature | European Commission JRC, Best Environmental Management Practice in the Fabricated Metal Products sector, EUR 30025 EN, 2020, DOI 10.2760/894966, printed pp. 26, 121. https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf | 条件适用金属制造、焊接、涂装及源头控制工序；行业实践不构成单一装载机工厂配方。 |
