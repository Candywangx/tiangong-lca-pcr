---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.industrial-sewing-machinery
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 工业单针平缝工作站制造

## 1. 范围与适用性

单一声明供货配置的完整电驱动工业单针平板平缝工作站：机头、安装传动与控制、台面与承重台架、脚控、线架、所需安装防护及留存润滑剂。直驱与带驱配置分别建模。本收窄类别仅覆盖CPC44621内此制造边界，不覆盖所有工业缝纫机。

家用及图书缝订机；包缝、绷缝、链式缝纫、刺绣、锁眼及可编程花样机；针织/机织机械；仅机头供货、独立销售台面/台架/电机/控制或备件；用户缝制生产、运行电力、纺织产出、维护/补充润滑、寿命期机针更换及寿命终结。安装/服务合同及厂房制造在本模块之外。额外备用针/梭芯及单独瓶装附件须另记供货产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.industrial-sewing-machinery |
| classification_refs | CPC:3.0:44621; narrower |
| covered_products | 声明完整单针平板工业平缝工作站，电驱动、具体验收新机供货。 |
| excluded_products | 家用及图书缝订机；包缝、绷缝、链式缝纫、刺绣、锁眼及可编程花样机；针织/机织机械；仅机头供货、独立销售台面/台架/电机/控制或备件；用户缝制生产、运行电力、纺织产出、维护/补充润滑、寿命期机针更换及寿命终结。安装/服务合同及厂房制造在本模块之外。额外备用针/梭芯及单独瓶装附件须另记供货产品。 |
| representative_product | 一台验收工作站，含针杆/旋梭/梭芯/送布牙/压脚系统、匹配传动/控制及完整台面/台架/脚控/线架/防护供货。直驱与带驱机器为不同配置，不是一份可互换物料清单。 |
| production_route | 预制铸件/原料或成品件接收；实际发生的加工/表面处理；机头与工作站装配；调整/测试/放行；实际包装。供应商铸造、热处理、电机绕线及电子板制造属于上游，除非以实测清单明确扩展。 |
| market_state | 待发运新验收完整工作站；全部所需供货件/留存流体纳入，运输包装/试验纺织品排除净质量。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造交付声明验收完整工作站，不是布料缝制或缝迹服务。 |
| How much | 1 kg单一配置验收净完整工作站；整机归一化份额，不是可独立缝制的一千克零件。 |
| How well | 符合放行物料清单/图纸及当前签署型号验收方案：机构时序、送布/机针/旋梭匹配、规定条件缝迹形成、传动/控制功能、防护及电气符合性。不设通用缝速、针距、功率、线张力或寿命。 |
| How long or cycle | 一个制造/验收周期；用户运行时间、寿命缝迹及机针更换排除。 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 缝纫机，图书装订机和家用缝纫机除外 `9744fffe-2c8c-4fb9-b05f-486605652e8c` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号/物料清单修订；序列号/批次；单针平板平缝；直驱/带驱及电机/控制内含件；机针针制/旋梭/送布/压脚配置；台面/台架/踏板/线架/防护；机身/轴牌号与供货状态；留存润滑牌号/质量及干式/充液发货；实测净M；实际试布/线/条件/合格标准；场址/时期；自制/外购及条件操作；供应方/上游/运输连接；包装/额外件排除 |

在数据集元数据/参考备注声明全部所需限定。公开宽产品身份收窄至实际完整工作站供货。仅质量归一化不使直驱/带驱机器或不同缝制功能等价。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| electricity_units | fabrication_electricity; finishing_electricity; assembly_electricity; acceptance_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 归一化前按3.6 MJ/kWh换算实测kWh；保留实际低于1kV表计/供应方边界；其他公用工程载体为独立交换。 |

