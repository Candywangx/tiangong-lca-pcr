---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.small-displacement-motorcycle
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 小排量四冲程踏板车制造

## 1. 范围与适用性

制造新完整两轮汽油踏板车，采用实际总气缸容量不超过50cm3的单缸往复式火花点火四冲程活塞发动机、焊接钢车架及一个外购完整发动机CVT离合器末级传动动力单元；本地制造为车架制造饰面，随后安装动力模块、集成走行装备及工厂验收，不制造发动机或CVT。此前景路线由实际放行车架切形成连接、条件表面处理涂覆、安装动力走行车身电装及有界工厂验收限定。须声明车架库存牌号截面连接方法供货模块配置，不规定通用合金保护气涂层配方；此路线窄于CPC49911。

排除>50cc踏板摩托、二冲程、电混非往复式推进、水平对置双缸摩托、外部纵向轴传动末传总成制造或对中、场内发动机CVT制造、辅助动力自行车边斗三轮、主体铝复合车架、独售套件部件、修理大修及运输服务。排除客户骑行旅客公里在用油耗维护道路设施报废；实际工厂发动机滚筒及有界验收移动仅属于制造起终点，须实测支持投入；单独前景非完整摇篮到门或全寿命出行比较。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.small-displacement-motorcycle |
| classification_refs | CPC:3.0:49911; narrower |
| covered_products | 制造新完整两轮汽油踏板车，采用实际总气缸容量不超过50cm3的单缸往复式火花点火四冲程活塞发动机、焊接钢车架及一个外购完整发动机CVT离合器末级传动动力单元；本地制造为车架制造饰面，随后安装动力模块、集成走行装备及工厂验收，不制造发动机或CVT。此前景路线由实际放行车架切形成连接、条件表面处理涂覆、安装动力走行车身电装及有界工厂验收限定。须声明车架库存牌号截面连接方法供货模块配置，不规定通用合金保护气涂层配方；此路线窄于CPC49911。 |
| excluded_products | 排除>50cc踏板摩托、二冲程、电混非往复式推进、水平对置双缸摩托、外部纵向轴传动末传总成制造或对中、场内发动机CVT制造、辅助动力自行车边斗三轮、主体铝复合车架、独售套件部件、修理大修及运输服务。排除客户骑行旅客公里在用油耗维护道路设施报废；实际工厂发动机滚筒及有界验收移动仅属于制造起终点，须实测支持投入；单独前景非完整摇篮到门或全寿命出行比较。 |
| representative_product | 一台完整验收两轮四冲程<=50cc自动汽油踏板车，焊接钢车架及实际供货发动机CVT单元；Honda2022 Giorno49cm3/CVT为历史配置示例，非必选型号或其车架配方证明。 |
| production_route | 钢车架制造连接; 表面前处理车架饰面; 动力走行装备安装; 有界工厂测试称重出厂验收 |
| market_state | 完整装配验收车含安装表及留存技术润滑冷却减振油电解液一次，所有燃油骑手行李包装运输笼独立工具备件临时工装排除净M。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造验收完整声明<=50cc四冲程汽油踏板车。 |
| How much | 1kg验收净制造输出，由一台完整验收同配置踏板车实测M kg换算。 |
| How well | 实际放行图纸供货安装表及当前适用合同主管符合性工厂验收记录，不推通用速度功率排放限值要求。 |
| How long or cycle | 一个记录制造验收周期，非全寿命出行服务，不编造寿命。 |
| reference_flow_link | `finished_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 摩托车及装配有气缸容量不超过50立方厘米的、装有辅助马达的往复式活塞内燃机的脚踏车 `535b67cb-a95b-466a-afa5-ea295294b3e2` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号放行图纸修订序号；两轮踏板、实际<=50cm3总排量、单缸及四冲程火花点火；车架牌号管板几何连接表面；动力供货发动机CVT离合末传范围独立安装kg预充；轮胎悬挂制动车身鞍座油箱电装安装表；油冷却电池化学供货干湿；场期验收数返工；当前实际符合性有界工厂试验方案结果；实际普通试验汽油等级生物份额库存闭合；校准完整踏板称量原件皮重配置净燃油临时库存修正；独立实测安装物料质量不确定性；净M kg区别目录车重整备重额定载荷；上游公用运输处理覆盖缺口 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| electricity_energy | frame_power; coat_power; assembly_power; test_power | Energy `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 计量实际kWh乘3.6MJ/kWh，不按额定电机功率乘假定负荷周期。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造装配场接收实际圆焊架管声明支架库存及成品供货发动机CVT轮车身电装模块，冶炼供货发动机制造内含模块属上游，不自动前景。 |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC:3.0:49911; narrower |
| recursive_input_rule | 外购已成车架或不含动力底车有已识别供货装备涂层范围，仅实际追加作业验收进入前景，不对已完整模块重复库存制造。 |
| upstream_dataset_requirement | 扩展前景外前须相容实际库存动力轮胎车身电装公用运输处理模块，声明属性牌号模块预充。 |
| disclosure | 实际自制外购起点场期供货内含子工序返工外包制造测试支持、流燃库存状态排除上游缺口，不默认完整摇篮到门标签。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_package | assembly | 一种供货发动机CVT离合末传总成仅含有记录范围，记录模块安装供货kg预充一次，独立核踏板安装表净M；不得再将内含发动机传动启动或油列购入；场内发动机CVT制造及外部轴传动制造对中在此边界外，须独立方法适用复核；实际轮胎制造须其原子库存工序记录。 |  |
| boundary_coating | coat | 供货已涂板架含上游涂层，场内追加清洗底漆粉末固化须实际化学计量卡；通用制造商工序介绍不建立此型号配方必需工序。 | yamaha-mc-process |
| boundary_trials | acceptance | 含归属工厂检查滚筒发动机及实际有界移动返工支持设备，客户道路骑行在用油耗仍排除；保留领退回收留存试验燃油技术流体平衡，全部燃油从M扣，不自动算消耗。 |  |
| boundary_complete | finished_machine | 参考为完整当前安装配置车，非无动力底车车架发动机或运输散件；净M前记录最终复装验收，运输拆卸独交项披露。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `frame` | 钢车架制造连接 | required | 按放行车架图纸有资质工单尺寸接头检验进行实际接收库存切冲弯连接；供货完整架替代内含作业。 | foreground_manufacturing | 1kg验收输出；条件交换仅实际使用处 |
| `coat` | 表面前处理车架饰面 | conditional | 仅实际执行清洗涂覆固化返工；供货已涂架内含其上游饰面；每个实际化学品独卡。 | foreground_manufacturing | 1kg验收输出；条件交换仅实际使用处 |
| `assembly` | 动力走行装备安装 | required | 实际外购完整单缸发动机CVT模块接收范围检查及安装接口间隙扭矩核验，轮胎悬挂制动车身箱座线束完整配置安装表、另加技术流体扭矩功能检查。 | foreground_manufacturing | 1kg验收输出；条件交换仅实际使用处 |
| `acceptance` | 有界工厂测试称重出厂验收 | required | 按实际适用制动灯电功能发动机滚筒检查，有界移动返工及校准同配置净称量。 | foreground_manufacturing | 1kg验收输出；条件交换仅实际使用处 |

