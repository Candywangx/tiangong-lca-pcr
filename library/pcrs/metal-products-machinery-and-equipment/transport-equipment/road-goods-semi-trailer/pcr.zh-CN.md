---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.road-goods-semi-trailer
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 完整钢车架硬木平台公路货运半挂车制造

## 1. 范围与适用性

完整新非自装非自卸直钢车架硬木平台公路货运半挂车制造：场内车架制造、声明表面处理、硬木平台安装、外购行走/牵引/支撑及制动/灯光集成、出厂验收。声明一种具体型号/VIN及放行配置。本边界窄于CPC49229，不覆盖全部挂车型式。

排除全挂车、农业自装卸挂车、箱式/侧帘、冷藏、罐式、自卸、仅骨架、伸缩及动力装卸配置；牵引车、独立售卖零件、再制造/维修。货物、运输服务/吨公里、牵引车使用/燃料、装卸操作、分销、维护/寿命终结排除参考边界；出厂验收/返工属制造。不假定载荷、服务寿命或节油等效。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.road-goods-semi-trailer |
| classification_refs | CPC:3.0:49229; narrower |
| covered_products | 完整新非自装非自卸直钢车架硬木平台公路货运半挂车制造：场内车架制造、声明表面处理、硬木平台安装、外购行走/牵引/支撑及制动/灯光集成、出厂验收。声明一种具体型号/VIN及放行配置。本边界窄于CPC49229，不覆盖全部挂车型式。 |
| excluded_products | 排除全挂车、农业自装卸挂车、箱式/侧帘、冷藏、罐式、自卸、仅骨架、伸缩及动力装卸配置；牵引车、独立售卖零件、再制造/维修。货物、运输服务/吨公里、牵引车使用/燃料、装卸操作、分销、维护/寿命终结排除参考边界；出厂验收/返工属制造。不假定载荷、服务寿命或节油等效。 |
| representative_product | 一台新验收空载直钢车架硬木平台半挂车，含具体安装头板/立柱/支撑/牵引及行走制动电气配置；无通用桥数/硬木树种/载荷假定。 |
| production_route | 钢材/预成形件；车架制造；实际表面；硬木平台安装；外购装备集成；出厂测试/称量/放行；实际防护。 |
| market_state | 完整质量放行空载挂车，声明安装附件/留存脂/空气状态，无牵引车/货物/人员，包装/独立备件排除。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造并出厂验收一种声明完整硬木平台货运半挂车。 |
| How much | 1 kg验收净完整挂车，以实测M由一台归一化；不是载荷/吨公里。 |
| How well | 符合实际放行图纸/物料及型号特定车架平台、牵引支撑、行走制动/电气验收方案；保留实际具备测试/批准记录，不继承手册几何/头板额定/通用法律标准。 |
| How long or cycle | 一个制造/验收周期，无服务寿命/运输性能分母。 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 其他拖车和半拖车（包括用于货物运输的拖车和半拖车），但用于农业用途的自装或自卸拖车或半拖车除外 `f5728d65-de1b-4498-9f66-bb8ffdacdc8f` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号/VIN/物料修订；直车架几何/主梁横梁牌号/厚度/截面；原材与外购模块；平台树种/含水/尺寸/处理；表面配方/路线/自制外购；桥/悬架/制动/轮辋/轮胎零件号/供货内含范围；牵引销/接口及支腿；ABS与其他控制；灯光/线束；具体安装头板/立柱/绳钩/附件；空载交付状态/留存脂/空气；实测M；验收台数/场址/时期；当前放行方案/实际具备批准标识；公用工程/供货/运输/处理覆盖；独立备件/发运防护排除 |

实际数据集须声明全部必需限定信息；类别身份约束至本完整配置制造输出，不提供数值生产平均；缺失限定使参考不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| electricity_units | frame_electricity; finish_electricity; deck_electricity; assembly_electricity; release_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 计实际低于1kV电网用户能量，按3.6MJ/kWh将kWh转MJ；保留实际供应方/电压，不以质量/热载体替代。 |
| tyre_count | pneumatic_tyre | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 采集每验收台实际安装轮胎件数，以件作分子除M得到件/kg；另测胎净质量以闭合完整挂车质量；不将公开数量属性改成Mass。 |