运输拆卸前称量完整组装验收工作站，含全部所需交付台面/台架/传动/控制/防护及留存润滑剂。可追溯部件称量记录将拆卸发货核对至此M，不能替代完整称量。排除运输支撑/包装、备用组及试布/线。不能将机头重量作为工作站M。干式供货披露干式留存状态；单独瓶装油为另供产品。油体积在kg记账前须同温度实测密度或直接质量称量；不给通用密度或每台重量。计数相同配置/时期验收机器，M与分子q_item须匹配。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一个制造厂接收原料/铸件或成品件；不假定从原矿至机器的边界。 |
| starting_condition_role | 声明制造前景模块起点。 |
| product_classification_scope | 单一声明供货配置的完整电驱动工业单针平板平缝工作站：机头、安装传动与控制、台面与承重台架、脚控、线架、所需安装防护及留存润滑剂。直驱与带驱配置分别建模。本收窄类别仅覆盖CPC44621内此制造边界，不覆盖所有工业缝纫机。 |
| recursive_input_rule | 外购机头/机身/电机/控制止于有记录供货边界；内含机针/旋梭/轴/轴承/电路/涂层/油替代独立投入；自制内部转移不是额外采购。完整来料机头仍须完整供货/质量核对。 |
| upstream_dataset_requirement | 扩展评价连接实际相容部件/物料供应方、外包操作、入厂运输及废物处理；缺失身份/供应方/数量是不同缺口；UUID不提供影响清单。 |
| disclosure | 声明场址/时期、完整工作站供货、干式/充液、自制/外购、供应商工艺、实际公用工程/耗材、试验介质/返工、包装及资本/台架处理。本接收至发运模块本身不是完整从摇篮到工厂门覆盖。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_supply | workstation | JUKI安装节展示台面安装、油盘、带罩与线架；Brother展示直驱机头/电机及控制连接。历史实例仅确立配置区别；当前供货单决定台面/台架/电机/控制内含件。 | juki-ddl8700; brother-s7100a |
| boundary_oil | lubrication | 实际工厂加注/损失与留存交付油及用户补充分别记录；JUKI运行磨合说明和Brother约加油量均不是通用制造测试或因子。 | juki-ddl8700; brother-s7100a |
| boundary_downstream | customer_use | 排除用户缝迹生产纺织品/能量及运行寿命；工厂缝迹测试消耗及实测制造排放仅实际发生时纳入。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| fabrication | 机身与轴加工 | conditional | 仅声明来料铸件/棒料的实际场内加工；供应商铸造及成品件制造属于上游。完整声明前补齐实际切削液、工具、磨料及其他操作。 | foreground_production | 每 1 kg 参考流 |
| finishing | 表面清洗与涂覆 | conditional | 仅实际场内清洗/涂覆，明确配方/公用工程载体；供应商成品涂层替代本操作。所列聚酯粉及异丙醇为可选实例，不是规定配方。 | foreground_production | 每 1 kg 参考流 |
| assembly | 缝纫机构与工作站装配 | required | 在声明供货内安装实际机针/旋梭/梭芯/送布/压脚机构、传动/控制、台面/台架/脚控、线架及防护；核对自制/外购及润滑留存状态。 | foreground_production | 每 1 kg 参考流 |
| acceptance | 调整、测试与放行 | required | 采用当前型号特定工厂测试方案，含规定的实际缝迹测试；记录试布/线、能量、废品/返工，再称量验收完整工作站。 | foreground_production | 每 1 kg 参考流 |
| packing | 运输包装与发运 | conditional | 仅实际包装/防护；包装排除M，任何运输拆卸后核对全部所需交付件。 | foreground_production | 每 1 kg 参考流 |

每行是一种明确交换。这是初始采集框架，不是完整通用物料清单或规定铸铁/聚酯/溶剂配方。若未内含于外购总成，则将实际针杆、挑线杆、旋梭轴、梭壳、针板、送布连杆、轴承、密封、橡胶垫、油盘/箱、膝控提升器、铰链、带罩、线缆、切线器及张力装置逐件核对。完整声明前补齐每项实际遗漏物料/化学品、公用工程载体、工具耗材、废液或废物物种。替代须独立具体流，不是多材质占位。区分适用、不适用、实测零及缺失。

