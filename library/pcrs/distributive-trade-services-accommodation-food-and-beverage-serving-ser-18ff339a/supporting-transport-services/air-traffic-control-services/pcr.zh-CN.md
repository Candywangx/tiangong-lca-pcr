---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.air-traffic-control-services
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 空中交通管制服务

## 1. 范围与适用性

适用于机场飞行管制塔台运营，包括声明的进近着陆起飞管制功能及机场内雷达站服务。声明实际塔台雷达组合功能配置及覆盖。不得假设无雷达塔台具有雷达装置，雷达组合设施也不能与目视塔台互换。[来源：`un-cpc-67620`；`faa-facility-classification`]

排除67990无线电导航辅助、一般机场航站跑道运营、地面服务、航空公司飞行及飞机制造燃料尾气。不自动扩展至全部航路中心或地区空中导航服务。共享中心传感供应商仅以明确且经审适用分配的塔台机场雷达贡献进入。声称飞机燃料延误收益时须独立交通模型，不能作为负设施排放。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.air-traffic-control-services |
| classification_refs | CPC3.0 67620 |
| covered_products | 声明机场塔台进近着陆起飞管制及机场内雷达服务配置 |
| excluded_products | 无线电导航台；默认整个航路网络；机场航空公司运营；飞机制造运行 |
| representative_product | 一种声明终端管制配置覆盖的一个完整六十分钟服务块 |
| production_route | 建立声明可用服务 → 运行实际管制监视支持系统 → 记录交付服务块交通中断 |
| market_state | 具有实际覆盖运行证据的已交付有界设施服务；不推定安全认证 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供确切声明塔台机场雷达管制服务范围及可用性 |
| How much | 已识别配置覆盖的一个六十分钟服务块，并记录实际交通分布 |
| How well | 声明运行覆盖值守可用功能设备降级状态及实际验收记录判据；不虚构安全批准 |
| How long or cycle | 一种声明服务条件下实际交付六十分钟；中断配置变化拆分记录 |
| reference_flow_link | `control_block` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已交付且限定信息齐全的六十分钟机场管制服务块 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 设施机场；塔台雷达组合子型；实际进近着陆起飞功能范围；空间空域跑道覆盖交接；声明服务块；实际起讫交付分钟；实际到离场穿越交通及组成；值守席位运行方式；雷达通信计算清单；冗余；中断降级；报告期；仪表供应商分配；冷却气身份；备用测试；资产边界 |