称量绑定空载完整VIN/型号/物料：无牵引车、人员、货物、临时压载、发运防护/独立备件；单独记录安装头板/立柱/工具箱/备胎状态及留存脂/空气交付状态；拆卸交付附件为另供且排除M，披露拆装处理；样本皮重、允许总质量/额定载荷不能替代实测M；其他供给件数/体积转质量须实际同件重量或实测密度/含水/温度，无默认密度/件重。

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造厂接收钢材/预成形件、硬木板及放行外购行走/牵引/制动/电气件；钢轧制、锯切/干燥及部件制造属上游，除非记录明确追加场内模块。 |
| starting_condition_role | 声明挂车制造前景起点。 |
| product_classification_scope | 完整新非自装非自卸直钢车架硬木平台公路货运半挂车制造：场内车架制造、声明表面处理、硬木平台安装、外购行走/牵引/支撑及制动/灯光集成、出厂验收。声明一种具体型号/VIN及放行配置。本边界窄于CPC49229，不覆盖全部挂车型式。 |
| recursive_input_rule | 外购完整挂车不能替代部件；完整车架/平台/桥/制动模块替代内含场内原材/作业/零件；内部转移不成新外部交换；供应商内含与另装须核对。 |
| upstream_dataset_requirement | 扩展评价须实际钢/木/化学/部件、公用工程、外包、入厂/场际运输/处理相容供货清单；UUID建立身份，不是数量/供应方；仅场内前景不是完整从摇篮到工厂门。 |
| disclosure | 型号/VIN/物料修订；直车架几何/主梁横梁牌号/厚度/截面；原材与外购模块；平台树种/含水/尺寸/处理；表面配方/路线/自制外购；桥/悬架/制动/轮辋/轮胎零件号/供货内含范围；牵引销/接口及支腿；ABS与其他控制；灯光/线束；具体安装头板/立柱/绳钩/附件；空载交付状态/留存脂/空气；实测M；验收台数/场址/时期；当前放行方案/实际具备批准标识；公用工程/供货/运输/处理覆盖；独立备件/发运防护排除 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_frame | frame | Dennison制造页描述多钢牌号/外购行走件，不是通用合金/工艺配方；用实际图纸切割/成形/连接路线及部件供货边界。 | dennison-manufacture |
| boundary_deck | deck | Dennison标准平台及独立Montracon标准平板案例支持硬木平台架构；记录实际树种/尺寸/含水，无公开板厚/头板额定作为默认。 | dennison-platform; montracon-flat |
| boundary_routes | inventory | 每卡为一种物理交换/路线特定候选，不是通用强制物料；实际其他涂层/悬架/连接/外包路线逐项增列具体供货材料/载体/废物/有依据排放；有依据缺席与缺失数据分开；场内公用工程生产一次纳入实际实测模块。 |  |
| boundary_service | release | 出厂功能测试属制造；实际明确边界测试之外运输服务/牵引车运行排除；不将非动力半挂车视为必然有发动机尾气。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| frame | 钢车架制造 | required | 接收钢材/声明预成形件，按放行图纸切割/钻孔/成形/连接主梁、横梁、侧构件/牵引支撑接口；外购完整车架替代内含場内物料/作业。 | foreground | 内部转移；完整验收挂车参考 |
| finish | 车架表面前处理与涂覆 | conditional | 仅实际场内作业纳入；清洗/环氧/聚氨酯/电固化为具体条件案例，不是推定通用必需；已处理车架/外包处理替代内含作业。 | foreground | 内部转移；完整验收挂车参考 |
| deck | 硬木载货平台安装 | required | 安装实际声明硬木板/紧固至车架；制造商克隆木案例不规定所有挂车树种/板厚/含水；场内加工与外购完整已装平台明确分开。 | foreground | 内部转移；完整验收挂车参考 |
| assembly | 行走牵引及装备集成 | required | 安装具体放行行走、牵引销/支腿、制动/电气装备；声明悬架/控制变型及安装系固附件；避免重复供货内含件。 | foreground | 内部转移；完整验收挂车参考 |
| release | 出厂测试、验收与称量 | required | 执行实际图纸/型号特定尺寸、牵引/支撑、制动/检漏、轮胎/轮辋、灯光/控制/放行检查；记录返工/验收台数及校准空载完整挂车M；不推定通用测试压力/制动限值/头板额定。 | foreground | finished_machine |
| packing | 发运防护 | conditional | 仅实际逐项实测防护供给，排除挂车M；独立备件另记。 | foreground | 内部转移；完整验收挂车参考 |