### 过程：机身与轴加工（`fabrication`）

仅声明来料铸件/棒料的实际场内加工；供应商铸造及成品件制造属于上游。完整声明前补齐实际切削液、工具、磨料及其他操作。

#### 输入

##### 产品流

###### 灰铸铁缝纫机机身铸件 （`iron_head_blank`）

仅实际场内加工外购灰铸铁机身毛坯时，记录牌号/铸态；外购成品机头/机身时省略；其他合金另列。

- 选定流： 灰铸铁缝纫机机身铸件
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

###### 碳钢轴棒料毛坯 （`steel_shaft_blank`）

仅场内主轴加工的一种规定碳钢棒料牌号；不替代合金钢或假定热处理。

- 选定流： 碳钢轴棒料毛坯
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

###### 交流电 （`fabrication_electricity`）

条件实测机加工/抽风需求，交付低于1kV电网交流电消费组合；上游发电排放不是工厂排放。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

#### 输出

##### 废物流

###### 工业后钢废料 （`steel_scrap`）

仅分称未经进一步处理出厂的干碳钢机加工废料；铸铁屑及含油屑分开；不自动抵扣回收。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

###### 灰铸铁机加工屑 （`iron_chips`）

条件明确干灰铸铁屑；与废钢及捕集粉尘分称。

- 选定流： 灰铸铁机加工屑
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

###### 捕集碳钢磨削粉尘 （`captured_steel_dust`）

仅实际捕集送明确处理方的干钢磨削粉尘；不是空气排放或铸铁废料。

- 选定流： 捕集碳钢磨削粉尘
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

##### 基本流

###### 颗粒物，粒径未特指 （`particulate_air`）

仅实测控制后室外空气颗粒质量，子介质/粒径未特指；粒径分级需另用身份；仅捕集效率不能得到排放量。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_fabrication`

### 过程：表面清洗与涂覆（`finishing`）

仅实际场内清洗/涂覆，明确配方/公用工程载体；供应商成品涂层替代本操作。所列聚酯粉及异丙醇为可选实例，不是规定配方。

#### 输入

##### 产品流

###### 涂料（粉末） （`polyester_powder`）

仅实际场内机身/台架涂覆的声明聚酯粉末配方；记录配方/SDS、退回/回收粉；供应商已涂覆时不重复。

- 选定流： 涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finishing`

###### 液态异丙醇清洗溶剂 （`isopropanol_liquid`）

可选实际工厂表面清洗纯2-丙醇CAS67-63-0，核实纯度/液态供货；水溶混合配方另列。

- 选定流： 液态异丙醇清洗溶剂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finishing`

###### 交流电 （`finishing_electricity`）

条件实测清洗/喷粉/电固化低于1kV需求；实际燃气/其他固化载体须另列。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finishing`

#### 输出

##### 废物流

###### 废弃聚酯粉末涂料过喷粉 （`polyester_powder_waste`）

条件未复用送场外干聚酯过喷粉，声明配方/处理方；内部回收粉不是外部废物。

- 选定流： 废弃聚酯粉末涂料过喷粉
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finishing`

###### 异丙醇污染棉擦拭布 （`ipa_wipes`）

可选实际棉擦布作为污染固废输出；记录湿质量/溶剂负载/处理方；其他布料/污染物分开。

- 选定流： 异丙醇污染棉擦拭布
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finishing`

##### 基本流

###### 异丙醇 （`isopropanol_air`）

仅实测控制后室外释放2-丙醇CAS67-63-0，空气子介质未特指；不是总VOC、室内暴露或废液；无默认蒸发率。