### 过程：钢车架制造连接（`frame`）

按放行车架图纸有资质工单尺寸接头检验进行实际接收库存切冲弯连接；供货完整架替代内含作业。

#### 输入

##### 产品流

###### 钢管和空心型材（`steel_tube`）

实际接收圆截面焊接非不锈钢车架管，放行牌号炉号直径壁厚、领退kg；无缝非圆库存须不同身份，声明供货成形管内含。

- 选定流： 钢管和空心型材 `370d14a6-55f3-4fdd-90b2-84751125ff00`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_frame`
- 来源：

###### 冷轧低碳钢车架支架薄板（`bracket_sheet`）

实际切冲折支架用牌号板厚薄板时计，成品供货支架替代内含库存作业。

- 选定流： 冷轧低碳钢车架支架薄板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_frame`
- 来源：

###### 实芯碳钢气体保护焊丝（`weld_wire`）

实际有资质工艺使用此实芯焊丝组成直径时记录领退消耗kg；电阻焊不默认用此丝。

- 选定流： 实芯碳钢气体保护焊丝
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_frame`
- 来源：

###### 纯氩焊接保护气（`shield_argon`）

实际工艺使用纯氩CAS7440-37-1时计kg或实际状态实测换算；混合气非纯氩，须自身身份。

- 选定流： 纯氩焊接保护气
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_frame`
- 来源：

