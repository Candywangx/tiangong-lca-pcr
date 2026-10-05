---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.railway-passenger-coach
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非自行不锈钢铁路客车制造

## 1. 范围与适用性

制造新完整机车牵引座式空调铁路客车，采用焊接不锈钢车体：实际底架车体制造、表面处理、外购无动力转向架与车体落成、内装制动电气空调安装、有界工厂测试及修正净质量验收。适用性由一种放行型号修订、轨距、座椅车门制动空调及供货模块配置限定；实际底架的非不锈钢部分单独声明。本产品子集窄于CPC49532，是制造模块，不表示旅客运输性能。

排除自行电柴油动车、机车、动力电车、完整列车组、驾驶控制客车、卧铺餐车邮政行李专用车、维修服务车、独售部件大修重建，以及铝摩擦搅拌焊等其他车体路线。排除旅客公里、牵引机车制造运行燃料、旅客运营能水、在用维护、铁路基础设施及报废。本参考不交付运营服务；实际外包制造和验收移动须明确起终点及归属支持投入，不得静默遗漏或声称完整摇篮到门覆盖。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.railway-passenger-coach |
| classification_refs | CPC:3.0:49532; narrower |
| covered_products | 制造新完整机车牵引座式空调铁路客车，采用焊接不锈钢车体：实际底架车体制造、表面处理、外购无动力转向架与车体落成、内装制动电气空调安装、有界工厂测试及修正净质量验收。适用性由一种放行型号修订、轨距、座椅车门制动空调及供货模块配置限定；实际底架的非不锈钢部分单独声明。本产品子集窄于CPC49532，是制造模块，不表示旅客运输性能。 |
| excluded_products | 排除自行电柴油动车、机车、动力电车、完整列车组、驾驶控制客车、卧铺餐车邮政行李专用车、维修服务车、独售部件大修重建，以及铝摩擦搅拌焊等其他车体路线。排除旅客公里、牵引机车制造运行燃料、旅客运营能水、在用维护、铁路基础设施及报废。本参考不交付运营服务；实际外包制造和验收移动须明确起终点及归属支持投入，不得静默遗漏或声称完整摇篮到门覆盖。 |
| representative_product | 一台验收新不锈钢座式客车，声明无动力转向架及实际空调门窗辅助配置；不规定通用轨距座数空车质量。 |
| production_route | 底架与不锈钢车体制造; 表面前处理与涂覆; 无动力转向架落成及制动接口; 乘客内装与辅助系统安装; 工厂检验测试与净质量验收 |
| market_state | 完整验收客车含安装表及留存技术预充一次；乘客行李饮用水便器服务库存、包装独立备件临时试具排除净M。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造验收完整声明非自行客车。 |
| How much | 1 kg验收净制造输出，由同一完整验收设备实际M kg换算。 |
| How well | 放行设计供货配置及当前实际合同主管验收记录；不将制造商宣传数值设通用阈值。 |
| How long or cycle | 一个有记录的制造验收周期，非全寿命旅客服务，不编造使用寿命。 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 铁路或有轨电车用非自动客车，非自动行李车、邮政车及其他铁路或有轨电车专用车辆（维修或服务车除外） `125d4ce1-c7db-4b0a-bcf6-82c0b0385d13` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 客车标识型号及放行设计修订；机车牵引无动力状态；车体底架牌号板厚连接表面；轨距转向架轴制动车钩配置；座椅车门车窗地板空调便器电池电气安装表；实际空调制冷剂充注及供货预充；自制外购模块内含；技术流体与服务试验库存及净交付状态；场址时期验收数返工；当前验收方案及实际有界支持移动；校准完整设备轮轴称量原件修正实测净M kg；独立实测安装物料质量及不确定性；上游供货公用运输处理覆盖 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| electricity_energy | body_power; coat_power; running_power; outfit_power; test_power | Energy `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留实际电能分子，计量kWh按3.6 MJ/kWh换算；内部转移能量不作第二购入供应。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明制造装配场的已识别接收薄板底架库存及成品外购无动力转向架内装部件；初级冶炼及供货模块内含制造不自动作前景。 |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC:3.0:49532; narrower |
| recursive_input_rule | 外购完整客车车壳作已识别上游投入并声明供货状态，只有实际追加装配返工作前景；不得将库存到完整客车路线递归复制给已完整设备。 |
| upstream_dataset_requirement | 扩展前景之外前须有实际材料转向架内装空调、公用运输废物处理相容供货模块，声明属性配置内含预充。 |
| disclosure | 声明实际自制外购起点场址时期子工序供货内含、公用测试支持转移、技术与服务库存、排除缺口上游覆盖；不默认称前景记录完整摇篮到门。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_actual | manufacture | 遵从放行实际图纸工单进行库存制造、有资质连接及供货模块集成；各实际追加材料公用处理需自身原子行和记录，条件化学示例非规定。 |  |
| boundary_package | running; outfit | 完整供货转向架含声明轮对悬挂制动；完整空调门座模块含内件流体；只记录独立追加库存，无重复；实际场内造架部件须扩展物理作业，外购kg不能替未记工厂作业。 |  |
| boundary_trials | acceptance | 声明静态制动电气空调水密测试及实际验收移动；牵引试验保留支持车辆供货活动及实测归属燃能或外包运输模块；旅客运营及牵引机车仍在参考输出之外。 |  |
| boundary_net | finished_machine | 完整安装配置技术流体一次交付；实测服务试验水人员行李替代负载包装临时附件以签署修正扣除。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `body` | 底架与不锈钢车体制造 | required | 按放行图纸及工艺资质进行实际库存接收切割成形连接；预制供货模块替代内含作业。 | foreground_manufacturing | 1kg验收输出；同一配置 |
| `coat` | 表面前处理与涂覆 | conditional | 只在实际执行处纳入清洗、另供涂层及固化；不要求全部不锈钢表面喷漆。 | foreground_manufacturing | 1kg验收输出；同一配置 |
| `running` | 无动力转向架落成及制动接口 | required | 具体外购无动力转向架含声明轮对悬挂架上制动；连接车体侧车钩阀储罐；场内造架须独立原子物料工序扩展。 | foreground_manufacturing | 1kg验收输出；同一配置 |
| `outfit` | 乘客内装与辅助系统安装 | required | 安装实际座椅车窗车门及配置地板保温空调电气便器安装表；外购完整模块替代内含部件预充。 | foreground_manufacturing | 1kg验收输出；同一配置 |
| `acceptance` | 工厂检验测试与净质量验收 | required | 当前实际配置特定静态功能泄漏制动检查，要求时有界试验、返工及校准净称量。 | foreground_manufacturing | 1kg验收输出；同一配置 |

各行是具体初始交换候选，不是固定穷尽物料表；须按实际安装表扩展分别牌号部件化学包装及实测排放；条件不存在须记录，不编零；内部模块转移非追加外部产品。

### 过程：底架与不锈钢车体制造（`body`）

按放行图纸及工艺资质进行实际库存接收切割成形连接；预制供货模块替代内含作业。

#### 输入

##### 产品流

###### 冷轧不锈钢客车车体薄板（`stainless_sheet`）

记录实际放行牌号、厚度、表面及炉号，领料减退料，含切割成形焊接返工；不假定底架全为不锈钢。

- 选定流： 冷轧不锈钢客车车体薄板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_body`
- 来源：