- 选定流： 异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finishing`

### 过程：缝纫机构与工作站装配（`assembly`）

在声明供货内安装实际机针/旋梭/梭芯/送布/压脚机构、传动/控制、台面/台架/脚控、线架及防护；核对自制/外购及润滑留存状态。

#### 输入

##### 产品流

###### 成品铸铁缝纫机机身 （`finished_body`）

一个外购成品机身，声明合金/涂层/内含件，与场内机身自制互斥；排除铸件/涂覆重复；不能把完整机头仅计为机身。

- 选定流： 成品铸铁缝纫机机身
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品钢制缝纫机主轴 （`main_shaft`）

一个实际规定成品主轴，仅非前述自制时记采购；声明内含轴承/齿轮，不是混合轴组。

- 选定流： 成品钢制缝纫机主轴
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 钢制旋梭 （`rotary_hook`）

一个实际合金/涂层/供货边界成品旋梭，不是服饰钩；内含梭壳不重复。

- 选定流： 钢制旋梭
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 钢制工业机缝针 （`needle`）

安装实际机针针制/规格/合金/涂层；拒用手缝针类别；备用针排除M并另记额外供货。

- 选定流： 钢制工业机缝针
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 钢制梭芯 （`bobbin`）

一个安装钢梭芯，实际合金/皮重；试验线及备用梭芯排除M。

- 选定流： 钢制梭芯
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 钢制缝纫机压脚 （`presser_foot`）

一种安装规定钢压脚及表面状态；其他附件变型分开。

- 选定流： 钢制缝纫机压脚
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 钢制缝纫机送布牙 （`feed_dog`）

一个规定几何/牌号安装钢送布牙，不是完整送料器。

- 选定流： 钢制缝纫机送布牙
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 缝纫驱动交流伺服电机 （`servo_motor`）

一个声明交流伺服电机，记录直驱/带驱连接及所含编码器/驱动边界；其他电机架构另列。

- 选定流： 缝纫驱动交流伺服电机
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 缝纫机电子控制盒 （`control_box`）

一个规定电子部分/输入电压成品控制盒；区分电机内置驱动，避免电路重复。

- 选定流： 缝纫机电子控制盒
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 贴面胶合板缝纫机台面 （`table_top`）

仅实际贴面胶合板成品台面，声明树种/层板/贴面/表面/开孔；不是未规定胶合板原料或假定40mm厚；其他台面替代本行。

- 选定流： 贴面胶合板缝纫机台面
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品钢制缝纫机台架 （`steel_stand`）

一个实际钢承重台架，记录表面/安装构件；仅未内含时独立计台面/踏板。

- 选定流： 成品钢制缝纫机台架
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 缝纫机脚控踏板 （`pedal`）

一个安装脚控踏板，实际机械/电气连杆边界；与台架区分。

- 选定流： 缝纫机脚控踏板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 缝纫机线架 （`thread_stand`）

一个安装线架，声明实际立杆/底座/托盘组成及供货边界；线筒/试验线排除皮重。

- 选定流： 缝纫机线架
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 硫化橡胶制的传动、输送带或胶带 （`rubber_belt`）

仅实际带驱一种规定成品硫化橡胶V带；直驱省略；不能用皮革/输送带或未硫化橡胶替代。

- 选定流： 硫化橡胶制的传动、输送带或胶带 `1e587e97-03a2-4c50-8226-f8446a1dd1d9`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 钢紧固件 （`steel_screws`）

每次一种明确钢螺钉规格，声明涂层/尺寸/供货质量；螺母/垫圈/不同螺钉另列。

- 选定流： 钢紧固件 `ebfe08f5-42c8-484e-b39a-684a35981c24`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 矿物基缝纫机润滑油 （`lubricating_oil`）

仅实际制造商批准矿物基油牌号工厂加注/消耗，称量kg；留存油仅一次纳入M；分别记录干式发货/单独瓶装油/排放油；无历史150ml默认量。

- 选定流： 矿物基缝纫机润滑油
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 交流电 （`assembly_electricity`）

实测低于1kV装配工具/连接需求；外购电机/控制制造在场址边界之外。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

### 过程：调整、测试与放行（`acceptance`）

采用当前型号特定工厂测试方案，含规定的实际缝迹测试；记录试布/线、能量、废品/返工，再称量验收完整工作站。

#### 输入

##### 产品流

###### 棉布 （`test_cotton`）

仅与选定身份及当前测试方案相容的实际100%机织棉厂内缝迹试布；其他试验纺织品另列；复用布为内部循环。

- 选定流： 棉布
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 聚酯机缝线 （`test_thread`）

实际规定100%聚酯缝纫线，面线/底线不同则分别计净新消耗；不是聚酯纤维或非缝纫纱。

- 选定流： 聚酯机缝线
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

###### 交流电 （`acceptance_electricity`）

实际低于1kV台架电机/控制及实测调整/返工/测试需求；不采用铭牌乘假定时长或用户运行。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

#### 输出

##### 产品流

###### 缝纫机，图书装订机和家用缝纫机除外 （`finished_machine`）

1kg验收完整单针平板工业平缝工作站，实际机头/传动/控制/台面/台架/踏板/线架/防护及留存油，使用实测净M。

- 选定流： 缝纫机，图书装订机和家用缝纫机除外 `9744fffe-2c8c-4fb9-b05f-486605652e8c`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_mass`