###### 交流电（`frame_power`）

实际低于1kV终端切弯冲焊工装抽排电量，自产压缩空气制备一次计，实际技术遵放行工艺。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_frame`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工业后钢废料（`steel_scrap`）

实际分流干燥未处理非不锈钢边角出厂，内部可用库存非废物，含油漆流另配。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_frame`
- 来源：

##### 基本流

###### 颗粒物，粒径未特指（`particle_air`）

仅实际治理后即时空气未特指子介质粒径颗粒，原采样排气流量时间有据；捕集磨焊尘为废物，实测分级配独立流。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_frame。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_frame`
- 来源：

### 过程：表面前处理车架饰面（`coat`）

仅实际执行清洗涂覆固化返工；供货已涂架内含其上游饰面；每个实际化学品独卡。

#### 输入

##### 产品流

###### 配方环氧钢车架防腐底漆（`epoxy_primer`）

实际供货配方SDS湿kg固含留膜固化时记录，不规定必需电泳或铬酸盐路线。

- 选定流： 配方环氧钢车架防腐底漆
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_coat。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_coat`
- 来源：

###### 配方聚酯热固性车架涂覆粉末（`powder_finish`）

实际一种粉末供货配方kg，领退回收留存固化能量记录；溶剂面漆独立化学卡非此粉末。

- 选定流： 配方聚酯热固性车架涂覆粉末
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

实际市政产品清洗补水时计，循环转移区别，实际清洗剂化学废水处理另表征。

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

实际低于1kV清洗涂覆通风电固化返工耗电；燃气固化另列具体燃料及有据物种。

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

###### 废涂料残渣（`wet_paint_residue`）

实际湿底漆喷溢残渣送处理时计；粉末回收仍内部，废粉滤材须独立实际废物卡。

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

##### 基本流

###### 二甲苯（所有异构体）（`xylene_air`）

仅实际含溶剂作业CAS1330-20-7二甲苯治理后即时未特指空气排放；粉末饰面不代表有二甲苯，总VOC非此物种。

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

### 过程：动力走行装备安装（`assembly`）

实际外购完整单缸发动机CVT模块接收范围检查及安装接口间隙扭矩核验，轮胎悬挂制动车身箱座线束完整配置安装表、另加技术流体扭矩功能检查。

#### 输入

##### 产品流

###### 成品单缸四冲程不超过50cc踏板车发动机CVT动力总成（`power_unit`）

一种实际外购完整供货<=50cc单缸往复式火花发动机CVT离合末级传动模块，安装供货kg，序号排量附件预充内含；不重复内含发动机CVT油行，独立模块质量核M。

- 选定流： 成品单缸四冲程不超过50cc踏板车发动机CVT动力总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 成品注塑聚丙烯踏板车腿部护板（`body_panel`）

实际供货一个PP护板图纸树脂填料表面及安装kg；其他板树脂另列，非塑料件合计。

- 选定流： 成品注塑聚丙烯踏板车腿部护板
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 成品铸铝踏板车车轮（`wheel`）

实际供货一个铸轮型号直径安装kg，非内含轮胎制动排除；冲压钢圈另物理卡。

- 选定流： 成品铸铝踏板车车轮
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 摩托车或自行车用的橡胶新充气轮胎（`tyre`）

实际一种新踏板车胎规格负载速度内胎状态及实测供货安装kg，保留件数；前后规格不同须分，内胎不自动内含。