###### 热轧低合金钢客车底架板（`underframe_plate`）

实际底架采用非不锈钢时记录供货牌号厚度范围；外购已成底架替代内含材料作业。

- 选定流： 热轧低合金钢客车底架板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_body`
- 来源：

###### 实芯不锈钢气体保护焊丝（`stainless_wire`）

仅实际焊接工艺使用时，记录焊丝化学组成直径、领退质量、留存焊缝与损耗；实际焊条独立列。

- 选定流： 实芯不锈钢气体保护焊丝
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_body`
- 来源：

###### 氩气焊接保护气（`shield_argon`）

仅实际使用纯氩时，计量kg或按实测状态密度换算体积；不假定混合气或规定消耗。

- 选定流： 氩气焊接保护气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_body`
- 来源：

###### 交流电（`body_power`）

实际低于1kV终端切割成形连接起吊通风电量；自产压缩空气制备耗能计入。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_body`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 分流客车不锈钢薄板边角料（`stainless_scrap`）

实际按合金分流未处理边角料出厂；内部可用库存转移不作外排废物。

- 选定流： 分流客车不锈钢薄板边角料
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_body`
- 来源：

###### 工业后钢废料（`steel_scrap`）

实际产生干燥分流非不锈钢底架边角料，未经处理出厂；含漆油流另列。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_body`
- 来源：

