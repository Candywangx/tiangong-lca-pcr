---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.hydronic-steel-panel-radiator
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 水暖钢制板式散热器制造

## 1. 范围与适用性

单一声明完整干式配置、以焊接钢制承压板制造的被动非电热水暖散热器。声明板数、对流翅片数、尺寸/方向、表面处理、安装顶格栅/侧盖及实际工厂安装堵头、排气件/内置阀。本收窄类别属于CPC44823，不覆盖全部铁/钢散热器结构。参考功能是制造交付，不是房间供热或交付一千瓦时热量。

铸铁分节、钢制管/柱、铝制及电热/风机辅助散热器；独立阀、温控头、支架及安装五金；热泵/锅炉、配水管道、安装/服务、用户运行热/水/电、建筑热损失、维护、寿命及寿命终结。同包装独立安装套件为散热器净M之外的另供产品；披露其边界，不隐含纳入或遗漏其制造。运输包装及测试流体排除M。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.hydronic-steel-panel-radiator |
| classification_refs | CPC:3.0:44823; narrower |
| covered_products | 新验收完整焊接水暖钢板散热器，被动非电热，干燥排空交付。 |
| excluded_products | 铸铁分节、钢制管/柱、铝制及电热/风机辅助散热器；独立阀、温控头、支架及安装五金；热泵/锅炉、配水管道、安装/服务、用户运行热/水/电、建筑热损失、维护、寿命及寿命终结。同包装独立安装套件为散热器净M之外的另供产品；披露其边界，不隐含纳入或遗漏其制造。运输包装及测试流体排除M。 |
| representative_product | 一台配置焊接承压板散热器，含实际板/翅片布置及安装盖件/接口/堵头/排气件；内置阀仅供货安装时纳入。不同板/翅片型、方向及表面为不同物料清单/测试变型。 |
| production_route | 钢材接收；下料/压制；板/接口/翅片连接；实际检漏/承压测试；条件清洗/转化/底漆；声明涂覆/固化；干式安装放行；实际包装。外购件工艺为上游并替代重复前景步骤。 |
| market_state | 待发运完整验收干式末端，实际安装附件/干涂层纳入；安装套件/包装/测试水排除产品净M。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造声明完整散热器，不是建筑供热。 |
| How much | 1 kg单一配置验收干式净完整散热器；整台设备归一化份额，不是独立功能一千克碎片。 |
| How well | 放行材质/物料清单/尺寸及型号特定焊接/检漏/承压、表面/接口/安装供货验收。实际声明热工性能及测试条件为产品限定，不是供热分母或通用EN442声明。不规定通用压力、膜厚、热输出或寿命。 |
| How long or cycle | 一个制造/验收周期；建筑供暖季及参考寿命不用于归一化。 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 铁或钢制非电热的集中供暖散热器 `a3bc941c-b74f-40e1-a32c-75888689ebdd` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号/物料清单修订；批次/序列号；板/翅片数；高/长/深/方向；钢牌号/厚度/供货状态；焊接路线；涂层/颜色/底漆；安装盖件/堵头/排气件/阀；另供安装套件；干燥排空净实测M；当前测试介质/压力/时间/标准及实际热工声明条件；场址/时期；自制/外购；预处理/固化公用工程；供应方/运输连接；包装排除 |

在数据集/参考元数据声明全部限定。公开宽散热器身份收窄至实际水暖焊接钢板及安装干式供货。仅质量归一化不使板型或热工性能可互换。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| electricity_units | forming_electricity; joining_electricity; testing_electricity; pretreatment_electricity; coating_electricity; release_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 归一化前按3.6 MJ/kWh换算实测kWh；保留实际低于1kV供应方/表计边界。 |
| gas_volume | natural_gas | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 保留实测气体m3及温度/压力/参考状态/记录计费修正；无通用气体密度/热值或质量换算。 |