### 过程：钢车架制造（`frame`）

接收钢材/声明预成形件，按放行图纸切割/钻孔/成形/连接主梁、横梁、侧构件/牵引支撑接口；外购完整车架替代内含場内物料/作业。

#### 输入

##### 产品流

###### 钢板 （`frame_plate`）

条件实际热轧低合金高强厚板用于自制主梁翼缘/腹板或牵引承载板，记录图纸牌号/厚度/净领用；其他牌号/外购成品梁分别列行并替代内含板/作业。

- 选定流： 钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_frame`

###### 成品钢制横梁槽形件 （`crossmember_channel`）

实际一种外购槽形横梁规范、牌号/截面/净质量；场内板成形以具体板材/成形需求替代采购。

- 选定流： 成品钢制横梁槽形件
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_frame`

###### 热轧钢制侧边框角钢 （`siderave_angle`）

实际一种侧边框角钢截面/牌号/长度/质量；手册尺寸不是默认值；非内含的不同绳钩、插座/头板构件各自列物料行。

- 选定流： 热轧钢制侧边框角钢
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_frame`

###### 实心低合金钢MIG焊丝 （`solid_wire`）

条件实际实心MIG焊丝牌号/直径/净领用用于图纸接头；药芯/其他焊接路线须独立具体卡。

- 选定流： 实心低合金钢MIG焊丝
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_frame`

###### 氩保护气 （`argon`）

条件实际纯氩气实测气瓶净供质量，仅放行工艺采用时纳入；混合保护气为独立配气交换。

- 选定流： 氩保护气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_frame`

###### 交流电 （`frame_electricity`）

实际低于1kV电网用户切割/钻孔/成形/连接/抽风需求，含废品返工，表计净耗能；不将通用钢材生产电力插入场内前景。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_frame`

#### 输出

##### 废物流

###### 工业后钢废料 （`steel_scrap`）

实际出场干燥未处理分流车架钢边角/切屑；内部复用边料为转移，无避免钢材抵扣。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_frame`

##### 基本流

###### 颗粒物，粒径未特指 （`weld_pm`）

仅有依据控制后切割/焊接颗粒即时至室外未特指空气且粒径未特指；捕集金属尘为另识别废物，无假定排放因子。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_frame`

### 过程：车架表面前处理与涂覆（`finish`）

仅实际场内作业纳入；清洗/环氧/聚氨酯/电固化为具体条件案例，不是推定通用必需；已处理车架/外包处理替代内含作业。

#### 输入

##### 产品流

###### 自来水 （`wash_water`）

条件外供市政清洗/漂洗补给；内部循环不重复计采购。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

###### 氢氧化钠溶液，50% （`sodium_hydroxide`）

仅实际存在以50%供货NaOH溶液成分；计供液质量，不是活性NaOH/工作槽浓度；其他清洗剂分别命名。

- 选定流： 氢氧化钠溶液，50% `0a3e69c3-32c9-4cb8-b26c-21059c919d80`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

###### 配方环氧防腐底漆 （`epoxy_primer`）

条件一种实际供货底漆配方/固含/净领用；另供固化剂/溶剂分卡；外包表面替代内含场内化学/能耗。

- 选定流： 配方环氧防腐底漆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

###### 配方聚氨酯车架面漆 （`pu_topcoat`）

条件一种实际供货混合聚氨酯面漆，记录SDS/树脂/溶剂/固含；不从涂漆产品照片推定该路线；其他表面配方另记。