item为正式Item(s)的单数别名，导出使用Item(s)。计数对象是明确服务块，不是飞机运行，也不是将时间属性错误改名。一件包含所述服务配置六十分钟。条件变化拆分后，用实际交付分钟除以60确定交付块B；期间分母保留小数块。不同覆盖交通功能降级状态的块不具通用等价性。零交通只有实际服务判据满足时仍可交付可用性；不可用关闭时段不是正常交付块。不自动换算每架次，也不推定安全结果。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `block_count` | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | item | 用cp_service计数定义六十分钟服务块，保留实际交付分钟功能交通条件。飞机运行另行测量描述，不能互换为块数。 |
| `electricity_energy` | electricity | 能量 | kWh | 采用实际外购电支持回路份额UPS冷却损耗；发电充电内部循环核对，不重复采购。 |
| `fuel_mass` | diesel | 质量 | kg | 用cp_energy计量实际备用测试运行燃料；备用铭牌功率或飞机计数不能证明消耗。 |
| `gas_mass` | r134a_input; sf6_input; r134a_air; sf6_air | 质量 | kg | 逐实际物种衡算气瓶库存设备充注取得回收转移变化；补充量不等于损失。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 提供声明服务的已配置塔台机场雷达设施；披露既往建筑设备制造份额 |
| starting_condition_role | foreground_start |
| product_classification_scope | 机场塔台管制进近着陆起飞及机场内雷达；不自动覆盖导航台航路网络 |
| recursive_input_rule | 购买管制监视计算支持贡献按功能时间分配进入一次；不重复已含设备能源 |
| upstream_dataset_requirement | 实际电力柴油水气供应；建筑雷达通信计算UPS发电冷却制造更换；废物气体回收处理 |
| disclosure | 实际功能交通时长覆盖；可用降级期间；共享供应商机场边界；资产寿命；备用冷却上游缺口 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_function` | 记录实际塔台雷达进近职责交接；不同设施采用真实设备覆盖，不设通用雷达假定。 | faa-facility-classification |
| `boundary_support` | 纳入归属电力调节UPS备用测试运行电池冷却建筑支持维护退役；记录实际安装系统，不套用历史机队默认值。 | faa-power-context |
| `boundary_aircraft` | 排除客户飞机燃料尾气制造及整航程管制路线效应。下游航空系统模型须独立明确声称管制引起的飞机变化并防重复。 |  |
| `boundary_actual` | 筛查每种实际制冷绝缘气供暖燃料电池化学电子更换支持车辆废物；存在则具体独立增加；不默认气泄漏发电运行或无排放设施。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| control | 运行支持声明机场管制服务块 | required | 实际声明功能交付时长覆盖 | foreground_production | 每参考流 |
| surveillance | 提供实际机场内雷达贡献 | conditional | 仅实际纳入机场雷达 | foreground_production | 每参考流 |
| continuity | 提供实际电力连续性备用贡献 | conditional | 实际UPS电池发电配置及观测维护测试 | foreground_production | 每参考流 |

### 过程：提供实际机场内雷达贡献 (`surveillance`)

#### 输入

##### 产品流

###### 机场监视雷达装置 (`radar_asset`)

仅实际机场内雷达装置及分配服务份额；明确天线处理支持边界。外部航路系统不自动作为本资产。

- 选定流：机场监视雷达装置
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

### 过程：提供实际电力连续性备用贡献 (`continuity`)

#### 输入

##### 产品流

###### 石油基柴油 (`diesel`)

实际备用发电运行测试及归属维护工况；不能由备用装机容量或每架次推定燃料。

- 选定流：石油基柴油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 矿物发动机润滑油 (`engine_oil`)

实际发电机维护净油量，核对库存及采购服务覆盖。

- 选定流：矿物发动机润滑油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 静态不间断电源装置 (`ups`)

实际UPS电力转换硬件份额；声明是否已含初装电池，转换损耗计一次。

- 选定流：静态不间断电源装置
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 阀控式铅酸UPS蓄电池 (`lead_battery`)

实际此型式容量时适用；区分块模块单体数量及初装更换负荷；不预设寿命。

- 选定流：阀控式铅酸UPS蓄电池
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 磷酸铁锂UPS电池模块 (`lfp_battery`)

实际替代化学体系时适用；不与铅酸单元互换；保留容量制造覆盖。

- 选定流：磷酸铁锂UPS电池模块
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 备用柴油发电机组 (`generator`)

实际安装发电机制造退役份额物理寿命利用；不预设运行小时或更换年限。

- 选定流：备用柴油发电机组
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

### 过程：运行支持声明机场管制服务块 (`control`)

#### 输入

##### 产品流

###### 交流电 (`electricity`)

归属前分回路计量实际管制通信计算监视UPS损耗冷却照明设施支持。柴油自发电不是另一外购电网输入。

- 选定流：交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流归属的实测交换数量；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：

###### 1,1,1,2-四氟乙烷制冷剂R134a (`r134a_input`)

仅实际R134a冷却回路；核对初充库存退回补充及供应商已含充注。其他制冷剂须各自具体行及混合工质组分释放。

- 选定流：1,1,1,2-四氟乙烷制冷剂R134a
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_gas。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_gas`
- 来源：

###### 电气绝缘六氟化硫 (`sf6_input`)

仅实际充气绝缘电气设备；不假设每设施使用六氟化硫。购买量按库存退回设备充注校正。