包装前以校准秤称量完整验收干燥排空末端，含干涂层及实际安装盖件/阀/堵头/排气件。排除承压测试水、运行水、全部运输包装及独立五金套件。核实排空状态、涂层固化及供货物料清单；发运毛重或样本型号质量不能替代M。独立套件数量/边界另记。各水溶试剂以实际供货溶液质量计量；水质量用称量或同温度实测密度/体积，不能用通用混合密度。不提供每台散热器重量。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造厂接收规定冷轧板/卷及成品接口/涂装化学品；炼钢/轧制在上游。 |
| starting_condition_role | 声明制造前景模块起点。 |
| product_classification_scope | 单一声明完整干式配置、以焊接钢制承压板制造的被动非电热水暖散热器。声明板数、对流翅片数、尺寸/方向、表面处理、安装顶格栅/侧盖及实际工厂安装堵头、排气件/内置阀。本收窄类别属于CPC44823，不覆盖全部铁/钢散热器结构。参考功能是制造交付，不是房间供热或交付一千瓦时热量。 |
| recursive_input_rule | 外购焊接/涂覆板或接口止于记录供货边界，替代内含钢材/涂层/场内作业。内部压制板/翅片为转移，不是新增采购。不能以完整散热器输入替代各零件。 |
| upstream_dataset_requirement | 扩展评价连接实际相容钢材/涂层/部件供应方、外包、入厂运输及废物处理；身份UUID不是上游影响数据集；缺供应方/身份/数量为不同缺口。 |
| disclosure | 披露场址/时期、干式安装末端与独立套件边界、工艺路线、公用工程载体、损耗/返工/测试、槽液/回收循环、供应商范围、包装及资本/工具处理；仅前景不建立完整从摇篮到工厂门覆盖。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_route | manufacturing | Purmo扬州案例支持压制/焊接/测试/涂装/包装制造路线及聚酯—环氧涂层冷轧板。当前工厂记录决定详细连接、测试介质、预处理/固化，不是假定通用配方。 | purmo-hub2894 |
| boundary_supply | radiator | Stelrad保留案例展示板/翅片配置、附件供货及场址/型号涂层/包装差异。核对实际干式安装供货；不转用EPD型号重量、再生比例、质量分配或寿命。 | stelrad-panel-uk |
| boundary_use | building_heat | 排除热源/配水及房间供暖运行。仅记录实际工厂测试水/公用工程消耗；散热器水容量/热功率不归一化制造产出。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| forming | 钢材下料与板/翅片压制 | required | 实际制造厂承压板钢材及声明翅片成形；外购成形件替代对应场内原料/操作；供应商炼钢/冷轧在上游。 | foreground_production | 每 1 kg 参考流 |
| joining | 板缝与对流件连接 | required | 实际放行缝焊/点焊路线及接口集成；电阻焊不假定填丝/保护气；其他焊接/外包须独立实测清单。 | foreground_production | 每 1 kg 参考流 |
| testing | 检漏/承压测试与排空 | required | 当前型号特定验收测试程序决定介质/压力/时长/合格标准；液压水为条件项；气压测试实测压缩机需求；废品/返工纳入。 | foreground_production | 每 1 kg 参考流 |
| pretreatment | 清洗与转化预处理 | conditional | 仅实际场内清洗/预处理配方；不规定通用磷酸锌或碱性清洗剂；分别记录真实槽化学体系及水/热载体。 | foreground_production | 每 1 kg 参考流 |
| coating | 底漆、喷粉与固化 | required | 声明表面涂覆路线；实际供应商成品件替代场内涂覆；底漆为条件项，粉末配方/固化载体/回收为场址特定。 | foreground_production | 每 1 kg 参考流 |
| release | 安装附件装配与放行 | required | 安装声明盖件/堵头/排气件/阀，检查表面/接口，核对验收干式完整配置并称量净M。 | foreground_production | 每 1 kg 参考流 |
| packing | 运输防护与发运 | conditional | 仅实际膜/纸板/防护；独立安装套件另行披露；包装排除M。 | foreground_production | 每 1 kg 参考流 |

各卡为一种明确物料/部件/载体/废物/物种。数量由实际记录获得，不是通用配方。未采用的条件化学体系省略；不同牌号/配方/浓度另列。完整声明前补齐实际物料清单/路线：纳入尚未内含的另供翅片/格栅/侧板/阀总成、各夹扣/密封、电极损耗、工具、成形废油、底漆排放、固化/燃烧物种及包装物料。内部水/粉循环与外部净补给/排放分开。捕集粉/污泥/送处理废液为废物，不是基本排放。任何直接废水排放须各实测物种及具体受纳介质另列。

