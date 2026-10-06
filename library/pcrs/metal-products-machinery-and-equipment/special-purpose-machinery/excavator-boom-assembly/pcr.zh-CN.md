---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.excavator-boom-assembly
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 独立交付焊接钢制挖掘机动臂总成制造

## 1. 范围与适用性

本候选作者方法覆盖新制、独立验收的液压土方挖掘机被动焊接钢箱形主动臂制造。声明设备通过挖掘机机架、斗杆及油缸安装接口传载。完整图纸特异供货范围为焊接箱体及声明已装铰接轴座、轴套、永久保留销；供货完整性须核实，不由目录文字推定。代表路线从购钢板及预制轴座零件供货入口开始，包括机械下料、可选成形、组对、受控实心焊丝电弧焊接、接口加工、轴套安装，以及涂覆运输包装前的最终净质量验收。其他焊接下料表面路线在应用数据集前须有实际额外交换与证据。

机械专用方法需将箱体焊接产率返工与孔同轴度、独立机架斗杆油缸接口、图纸修订及安装和散装铰接零件核对至独立动臂入口。现有43580铲斗方法覆盖挖掘容器而非动臂。现有挖掘机整机制造参考为完整自推进整机并排除独立供货附件；42190结构金属方法排除另行分类机械专用总成。当前manifest及范围审查未识别等同动臂material PCR。此较窄44461背景不创建接受映射。

排除铲斗斗杆整机其他起重机臂液压缸软管完整液压动力组维修再制造服务、挖掘性能寿命现场燃料及使用后处置。后续涂覆装入挖掘机及使用属于独立披露阶段。制造商结构示例仅支持箱体焊接接口区别，不提供工厂清单必需钢号应力热处理规则。独立科学审查仍待完成。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.excavator-boom-assembly |
| classification_refs | CPC 3.0:44461; narrower;43580 bucket excluded |
| covered_products | 新制独立验收焊接钢液压挖掘机主箱形动臂，一种声明图纸配置 |
| excluded_products | 铲斗斗杆整机起重机臂油缸软管动力组维修及无关钢结构 |
| representative_product | 未涂覆验收钢箱形动臂及声明已装轴套；销仅永久保留时包含 |
| production_route | 购认证钢板预制零件；机械下料可选成形；实心焊丝电弧焊；加工接口；装声明铰接件；涂覆包装前验收 |
| market_state | 同图纸修订及配置已装件；实际未涂覆工厂入口净质量；无液压功能系统 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 对象 | 验收独立交付焊接钢制挖掘机动臂总成 |
| 数量 | 1 kg净验收完整动臂 |
| 质量 | 按实际批准要求验收当前图纸修订接口位置孔配合焊接检查处置及供货完整性 |
| 时间或周期 | 一次完成制造验收；无寿命假设 |
| reference_flow_link | finished_boom |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收独立交付焊接钢制挖掘机动臂总成 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 图纸修订序号；挖掘机机架斗杆油缸对应接口；箱体几何实际钢板轴座证书；焊接规程检查；加工孔配合同轴度；已装轴套衬层销供货范围；未涂覆入口；箱体完整M kg原记录；声明清洗余留；工厂期间分配；上游接收链接 |