- 选定流： 摩托车或自行车用的橡胶新充气轮胎 `433f8624-3103-4661-918b-2093658bda5f`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 成品踏板车伸缩前叉总成（`front_fork`）

一种实际前叉供货kg含声明减振油密封一次，仅供货含时包括转向柱轴承。

- 选定流： 成品踏板车伸缩前叉总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 成品踏板车后弹簧减振单元（`rear_shock`）

一种实际弹簧减振供货kg含声明油，记录安装返工，无通用件数。

- 选定流： 成品踏板车后弹簧减振单元
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 成品机械驱动踏板车鼓式制动单元（`drum_brake`）

实际一种鼓制动kg及供货鼓蹄驱动范围时计，已内含轮模块不重计；实际盘缆液压变体各须具体行。

- 选定流： 成品机械驱动踏板车鼓式制动单元
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 成品软包踏板车鞍座总成（`seat`）

实际一种鞍座供货kg含底发泡面套及铰锁范围，独立储物箱非内含时外列。

- 选定流： 成品软包踏板车鞍座总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 带催化器的成品踏板车排气消声器（`exhaust`）

实际超动力模块另供一种完整消声催化器型号kg时计，记录催化化学范围，不规定所有产品必需。

- 选定流： 带催化器的成品踏板车排气消声器
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 成品钢制踏板车汽油箱（`fuel_tank`）

实际供货箱kg，声明泵传感器涂层内含；燃油排除箱及M，塑料箱另物理行。

- 选定流： 成品钢制踏板车汽油箱
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 点火接线装置和其他用于车辆、航空器或船只的点火接线装置（`harness`）

一种实际成品供货踏板车主线束型号接头绝缘kg，非另供裸缆或动力模块内含点火线。

- 选定流： 点火接线装置和其他用于车辆、航空器或船只的点火接线装置 `4b3f48dd-97a6-427e-9baf-742d7eb6e9c2`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 成品铅酸踏板车启动电池（`starter_battery`）

实际型号安装供货kg含电解液一次及实际额定干湿交付，其他化学另卡。

- 选定流： 成品铅酸踏板车启动电池
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 配方矿物四冲程汽油发动机润滑油（`engine_oil`）

实际适用一种配方矿物油超动力预充追加时计，独立实测领退移留kg，不假定二冲程预混。

- 选定流： 配方矿物四冲程汽油发动机润滑油
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 配方乙二醇踏板车发动机冷却液（`coolant`）

实际液冷发动机采用声明醇水添加剂浓度且另加超供货预充kg时计，风冷配置不默认充。

- 选定流： 配方乙二醇踏板车发动机冷却液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

###### 交流电（`assembly_power`）

实际低于1kV模块安装轮装扭矩电气充液功能检查，自产气及电池充电一次计。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 能量 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_assembly`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：有界工厂测试称重出厂验收（`acceptance`）

按实际适用制动灯电功能发动机滚筒检查，有界移动返工及校准同配置净称量。

#### 输入

##### 产品流

###### 普通汽油（`test_petrol`）

实际普通石油车用汽油用于有界工厂发动机滚筒验收时计，实际等级组成领退留实测；有生物组分声明份额并配相容燃油生物流，不用目录油耗因子。

- 选定流： 普通汽油 `4f19a2f9-7b3b-11dd-ad8b-0800200c9a66`
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

实际低于1kV滚筒电灯制动检查称量设备返工耗电，非客户驾驶能量。

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

实际非发泡非自黏保护膜kg排除M；实际纸板托盘钢运输笼另配。

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

###### 摩托车及装配有气缸容量不超过50立方厘米的、装有辅助马达的往复式活塞内燃机的脚踏车（`finished_machine`）

完整验收声明两轮<=50cc四冲程汽油踏板车的1kg份额，安装装备技术预充一次，实际实测修正净M，所有燃油排除。

- 选定流： 摩托车及装配有气缸容量不超过50立方厘米的、装有辅助马达的往复式活塞内燃机的脚踏车 `535b67cb-a95b-466a-afa5-ea295294b3e2`
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

###### 废润滑油（`used_oil`）

仅实际工厂试验移除分流废矿物油送处理，非留存润滑或冷却溶剂混合。

- 选定流： 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_acceptance`
- 来源：