- 选定流： 配方聚氨酯车架面漆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

###### 交流电 （`finish_electricity`）

实际低于1kV前处理/涂覆泵/风机/电固化；非电供热增列实测具体载体及有依据排放。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

#### 输出

##### 废物流

###### 送处理的车架废碱洗液 （`wash_effluent`）

条件一种实际湿碱洗排液，实测组分/处理去向；不是水资源/假定基础水排放。

- 选定流： 送处理的车架废碱洗液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

###### 废涂料残渣 （`paint_waste`）

条件单一配方聚氨酯面漆过喷残渣，以实际收集湿质量送处理；底漆残渣/滤材/污泥为不同流。

- 选定流： 废涂料残渣 `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

##### 基本流

###### 二甲苯（所有异构体） （`xylene_air`）

仅实际实测控制后二甲苯异构体CAS1330-20-7即时至室外未特指空气，由SDS/物种确认；总VOC、纯间二甲苯、水/土壤/长期身份不同。

- 选定流： 二甲苯（所有异构体） `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_finish`

### 过程：硬木载货平台安装（`deck`）

安装实际声明硬木板/紧固至车架；制造商克隆木案例不规定所有挂车树种/板厚/含水；场内加工与外购完整已装平台明确分开。

#### 输入

##### 产品流

###### 实木克隆木载货平台板 （`keruing_board`）

实际一种外购实木克隆木板，记录树种、含水率/尺寸/机加工/防腐状态/接收质量；其他硬木树种另识别列行，不假定为克隆木。

- 选定流： 实木克隆木载货平台板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_deck。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_deck`

###### 钢螺钉 （`deck_screw`）

实际一种平台固定螺钉放行规范/等级/涂层/尺寸/净质量；不同螺母/垫圈/螺栓规范分别列行。

- 选定流： 钢螺钉 `aa43b425-20e7-49c0-9ea9-ecf7b1004951`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_deck。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_deck`

###### 交流电 （`deck_electricity`）

实际低于1kV板切割/钻孔/安装/抽风需求，含废品；外购完整已安装平台替代内含板/紧固/场内作业。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_deck。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_deck`

#### 输出

##### 废物流

###### 送处理的未处理实木克隆木边角料 （`wood_offcut`）

实际分流未处理实木板边角及记录含水率；排除木屑/处理/涂漆木材，分别须独立卡；内部留存库存不是外排废物。

- 选定流： 送处理的未处理实木克隆木边角料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_deck。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_deck`

### 过程：行走牵引及装备集成（`assembly`）

安装具体放行行走、牵引销/支腿、制动/电气装备；声明悬架/控制变型及安装系固附件；避免重复供货内含件。

#### 输入

##### 产品流

###### 成品钢制半挂车牵引销 （`kingpin`）

实际一种放行牵引销零件号、牵引接口/等级/安装/净质量；牵引车侧牵引座排除挂车边界。

- 选定流： 成品钢制半挂车牵引销
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 半挂车支腿总成 （`landing_gear`）

实际一种外购完整支腿子总成，声明内含支腿/横轴/摇柄及供货状态，实测净质量；身份叙述1%估计不是数量规则。

- 选定流： 半挂车支腿总成 `a3052c30-5951-4e1f-b8e7-321e582f7ae0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 车轴总成 （`axle_assembly`）

实际一种放行挂车桥总成零件号/接收净质量；声明轮毂/制动/悬架内含或排除；各不同桥设计分开，无通用桥数/额定。

- 选定流： 车轴总成 `7c212dac-58e0-4610-87e8-aa7b4cbdc437`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品弹性体空气悬架弹簧 （`air_spring`）

条件实际另供挂车气簧零件号/净质量；桥/悬架模块内含则省略；其他弹簧架构独立具体卡。

- 选定流： 成品弹性体空气悬架弹簧
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品弹簧气制动气室 （`brake_chamber`）

条件实际另供气室零件号/净干质量，仅桥/制动模块非内含时；纯行车气室另记。

- 选定流： 成品弹簧气制动气室
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品钢制压缩空气制动储气筒 （`brake_reservoir`）