全部必需限定随附数据包；缺少限定即适用性不完整。符号M为同配置验收状态完整动臂实际实测净kg，不是挖掘机作业质量目录估值或虚构零件质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `material_mass` | mass rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用指定协议采每台验收成品实际q_item kg。记录供货组成温度状态；件数为额外追溯，非假定单件质量。采用normalize_mass。 |
| `electric_energy` | electricity rows | Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 用实际表计kWh按1 kWh=3.6 MJ转换后逐台采集；采用normalize_mass。铭牌功率不是能量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 动臂制造实际投入入口购钢板及供货预制钢轴座铰接件 |
| starting_condition_role | upstream_abstraction |
| product_classification_scope | CPC 3.0:44461; narrower passive excavator boom |
| recursive_input_rule | 购同类预装动臂须保留此前供方制造入口，不将收货建模为新钢板制造。场制轴座在实际此前作业入口链接一次；内部转移不重复最终输出。 |
| upstream_dataset_requirement | 链接匹配钢板路线牌号状态供货轴座轴套销范围实心焊丝气配方电力电压供方化学品及入厂供货。此前同址零件制造及外协加工涂覆为披露链接入口，不假定免费外包。 |
| disclosure | 仅涂覆包装前制造前景；披露缺失链接实际公用及额外作业；无完整实际上游供货集成不得声明完整摇篮到大门 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | all_processes | 纳入归属收货下料实际成形焊接组对焊接搬运抽排焊后孔加工尺寸焊接检查已装铰接件装配实际清洗最终验收；含消耗拒收返工。不由宣传文规定机器人焊应力消除热处理。图纸规程实际要求时添加并测具体投入输出。 | cat320-boom; cat311-historical |
| `boundary_supply` | finished_boom | 验收为独立供货被动动臂，不是整机成功挖掘。分别声明机架根铰点斗杆端铰点动臂油缸斗杆油缸安装接口。图纸清单决定已装轴套衬层保留销塞；购执行器内杆眼轴承不自动为动臂件。即使与动臂同图，仍排除油缸软管完整动力组。 | catboom-supply; catbushing-interface |
| `boundary_emissions` | elementary rows | 仅实际物种特异跨前景环境界释放为基本交换。收集焊尘飞溅水洗液为收集废物；上游电排放留上游。无必需焊接排放物种或溶剂蒸发因子。仅据测量匹配来源展开实际烟尘化学及室外子介质。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare` | 钢板收货、机械下料与可选成形 | `required` | 声明图纸特异动臂路线；交换按实际作业供货范围 | foreground manufacturing | 1 kg; finished_boom |
| `weld` | 箱体组对与受控电弧焊接 | `required` | 声明图纸特异动臂路线；交换按实际作业供货范围 | foreground manufacturing | 1 kg; finished_boom |
| `machine` | 接口孔加工与尺寸检查 | `required` | 声明图纸特异动臂路线；交换按实际作业供货范围 | foreground manufacturing | 1 kg; finished_boom |
| `assembly` | 声明轴套与销装配 | `required` | 声明图纸特异动臂路线；交换按实际作业供货范围 | foreground manufacturing | 1 kg; finished_boom |
| `cleaning` | 可选IPA或水清洗 | `conditional` | 仅实际文件化清洗路线 | foreground manufacturing | 1 kg; finished_boom |
| `acceptance` | 配置动臂净质量与最终验收 | `required` | 声明图纸特异动臂路线；交换按实际作业供货范围 | foreground manufacturing | 1 kg; finished_boom |

### 过程：钢板收货、机械下料与可选成形 (`prepare`)

#### 输入

##### 产品流

###### 热轧低合金高强度钢板 (`steel_plate`)

一种实际认证钢板规格用于上板、下板、侧板或内部隔板。采用身份限于热轧低合金高强度钢板；不规定钢号，其他牌号状态须独立匹配行。记录实际厚度炉批证书净领用kg；购成品轴座不再次计钢板。

- 选定流： 钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 钢板收货、机械下料与可选成形用低压电网电力 (`prepare_electricity`)

此作业实际用户侧<1kV电网电力，含归属设置待机抽排搬运返工。采原表计kWh按3.6 MJ/kWh转换MJ，然后采每同配置验收设备q_item。可选过程仅执行才有电力；避免共享表计双计。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 废物流

###### 清洁钢板边角料 (`plate_offcut`)

实际未经处理分选钢生产废物出厂。测净kg牌号污染，余留切削液另排，记录接收方状态；内部再用边料为库存不作为废物跨界。不与焊渣污染粉尘合并。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

### 过程：箱体组对与受控电弧焊接 (`weld`)

#### 输入

##### 产品流

###### 机加工钢制动臂铰接轴座 (`pivot_boss`)

一种图纸特异供货钢轴座，含初始孔及供货机加工状态，之后焊入箱体。记录材质实测供货kg，不假定通用轴座钢号。场内坯料制造时链接此前本地制造一次，避免完整轴座与组成坯料双计。

- 选定流： 机加工钢制动臂铰接轴座
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 实心低合金钢电弧焊丝 (`welding_wire`)

仅代表性实心焊丝路线：记录本图纸实际批准焊材规格化学组成领用回收kg及所用焊接规程。不规定电流道数预热疲劳限。自保护药芯焊丝与此实心焊丝是不同物理焊材。其他实际焊接路线须独立指定焊材交换。

- 选定流： 实心低合金钢电弧焊丝
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 氩气—二氧化碳焊接保护气混合物 (`shielding_gas`)

一种实际购入Ar/CO2预混气，声明组成气瓶净领用退回kg及供货状态。仅实际气体保护焊规程使用时纳入。此为一种物理明确供货混合气；不将组成再次作为购纯气。分别记录残留回收气及实际释放；不假定工业CO2化石来源。

- 选定流： 氩气—二氧化碳焊接保护气混合物
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 箱体组对与受控电弧焊接用低压电网电力 (`weld_electricity`)

此作业实际用户侧<1kV电网电力，含归属设置待机抽排搬运返工。采原表计kWh按3.6 MJ/kWh转换MJ，然后采每同配置验收设备q_item。可选过程仅执行才有电力；避免共享表计双计。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 废物流

###### 收集固态钢焊接飞溅 (`weld_spatter`)

仅实际独立收集作为废物离厂的钢焊接飞溅，称净kg污染。无固定飞溅率。实际产生药皮渣废磨料抽排混合粉尘时各须自身组成具体交换。

- 选定流： 收集固态钢焊接飞溅
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

### 过程：接口孔加工与尺寸检查 (`machine`)

#### 输入

##### 产品流

###### 供货水包油切削乳化液 (`cutting_fluid`)

可选湿式孔加工采用一种实际供货水包油配方及SDS浓度。测净供货kg；若场内稀释浓缩液，以分别识别浓缩液补水替代此预混卡，不双计稀释水。干加工无必需切削液。

- 选定流： 切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 接口孔加工与尺寸检查用低压电网电力 (`machine_electricity`)

此作业实际用户侧<1kV电网电力，含归属设置待机抽排搬运返工。采原表计kWh按3.6 MJ/kWh转换MJ，然后采每同配置验收设备q_item。可选过程仅执行才有电力；避免共享表计双计。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 废物流

###### 分离钢制机加工切屑 (`steel_chip`)

实际未经处理分选钢生产废物出厂。测净kg牌号污染，余留切削液另排，记录接收方状态；内部再用边料为库存不作为废物跨界。不与焊渣污染粉尘合并。

- 选定流： 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

###### 废水包油切削乳化液 (`spent_coolant`)

仅可选湿加工输出，记录实际油水浓度金属污染厂外接收方。测排废kg及余留液；回流为内部，不是重复取水或对水排放。

- 选定流： 废切削液 `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