### 过程：钢材下料与板/翅片压制（`forming`）

实际制造厂承压板钢材及声明翅片成形；外购成形件替代对应场内原料/操作；供应商炼钢/冷轧在上游。

#### 输入

##### 产品流

###### 承压板用冷轧低碳钢卷 （`panel_steel`）

一种实际承压板钢牌号/厚度/供货状态，称量净领用/退回；炼钢/冷轧属于上游；翅片原料分开。

- 选定流： 承压板用冷轧低碳钢卷
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_forming`

###### 对流翅片用冷轧低碳钢带 （`fin_steel`）

仅配置散热器实际翅片；一种翅片薄板牌号/厚度，原料净领用另记；不规定所有板型必有翅片。

- 选定流： 对流翅片用冷轧低碳钢带
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_forming`

###### 矿物油基钢板成形润滑剂 （`forming_oil`）

仅实际规定成形油配方/净新消耗；记录退回/残留及实际化学组成；无通用油损失比例。

- 选定流： 矿物油基钢板成形润滑剂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_forming`

###### 交流电 （`forming_electricity`）

实测低于1kV电网交流电压制/切割/工具及可归属抽风需求；其他载体分开。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_forming`

#### 输出

##### 废物流

###### 工业后钢废料 （`steel_scrap`）

分称未经进一步处理出厂的干钢下料/修边废料；内部可复用原料及含油废料分开。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_forming`

### 过程：板缝与对流件连接（`joining`）

实际放行缝焊/点焊路线及接口集成；电阻焊不假定填丝/保护气；其他焊接/外包须独立实测清单。

#### 输入

##### 产品流

###### 钢制螺纹散热器水接口座 （`steel_connection`）

一种实际外购成品水接口座，含牌号/螺纹/涂层/质量；内部成形或外购板内含时省略采购。

- 选定流： 钢制螺纹散热器水接口座
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_joining`

###### 交流电 （`joining_electricity`）

实测低于1kV电阻缝焊/点焊及连接/抽风需求；当前工单确定焊接路线；电阻焊不假定焊丝/保护气。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_joining`

### 过程：检漏/承压测试与排空（`testing`）

当前型号特定验收测试程序决定介质/压力/时长/合格标准；液压水为条件项；气压测试实测压缩机需求；废品/返工纳入。

#### 输入

##### 产品流

###### 自来水 （`test_water`）

条件实际液压检漏/承压测试的净新饮用质量自来水，以kg水计，不计内部循环总泵流；气压测试路线另记；称M前排空干燥。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_testing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_testing`

###### 交流电 （`testing_electricity`）

实际放行测试路线低于1kV泵送/压缩空气制备/干燥需求；不是通用测试时长/压力；场内制备压缩空气为内部载体，不是重复能源采购。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_testing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_testing`

#### 输出

##### 废物流

###### 废弃散热器液压测试水 （`test_effluent`）

仅实际测试循环排放送处理的水，表征kg及溶解/悬浮污染物/处理方；循环在内部；不是水资源流或自动基本流排放。

- 选定流： 废弃散热器液压测试水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_testing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_testing`

### 过程：清洗与转化预处理（`pretreatment`）

仅实际场内清洗/预处理配方；不规定通用磷酸锌或碱性清洗剂；分别记录真实槽化学体系及水/热载体。

#### 输入

##### 产品流

###### 自来水 （`wash_water`）

仅实际清洗/漂洗饮用质量自来水补给；kg净新水，复用槽液在内部；去离子水须另列供货流。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_pretreatment。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_pretreatment`

###### 氢氧化钠溶液，50% （`sodium_hydroxide`）

条件记录清洗配方实际50%供货水溶NaOH试剂；kg溶液，不是kg有效NaOH或全部碱性清洗剂；其他成分分开。

- 选定流： 氢氧化钠溶液，50% `0a3e69c3-32c9-4cb8-b26c-21059c919d80`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_pretreatment。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_pretreatment`

###### 磷酸锌转化涂层溶液 （`zinc_phosphate_solution`）

条件一种实际配制磷酸锌磷化液，含供应商浓度/组成/质量；不替代铁/锰磷酸盐或磷化锌；其他转化化学体系分开。