##### 废物流

###### 含聚酯线的废弃棉缝迹试样 （`test_swatches`）

一种移除已缝棉试样，量化聚酯线比例，不是通用纺织废物；与未用退布分开。

- 选定流： 含聚酯线的废弃棉缝迹试样
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_acceptance`

### 过程：运输包装与发运（`packing`）

仅实际包装/防护；包装排除M，任何运输拆卸后核对全部所需交付件。

#### 输入

##### 产品流

###### 聚乙烯薄膜 （`pe_film`）

实际PE膜配方/厚度/净领用，不填充膜质量；包装排除M。

- 选定流： 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_packing`

###### 瓦楞纸板 （`corrugated_board`）

仅实际符合公开身份的C/E/F楞、纤维≥80%、含再生材料多层板；核实规范，不能推断全部纸箱符合；其他纸板分开。

- 选定流： 瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_packing`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_direct | manufacturing | 优先序列号/工单领用及分表。按cp_allocation以实测因果需求或实测负载/时间分摊共用加工、抽风、固化及测试台架需求；证明各驱动，将分摊加排除消耗核对总量。不设固定比例或通用质量分配。 |  |
| allocation_variants | configurations | 传动/机头/台面/测试配置分开；不同加工/测试需求不能仅以台数为因果驱动。后备质量/经济方法须实测依据、敏感性及明确审查。 |  |
| allocation_waste | scrap_and_tests | 跟踪实际废料/试样输出，不自动抵扣避免钢材/纺织品。有效零件退回及内部复用试布为内部循环，不是新增采购/外部共产品。若有独立可销售产出，声明质量/数量及有依据共产品处理。 |  |

## 8. 前景数据采集、计算与质量规则

对相同场址/配置/时期保留匹配库存领用/退回、物料清单及自制/外购修订、工单、验收台数、台架记录、实测公用工程及废物发运。采用净新试布/线而不是反复通过总量；称M前移除试样。分别记录干式/充液发运及排放油。任何制造商样本数值不能替代实测生产数量。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | finished_machine | measurement | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每个验收序列号/配置 | 相同制造时期 | 相同制造厂及安装供货边界 | 每台验收净质量 | 校准；完整供货物料清单；留存加注；签署放行 |
| cp_fabrication | fabrication | 本过程各原子行 | measurement | 铸件/棒料牌号及供货状态；净领用/退回；实际机床时间/负载；kWh；干钢/铸铁屑质量；捕集及出口颗粒监测；切削液/工具记录 | 逐项称量原料/退回/废料，计量实际加工需求。出口颗粒浓度匹配标准状态干气流量/时间、控制及粒径基准；记录不确定性，不假定释放比例。 | kg; MJ | 每工单/批次/测试；每月核对 | 一个完整声明生产年或有理由的较短完整批次；匹配验收台数 | 相同场址/配置；披露外包 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存/台数闭合；缺失记录 |
| cp_finishing | finishing | 本过程各原子行 | measurement | 聚酯粉配方/SDS；净领用/回收；液态异丙醇纯度/质量；kWh；固化路线；棉擦布湿质量；未复用过喷；实测CAS特定空气释放 | 各化学品/废物分称，计量实际路线/共享需求。测量CAS特定控制后释放或经验证匹配溶剂平衡，含液/固留存及回收；不能把总VOC标作异丙醇。 | kg; MJ | 每工单/批次/测试；每月核对 | 一个完整声明生产年或有理由的较短完整批次；匹配验收台数 | 相同场址/配置；披露外包 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存/台数闭合；缺失记录 |
| cp_assembly | assembly | 本过程各原子行 | measurement | 型号/物料清单/序列号；部件供货边界；净领用/退回；机针/旋梭/送布匹配；传动/控制/台面/台架质量；油牌号及充液/干式；留存油质量；kWh | 追溯各实际供货部件并称量，避免电机内含电路/机头内含件重复。分别称量工厂油领用/退回/留存加注，核对空/充液发货；计量工具/连接。 | kg; MJ | 每工单/批次/测试；每月核对 | 一个完整声明生产年或有理由的较短完整批次；匹配验收台数 | 相同场址/配置；披露外包 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存/台数闭合；缺失记录 |
| cp_acceptance | acceptance | 本过程各原子行 | measurement | 序列号/配置；当前签署测试方案；机针针制；试布纤维/组织/表面及缝线规范；缝迹质量/时序结果；防护/电气/传动检查；实际测试时间/kWh；新试布/线及移除试样质量；废品/返工；M | 记录实际型号测试，计量调整/返工/测试需求；称量净新试验纺织品消耗及组成已知废缝样。复用布库存另追溯；无通用缝速或运行磨合因子。 | kg; MJ | 每工单/批次/测试；每月核对 | 一个完整声明生产年或有理由的较短完整批次；匹配验收台数 | 相同场址/配置；披露外包 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存/台数闭合；缺失记录 |
| cp_packing | packing | 本过程各原子行 | measurement | PE膜配方/厚度/质量；纸板楞型/纤维/再生规范及质量；领用/退回；序列号/发运完整件清单 | 各包装物料分称并排除M；拆卸后核对全部所需工作站件。实际额外泡沫/木材/胶带各须新增原子行。 | kg | 每工单/批次/测试；每月核对 | 一个完整声明生产年或有理由的较短完整批次；匹配验收台数 | 相同场址/配置；披露外包 | 可归属交换数量 / 验收机器数量 | 校准；供应商规范；库存/台数闭合；缺失记录 |
| cp_allocation | manufacturing | shared_demand | measurement | 总公用工程；分表需求；实测负载/时间；服务工单/产品；排除消耗 | 分表或测量因果共享负载及实际运行时间；证明各交换特定驱动并核对总供给。 | MJ; h | 每共享批次；每月核对 | 相同制造时期 | 全部服务配置及排除操作 | 按实测因果需求分摊；可归属数量 / 验收机器数量 | 闭合；分表比较；不确定性；敏感性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | iron_head_blank; steel_shaft_blank; fabrication_electricity; steel_scrap; iron_chips; captured_steel_dust; particulate_air; polyester_powder; isopropanol_liquid; finishing_electricity; polyester_powder_waste; ipa_wipes; isopropanol_air; finished_body; main_shaft; rotary_hook; needle; bobbin; presser_foot; feed_dog; servo_motor; control_box; table_top; steel_stand; pedal; thread_stand; rubber_belt; steel_screws; lubricating_oil; assembly_electricity; test_cotton; test_thread; acceptance_electricity; test_swatches; pe_film; corrugated_board | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

先从匹配配置/时期得到q_item：扣有效退回净领用、可归属公用工程或实际外部废物/物种除验收台数。废品/返工负担由验收产出承担。按声明方向除实测M，保留kg或MJ交换分子；不使用任意密度或铭牌乘时长。分摊及单位换算分别可追溯。相容变型仅分别归一化后按披露质量加权/范围汇总。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_identity | flows | 核实供货材质/牌号/相态/组成、参考属性/单位、路线/地理及具体环境介质。流身份不建立供应方影响或数量。 | 供应商资料；身份/属性/单位审计 |
| quality_complete | workstation | 将安装供货/留存流体核对实测M，核对全部实际制造耗材/公用工程、损耗/测试；不以残差填缺失零件质量。 | 物料清单；校准完整称量；库存平衡；签署放行 |
| quality_period | records | 披露代表完整时期、场址、供应商/外包覆盖、路线变化、空载/调整需求及不确定性。历史说明书仅提供型号案例，不提供当前清单或通用测试。 | 工单；表计；来源限制 |
| quality_acceptance | release | 保留型号特定缝迹试料/条件及签署功能/电气/防护验收。记录失败/返工；不能从用户运行说明推断工厂限值。 | 当前放行测试方案；序列号结果；校准 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | 要求1kg输出、完整供货工作站cp_mass实测M、安装台面/台架/传动/控制/防护及留存润滑剂；M不能采用仅机头样本质量或试验纺织品。 |  |
| validation_normalization | inventory | 每个适用非参考行连接normalize_mass及声明协议；检查分母方向、交换单位、匹配配置/时期及验收台数。 |  |
| validation_routes | processes | 将加工/清洗/涂覆及直驱/带驱匹配实际工单/物料清单；供应商成品机头/机身或集成电机驱动须替代内含投入；缺失实际路线仍为缺口。 |  |
| validation_species | elementary_flows | 检查实测未特指粒径颗粒及CAS67-63-0异丙醇室外空气未特指子介质；室内暴露、总VOC、捕集粉尘/擦布及废液为不同交换；不假定排放比例。 |  |
| validation_coverage | dataset | 区分实测/计算/估算/排除/不适用/缺失，核对物料/产出及分摊需求，披露未决身份/供应方。结构/计量通过不批准方法学或建立完整从摇篮到工厂门覆盖。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 具体供货工业平缝工作站/场址/时期制造模块；扩展评价仅另建上游/运输/处理覆盖后采用。 |
| excluded_use | 用户缝迹或纺织生产服务、运行/寿命能量、通用缝纫机械等价、仅机头产品记账及无依据完整从摇篮到工厂门声明。 |
| required_metadata | PCR标识；型号/配置/物料清单及供货机头/台面/台架/传动/控制边界；实测M/留存油；测试方案/试料；场址/时期；自制/外购/路线；供应商/供应方/运输；公用工程；包装；分摊及来源/版本。 |
| required_quality_disclosure | 一手实测覆盖、未决身份/数量/供应方、排除/缺失路线、历史来源限制、换算/分摊依据、排放监测、不确定性及审查状态。 |
| update_trigger | 供货/物料清单/传动/台面变化；材质/涂覆/油/测试方案修订；供应商/公用工程变化；新代表时期；身份/证据缺口解决。 |

## 11. 数据源

| Source id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| juki-ddl8700 | handbook | JUKI DDL-8700英文使用说明书，保留历史版本，PDF修改元数据2013；第2、3、5、6节；PDF第3–5页、印刷第1–3页。https://www.juki.co.jp/industrial_j/download_j/manual_j/ddl8700/menu/ddl8700/pdf/instruction_eg.pdf | 型号特定台面/机头/油盘、带罩及线架架构；不推断数值速度、磨合、油需求、质量、制造路线或寿命。 |
| brother-s7100a | handbook | Brother S-7100A使用说明书，保留历史PDF2015元数据；机械规格及安装第2-2至2-4节；PDF第11–17页、印刷第1–7页。https://download.brother.com/pub/com/ism/pdf/s7100a_in.pdf | 独立制造商直驱伺服、台面/机头/控制连接及油箱配置实例。不采用约机头重量/油量、铭牌功率及台厚；按当前场址供货及实测数量。 |