##### 基本流

###### 颗粒物，粒径未特指（`particle_air`）

实际有证据时记录治理后即时空气、子介质和粒径未特指的颗粒排放；捕集金属粉尘为废物，已测粒径分级须替换未特指流。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_body`
- 来源：

### 过程：表面前处理与涂覆（`coat`）

只在实际执行处纳入清洗、另供涂层及固化；不要求全部不锈钢表面喷漆。

#### 输入

##### 产品流

###### 配方环氧客车防腐底漆（`primer`）

仅实际使用时记录配方供货、固含SDS、处理范围及湿kg；不规定不锈钢表面必须喷漆。

- 选定流： 配方环氧客车防腐底漆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coat。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_coat`
- 来源：

###### 配方聚氨酯客车外饰面漆（`topcoat`）

记录一种实际供货面漆湿质量、退料喷溢及固化留膜；执行固化时计场内能耗。

- 选定流： 配方聚氨酯客车外饰面漆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coat。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_coat`
- 来源：

###### 自来水（`coat_water`）

实际市政产品水清洗补水，体积换算须实际密度状态，循环转移分开。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coat。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_coat`
- 来源：

###### 交流电（`coat_power`）

实际低于1kV清洗涂装抽排电固化含返工；燃料固化须加具体燃料及实际物种行。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coat。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_coat`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废涂料残渣（`paint_residue`）

实际分流湿涂覆喷溢残渣送声明处理；滤材清洗污泥另列。

- 选定流： 废涂料残渣 `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coat。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_coat`
- 来源：

###### 送处理的客车表面清洗废水（`wash_waste`）

实际水质清洗出流记录化学组成去向；非淡水资源或直接基本废水排放。

- 选定流： 送处理的客车表面清洗废水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coat。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_coat`
- 来源：

##### 基本流

###### 二甲苯（所有异构体）（`xylene_air`）

仅实际二甲苯CAS1330-20-7治理后即时空气未特指子介质排放；总VOC非二甲苯，不设必然溶剂排放。

- 选定流： 二甲苯（所有异构体） `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coat。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_coat`
- 来源：

### 过程：无动力转向架落成及制动接口（`running`）

具体外购无动力转向架含声明轮对悬挂架上制动；连接车体侧车钩阀储罐；场内造架须独立原子物料工序扩展。

#### 输入

##### 产品流

###### 转向架总成（`bogie`）

实际外购无动力转向架型号轨距悬挂，含轴箱轮对盘式制动的接收安装模块kg，无牵引电机；不得重复将内含轮对制动列外部投入。

- 选定流： 转向架总成 `ce7fe0f9-b245-44f1-a779-3a364f2234a9`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_running。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_running`
- 来源：

###### 带缓冲装置的成品铁路客车车钩（`coupler`）

一种完整供货连接单元记录接口型号及内含缓冲质量；车体模块已含则不重复。

- 选定流： 带缓冲装置的成品铁路客车车钩
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_running。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_running`
- 来源：

###### 成品铁路客车气制动控制阀（`brake_valve`）

记录转向架内含制动以外实际车体安装供货阀kg、压力接口标识。

- 选定流： 成品铁路客车气制动控制阀
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_running。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_running`
- 来源：

###### 成品铁路客车钢制压缩空气储罐（`air_reservoir`）

实际有证书压力罐配置kg，不假定非自行客车含通用压缩机。

- 选定流： 成品铁路客车钢制压缩空气储罐
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_running。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_running`
- 来源：

###### 配方锂皂铁路轴承润滑脂（`grease`）

仅实际追加且超出转向架预充部分，记录一种组成、留存与退移。

- 选定流： 配方锂皂铁路轴承润滑脂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_running。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_running`
- 来源：

###### 交流电（`running_power`）

实际低于1kV车体落成转向架、对中起吊制动管安装耗电。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_running。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_running`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：乘客内装与辅助系统安装（`outfit`）

安装实际座椅车窗车门及配置地板保温空调电气便器安装表；外购完整模块替代内含部件预充。

#### 输入

##### 产品流

###### 成品软包可调靠背铁路乘客座椅总成（`seat`）

实际逐座供货类型含框架坐垫面套及安装固定kg，保留实件数，不规定72座配置。