### 过程：声明轴套与销装配 (`assembly`)

#### 输入

##### 产品流

###### 成品钢制动臂铰接轴套 (`steel_bushing`)

一种供货钢轴套图纸零件规格，含实际衬层表面处理及供货润滑范围。按受控总成图匹配孔配合对应销及油缸或斗杆接口。记录独立实测安装kg及件数。一般套管流不建立铰接轴承结构衬层范围。

- 选定流： 成品钢制动臂铰接轴套
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制动臂铰接销 (`steel_pin`)

仅独立验收动臂配置实际永久保留销时纳入。记录一种实际销几何材质表面净安装kg。散装安装销配合试验销另供备件排除M及此成品配置；声明独立供货边界，不暗含。

- 选定流： 成品钢制动臂铰接销
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_parts`
- 来源：

###### 声明轴套与销装配用低压电网电力 (`assembly_electricity`)

此作业实际用户侧<1kV电网电力，含归属设置待机抽排搬运返工。采原表计kWh按3.6 MJ/kWh转换MJ，然后采每同配置验收设备q_item。可选过程仅执行才有电力；避免共享表计双计。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

### 过程：可选IPA或水清洗 (`cleaning`)

#### 输入

##### 产品流

###### 液态异丙醇，CAS67-63-0 (`ipa_liquid`)

仅验收前实际IPA清洗。声明一种纯度液态供货，测净领用退回kg及余留回收。购IPA为技术圈投入，不是空气基本流。不由动臂目录推定必需溶剂清洗。

- 选定流： 液态异丙醇，CAS67-63-0
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 供货工业清洗水 (`industrial_water`)

仅实际水洗，排除购切削乳化液已含水。按校准质量或文件化表计实际温度密度换算记录供货水kg；无默认密度。此为供货技术圈水，不是直接淡水取水。

- 选定流： 工业用水 `81960a30-5488-4358-a28a-a0ee1f43f0f2`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 可选IPA或水清洗用低压电网电力 (`cleaning_electricity`)

此作业实际用户侧<1kV电网电力，含归属设置待机抽排搬运返工。采原表计kWh按3.6 MJ/kWh转换MJ，然后采每同配置验收设备q_item。可选过程仅执行才有电力；避免共享表计双计。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 废物流

###### 收集废液态异丙醇清洗溶剂 (`spent_ipa`)

仅实际收集IPA溶剂废物送声明接收方，记组成kg。不用IPA基本释放或不同含卤溶剂身份。回收可再用IPA为退回，不自动废物。

- 选定流： 收集废液态异丙醇清洗溶剂
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

###### 收集钢制动臂水洗废液 (`wash_effluent`)

仅实际独立收集水洗废液，含实测组成厂外处理接收方。为技术圈废物混合物，不是未指定基本水或源淡水。场内处理须独立处理交换及实际物种子介质释放记录。

- 选定流： 收集钢制动臂水洗废液
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

##### 基本流

###### 对未指定空气即时异丙醇释放 (`ipa_air`)

可选实测余IPA，CAS67-63-0，在厂外向实际未指定空气释放。采物种特异浓度流量时间或闭合领用回收残留余留平衡及不确定性。不假定全蒸发不将无解释质量差归空气；工作场所暴露收集溶剂不是此室外释放。其他实际子介质须匹配身份。

- 选定流： 异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_emission`
- 来源：