- 选定流： 磷酸锌转化涂层溶液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_pretreatment。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_pretreatment`

###### 交流电 （`pretreatment_electricity`）

条件实测低于1kV清洗线泵及电加热槽；实际其他槽加热载体另列。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_pretreatment。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_pretreatment`

#### 输出

##### 废物流

###### 碱性钢板脱脂废水 （`wash_effluent`）

实际表征送明确处理的碱性清洗/漂洗排放，实测pH、油、NaOH及固体负荷；kg废液与水输入或环境物种不同。

- 选定流： 碱性钢板脱脂废水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_pretreatment。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_pretreatment`

###### 磷酸锌预处理污泥 （`phosphate_sludge`）

仅实际表征湿磷酸锌槽污泥，声明湿质量/干固体/水分/处理方；不是市政污泥。

- 选定流： 磷酸锌预处理污泥
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_pretreatment。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_pretreatment`

### 过程：底漆、喷粉与固化（`coating`）

声明表面涂覆路线；实际供应商成品件替代场内涂覆；底漆为条件项，粉末配方/固化载体/回收为场址特定。

#### 输入

##### 产品流

###### 水性环氧电泳底漆配方 （`epoxy_primer`）

可选实际一种供货环氧电泳底漆，含固含/槽补给及供应商规范；不规定所有板式散热器采用。

- 选定流： 水性环氧电泳底漆配方
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 涂料（粉末） （`powder_paint`）

实际一种规定聚酯—环氧树脂粉末配方，记录颜色/固含/SDS；净领用扣有效退回，内部回收粉不新增采购；其他树脂体系分开。

- 选定流： 涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 交流电 （`coating_electricity`）

实际低于1kV涂装线/烘炉/风机及分摊需求；仅实际电固化时计入。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 涂装烘炉用管输化石天然气 （`natural_gas`）

条件实际采购气态化石天然气，记录表计温度/压力/参考状态，m3。核实供气组成及计费修正；无通用密度/热值，不重复外购热。

- 选定流： 涂装烘炉用管输化石天然气
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

#### 输出

##### 废物流

###### 废弃聚酯—环氧粉末过喷粉 （`powder_waste`）

仅实际未复用规定干聚酯—环氧过喷粉送处理，不是内部回收粉；记录树脂/颜色及处理方。

- 选定流： 废弃聚酯—环氧粉末过喷粉
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

##### 基本流

###### 颗粒物，粒径未特指 （`powder_air`）

仅实际粉末工序实测控制后室外颗粒排放，空气子介质/粒径未特指；捕集粉末为废物/内部回收，不是排放。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

###### 二氧化碳（化石源） （`fossil_co2_air`）

仅实测或经验证实际场内烘炉燃料化石碳平衡至室外未特指空气的即时释放；分开留存碳、CO/未燃燃料及生物碳部分；无通用因子；外购电力上游CO2不在此计。

- 选定流： 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coating。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_coating`

### 过程：安装附件装配与放行（`release`）

安装声明盖件/堵头/排气件/阀，检查表面/接口，核对验收干式完整配置并称量净M。

#### 输入

##### 产品流

###### 黄铜散热器堵头 （`brass_plug`）

仅安装规定黄铜堵头，实际螺纹/合金/密封边界及净质量；另包装额外件排除M。

- 选定流： 黄铜散热器堵头
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_release。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_release`

###### 黄铜散热器手动排气堵头 （`brass_vent`）

仅实际安装声明合金/供货边界手动排气堵头；不是通用阀或自动排气占位。

- 选定流： 黄铜散热器手动排气堵头
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_release。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_release`

###### 内置黄铜散热器阀芯 （`integrated_valve`）

条件验收供货内工厂安装阀芯，记录实际合金/型号/内含密封；独立温控阀/温控头排除。

- 选定流： 内置黄铜散热器阀芯
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_release。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_release`

###### 成品钢制散热器顶格栅 （`top_grille`）

仅实际安装一种图纸/表面钢顶格栅，非自制时记采购；无格栅配置省略。

- 选定流： 成品钢制散热器顶格栅
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_release。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_release`

###### 成品钢制散热器侧盖 （`side_cover`）

每次一种实际安装钢侧盖图纸/表面；保留两侧数量，不是混合盖套装；不重复场内原料。

- 选定流： 成品钢制散热器侧盖
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_release。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_release`