- 选定流： 成品软包可调靠背铁路乘客座椅总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_outfit`
- 来源：

###### 成品双层钢化铁路客车车窗总成（`window`）

只表示声明实际双层钢化窗模块含框密封，实测供货kg及尺寸；不得替用夹层单玻身份。

- 选定流： 成品双层钢化铁路客车车窗总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_outfit`
- 来源：

###### 岩棉（`insulation`）

实际使用无覆面岩棉时记录kg、等级密度，另供覆面独立；供货板已含保温不重计。

- 选定流： 岩棉 `4f1a182c-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_outfit`
- 来源：

###### 阻燃硬木胶合板客车地板（`floor`）

实际使用硬木单板胶黏阻燃地板时，供货kg并独立记录厚度含水；其他配置须另一具体物理行。

- 选定流： 阻燃硬木胶合板客车地板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_outfit`
- 来源：

###### 成品电驱滑动铁路乘客上车门总成（`door`）

实际一种完整上车门供货模块kg含驱动控制；内端连接门实际安装且另供时分列。

- 选定流： 成品电驱滑动铁路乘客上车门总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_outfit`
- 来源：

###### 成品铁路客车车顶空调机组（`hvac`）

实际供货完整非牵引空调型号kg，制冷剂组成充注和预充油内含一次；记录供货范围，不规定通用制冷剂或能力。

- 选定流： 成品铁路客车车顶空调机组
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_outfit`
- 来源：

###### 客车工厂首次充注用R134a制冷剂（`r134a_fill`）

实际使用R134a CAS811-97-2且超出预充模块时，分别计领退回收留存；其他实际制冷剂独立化学行。

- 选定流： 客车工厂首次充注用R134a制冷剂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_outfit`
- 来源：

###### 配以电开关等装置，用于控电或配电、电压不超过1000伏的配电盘、控制台、箱及其他底座（`board`）

一种实际供货低压辅助配电盘kg，额定电压≤1000V，非牵引高压柜。

- 选定流： 配以电开关等装置，用于控电或配电、电压不超过1000伏的配电盘、控制台、箱及其他底座 `961bc3fa-a52f-47fe-afc0-0abac92f5fd1`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_outfit`
- 来源：

###### 成品绝缘铜铁路客车辅助动力电缆（`cable`）

实际供货线规格绝缘防火电压、扣切余后的实测安装kg，不自动以长度系数换质量。

- 选定流： 成品绝缘铜铁路客车辅助动力电缆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_outfit`
- 来源：

###### 成品铅酸铁路客车辅助电池（`battery`）

实际非牵引供货电池kg，内含电解液一次，记录电压容量测试。

- 选定流： 成品铅酸铁路客车辅助电池
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_outfit`
- 来源：

###### 成品铁路客车真空便器单元（`toilet`）

实际安装时记录型号kg及供货内含；实际淡水柜独立表征，服务用水库存排除M。

- 选定流： 成品铁路客车真空便器单元
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_outfit`
- 来源：

###### 交流电（`outfit_power`）

实际低于1kV内装电气空调功能测试返工需求，不含旅客运营空调耗能。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_outfit`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### HFC-134a（`r134a_air`）

仅实测工厂未回收R134a CAS811-97-2即时空气未特指子介质排放，区别留充回收库存，不设生命周期泄漏系数。公开原件未提供正式中文baseName，保留原名。

- 选定流： HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_outfit`
- 来源：

### 过程：工厂检验测试与净质量验收（`acceptance`）

当前实际配置特定静态功能泄漏制动检查，要求时有界试验、返工及校准净称量。

#### 输入

##### 产品流

###### 自来水（`test_water`）

实际市政淋雨泄漏压力试验水耗排，循环转移独立；留存饮用水柜库存排除净输出。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_acceptance`
- 来源：

###### 交流电（`test_power`）

实际低于1kV静态验收称重试具需求及归属外包试验；非动力客车不设牵引电量交换。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_acceptance`
- 来源：

###### 低密度聚乙烯薄膜（PE-LD）（`film`）

实际使用非发泡非自黏PE-LD保护膜时记录kg并排除M；实际另供纸板木材各列具体卡。