### 过程：配置动臂净质量与最终验收 (`acceptance`)

#### 输入

##### 产品流

###### 配置动臂净质量与最终验收用低压电网电力 (`acceptance_electricity`)

此作业实际用户侧<1kV电网电力，含归属设置待机抽排搬运返工。采原表计kWh按3.6 MJ/kWh转换MJ，然后采每同配置验收设备q_item。可选过程仅执行才有电力；避免共享表计双计。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 产品流

###### 验收独立交付焊接钢制挖掘机动臂总成 (`finished_boom`)

配置被动钢箱形动臂，按一种图纸修订验收，声明已装轴套永久保留销。独立箱体与完整交付动臂净kg核对。不暗含油缸软管液压动力组斗杆铲斗。代表验收入口为未涂覆运输包装前；后续涂覆是披露链接阶段，不可在声称涂覆入口时省略。

- 选定流： 验收独立交付焊接钢制挖掘机动臂总成
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_mass`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | shared manufacture | 首先按实际图纸修订工单表计库存细分。共享下料焊孔吊装检查负载按观察机时实际设置待机负载证据归属，不默认动臂销售质量。供预制件负担采用供方边界。无法细分时文件化实际物理因果基准；经济分配须实际价格期间敏感性，不用固定作者百分比。 |  |
| `allocation_rework` | rejects scrap returns | 消耗拒收返工留实际期间交换总量并除同配置验收设备数。可再用边料返供方与废物分开。文件化废钢法律产品状态接收路线；不自动抵扣原生钢，不同时共产品分配重复回收益。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | finished_boom | 原校准净重量签认验收 | 配置；验收净质量 M；图纸修订序号；已装轴套销范围；校准秤量程分辨；零皮净M kg；独立焊箱kg；验收状态 | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每验收设备配置 | 实际声明代表期间 | 声明动臂工厂实际供货入口 | 每台验收净质量 | 原校准重量验收 |
| `cp_stock` | all_processes | stock chemical gas | 实际领用退回库存SDS记录 | 图纸工单；一种钢板化学气规格；组成状态；校准领用退回kg；库存改变；验收数 | 按退回库存修正后测净领用材料kg。保留实际预混范围SDS浓度；表计水气保留原体积条件及独立文件化匹配质量换算。 | kg | 实际归属期间 | 实际声明代表期间 | 声明动臂工厂实际供货入口 | 实际归属投入kg / 同一配置的验收设备数量 | 库存平衡SDS表秤校准 |
| `cp_parts` | all_processes | supplied pivot components | 供方清单原独立部件重量 | 图纸修订序号；轴座轴套销规格；衬层表面预充；实际安装kg件数；退回；验收数 | 称供货物理部件并独立于件数记录安装kg。核对供货已含同图纸接口保留及临时散装件区别独立供润滑。 | kg | 每交付配置 | 实际声明代表期间 | 声明动臂工厂实际供货入口 | 实际安装供货kg / 同一配置的验收设备数量 | 零件证书清单原重量 |
| `cp_energy` | all_processes | electricity | 实际校准作业表计 | 工单过程；表电压供方；kWh始末；设置待机返工抽排；观察时间负载；验收数 | 读取实际表覆盖；按3.6 MJ/kWh换MJ，按文件化因果作业记录归属共享消耗一次。 | MJ | 实际期间每共享负载改变 | 实际声明代表期间 | 声明动臂工厂实际供货入口 | 实际归属MJ / 同一配置的验收设备数量 | 表校准分配观察 |
| `cp_waste` | all_processes | segregated specific waste | 原接收清单重量 | 一种钢溶剂废液组分；实测组成；净kg；排回收；法律状态接收方；验收数 | 受控皮重后逐不同废物组分称重；记录余留液接收方库存回收分开。废液为收集废物，不是基本水。 | kg | 每转移实际期间 | 实际声明代表期间 | 声明动臂工厂实际供货入口 | 实际转移废物kg / 同一配置的验收设备数量 | 秤记录组成接收凭据 |
| `cp_emission` | cleaning | ipa_air | 匹配物种采样或闭合溶剂平衡 | CAS67-63-0；浓度流量时间；实际空气子介质；领用回收余留残留；检出不确定性；验收数 | 按匹配物种采样或文件化闭合领用回收残留余留平衡测实际室外余IPA。无解释残差不假设空气释放。 | kg | 实际清洗期间 | 实际声明代表期间 | 声明动臂工厂实际供货入口 | 实际释放kg / 同一配置的验收设备数量 | 采样校准完整溶剂平衡 |
| `cp_configuration` | all_processes | complete accepted passive boom | 受控图样检查供货验收 | 图纸修订序号；箱隔板几何；实际证书；根斗杆油缸接口尺寸；已装轴套销衬层已含；批准焊加工检查处置 | 将当前图样供货清单核对实际制造箱体焊后接口尺寸验收已装件。仅采当前批准计划实际要求试验准则；不由宣传册推定通用证明载荷焊接验收阈值。 | kg | 每图纸配置验收设备 | 实际声明代表期间 | 声明动臂工厂实际供货入口 | 限定随每验收设备 | 签认图样清单检查处置 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `net_mass_configuration` | cp_mass; finished_boom | 此完整设备指独立验收动臂，不是挖掘机。用适合实际动臂质量几何的校准秤及原量程分辨校准零皮净记录。独立称焊箱已装轴套销，核对箱kg加实际保留部件残留至正完整M kg。排除包装吊具临时试验销散装安装销备件油缸软管动力组。不用假定干重目录发运重尺寸乘默认密度整机重量代替。 | cp_mass; cp_parts; cp_configuration |
| `interfaces_acceptance` | finished_boom | 按当前图纸修订孔轴配合记录签认处置分别声明根机架铰点斗杆铰点各油缸接口。记实际焊接检查覆盖方法焊后加工状态；额外载荷证明无损检测应力消除仅实际规定执行才适用。不规定通用钢号焊参数试验载荷处理温度寿命。 | actual drawing, approved procedure and original acceptance |
| `period_collection` | all protocols | 按因果记录归属实际期间总量至一种图纸配置；除实际验收设备数，以原kg或MJ采q_item。消耗拒收返工留分子。对应完整M须同一群体供货状态物理实测；不混不同箱轴套销配置。 | actual accepted counts/job/meter/stock records |
| `mass_and_chemical_balance` | all exchanges | 按实际不确定性闭合购库存零件焊丝至验收安装质量退回库存改变独立分选废物。分别核对加工乳化液IPA领用回收残留余留释放。无固定产率暗零全蒸发无解释残差排放。声明完整工厂覆盖前，额外实际密封卡圈润滑磨料检查试剂压缩空气热收集烟尘组分各展开自身具体交换。 | all primary protocols and actual operation register |
| `evidence_limits` | external evidence | Cat320精确动臂段支持焊接钢箱结构；别处混322文字不采用。历史311C仅历史结构示例。Cat605-3310支持独立目录供货，但含通用轴承文字，不能认证其供销油缸范围。Cat384-2393支持接口示例；微挖尺寸材质不转至另一动臂。UNSD印刷PDF235提供广义44461零件身份，不是明确动臂专属分类决定。各来源不提供实测制造清单；仍须原前景记录独立科学审查。 | cat320-boom; cat311-historical; catboom-supply; catbushing-interface; unsd-cpc3 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | 核验精确参考名等于finished_boom，同图纸配置物理实测正完整M kg。核对独立焊箱质量已装件增加，核验排除散装销执行器。 |  |
| `validation_boundary` | all_processes | 核验实际钢板路线证书预制件供货入口焊加工顺序接口记录未涂覆验收状态。产品声明含涂覆后续阶段时，作此声明前必需其实际链接负担及匹配入口。 |  |
| `validation_identity` | all flow rows | 核验实际公开state100类型参考属性组单位官方双语名。匹配化学状态路线及基本实际即时室外空气子介质；供工业水收废水不同。拒用起重机体加液压系统代被动挖掘机动臂、一般套管代指定轴承、药芯代实心丝。具体未解行保留，不强配UUID。 |  |
| `validation_claims` | claims | PCR机械通过核验作者一致性，不是实际工厂测量整机性能完整摇篮到大门发表科学批准。披露清单身份链接计量来源缺口，区分未知不适用低于检出。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 独立验收被动钢挖掘机箱动臂涂覆包装前制造前景；标题不意味发表 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 匹配配置独立动臂制造或整机模型链接供动臂投入，按实际M缩放 |
| excluded_use | 铲斗整机制造挖掘服务液压动力系统一般建筑钢结构维修寿命声明 |
| required_metadata | 图纸修订型号序号根斗杆油缸接口实际材料零件证书箱完整净M已装轴套销衬层预充范围未涂覆入口实际焊加工检查记录工厂期间验收数分配上游废物接收方 |
| required_quality_disclosure | 全部身份原计量实际清单公用供接收方独立科学证据缺口；产率返工平衡不确定性分配敏感性 |
| update_trigger | 图纸接口材质焊孔路线轴套销供货状态涂覆入口工厂供方表计验收改变 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| unsd-cpc3 | official_guidance | UNSD, CPC Version3.0 Explanatory Notes,30June2025, printed/PDF235:44461; printed/PDF226:43580. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 广义零件身份；铲斗另名。较窄动臂解释为作者判断仍待审查。 |
| cat320-boom | handbook | Caterpillar,320D3 Hydraulic Excavator, official undated page, Designed For Uptime and High Productivity boom paragraphs. https://www.cat.com/en_IN/products/new/equipment/excavators/medium-excavators/129160.html | 机器人焊动臂含内隔钢箱；不转钢号参数数量寿命。 |
| cat311-historical | handbook | Caterpillar,Cat311C Utility, publisher-retained historical-model page, Boom and Boom and Stick Construction. https://h-cpc.cat.com/cmms/v2?cid=406&f=product&gid=265&it=product&lid=nl&nc=1&pid=752135&sc=L120 | 仅历史上下面侧板焊箱示例，非当今通用路线。 |
| catboom-supply | handbook | Caterpillar Parts Store,605-3310 Boom Assembly-Bearing, official undated page, heavy fabrication category and Compatible Models. https://parts.cat.com/en/catcorp/product/605-3310 | 独供动臂目录示例；通用轴承文及供货完整性限制；不复用目录kg。 |
| catbushing-interface | handbook | Caterpillar Parts Store,384-2393 Boom Linkage Bushing, official undated page, Description and Applications. https://parts.cat.com/en/catcorp/product/384-2393 | 对应销轴套安装面接口示例；微挖尺寸衬层结构不推广。 |