实际一种放行储气筒零件号/容积/净质量；阀件排除，除非供应商明确内含。

- 选定流： 成品钢制压缩空气制动储气筒
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品气制动继动阀 （`brake_relay`）

实际一种放行继动阀零件号/供货质量；省略模块内含阀，不同阀功能分别识别。

- 选定流： 成品气制动继动阀
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品挂车ABS电子控制器 （`abs_controller`）

条件实际放行独立ABS控制器零件号/版本/净质量；EBS及阀控合体模块供货范围不同；不假定通用ABS技术。

- 选定流： 成品挂车ABS电子控制器
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 聚酰胺气制动管 （`brake_tube`）

实际一种聚酰胺管牌号/压力/直径/长度/净质量；另购接头/柔性橡胶管分别列行。

- 选定流： 聚酰胺气制动管
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 拖车用钢制车轮轮辋 （`steel_wheel`）

实际一种放行挂车钢轮辋直径/偏距/载荷规范/供货干质量；排除轮胎及模块内含车轮。

- 选定流： 拖车用钢制车轮轮辋 `c111cb85-8ade-41b4-a334-393b24019136`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 轮胎 （`pneumatic_tyre`）

实际一种新橡胶充气挂车轮胎规范、尺寸/载荷及实测供货件数；保留公开物品数量，归一化为件每千克挂车；实际轮胎净质量另记以核对整车M，无默认胎重。

- 选定流： 轮胎 `11c2e97a-624f-41de-957d-543cddb777ef`
- 流属性/单位： 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品挂车LED后组合灯 （`tail_lamp`）

实际一种完整放行灯零件号/净质量及声明光学/电气功能；另供侧标志灯为不同产品。

- 选定流： 成品挂车LED后组合灯
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 成品绝缘铜挂车线束 （`wiring_harness`）

实际一种放行终检线束零件号、接头/绝缘/长度/净质量；中间成形线束不等于完整已测供货。

- 选定流： 成品绝缘铜挂车线束
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 配方矿物锂基润滑脂 （`mineral_grease`）

条件一种实际供应商脂配方/等级/净注入用于工厂润滑；部件供货内含留存脂不再计追加采购。

- 选定流： 配方矿物锂基润滑脂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

###### 交流电 （`assembly_electricity`）