- 选定流： 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_acceptance`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 铁路或有轨电车用非自动客车，非自动行李车、邮政车及其他铁路或有轨电车专用车辆（维修或服务车除外）（`finished_machine`）

完整验收新非动力座式空调不锈钢铁路客车的1kg份额，含声明安装装备及技术预充一次，实际修正净M。

- 选定流： 铁路或有轨电车用非自动客车，非自动行李车、邮政车及其他铁路或有轨电车专用车辆（维修或服务车除外） `125d4ce1-c7db-4b0a-bcf6-82c0b0385d13`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： fixed_value
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_mass`
- 来源：

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all processes | 优先按配置工单计量及直接库存测试归属；返工实际拒收生产负担留在匹配验收输出，披露拒收退料，不藏销售总额。 |  |
| allocation_shared | shared operations | 共享切焊涂装装配测试按有因果关系的实测机器占用、焊时长度、实际受调体积时间或试验能量分摊并核总表工单；声明实际驱动单位不确定性及合理替代敏感性，不用未测平均每车或固定试验按质量分配。 |  |
| allocation_scrap | waste | 不自动给避免原生钢或回收制冷剂抵扣；分合金废物处理路线、实际所有权及下游建模分开；内部回收气水作转移，损耗一次计；物理因果不可用时才对有记录真实共产品按经济分配，保留实际价格时期敏感性。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | 验收完整输出 | measurement | 型号；配置；序列号；验收净质量 M | 使用可追溯的称重记录核对同一配置的验收设备。 | kg | 每台验收客车 | 匹配制造验收时期 | 实际验收称重场 | 每台验收净质量 | 校准原始完整轮轴称量；签署净修正；相同安装表 |
| cp_body | body | 本工序分别原子交换 | foreground_record | 库存牌号板厚炉号退料；放行切割成形焊接工单；连接材料气体；电量表；分合金边角；实际出口物种流量 | 各实际交换独立按供货领退、校准质量能量表或物种采样浓度与实测排气流量时间记录；匹配工单验收配置，件数kg分别保留，核技术预充内含、库存返工及出流去向。 | kg; MJ | 每批台测试及完整时期 | 同配置制造验收周期 | 实际制造装配及声明外包场 | 可归属工序交换 / 验收设备数量 | 供货身份SDS；计量采样不确定性；领退库存验收数闭合 |
| cp_coat | coat | 本工序分别原子交换 | foreground_record | 表面配方SDS固含；涂料领退留膜；清洗补水；能耗；残渣废水组成；治理后采样二甲苯 | 各实际交换独立按供货领退、校准质量能量表或物种采样浓度与实测排气流量时间记录；匹配工单验收配置，件数kg分别保留，核技术预充内含、库存返工及出流去向。 | kg; MJ | 每批台测试及完整时期 | 同配置制造验收周期 | 实际制造装配及声明外包场 | 可归属工序交换 / 验收设备数量 | 供货身份SDS；计量采样不确定性；领退库存验收数闭合 |
| cp_running | running | 本工序分别原子交换 | foreground_record | 转向架型号轨距及内含轮对制动悬挂；实际接收安装kg；车体侧车钩阀储罐；预充与另加润滑脂 | 各实际交换独立按供货领退、校准质量能量表或物种采样浓度与实测排气流量时间记录；匹配工单验收配置，件数kg分别保留，核技术预充内含、库存返工及出流去向。 | kg; MJ | 每批台测试及完整时期 | 同配置制造验收周期 | 实际制造装配及声明外包场 | 可归属工序交换 / 验收设备数量 | 供货身份SDS；计量采样不确定性；领退库存验收数闭合 |
| cp_outfit | outfit | 本工序分别原子交换 | foreground_record | 座椅门窗地板空调辅助电池电气型号安装表；供货kg实件数；内含技术流体制冷剂；安装测试需求 | 各实际交换独立按供货领退、校准质量能量表或物种采样浓度与实测排气流量时间记录；匹配工单验收配置，件数kg分别保留，核技术预充内含、库存返工及出流去向。 | kg; MJ | 每批台测试及完整时期 | 同配置制造验收周期 | 实际制造装配及声明外包场 | 可归属工序交换 / 验收设备数量 | 供货身份SDS；计量采样不确定性；领退库存验收数闭合 |
| cp_acceptance | acceptance | 本工序分别原子交换 | foreground_record | 车号设计；当前测试起终点；市政产品水；支持电量；服务试验库存修正；完整设备校准轮轴称量读数及独立质量平衡 | 各实际交换独立按供货领退、校准质量能量表或物种采样浓度与实测排气流量时间记录；匹配工单验收配置，件数kg分别保留，核技术预充内含、库存返工及出流去向。 | kg; MJ | 每批台测试及完整时期 | 同配置制造验收周期 | 实际制造装配及声明外包场 | 可归属工序交换 / 验收设备数量 | 供货身份SDS；计量采样不确定性；领退库存验收数闭合 |
| cp_shared | all processes | 共享服务归属 | measured_activity | 共享表总量；工单时长；实际因果驱动；验收配置数量 | 按匹配验收数除归属需求前保留实测因果驱动，核合计与总量及实际返工。 | kg; MJ | 每个分配时期 | 匹配报告时期 | 全部被服务制造配置 | 分摊需求；可归属数量 / 验收设备数量 | 总表工单闭合驱动依据敏感性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | stainless_sheet; underframe_plate; stainless_wire; shield_argon; body_power; stainless_scrap; steel_scrap; particle_air; primer; topcoat; coat_water; coat_power; paint_residue; wash_waste; xylene_air; bogie; coupler; brake_valve; air_reservoir; grease; running_power; seat; window; insulation; floor; door; hvac; r134a_fill; board; cable; battery; toilet; outfit_power; r134a_air; test_water; test_power; film | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