##### 基本流

###### 二氧化碳（化石）（`fossil_co2_air`）

仅实测试验燃油含碳平衡计未燃回收碳或直接物种测得的实际化石CO2即时未特指空气排放，生物份额不归化石流。

- 选定流： 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_acceptance`
- 来源：

###### 一氧化氮（`no_air`）

仅治理后实际工厂废气实测NO CAS10102-43-9即时未特指空气，总NOx NO2 N2O无物种依据不替代。

- 选定流： 一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式： foreground_record
- 适用范围： site_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_acceptance`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all processes | 优先实际配置工单和领退测试计量归属；报告验收数匹配完整输出，含实际拒收返工负担，不以销售或混配置稀释。 |  |
| allocation_shared | shared operations | 先分过程，不能分时按适用实测因果机器占用连接长度工时处理表面试验支持能量分配，核总表，记录驱动单位比较合理替代；固定电装测试不按未测每车平均或质量份额。 |  |
| allocation_scrap | waste | 不自动抵扣避免原钢可回收料退回燃油；内部转移外排废物处理真实共产品分开；物理因果不可用时才对有据真实共产品经济分配，保留实际价格时期敏感性。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | acceptance | 验收完整输出 | measurement | 型号；配置；序列号；验收净质量 M | 使用可追溯的称重记录核对同一配置的验收设备。 | kg | 每台验收踏板车 | 匹配制造验收时期 | 实际验收称量站 | 每台验收净质量 | 当前踏板型号方法；校准全部车轮平台读数皮重；实测燃油状态修正安装表 |
| cp_frame | frame | 独立原子交换 | foreground_record | 牌号炉号管板尺寸；领退库存；有资质连接工单及实际丝气；电量；干边角；实际治理后物种采样 | 逐实际交换独立按供货领退、校准安装供货部件质量、公用计量或采样物种实测排气流量时间记录；记录踏板配置工单验收数库存返工去向。 | kg; MJ | 每批台测试及完整时期 | 同配置制造验收周期 | 实际制造测试场及声明外包场 | 可归属工序交换 / 验收设备数量 | 证书SDS，计量采样不确定性，领退库存台数闭合 |
| cp_coat | coat | 独立原子交换 | foreground_record | 实际配方SDS处理表面；湿底漆粉末领退回收留膜；清洗水；固化抽排及残渣废水 | 逐实际交换独立按供货领退、校准安装供货部件质量、公用计量或采样物种实测排气流量时间记录；记录踏板配置工单验收数库存返工去向。 | kg; MJ | 每批台测试及完整时期 | 同配置制造验收周期 | 实际制造测试场及声明外包场 | 可归属工序交换 / 验收设备数量 | 证书SDS，计量采样不确定性，领退库存台数闭合 |
| cp_assembly | assembly | 独立原子交换 | foreground_record | 动力型号序号排量冲程；供货发动机CVT附件预充；独立安装kg；轮胎悬挂制动鞍板箱电装安装表；追加油冷却及电量 | 逐实际交换独立按供货领退、校准安装供货部件质量、公用计量或采样物种实测排气流量时间记录；记录踏板配置工单验收数库存返工去向。 | kg; MJ | 每批台测试及完整时期 | 同配置制造验收周期 | 实际制造测试场及声明外包场 | 可归属工序交换 / 验收设备数量 | 证书SDS，计量采样不确定性，领退库存台数闭合 |
| cp_acceptance | acceptance | 独立原子交换 | foreground_record | 序号配置；实际试验工单负载时长起终点；普通燃油组成库存闭合；采样物种浓度废气流量；电表；校准完整称量皮重实测净修正独立物料 | 逐实际交换独立按供货领退、校准安装供货部件质量、公用计量或采样物种实测排气流量时间记录；记录踏板配置工单验收数库存返工去向。 | kg; MJ | 每批台测试及完整时期 | 同配置制造验收周期 | 实际制造测试场及声明外包场 | 可归属工序交换 / 验收设备数量 | 证书SDS，计量采样不确定性，领退库存台数闭合 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | steel_tube; bracket_sheet; weld_wire; shield_argon; frame_power; steel_scrap; particle_air; epoxy_primer; powder_finish; coat_water; coat_power; wet_paint_residue; xylene_air; power_unit; body_panel; wheel; tyre; front_fork; rear_shock; drum_brake; seat; exhaust; fuel_tank; harness; starter_battery; engine_oil; coolant; assembly_power; test_petrol; test_power; used_oil; fossil_co2_air; no_air; film | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