###### EPDM散热器接口垫圈 （`epdm_gasket`）

仅一种实际安装EPDM垫圈规范/供货质量，不重复堵头内含密封；其他弹性体另列。

- 选定流： EPDM散热器接口垫圈
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_release。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_release`

###### 交流电 （`release_electricity`）

实际低于1kV最终安装/检验/干燥需求，含可归属废品/返工。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_release。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_release`

#### 输出

##### 产品流

###### 铁或钢制非电热的集中供暖散热器 （`finished_machine`）

1kg具体板/翅片/安装附件配置验收干燥排空完整焊接钢板散热器，实测M；排除独立安装套件及全部包装。

- 选定流： 铁或钢制非电热的集中供暖散热器 `a3bc941c-b74f-40e1-a32c-75888689ebdd`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_mass`

### 过程：运输防护与发运（`packing`）

仅实际膜/纸板/防护；独立安装套件另行披露；包装排除M。

#### 输入

##### 产品流

###### 聚乙烯薄膜 （`pe_film`）

实际PE包裹膜，记录配方/厚度/再生比例/净领用；包装排除散热器M；不是通用塑料配方。

- 选定流： 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_packing`

###### 瓦楞纸板 （`corrugated_board`）

仅实际依公开身份的C/E/F楞、纤维≥80%、含再生料纸板；核实供应商，否则保留另种具体纸板身份；排除M。