q_item为归属实测交换，核退料库存回收返工后除匹配验收数；保留实际kg或MJ分子；件转kg、体积转kg、浓度换算须实际同产品配置状态物理依据不确定性；不得用通用客车重假定密度额定功率轴载限值换算。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_weighing | finished_machine | 采用当前实际验收客车的校准轨道秤或适用于实际静动态方法的可追溯完整轮轴测量系统；保留车号配置、日期仪器校准皮重、每个轮轴一次、原始读数复测单位及方法条件；读数为力时保留有证书的力质量解释及当地测量条件，不假定常数。签署修正扣实测排除库存临时试具；独立实测供货安装车体架内装空调流体质量核完整安装表及不确定性；缺原件修正阻断数据使用；目录空车重、轴载限乘轴数、容量设计物料估计或载客服务质量不能代实测净M。 | qlar-wheel-2012; current original calibration/axle observations and signed mass balance |
| quality_delivery | finished_machine | 净配置含无动力转向架及完整放行安装表，留存技术脂制冷剂电解液一次；排除乘客行李饮用水便器服务库存、替代负载包装独立备件临时试具；记录干湿供货模块实际柜及实测修正，不假定水柜空满；另交附件未明确安装并重新限定时在输出外。 | released fit-list; supplier containment/prefill; tank/correction records |
| quality_identity | all flows | 逐行以实际证书SDS核一种供货牌号路线状态；无动力架范围无牵引，不按件数乘目录质量；双层钢化窗总成不同于夹层单玻，硬木处理地板不同于竹通用胶合板；低压缆须正确属性实际换算，不把长度能量改质量；条件R134a须实际安装化学组成，其空气流CAS811-97-2即时未特指空气无公开中文baseName，保留HFC-134a不虚构正式译名。 | supplier certificates/configuration/chemical identity; exact public flow references |
| quality_release | elementary | 只采实际实测或物理有据治理后排放；匹配颗粒粒径介质、二甲苯CAS1330-20-7与总VOC、R134a与其他剂及回收留充；即时未特指空气不是室内土壤长期排放；不规定泄漏烟气或不可避免排放；分别扩展有据金属NO/NO2等物种，不并入这些卡。 | original sampling species/flow/time and controls; refrigerant cylinder/charge recovery balance |
| quality_acceptance | acceptance | 保留当前实际放行且适用的焊接尺寸、转向架制动气动、电绝缘门空调功能水密及完整客车验收证据；试验方案识别静态与牵引移动、日期起终点时长负载、实际支持能量返工净交付状态；当前批准只在实际核验时声称；历史制造商特征不设通用防火速度轨距寿命阈值。 | current coach-specific released plans/results and support records |
| quality_coverage | dataset | 核实际供货模块与完整安装物料及公用库存总量；另加实际紧固件制动管软管、非内含减振器空气簧、贯通道折棚内饰板防火地板密封剂、乘客信息照明卫生水柜及实际包装处理支持模块；每个路线项披露实测计算估算缺失排除不适用及不确定性；相容上游模块实际物理记录建立前，前景覆盖身份缺口保持明确。 | full fit-list, stock/meter/supplier scope closure and evidence-gap disclosure |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | 要求恰好1kg验收完整同配置及cp_mass实际修正净称量独立质量核对；声明公式一致不能证明物理称量或方法学批准。 |  |
| validation_basis | inventory | 将验收台数配置时期分子单位连接协议与normalize_mass匹配，拒混配置及虚构质量件数系数。 |  |
| validation_packages | running; outfit | 核无动力状态及逐供货转向架窗座门空调预充范围与独供件；采用身份前核实际钢化夹层构造化学充注牌号属性。 |  |
| validation_boundary | dataset | 要求当前原始称修正放行验收安装表闭合、实际公用支持运输处理覆盖及全部缺口；单独此前景制造模块不能声称旅客公里或完整摇篮到门。 |  |
| validation_emissions | elementary | 核化学CAS、治理后实际量、介质子介质时间及不存在条件依据；基本资源水非购入自来水，送处理废水非直接水排放。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 制造新完整机车牵引座式空调铁路客车，采用焊接不锈钢车体：实际底架车体制造、表面处理、外购无动力转向架与车体落成、内装制动电气空调安装、有界工厂测试及修正净质量验收。适用性由一种放行型号修订、轨距、座椅车门制动空调及供货模块配置限定；实际底架的非不锈钢部分单独声明。本产品子集窄于CPC49532，是制造模块，不表示旅客运输性能。 |
| excluded_use | 排除自行电柴油动车、机车、动力电车、完整列车组、驾驶控制客车、卧铺餐车邮政行李专用车、维修服务车、独售部件大修重建，以及铝摩擦搅拌焊等其他车体路线。排除旅客公里、牵引机车制造运行燃料、旅客运营能水、在用维护、铁路基础设施及报废。本参考不交付运营服务；实际外包制造和验收移动须明确起终点及归属支持投入，不得静默遗漏或声称完整摇篮到门覆盖。 |
| required_metadata | 客车标识型号及放行设计修订；机车牵引无动力状态；车体底架牌号板厚连接表面；轨距转向架轴制动车钩配置；座椅车门车窗地板空调便器电池电气安装表；实际空调制冷剂充注及供货预充；自制外购模块内含；技术流体与服务试验库存及净交付状态；场址时期验收数返工；当前验收方案及实际有界支持移动；校准完整设备轮轴称量原件修正实测净M kg；独立实测安装物料质量及不确定性；上游供货公用运输处理覆盖 |
| required_quality_disclosure | 实际配置无动力单元模块内含、当前校准净称原件交付修正、安装独立质量平衡不确定性、实际时期场数返工、实际试验支持移动能耗、实测因果分配敏感性、身份上游缺口条件排放科学审查状态。 |
| update_trigger | 车体材料连接表面、无动力配置轨距转向架制动、内装门窗空调化学、自制外购范围、供货场址时期、试验称交付状态变化及新物理依据身份。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| inka-coach | handbook | PT INKA，Economic Coaches Stainless Steel New Generation，无日期官方HTML，Passenger Coach描述及New Feature表，无分页。https://www.inka.co.id/produk/kereta-kelas-ekonomi-stainless-steel-new-generation?locale=en | 具体不锈钢座式客车案例，须实际供货配置；不采用固定座数几何轨距轴载空调能力速度寿命；双层钢化非夹层单玻。 |
| pib-stainless-2016 | official_guidance | 印度铁路部，Stainless Steel Coaches，2016年11月23日，MAINLINE COACHING STOCK，无分页。https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=154161 | 仅历史不锈钢LHB与Corten ICF材料路线区分；不推当前必需规定重量容量比例经济因子寿命。 |
| qlar-wheel-2012 | handbook | Schenck Process（现Qlar），MULTIRAIL WheelLoad: Measure wheel contact forces safely，2012年9月10日，静动态铁路车辆制造测量段，无分页。https://www.qlar.com/press-and-media/press-releases/multirail-wheelload-measure-wheel-contact-forces-safely | 历史物理称量方法示例，非当前标准；须实际校准全部轮轴观测及方法特定质量解释、净修正与独立安装表依据；不采用目录质量。 |