q_item为实测退料库存回收返工后归属交换除匹配验收台数，保留kg或MJ分子，电量MJ/kg；动力单元q_item为安装供货完整发动机CVT模块kg，非Item(s)；油冷却q_item仅追加非内含预充。任何件体积换算须实测同件质量几何状态及不确定性，不用目录踏板发动机质量、标准燃油密度或额定载荷。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_weighing | finished_machine | 采用校准完整踏板称量平台支承全部车轮，控制皮重，不计操作者侧支撑临时工装；保留序号配置原读数仪器校准日期复测不确定性；独立实测安装车架发动机CVT走行装备留存技术流体核M；缺物理原件阻断数据使用，不用目录81kg车重或载荷换算。 | original complete weighing and independent installed component records |
| quality_net | finished_machine | 保留实测称量状态签署修正，排除全部实际燃油含残油、骑手行李临时工装运输笼包装独立备件工具；按实际声明干湿供货状态一次计安装技术润滑冷却减振油电池电解液；修正追溯实际排放称量原件，不假定残油零、不由目录整备重或猜测物料推M。 | signed fuel/stock corrections and supplier containment |
| quality_classification | finished_machine | 实际放行发动机身份排量记录须建立实际型号往复式四冲程火花点火汽油、单缸及总气缸容量<=50cm3；公开49911流宽于此踏板路线；Honda历史49cm3/CVT仅配置示例，非当前供应或必需车架涂层配方。 | honda-giorno-2022; actual released model and engine records |
| quality_identity | all flows | 逐交换一种实际牌号型号化学状态；供货完整发动机CVT离合末传模块须自身有据身份安装供货kg，不能假定仅发动机43121含传动，不能替代>50cc动力或排除机动车43110；遵官方参考属性双语名，模块kg与完整M独立核；件数仅追溯，不将Mass伪配Item(s)。 | actual supplier fit-list, direct public identity/property chain |
| quality_release | elementary | 仅采物理有据治理后排放含化学CAS即时介质子介质物种浓度排气流量时间或实际燃油碳平衡；未特指粒径颗粒非捕尘，二甲苯非总VOC，化石CO2非生物，NO非NO2/N2O/NOx；有据其他实际燃烧涂覆物种分别扩展，区分燃油生物碳；不假定必然发生，四冲程不规定二冲程混合油。 | original sampling, actual fuel/SDS/carbon and control records |
| quality_acceptance | acceptance | 保留实际当前放行接头车架对齐、供货集成动力安装扭矩后走行间隙接口、CVT离合功能验收及轮胎悬挂制动操纵燃油油冷泄漏电灯及有界发动机滚筒功能检查返工；测试起终点负载时长退油支持投入实测；历史速度功率油耗箱容或法规限值不在此建立必需阈值。 | current model-specific released test plans/results |
| quality_completeness | dataset | 核完整安装表领退供货公用总量；非内含时补实际独供紧固轴承支架灯镜开关操纵线缆泵管冷却启动点火特定追加板件牌号饰面化学废水处理包装；前后不同胎型或物理不同模块须独卡，不用杂项部件集合或25%质量假定；追加交换均须协议数量基准；披露实测计算估计缺失排除不适用、不确定性及上游支持运输处理缺口。 | complete fit-list and closed actual stock/meter/package records |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_reference | finished_machine | 恰好1kg完整验收声明踏板车，实测cp_mass净M及独立部件平衡，同配置燃油修正原件；公式一致非物理称量或方法批准。 |  |
| validation_basis | inventory | 全部行连接合法小写标识协议及normalize_mass，匹配验收数时期分子单位；拒混配置非法数量枚举属性替代目录换算。 |  |
| validation_scope | dataset | 要求实际独立<=50cm3四冲程踏板发动机配置适用性、有界制造支持试验及披露身份上游缺口；单独前景不声称运输功能或完整摇篮到门。 |  |
| validation_release | elementary | 核化学CAS介质时间及实际条件数量；购水为产品，外送废水处理为废物，资源取用与直接排放分开。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_manufacturing_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 制造新完整两轮汽油踏板车，采用实际总气缸容量不超过50cm3的单缸往复式火花点火四冲程活塞发动机、焊接钢车架及一个外购完整发动机CVT离合器末级传动动力单元；本地制造为车架制造饰面，随后安装动力模块、集成走行装备及工厂验收，不制造发动机或CVT。此前景路线由实际放行车架切形成连接、条件表面处理涂覆、安装动力走行车身电装及有界工厂验收限定。须声明车架库存牌号截面连接方法供货模块配置，不规定通用合金保护气涂层配方；此路线窄于CPC49911。 |
| excluded_use | 排除>50cc踏板摩托、二冲程、电混非往复式推进、水平对置双缸摩托、外部纵向轴传动末传总成制造或对中、场内发动机CVT制造、辅助动力自行车边斗三轮、主体铝复合车架、独售套件部件、修理大修及运输服务。排除客户骑行旅客公里在用油耗维护道路设施报废；实际工厂发动机滚筒及有界验收移动仅属于制造起终点，须实测支持投入；单独前景非完整摇篮到门或全寿命出行比较。 |
| required_metadata | 型号放行图纸修订序号；两轮踏板、实际<=50cm3总排量、单缸及四冲程火花点火；车架牌号管板几何连接表面；动力供货发动机CVT离合末传范围独立安装kg预充；轮胎悬挂制动车身鞍座油箱电装安装表；油冷却电池化学供货干湿；场期验收数返工；当前实际符合性有界工厂试验方案结果；实际普通试验汽油等级生物份额库存闭合；校准完整踏板称量原件皮重配置净燃油临时库存修正；独立实测安装物料质量不确定性；净M kg区别目录车重整备重额定载荷；上游公用运输处理覆盖缺口 |
| required_quality_disclosure | 具体踏板安装表发动机CVT路线供货预充实际排量；实测净M原始修正部件质量不确定性；实际期场数返工测试起终点；因果分配敏感性；缺身份物理记录上游处理支持覆盖；科学审查待完成。 |
| update_trigger | 结构连接饰面或动力走行电装配置、供货自制外购场期、流体燃油化学、试验范围称交付状态分类依据及新身份证据。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| honda-giorno-2022 | handbook | Honda GIORNO规格，2022年3月，制造商单页PDF1页表格及日期脚注。https://www.honda.co.jp/content/dam/site/www/50-Scooter/cq_img/pdf/GIORNO_SPEC_SP.pdf | 仅历史49cm3液冷四冲程CVT配置示例，不采用当前生产必选型号钢车架配方、净81kg制造M、箱容油耗或寿命；选择路线遵实际放行图纸物理记录。 |
| yamaha-mc-process | handbook | Yamaha Motor，バイク・スクーター・船外機をつくる仕事，无日期官方HTML，章节プレス、溶接、塗装、ユニット組付、エンジン組立、車体・ユニット組立、完成検査、工場管理；无页码。https://global.yamaha-motor.com/jp/recruit/graduates/highschool/works-mc/ | 仅通用摩托踏板冲焊涂总成、外购部件、最终功能电装外观检验支持分解；排除舷外机组装，非特定Honda工厂必需铸锻涂配方或数量证据；实际自制外购工单控制前景。 |