- 选定流： 瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_packing`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_direct | manufacturing | 优先工单领用/分表。按cp_allocation以实测因果需求或负载/时间分摊共用压机/焊机/槽/烘炉/压缩机，证明各驱动并将分摊加排除需求核对总量。不设固定比例，不自动沿用EPD案例质量分配。 |  |
| allocation_variants | configurations | 分别记录板/翅片数、尺寸、表面积、底漆/固化路线。仅验收台数未必解释共享能量。后备质量/经济方法须实测因果依据、敏感性及审查。 |  |
| allocation_scrap | waste | 跟踪实际废钢及槽/粉废物，不自动抵扣避免钢材或模块D。内部可复用原料/粉/水在内部。真正独立可销售产出须披露质量/数量及有依据共产品处理。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | release | finished_machine | measurement | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每验收配置/序列号或可追溯同质批次 | 相同制造时期 | 相同场址及干式安装供货 | 每台验收净质量 | 校准；干燥/排空状态；安装物料清单；签署放行 |
| cp_forming | forming | 本过程各原子行 | measurement | 钢牌号/厚度/路线及板面积；领用/退回；板/翅片尺寸/数量；实际压制/切割时间/负载/kWh；成形油配方；修边废料质量 | 分别称量各卷领用/有效退回及修边废料，追溯实际板/翅片排样/成形收率，计量压机/工具需求；不假定板厚/标准散热器重量或残差物料质量。 | kg; MJ | 每工单/批次/测试；每月核对 | 一个完整声明生产年或有理由较短完整批次；匹配验收台数 | 相同场址/配置；披露外包 | 可归属交换数量 / 验收设备数量 | 校准；供应商记录；库存/台数闭合；缺失数据 |
| cp_joining | joining | 本过程各原子行 | measurement | 焊接路线/接头图/电流/时间；接口合金/螺纹/质量；接头返工/废品；kWh；电极损耗及其他耗材 | 追溯接头工单/接口领用；分表缝焊/点焊及实际抽风；分别记录电极更换及各实际其他焊接耗材。 | kg; MJ | 每工单/批次/测试；每月核对 | 一个完整声明生产年或有理由较短完整批次；匹配验收台数 | 相同场址/配置；披露外包 | 可归属交换数量 / 验收设备数量 | 校准；供应商记录；库存/台数闭合；缺失数据 |
| cp_testing | testing | 本过程各原子行 | measurement | 型号/序列号；签署测试介质/压力/时间/标准；校准表；检漏结果/返工；新水/排放质量；压缩机/泵/干燥kWh；排空状态 | 保留实际放行测试方案/结果；计量水补给/能量，将循环与含污染表征/处理方的送处理排放分开；称M前确认排空干产品；无通用压力/时长。 | kg; MJ | 每工单/批次/测试；每月核对 | 一个完整声明生产年或有理由较短完整批次；匹配验收台数 | 相同场址/配置；披露外包 | 可归属交换数量 / 验收设备数量 | 校准；供应商记录；库存/台数闭合；缺失数据 |
| cp_pretreatment | pretreatment | 本过程各原子行 | measurement | 槽配方/SDS；NaOH供货浓度/质量；转化液组成；水质量/温度/密度/体积；净领用/退回；槽更换；湿泥质量/干固体；废液质量/处理方；kWh | 各化学品测实际溶液质量/净补给并保留供应商组成；称量含水基准污泥，单计送处理废液；槽共用热/泵按实测需求分摊；无通用浓度/消耗。 | kg; MJ | 每工单/批次/测试；每月核对 | 一个完整声明生产年或有理由较短完整批次；匹配验收台数 | 相同场址/配置；披露外包 | 可归属交换数量 / 验收设备数量 | 校准；供应商记录；库存/台数闭合；缺失数据 |
| cp_coating | coating | 本过程各原子行 | measurement | 粉/底漆配方/SDS/颜色/固含；净领用/退回/回收；干留存膜；实际固化路线/时间；kWh；燃气表参考温度/压力/供气组成；废粉；出口颗粒及化石碳平衡 | 各实际配方涂料/未复用废物分称，保留内部粉回收；按实际载体计烘炉/风机。控制后颗粒测量匹配气体体积/时间/粒径；CO2用实测化石碳输入/留存/其他输出或直接监测，不假定因子。 | kg; MJ; m3 | 每工单/批次/测试；每月核对 | 一个完整声明生产年或有理由较短完整批次；匹配验收台数 | 相同场址/配置；披露外包 | 可归属交换数量 / 验收设备数量 | 校准；供应商记录；库存/台数闭合；缺失数据 |
| cp_release | release | 本过程各原子行 | measurement | 型号/物料清单/序列号；板/翅片/盖件/接口供货；堵头/排气件/阀/垫圈及内含边界；干膜/留存状态；尺寸/焊接/检漏/表面验收；kWh；M；独立套件边界 | 追溯实际安装件并称量，核对供应商内含件/干膜；检查当前验收记录，计量最终安装/检验需求；独立五金为另供产品，不是散热器重量。 | kg; MJ | 每工单/批次/测试；每月核对 | 一个完整声明生产年或有理由较短完整批次；匹配验收台数 | 相同场址/配置；披露外包 | 可归属交换数量 / 验收设备数量 | 校准；供应商记录；库存/台数闭合；缺失数据 |
| cp_packing | packing | 本过程各原子行 | measurement | PE配方/厚度/再生比例/质量；纸板楞型/纤维/再生规范/质量；领用/退回；发运配置；独立五金清单 | 各实际包装物料分称并排除M；记录净领用及独立五金供货；实际木材/泡沫/胶带逐项新增，不用通用包装组合。 | kg | 每工单/批次/测试；每月核对 | 一个完整声明生产年或有理由较短完整批次；匹配验收台数 | 相同场址/配置；披露外包 | 可归属交换数量 / 验收设备数量 | 校准；供应商记录；库存/台数闭合；缺失数据 |
| cp_allocation | manufacturing | shared_demand | measurement | 总表需求；分表负载/时间；服务变型；排除负载 | 分表或测量各交换特定因果负载/实际时间，证明驱动并核对总供给需求。 | MJ; m3; h | 每共享批次；每月闭合 | 相同制造时期 | 全部服务变型及排除操作 | 按实测因果需求分摊；可归属数量 / 验收设备数量 | 闭合；分表比较；敏感性；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | panel_steel; fin_steel; forming_oil; forming_electricity; steel_scrap; steel_connection; joining_electricity; test_water; testing_electricity; test_effluent; wash_water; sodium_hydroxide; zinc_phosphate_solution; pretreatment_electricity; wash_effluent; phosphate_sludge; epoxy_primer; powder_paint; coating_electricity; natural_gas; powder_waste; powder_air; fossil_co2_air; brass_plug; brass_vent; integrated_valve; top_grille; side_cover; epdm_gasket; release_electricity; pe_film; corrugated_board | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

先将相同配置/时期净领用、可归属公用工程或实际废物/物种除验收台数得到q_item。废品/返工负担归验收产出。按实测干式M归一化，保留kg/M、MJ/M及气体m3/M分子。计费/单位修正及分摊分别可追溯；不用样本质量、热输出加权或通用密度。相容变型仅分别归一化后按披露质量加权汇总。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_identity | flows | 核实钢牌号/轧制状态、溶液浓度/树脂配方、安装供货、气质/参考状态及环境介质；公开身份及供应方清单不同。 | 供应商资料；state100身份/属性/单位审计 |
| quality_complete | radiator | 将干式安装物料清单/涂层核对M、全部实际原料/公用工程/化学投入及损耗/返工/测试、独立套件披露；不能按残差填未知零件质量。 | 校准称量；库存/槽平衡；签署放行 |
| quality_period | records | 声明场址/完整时期、变型、外包、公用工程路线、调整/空载负载、一手覆盖/不确定性；EPD历史场址数量/截断不是当前通用数据。 | 工单；校准；覆盖；来源限制 |
| quality_acceptance | release | 保留实际型号特定尺寸、焊接/检漏/承压、表面/安装供货验收；引用性能声明时保留实际条件；不推断通用EN442数值限值或认证状态。 | 放行规范；仪表；序列号/批次测试表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | 要求1kg输出及cp_mass实测干式完整设备M，核对具体板/翅片/安装附件供货；测试水/包装/独立五金不进入M。 |  |
| validation_normalization | inventory | 全部适用非参考行明确使用normalize_mass及声明采集协议；检查相同验收台数/时期/配置及分子单位。 |  |
| validation_routes | manufacturing | 将成形/连接/测试/预处理/涂覆匹配实际工厂记录；避免外购件/场内原料及回收粉重复；缺失实际化学品/介质/载体仍为缺口。 |  |
| validation_species | elementary_flows | 核实控制后室外空气未特指粒径颗粒及即时化石CO2至未特指空气；长期/高空流、生物CO2、总NOx、捕集粉及送处理废液不等价；实测燃烧物种逐项补充，不能假定全部NOx为NO2。 |  |
| validation_coverage | dataset | 区分实测/计算/估算/排除/不适用/缺失；核对验收干式产出、物料/槽循环及分摊需求。检查通过不批准科学方法、不继承EPD验证或建立完整从摇篮到工厂门覆盖。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 具体干式水暖钢板配置/场址/时期制造模块；上游连接评价仅另建供应方/运输/处理覆盖后采用。 |
| excluded_use | 建筑供热服务、运行水/热、通用散热器热工等价、寿命归一化比较及无依据完整从摇篮到工厂门/EPD声明。 |
| required_metadata | PCR标识；型号/物料清单/板/翅片/尺寸；干式安装净M及独立套件边界；测试/表面/性能条件；场址/时期；钢材/化学供应商及自制/外购；固化/气/电/槽路线；供应方/运输/废物；包装；分摊；来源/版本。 |
| required_quality_disclosure | 一手实测覆盖；未决身份/供应方/数量；遗漏路线；槽/水/粉循环；来源年龄/版本限制；分摊/修正；排放依据；不确定性/审查状态。 |
| update_trigger | 板/翅片/尺寸/安装供货变化；焊接/测试/涂覆/槽/公用工程修订；供应商/气质变化；新代表时期；证据/身份缺口解决。 |

## 11. 数据源

| Source id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| purmo-hub2894 | handbook | Purmo Group钢板散热器EPD HUB-2894，2025年3月21日，扬州2023案例；PDF/印刷第3–4页及第6页工艺图。https://manage.epdhub.com/declarations/file/download/epdSigned/lang/3494/en/ | 冷轧板/聚酯—环氧粉及压制/焊接/测试/涂装/包装路线案例；不采用数值能量、组成比例、默认分配、截断、安装/回收或热工因子。 |
| stelrad-panel-uk | handbook | Stelrad英国钢板散热器EPD，下载EPD-IES-0025108:001、2025年8月10日版，PDF/印刷第4页。在线项目目录显示003；仅采用保留001架构事实。https://api.prod.environdec.com/api/v1/EPDLibrary/Files/EPDs/ceb6cc5a-8851-447f-97cd-08ddc8250fc7/Documents | 仅独立制造商板/翅片、格栅/侧盖/附件及场址/型号涂层/包装差异案例；不采用型号重量、比例、质量分配、寿命或继承验证。 |