实际低于1kV吊装/总装/装胎需求，含返工；压缩空气生成纳入实测公用工程，不另增未特指能耗交换。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_assembly`

### 过程：出厂测试、验收与称量（`release`）

执行实际图纸/型号特定尺寸、牵引/支撑、制动/检漏、轮胎/轮辋、灯光/控制/放行检查；记录返工/验收台数及校准空载完整挂车M；不推定通用测试压力/制动限值/头板额定。

#### 输入

##### 产品流

###### 交流电 （`release_electricity`）

实际低于1kV检查/制动台、检漏/灯光及可归属场内空压机负载；外购压缩空气须独立明确物理交换及压力/基准。

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

###### 其他拖车和半拖车（包括用于货物运输的拖车和半拖车），但用于农业用途的自装或自卸拖车或半拖车除外 （`finished_machine`）

1kg完整新验收空载直钢车架硬木平台公路货运半挂车归一化份额，含具体行走/牵引/支撑/制动/灯光及声明交付状态；限定信息约束类别身份，无运输服务/通用挂车混合。

- 选定流： 其他拖车和半拖车（包括用于货物运输的拖车和半拖车），但用于农业用途的自装或自卸拖车或半拖车除外 `f5728d65-de1b-4498-9f66-bb8ffdacdc8f`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：参考流 (`reference_flow`)
- 证据类型：采集记录 (`collected_record`)
- 采集协议： `cp_mass`

### 过程：发运防护（`packing`）

仅实际逐项实测防护供给，排除挂车M；独立备件另记。

#### 输入

##### 产品流

###### 聚乙烯薄膜 （`pe_film`）

条件实际PE防护膜配方/厚度/净质量，排除挂车M，无必需整平台包裹。

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

条件一种实际C/E/F楞纤维≥80%含再生纸板规范/净质量，排除M；其他纸板规范分别识别。

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
| allocation_causal | shared_operations | 优先型号/场址/工单细分；共享切焊、表面、木加工、吊运/测试按cp_allocation各交换实测因果负载/时间或可归属需求分摊，核对总供给/排除作业；无默认载荷/桥数/挂车质量/平台面积分配。 |  |
| allocation_variants | variants | 车架几何/牌号、平台树种/状态、行走制动控制/表面变型分开，各按自身实测M归一化；后备物理/经济分配须实际记录/敏感性/审查，不造百分比；返工/废品负担保留至验收生产。 |  |
| allocation_recovery | outputs | 内部钢/木/漆/水回收为转移，无自动避免生产/回收抵扣；外排废物/处理明确记录；可销售共产品须实测质量/数量及独立审查处理；不以木质量单独推生物储碳/未来回收抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | release | finished_machine | measurement | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每VIN或可追溯同配置批次 | 相同声明制造时期 | 相同空载验收交付配置 | 每台验收净质量 | 整车秤校准；空载无牵引车状态；安装附件/脂/空气声明；签署验收 |
| cp_frame | frame | 各原子过程行 | measurement | 图纸/钢牌号/厚度；具体截面/自制外购；净领退；焊接工艺/丝/气；kWh；废品/返工工单；边角/捕集尘；控制后颗粒浓度/气流/时间/粒径 | 称具体钢/耗材/出场分流废钢，核对排样/复用库存；计实际工单需求并按接收空气/粒径条件采样出口颗粒；捕集尘另命名废物，不是排放。 | kg; MJ | 每工单/批次/VIN；每月库存闭合 | 完整声明年或有理由较短完整批次；匹配验收台数 | 相同配置/场址；外包披露 | 可归属交换数量 / 验收设备数量 | 校准；供货/物料放行；库存/台数闭合；缺失记录 |
| cp_finish | finish | 各原子过程行 | measurement | 供货SDS/配方/固含/浓度；净化学/漆供给/回收；留存膜；废液/残渣组分；kWh；外包范围；二甲苯物种/气流/时间 | 各实际供货成分/不同湿废物分测，核对槽/漆库存/留存膜/回收；采样控制后二甲苯物种，不将全部VOC当二甲苯；实际其他前处理/涂层供給逐项记录。 | kg; MJ | 每工单/批次/VIN；每月库存闭合 | 完整声明年或有理由较短完整批次；匹配验收台数 | 相同配置/场址；外包披露 | 可归属交换数量 / 验收设备数量 | 校准；供货/物料放行；库存/台数闭合；缺失记录 |
| cp_deck | deck | 各原子过程行 | measurement | 树种/供货/加工/处理；实际含水/接收质量；尺寸；螺钉规范/净质量；边角/木屑/回收；kWh | 按记录含水分别称接收板/出场边角；安装板几何/实测及领退与工单核对；分别识别木屑/捕集尘及有依据室外木颗粒；无默认木密度/产率/生物碳储存抵扣。 | kg; MJ | 每工单/批次/VIN；每月库存闭合 | 完整声明年或有理由较短完整批次；匹配验收台数 | 相同配置/场址；外包披露 | 可归属交换数量 / 验收设备数量 | 校准；供货/物料放行；库存/台数闭合；缺失记录 |
| cp_assembly | assembly | 各原子过程行 | measurement | 供货范围/零件号/放行干质量；桥/制动/悬架内含；轮辋/胎规范/件数；轮胎称量；牵引销/支撑接口；气路/电图；脂净注入；安装附件；kWh | 逐件及供货内含范围核对VIN绑定放行物料/实际件重；计具体新充气胎规范件数，交换保留物品数量，另留实测胎质量核对完整M；记录安装扭矩/定位/实际脂注入。 | kg; MJ; Item(s) | 每工单/批次/VIN；每月库存闭合 | 完整声明年或有理由较短完整批次；匹配验收台数 | 相同配置/场址；外包披露 | 可归属交换数量 / 验收设备数量 | 校准；供货/物料放行；库存/台数闭合；缺失记录 |
| cp_release | release | 各原子过程行 | measurement | VIN/配置/测试方案；牵引/支撑/制动/检漏/灯光/控制检查/验收；返工；验收台数；表计kWh/空压机可归属負载；空载完整M；留存脂/空气状态 | 记录实际放行测试结果/公用工程含返工；称空载完整交付挂车，排除牵引车/人员/货物/临时压载/包装；出厂路试牵引车/运输需求以单独实测明确边界支持记录，不当挂车推进/假定服务燃料。 | kg; MJ | 每工单/批次/VIN；每月库存闭合 | 完整声明年或有理由较短完整批次；匹配验收台数 | 相同配置/场址；外包披露 | 可归属交换数量 / 验收设备数量 | 校准；供货/物料放行；库存/台数闭合；缺失记录 |
| cp_packing | packing | 各原子过程行 | measurement | PE配方/厚度/净质量；纸板楞型/纤维/再生含量/质量；退回；独立备件表 | 逐种防护件分称并排除M；保留备件/安装与独立附件声明。 | kg | 每工单/批次/VIN；每月库存闭合 | 完整声明年或有理由较短完整批次；匹配验收台数 | 相同配置/场址；外包披露 | 可归属交换数量 / 验收设备数量 | 校准；供货/物料放行；库存/台数闭合；缺失记录 |
| cp_allocation | manufacturing | shared_load | measurement | 总供给需求；分表负载/时间；服务变型；排除作业 | 测各交换特定因果需求/时间及服务工单，证明驱动并将全部份额核对总表。 | MJ; h | 每共享批次；每月核对 | 相同生产时期 | 全部服务场址/变型 | 分摊实测因果需求；可归属数量 / 验收设备数量 | 总表闭合；敏感性；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | frame_plate; crossmember_channel; siderave_angle; solid_wire; argon; frame_electricity; steel_scrap; weld_pm; wash_water; sodium_hydroxide; epoxy_primer; pu_topcoat; finish_electricity; wash_effluent; paint_waste; xylene_air; keruing_board; deck_screw; deck_electricity; wood_offcut; kingpin; landing_gear; axle_assembly; air_spring; brake_chamber; brake_reservoir; brake_relay; abs_controller; brake_tube; steel_wheel; pneumatic_tyre; tail_lamp; wiring_harness; mineral_grease; assembly_electricity; release_electricity; pe_film; corrugated_board | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

q_item为库存/回收/废品/返工核对后同一时期/配置可归属净交换除完整验收台数；再除校准实测M，保留kg、MJ或轮胎Item(s)分子；用件数/体积得到其他行质量须实际件称量或同配方实测密度/含水/温度及明确换算；质量核对另求实际安装物料/部件/留存涂层润滑剂，胎件数不数值加至kg；无假定残差物料/机重闭合；相容变型仅分别归一化后以披露实测权重/不确定性汇总。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_identity | flows | 核实具体钢牌号/形态、木树种/含水/处理、涂层供货组分/部件完整性；保留公开属性/声明胎件数基准；不以集合零件/运输服务/牵引车牵引座代本产品。 | 放行图纸；供货规范/SDS；身份审计 |
| quality_mass | finished_machine | 校准空载完整M绑定具体安装头板/立柱/行走/支撑/制动/灯光及留存脂/空气状态；核对净原材/件重/另测胎重，记录残差不确定性，不造数量。 | VIN物料；校准秤；库存闭合；供货内含 |
| quality_acceptance | release | 保留实际车架/平台/牵引/支撑、桥/轮辋/胎、制动/检漏、灯光/控制/放行记录；无日期制造商质量宣称、冲突头板额定/历史焊标提及不是当前方法学验收限。 | 签署当前测试；实际具备批准；仪器校准 |
| quality_coverage | dataset | 声明场址/时期、供货版本、一手覆盖、不确定性及实测/计算/估算/缺失/排除/不适用状态；各实际其他路线须完整实测交换；架构来源本身不提供工厂清单/默认范围。 | 工单；表计；采样条件；路线覆盖/缺失登记 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | 要求1kg完整输出及cp_mass校准M绑定具体空载VIN/物料/安装交付状态；载荷/样本皮重/允许总质量/桥额定/牵引车质量/吨公里不替代。 |  |
| validation_basis | inventory | 各适用非参考行用normalize_mass/声明协议，匹配台数/时期/配置；保留胎物品数量/实际计数分子；分别审计单位/供货质量换算依据。 |  |
| validation_supply | components | 核对外购车架/平台/桥/制动模块内含与另装件，剔重复原材/作业/脂；不同安装附件/紧固设计须自身原子行；必要制造/总装与条件交换须区分。 |  |
| validation_releases | elementary | 颗粒/二甲苯须实际物质、接收介质/子介质/控制后出口依据；捕集尘/排液为另废物；粒径分级替代重复未特指粒径；其他实际物种有依据逐项增列；不造挂车发动机排放或将NO映NO2/N2O。 |  |
| validation_completeness | dataset | 声明未决身份/数量、供货/运输/处理/其他路线覆盖；使用须完整逐产品前景记录/适用验收；结构检查通过既不批准方法学也不建立完整从摇篮到工厂门。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明场址/时期具体配置完整直钢车架硬木平台非自装非自卸半挂车制造；扩展上游评价须独立供货/运输/处理完整性。 |
| excluded_use | 排除全挂车、农业自装卸挂车、箱式/侧帘、冷藏、罐式、自卸、仅骨架、伸缩及动力装卸配置；牵引车、独立售卖零件、再制造/维修。货物、运输服务/吨公里、牵引车使用/燃料、装卸操作、分销、维护/寿命终结排除参考边界；出厂验收/返工属制造。不假定载荷、服务寿命或节油等效。 |
| required_metadata | 型号/VIN/物料修订；直车架几何/主梁横梁牌号/厚度/截面；原材与外购模块；平台树种/含水/尺寸/处理；表面配方/路线/自制外购；桥/悬架/制动/轮辋/轮胎零件号/供货内含范围；牵引销/接口及支腿；ABS与其他控制；灯光/线束；具体安装头板/立柱/绳钩/附件；空载交付状态/留存脂/空气；实测M；验收台数/场址/时期；当前放行方案/实际具备批准标识；公用工程/供货/运输/处理覆盖；独立备件/发运防护排除 |
| required_quality_disclosure | 当前图纸/物料/供货内含；空载交付配置；实际M/台数；分子单位/件数换算；实测覆盖/测试/返工/回收/平衡；分配/不确定性；身份/供货/运输/处理缺口；来源限制；审查状态。 |
| update_trigger | 车架几何/牌号、硬木树种/状态、表面/自制外购、行走制动控制牵引支撑供货/配置、附件/交付状态、出厂测试/场址/公用工程/时期变化或证据/身份缺口解决。 |

## 11. 数据源

| Source id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| dennison-platform | handbook | Dennison标准平台挂车，无日期官方HTML，Standard Platform Trailer及Feature and Benefit Summary章节，无分页。https://dennisontrailers.com/our-trailers/platforms/standard-platform-trailer/ | 仅克隆木平台/立柱插座/头板案例架构；冲突19/17吨头板说法不采用；不规定厚度/尺寸/载荷额定/认证/重量/寿命/清单因子。 |
| montracon-flat | handbook | Montracon多用途平板产品系列，无日期官方HTML，Standard Flat Platform Trailers小节；排除后续Urban/PSK变型，无分页。https://montracon.com/flat-product-range/ | 仅独立钢主梁/侧边框及硬木板架构，不是通用钢牌号/几何/硬木树种/载荷认证/数值制造清单。 |
| dennison-manufacture | handbook | Dennison制造，无日期官方HTML，Manufacture段落，无分页。https://dennisontrailers.com/what-makes-a-dennison-trailer/manufacture/ | 仅制造商特定钢牌号多样、外购行走及质量/焊接检查架构；历史2012系统/EN25817提及不建立当前合规/必需标准；实际图纸记录决定，不采用数量。 |