- 选定流：电气绝缘六氟化硫
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_gas。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_gas`
- 来源：

###### 自来水 (`water`)

实际冷却补水或生活清洁时适用；新鲜供应与循环流量区分。

- 选定流：自来水
- 流属性/单位：体积 / m3
- 数量规则：每参考流归属的实测交换数量；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 空中交通管制处理服务器 (`server`)

实际配置处理硬件；声明制造寿命份额及更换存储外设边界；不重复托管供应商硬件。

- 选定流：空中交通管制处理服务器
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 甚高频地空无线电收发机 (`radio`)

本服务实际使用通信设备；保留信道配置及有依据寿命利用。

- 选定流：甚高频地空无线电收发机
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 机场空中交通管制塔台建筑 (`tower_building`)

实际分配塔台管制设施建设退役份额；区分共享机场空间及独立分配设备。

- 选定流：机场空中交通管制塔台建筑
- 流属性/单位：面积 / m2
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

###### 空冷管制设施冷水机组 (`chiller`)

实际此设计时适用；声明初始制冷剂覆盖及更换，避免与气体材料清单重复充注。

- 选定流：空冷管制设施冷水机组
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_asset。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_asset`
- 来源：

#### 输出

##### 产品流

###### 已交付限定机场管制服务块 (`control_block`)

按cp_service交付的一个定义六十分钟服务块。下列共享废物排放行保留实际产生来源期间，不限于块末时刻。

- 选定流：已交付且限定信息齐全的六十分钟机场管制服务块
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 item
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_service`
- 来源：

##### 废物流

###### 废空中交通管制处理服务器 (`waste_server`)

实际退役硬件、接收方及电子废物处理边界；引用保密数据处理证据时不得暴露运行数据。

- 选定流：废空中交通管制处理服务器
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废阀控式铅酸UPS蓄电池 (`waste_lead`)

实际退役同容量电池块模块；计量转移及接收回收处理，不自动铅抵扣。

- 选定流：废阀控式铅酸UPS蓄电池
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废磷酸铁锂UPS电池模块 (`waste_lfp`)

仅实际磷酸铁锂退役，与铅酸分开；保留接收方实际处理。

- 选定流：废磷酸铁锂UPS电池模块
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废矿物发动机润滑油 (`spent_oil`)

实际发电机维护废物，与未用退油采购维护覆盖区分。

- 选定流：废矿物发动机润滑油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 冷却系统排污废水 (`wastewater`)

实际收集冷却排污时适用；须明确组成接收处理。不默认水冷装置。

- 选定流：冷却系统排污废水
- 流属性/单位：体积 / m3
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 化石二氧化碳，排入空气 (`co2_air`)

仅设施实际燃烧，存在时主要备用测试运行；客户飞机二氧化碳不在本模块。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 一氧化碳，排入空气 (`co_air`)

实际发电机物种，须实测或明确发动机燃料工况依据。

- 选定流：一氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 一氧化氮，排入空气 (`no_air`)

设施物种分辨释放；以二氧化氮计的氮氧化物总量须有组分依据。

- 选定流：一氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 二氧化氮，排入空气 (`no2_air`)

实际二氧化氮与一氧化氮分开，保留来源工况。

- 选定流：二氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 空气动力学直径小于2.5微米的颗粒物，排入空气 (`pm25_air`)

实际燃烧产生的细颗粒物组分；不得重复计入总颗粒物与其粒径组分，也不得混入飞机尾气。

- 选定流：空气动力学直径小于2.5微米的颗粒物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_emission。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emission`
- 来源：

###### 1,1,1,2-四氟乙烷，排入空气 (`r134a_air`)

仅实际R134a回路在库存设备充注回收转移变化校正后的损失；补充量本身不是排放。

- 选定流：1,1,1,2-四氟乙烷，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_gas。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_gas`
- 来源：

###### 六氟化硫，排入空气 (`sf6_air`)

仅气体库存设备充注转移衡算后的实际六氟化硫释放，不是全部购入绝缘气。

- 选定流：六氟化硫，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_gas。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_gas`
- 来源：

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocate_subdivision` | 优先回路功能席位传感细分；共享机场管制中心资产能源须有实测功能时间容量驱动；不得将整个航路网络分给本地塔台服务块。 |  |
| `allocate_duration` | 同相容配置覆盖条件内，将实际期间清单分配至交付块B；冗余低交通待命维护备用测试保留为真实支持负荷；交通分布明确。 |  |
| `allocate_assets` | 按有依据物理寿命利用分配建筑雷达计算通信UPS冷却制造处置；上游已含更换初装电池气体不再重复。 |  |
| `allocate_gas` | 区分回收转移气体与大气损失；不自动避免泄漏或电池回收抵扣。 | epa-gas-balance |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | control | control_block | 前景记录 | 设施功能覆盖；实际值守可用区间；交付分钟；到离穿越交通组成；中断降级；验收 | 按功能交接边界核验实际运行交通日志；配置降级变化拆分并记录交付分钟，不主张法律安全批准。 | item | 服务区间及期间 | 同一声明服务报告期 | 已识别设施功能分配 | 每参考流 | 运行交通日志；时间覆盖核对 |
| cp_energy | control | electricity; diesel | 前景记录 | 仪表回路；外购；UPS冷却损耗；发电燃料库存流量；实际运行测试；分配供应 | 采用校准实际电力燃料测量；核对功能期间总量，内部发电不重复。 | kWh; kg | 计量及备用事件 | 同一声明服务报告期 | 已识别设施功能分配 | 每参考流 | 仪表校准；账单；燃料测试日志 |
| cp_material | control | water; engine_oil | 前景记录 | 具体产品；领用退回库存消耗；发电冷却来源；份额 | 核对实际净材料水消耗及维护公用操作，区分循环水。 | kg; m3 | 领用期间衡算 | 同一声明服务报告期 | 已识别设施功能分配 | 每参考流 | 库存计量记录；服务覆盖 |
| cp_gas | control | r134a_input; sf6_input; r134a_air; sf6_air | 前景记录 | 物种；期初期末气瓶库存；取得；离场回收转移；设备期初期末充注；功能份额 | 逐实际气体称量核对库存设备充注转移；承包商从场址库存充注不得重复；购买量不是排放。 | kg | 每次转移及期界 | 同一声明服务报告期 | 已识别设施功能分配 | 每参考流 | 气瓶维护回收记录；完整衡算 |
| cp_asset | control | server; radio; tower_building; chiller; radar_asset; ups; lead_battery; lfp_battery; generator | 前景记录 | 资产配置容量；制造；电池气体组件覆盖；实际利用寿命更换退役 | 实际安装资产关联上游清单，有凭据物理寿命功能时间使用；区分硬件初充更换。 | item; m2 | 资产事件及期间 | 同一声明服务报告期 | 已识别设施功能分配 | 每参考流 | 资产台账；维护更换日志；寿命证据 |
| cp_waste | control | waste_server; waste_lead; waste_lfp; spent_oil; wastewater | 前景记录 | 具体废物容量化学组成；数量；接收处理；期间份额 | 逐废物计量核验实际接收处理；区分化学体系同容量电池单元；处理计一次。 | item; kg; m3 | 每次转移 | 同一声明服务报告期 | 已识别设施功能分配 | 每参考流 | 废物回收凭据；组成；接收边界 |
| cp_emission | control | co2_air; co_air; no_air; no2_air; pm25_air | 前景记录 | 实际发电机燃料；运行测试载荷；物种/粒径组分；尾气实测或明确系数版本单位；分配 | 实测或采用明确实际发动机燃料工况系数；解析各物种及颗粒物粒径组分，并排除飞机尾气。 | kg | 备用工况及期间 | 同一声明服务报告期 | 已识别设施功能分配 | 每参考流 | 燃料尾气测试；系数适用性；单位核查 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| block_denominator | control_block | B = 相容声明配置覆盖内实际交付分钟/60，B须为正值。保留小数块及实际交通可用记录。 | cp_service | B |  |
| exchange_allocation | 所有清单行 | 按有记录设施功能物理份额分配各实测期间分子，再除以B。保留共享待命冗余维护测试；不自动采用每架次分母。 | cp_service; cp_energy; cp_material; cp_waste | 每参考流交换量 |  |
| gas_loss | r134a_air; sf6_air | 逐实际气体，损失=期初储存库存+取得量+期初设备充注-期末储存库存-离场转移-期末设备充注。回收只在期末库存或离场转移计一次；调查负值不闭合衡算，再分配实际功能份额除以B。 | cp_gas; cp_service | 每参考流气体损失 | epa-gas-balance |
| asset_allocation | server; radio; tower_building; chiller; radar_asset; ups; lead_battery; lfp_battery; generator | 按有依据物理寿命实际功能时间利用分配上游资产制造更换退役，再按期间份额除以B；不默认电池更换周期。 | cp_asset; cp_service | 每参考流资产份额 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_function | control_block | 实际块时长功能覆盖交通组成降级状态完整；同为六十分钟不证明跨设施等价。 | cp_service |
| dq_period | 所有清单行 | 计量备用测试维护气体衡算交付期间匹配；核对共享供应商机场总量。 | cp_energy; cp_gas; cp_asset |
| dq_gases | r134a_air; sf6_air | 物种库存设备回收证据完整；未知损失不是零，补充充注不自动为大气释放。 | cp_gas |
| dq_identity | 所有清单行 | 关联生产前核定流支持身份；归档计数支持不是新产品流核验。 | 身份直读核验 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_scope` | 要求机场塔台管制或机场内雷达功能；排除67990导航辅助及未经审查扩展整个航路服务。 | un-cpc-67620 |
| `validate_reference` | 要求唯一control_block为1 item、固定六十分钟定义、正交付B及功能交通覆盖可用性限定信息。拒绝不可用时段算正常产出或无独立明确模型的每架次等价。 |  |
| `validate_atomic` | 要求每种燃料气体电池化学硬件废物排放物种独立；衡算制冷绝缘气库存回收，避免已装气初装电池重复。 |  |
| `validate_limits` | 披露实际待命备用冷却寿命分配上游缺口；PCR检查不能证明空管安全认证运行批准或飞机减排收益。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 单元过程机场塔台雷达服务块 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 同一限定功能配置六十分钟块定义覆盖交通可用条件及供应商资产边界 |
| excluded_use | 通用每架次系数；无线电导航台；全部航路空管；航空公司运营；安全批准或避免飞机燃料抵扣 |
| required_metadata | 全部块限定信息；交付B分钟交通；设备回路图；备用气体电池记录；寿命共享功能分配 |
| required_quality_disclosure | UUID缺口；覆盖交通分布；降级中断处理；气体备用不确定性；资产供应商重叠；上游缺失 |
| update_trigger | 设施功能覆盖交通制度变化；设备雷达迁移；能源冷却气体电池变化；资产寿命数据质量变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-67620 | official_guidance | UNSD CPC3.0 67620. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67620 | 机场塔台机场内雷达范围及导航辅助排除。 |
| faa-facility-classification | official_guidance | FAA OPSNET Facility Classification. https://www.aspm.faa.gov/aspmhelp/index/OPSNET__Facility_Classification.html | 区分塔台终端雷达组合航路设施；不是CPC对应或运行批准。 |
| faa-power-context | official_guidance | FAA Capital Investment Plan FY2012-2016 (2011), AppendixB Electrical Power Systems sustain/support. https://www.faa.gov/air_traffic/publications/cip/files/FY12-16/FY12-16_CIP_Complete_May_2011.pdf | 备用UPS电池支持的历史技术证据；未采用旧机队数量寿命成本或现行要求。 |
| epa-gas-balance | official_guidance | US EPA, Direct Fugitive Emissions from Refrigeration, Air Conditioning, Fire Suppression, and Industrial Gases, section2.3. https://www.epa.gov/sites/default/files/2020-12/documents/fugitiveemissions.pdf | 实际气体库存设备充注物料衡算逻辑；未采用泄漏率全球变暖潜势。 |
