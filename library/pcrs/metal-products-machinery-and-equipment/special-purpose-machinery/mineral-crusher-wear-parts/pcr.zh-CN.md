---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.mineral-crusher-wear-parts
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 砂铸奥氏体锰钢破碎机颚板制造

## 1. 范围与适用性

新制完整替换破碎机颚板，声明奥氏体锰钢，通过电熔砂铸、电炉固溶热处理、水淬及按受控图纸精整，以未涂漆状态供应。含实际造型炉料化学浇注落砂热处理精整冶金尺寸净质量验收条件保护。本 CPC44462 较窄路线不覆盖所有矿物机械零件。

排除完整破碎机颚架机框圆锥动定衬板筛一般铸坯高铬白口铸铁马氏体淬回火钢陶瓷碳化物镶嵌其他复合件涂漆涂覆供应状态翻新修理旧衬板独立模样工装制造现场安装矿物吞吐使用加工硬化磨耗替换报废。燃气未声明熔热路线须独立评估。

所选电力未涂漆路线为须实际前景记录的适用选择，非声称各铸造厂采用。厂商来源仅支持砂铸热控制适配追溯背景。不采用普遍合金组成熔收得温时淬水量零件质量硬度寿命磨耗率。须实际炉物料表配方验收称重原件；科学待审。未有匹配核验上游数据时，接收到验收运行前景非完整从摇篮到厂门。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.mineral-crusher-wear-parts |
| classification_refs | CPC3.0 44462 子类44440产品零件；较窄所选颚板路线；仅背景 |
| covered_products | 新制完整替换破碎机颚板，声明奥氏体锰钢，通过电熔砂铸、电炉固溶热处理、水淬及按受控图纸精整，以未涂漆状态供应。含实际造型炉料化学浇注落砂热处理精整冶金尺寸净质量验收条件保护。本 CPC44462 较窄路线不覆盖所有矿物机械零件。 |
| excluded_products | 排除完整破碎机颚架机框圆锥动定衬板筛一般铸坯高铬白口铸铁马氏体淬回火钢陶瓷碳化物镶嵌其他复合件涂漆涂覆供应状态翻新修理旧衬板独立模样工装制造现场安装矿物吞吐使用加工硬化磨耗替换报废。燃气未声明熔热路线须独立评估。 |
| representative_product | 一件验收完整图纸牌号炉次新颚板 |
| production_route | 砂型；电熔合金调整；浇凝落砂；电固溶水淬；精整适配机加；冶金尺寸质量放行；条件保护 |
| market_state | 声明厂门新制验收未涂漆替换颚板 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造指定完整成品锰钢破碎机颚板 |
| How much | 1 kg 验收颚板净质量；按件采集以实体实测 M 归一化 |
| How well | 实际牌号炉冶金图纸齿适配型生产者客户验收；等质量非等适配韧性耐磨性 |
| How long or cycle | 一次制造验收周期；无破碎吨服务更换间隔寿命 |
| reference_flow_link | finished_plate |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收固溶处理奥氏体锰钢破碎机颚板 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 生产者铸造厂场址时期；件号图纸修订齿型安装适配几何单件序列批炉；实际钢牌号碳锰铬残余分析；炉型外部炉料内部浇冒口返料、实际型砂粘结配方再生；记录铸造固溶淬火周期冶金；实际精整未涂漆完整状态；受控检查取样放行；正实体实测 M kg 校准皮重不确定性包装排除；材料水电废物物种平衡因果分配上游缺口 |

这里一件完整计量对象为一件验收颚板，非一对完整破碎机。数据集元数据等说明须声明限定；缺失使参考不完整。M 仅含成品颚板，排除可拆紧固件镶嵌硬件夹具保护；不采用毛坯炉料组装破碎机目录密度计算质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量,单位 kg; 使用 cp_mass 采集。 |
| `mass_record_provenance` | cp_mass | Mass | kg | 本协议完整设备指同图纸修订牌号供应状态的一件成品颚板。适用校准秤实体称各验收板，扣实测夹具皮重；保留炉件身份实际读数校准不确定性日期操作者签字放行。同配置数量须实际验收件数关联质量原件。浇冒口不合格铸件热处理去除皮机加屑在成品 M 外。无假定每板质量目录重换算。 |
| `energy_units` | 各电力行 | Net calorific value | MJ | 用核验能量单位换算 1 kWh = 3.6 MJ。保留实际供应电压炉型泵抽排机加仪表含待机。无假定收得额定功率替代实测。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际接收外部炉金属型成分耗材公用供应 |
| starting_condition_role | 接收到验收颚板运行铸造制造前景 |
| product_classification_scope | 新制完整替换破碎机颚板，声明奥氏体锰钢，通过电熔砂铸、电炉固溶热处理、水淬及按受控图纸精整，以未涂漆状态供应。含实际造型炉料化学浇注落砂热处理精整冶金尺寸净质量验收条件保护。本 CPC44462 较窄路线不覆盖所有矿物机械零件。 |
| recursive_input_rule | 不以成品颚板作自身制造投入。内部液金属浇冒口不合格再生砂为转移；外接炉料独立。外购铸坯替代所含熔型铸范围并须另声明起始门点 |
| upstream_dataset_requirement | 匹配金属牌号分析外废料状态砂粘结组成耐磨材料供应状态电水边界场址时期实际流属性单位。不匹配链接保留缺口 |
| disclosure | 生产者铸造厂场址时期；件号图纸修订齿型安装适配几何单件序列批炉；实际钢牌号碳锰铬残余分析；炉型外部炉料内部浇冒口返料、实际型砂粘结配方再生；记录铸造固溶淬火周期冶金；实际精整未涂漆完整状态；受控检查取样放行；正实体实测 M kg 校准皮重不确定性包装排除；材料水电废物物种平衡因果分配上游缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacture` | 所有工序 | 含实际造型电熔浇注砂再生固溶淬火精整检查返工外包门点。声明长期炉模样机床工厂设施排除核心运行前景；透明補另有证据资本贡献。外包服务所含资源不重复。安装破碎服务磨耗在外。 |  |
| `boundary_actual_exchanges` | 完整实际炉路线 | 卡为须实际配方路线适用性的起始交换，非完整通用表。发生时补各实际粘结组分催化涂层熔剂合金炉气工具冷却液喷砂介质无损化学焊修耗材过滤残渣实测物种精确身份。热机械缺陷烟尘不指定虚构数量。区分缺失有证据不适用；实际炉材料操作平衡核对前不称完整清单。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `moulding` | 受控模样砂型准备 | required | 声明砂铸颚板路线 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `melting` | 电熔炼与逐炉合金调整 | required | 声明电熔路线，记录实际炉型 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `casting` | 浇注凝固落砂 | required | 实际砂铸颚板炉次砂型 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `thermal` | 电加热固溶处理与水淬 | required | 声明奥氏体锰钢固溶处理交付路线 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `finishing` | 图纸受控精整与尺寸机加 | required | 实际要求装配适配成品颚板 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `acceptance` | 零件冶金净质量验收 | required | 每件验收完整成品颚板 | foreground | 一台验收同配置成品设备，使用 M 归一化 |
| `packing` | 条件厂门保护 | conditional | 仅实际运输保护 | foreground | 一台验收同配置成品设备，使用 M 归一化 |

砂型与合金调整液金属在浇注汇合；实际冷却落砂铸件经固溶淬火精整到验收。内部金属砂循环在该图内且明确实测。包装条件。各卡须实际配方供应状态阶段适用性。

### 过程：受控模样砂型准备 (`moulding`)

准备实际件修订模样型腔补缩浇道，仅需要时型芯。记录实际砂粘结配方再生原生供应收得再生。石英砂硅酸钠粘结卡为具体条件示例，非普遍树脂粘结浓度砂比。实际替代成分须独立实体身份。

#### 输入

##### 产品流

###### 干石英铸造型砂 (`quartz_sand`)

实际指定干供应石英砂实测新增，排除复用循环砂。骨料石熔融硅其他耐火砂不替代。

- 选定流：干石英铸造型砂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_moulding。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_moulding`
- 来源：`metso`

###### 水性硅酸钠铸造粘结剂 (`sodium_silicate`)

仅实际型芯配方使用硅酸钠溶液且实测浓度牌号时；非普遍粘结或干硅酸钠。其他配方成分独立行。

- 选定流：水性硅酸钠铸造粘结剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_moulding。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_moulding`
- 来源：`metso`

###### 工厂进线交流电 (`moulding_electricity`)

仅实际仪表归属供应；kWh 换 MJ。保留炉机加泵抽排仪表边界运行待机因果分配，非铭牌功率假定熔效率。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_moulding。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_moulding`
- 来源：`metso`

### 过程：电熔炼与逐炉合金调整 (`melting`)

按所需颚板化学装实际追溯外部废钢合金。识别电炉型耐材磨耗炉分析温度实际金属转移。内部浇冒口不合格回炉为内循环，非第二采购钢投入；外部返料仅实际接收计入。无普遍锰碳铬配方炉效率氧化因子。

#### 输入

##### 产品流

###### 外部碳钢熔炼废钢料 (`external_steel_scrap`)

实测外部炉料供应含实际化学沾染分析库存流转。内部浇冒口不作采购。内部返回不作原生钢抵扣。

- 选定流：外部碳钢熔炼废钢料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_melting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_melting`
- 来源：`metso`

###### 锰铁合金添加料 (`ferromanganese`)

实际交付锰铁牌号锰碳其他分析供应状态净装炉；无假定浓度。内部合金回用非第二采购。

- 选定流：锰铁合金添加料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_melting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_melting`
- 来源：`metso`

###### 人造石墨增碳剂 (`graphite`)

仅需要时实际供应人造石墨牌号灰分净装炉；非煤焦活性炭基础碳。

- 选定流：人造石墨增碳剂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_melting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_melting`
- 来源：`metso`

###### 金属铝脱氧粒 (`aluminium`)

仅实际指定金属铝粒添加实测分析；非氧化铝耐材必需合金配方。

- 选定流：金属铝脱氧粒
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_melting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_melting`
- 来源：`metso`

###### 氧化铝质炉耐火砖 (`refractory`)

实际完整耐火砖规格覆盖炉次消耗更换磨耗，非纯散装 Al2O3 每板加计全部原衬。

- 选定流：氧化铝质炉耐火砖
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_melting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_melting`
- 来源：`metso`

###### 工厂进线交流电 (`melting_electricity`)

仅实际仪表归属供应；kWh 换 MJ。保留炉机加泵抽排仪表边界运行待机因果分配，非铭牌功率假定熔效率。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_melting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_melting`
- 来源：`metso`

#### 输出

##### 废物流

###### 锰钢熔炼炉渣废物 (`slag`)

实际渣化学净质量记录目的；无证据非可售产品环境矿物释放。

- 选定流：锰钢熔炼炉渣废物
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_melting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_melting`
- 来源：`metso`

### 过程：浇注凝固落砂 (`casting`)

追溯浇包炉次到砂型件及实际冷却落砂浇冒口去除。记录实际金属验收件平衡砂粉尘转移不合格修补。内部液金属浇冒口为过程转移，非递归边界产品投入。不推断必需浇温冷却小时铸造收得排放。

#### 输入

##### 产品流

###### 工厂进线交流电 (`casting_electricity`)

仅实际仪表归属供应；kWh 换 MJ。保留炉机加泵抽排仪表边界运行待机因果分配，非铭牌功率假定熔效率。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_casting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_casting`
- 来源：`metso`

#### 输出

##### 废物流

###### 废硅酸钠粘结石英型砂 (`spent_sand`)

仅该粘结路线实际弃用废砂，实际再生后沾染净转移实测；循环砂非处置。

- 选定流：废硅酸钠粘结石英型砂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_casting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_casting`
- 来源：`metso`

###### 捕集锰钢铸造粉尘废物 (`captured_dust`)

实际过滤残渣化学水分净质量目的；捕尘非基础空气释放。

- 选定流：捕集锰钢铸造粉尘废物
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_casting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_casting`
- 来源：`metso`

#### 输出

##### 基本流

###### 石英，向未指定空气即时排放 (`quartz_air`)

仅有证据 CAS14808-60-7 石英分数即时未指定空气释放，具物种相计量，非全部总尘捕集残渣无定形硅长期释放。

- 选定流：石英，向未指定空气即时排放
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_casting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_casting`
- 来源：`metso`

### 过程：电加热固溶处理与水淬 (`thermal`)

用实际鉴定逐炉周期记录炉装温度时间转移淬火状态。记录实际水补排循环冷却氧化皮。不替代使用加工硬化低合金淬回火。仅热日志不证明交付组织；关联实际冶金验收原件。不虚构普遍温度保温水量晶界准则。

#### 输入

##### 产品流

###### 工艺用水 (`quench_water`)

仅实际技术圈淬火补充冷却供水质量净新增。内循环计一次；自然取水须另介质明确基础流。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_thermal。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_thermal`
- 来源：`metso`

###### 工厂进线交流电 (`thermal_electricity`)

仅实际仪表归属供应；kWh 换 MJ。保留炉机加泵抽排仪表边界运行待机因果分配，非铭牌功率假定熔效率。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_thermal。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_thermal`
- 来源：`metso`

#### 输出

##### 废物流

###### 锰钢淬火排水处理转移品 (`quench_effluent`)

仅实际处理排水具实测组成目的，非假定环境水排放。

- 选定流：锰钢淬火排水处理转移品
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_thermal。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_thermal`
- 来源：`metso`

###### 锰钢热处理氧化皮废物 (`scale`)

仅加热淬火后实际分选皮具化学目的，无自动氧化铁基础流。

- 选定流：锰钢热处理氧化皮废物
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_thermal。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_thermal`
- 来源：`metso`

#### 输出

##### 基本流

###### 水蒸气 (`water_vapour_air`)

仅实际 CAS7732-18-5 即时未指定空气排放蒸气，直接实测或扣除排水回收保留后闭合淬水平衡；非全部补水供应自然取水。不假定蒸发分数。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_thermal。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_thermal`
- 来源：`metso`

### 过程：图纸受控精整与尺寸机加 (`finishing`)

依受控齿型安装尺寸实施实际浇口残留去除研磨适配面机加；发生时记录喷丸。机加可限图纸要求面。实际焊修渗透检验保护喷漆在数据完成前须独立精确耗材鉴定适用性；无泛涂料修补行普遍公差。

#### 输入

##### 产品流

###### 铸钢喷丸料 (`steel_shot`)

仅喷丸时实际供应钢丸牌号净磨耗领用；不以炉废钢替代。

- 选定流：铸钢喷丸料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`metso`

###### 氧化铝粘结砂轮片 (`grinding_disc`)

仅完整粘结磨片牌号实际磨耗领用，非纯氧化铝粉。

- 选定流：氧化铝粘结砂轮片
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`metso`

###### 工厂进线交流电 (`finishing_electricity`)

仅实际仪表归属供应；kWh 换 MJ。保留炉机加泵抽排仪表边界运行待机因果分配，非铭牌功率假定熔效率。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`metso`

#### 输出

##### 废物流

###### 奥氏体锰钢机加工屑废物 (`metal_chips`)

实际分选称重屑目的，内部回熔披露转移非第二外部投入；不以普通低碳屑替代。

- 选定流：奥氏体锰钢机加工屑废物
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`metso`

### 过程：零件冶金净质量验收 (`acceptance`)

将图纸件炉化学交付冶金状态实际要求尺寸表面缺陷其他验收试验关联签字放行。生产者客户定义适用取样限值。称量实际完整验收颚板，排除夹具运输保护。目录破碎机重毛坯重炉料重理论体积密度不能建立 M。

#### 输入

##### 产品流

###### 工厂进线交流电 (`acceptance_electricity`)

仅实际仪表归属供应；kWh 换 MJ。保留炉机加泵抽排仪表边界运行待机因果分配，非铭牌功率假定熔效率。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`amsted`

#### 输出

##### 产品流

###### 验收固溶处理奥氏体锰钢破碎机颚板 (`finished_plate`)

一件完整新制图纸牌号炉次颚板，声明未涂漆适配精整状态，无破碎机紧固件镶嵌松散附件运输保护夹具。

- 选定流：验收固溶处理奥氏体锰钢破碎机颚板
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`amsted`

### 过程：条件厂门保护 (`packing`)

记录实际独立保护供应，排除 M。周转夹具托盘服务须实际流转分母，非假定寿命。安装破碎机运行在范围外。

#### 输入

##### 产品流

###### 低密度聚乙烯薄膜（PE-LD） (`protective_film`)

仅实际供应 LDPE 保护膜净领用，排除颚板 M。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：

###### 瓦楞纸板箱 (`carton`)

仅该板运输实际实测箱；不称重铸件都用纸箱。排除 M。

- 选定流：瓦楞纸板箱
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：

###### 工厂进线交流电 (`packing_electricity`)

仅实际仪表归属供应；kWh 换 MJ。保留炉机加泵抽排仪表边界运行待机因果分配，非铭牌功率假定熔效率。

- 选定流：工厂进线交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_heat` | 炉批共用资源 | 可行时直接归属炉料型精整工单。共炉金属记录化学匹配总转移内部返回验收板不合格库存实际归属金属平衡。共炉热抽排资源用实测因果炉料负荷炉占实际周期：份额 = 工单驱动量 / 覆盖工单驱动量之和。保留时期分母待机敏感性；不用目录重分配假定一致收得。 |  |
| `allocation_returns` | 内部金属砂循环 | 内部浇冒口不合格屑再生砂为受控内转，具实际库存损耗；不作第二采购避免原料抵扣。携带实际回熔再生能耗磨耗。外部炉料最终废物独立。返工不合格影响验收输出分母；无普遍返料分数仅投入合计再生含量声明。 |  |
| `allocation_coproduct` | 可售共产品鉴定 | 追溯各实际外送渣废金属目的一次。共产品状态分配须实际合同因果经济证据敏感性，非仅可回收。实际批鉴定试验归覆盖生产具追溯取样范围驱动；破坏试料非验收输出。独立研发另分；无假定试频工装寿命。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `acceptance` | reference_product | 验收实体称重记录 | 型号；配置；序列号；验收净质量 M；件号修订；成品板秤读数；夹具皮重；件炉牌号齿适配型未涂漆状态；校准不确定性；图纸；签字放行 | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 逐验收台 | 实际制造验收时期 | 声明成品板验收门点 | 每台验收净质量 | 实际校准实体成品板称重实测皮重受控图纸放行 |
| `cp_moulding` | `moulding` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取实际模样图纸配方安全数据单砂领退再生造型工单阶段仪表 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |
| `cp_melting` | `melting` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取炉装分析外部内部金属转移耐材实测炉抽排电能 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |
| `cp_casting` | `casting` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取浇包型炉追溯实际浇冷落砂工单浇冒口不合格平衡砂尘仪表 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |
| `cp_thermal` | `thermal` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取实际鉴定周期炉装校准炉热淬日志水氧化皮转移仪表 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |
| `cp_finishing` | `finishing` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取实际精整机加喷丸工单刀具磨料净消耗件炉屑尘仪表 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |
| `cp_acceptance` | `acceptance` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取图纸炉规格化学组织试验报告校准实际净称重签字放行 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |
| `cp_packing` | `packing` | inventory | 实际阶段交换记录 | 型号配置序列批件号修订精确交换安全数据单净领退库存 kg 仪表 kWh 废物目的排放方法实际共用驱动量 | 读取实际包装领退皮重周转支撑流转 | 质量行 kg；电能行 MJ | 逐验收台及实际生产批 | 实际制造验收时期 | 声明工厂外包门点 | 实测时期交换归属 / 同一配置的验收设备数量 | 原始工单图纸安全数据单校准秤仪表验收转移 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | 须 mass_record_provenance 实际校准实体成品板称量同图纸牌号供应状态正净 M kg。保留炉件追溯实测皮重；排除浇冒口不合格屑去除皮夹具包装。不以熔炉料毛坯密度估算整破碎机质量替代。实际验收件数须匹配质量配置原件。缺原件须科学数据审查。 | 实际零件称量校准皮重签字放行 |
| `quality_identity` | 所有交换 | 核验一个化学实体交换实际供应牌号状态。锰铁非硅锰基础锰；石墨增碳非煤活性炭；耐火砖磨片非纯氧化铝；实际型粘结溶液非干粉。废尘砂渣非基础环境排放。保留实际参考属性单位相介质；未决保持精确。 | 供应分析配方安全数据单公开身份单位原件 |
| `quality_metallurgy` | cp_melting; cp_thermal; cp_acceptance | 追溯件到炉料化学残余实际鉴定固溶淬周期。保留炉校准装载温时转淬记录及实际冶金尺寸验收报告。仅热日志不建立奥氏体状态；用生产者要求检验具实际取样规格。不推断普遍化学范围硬度磁检准则碳化物阈值热曲线。焊修后续受热须实际鉴定证据，非假定等价状态。 | 实际炉件化学热冶金放行原件 |
| `quality_balance` | 金属砂水电物种 | 按炉时期核对外炉料内循环验收金属不合格返回渣皮屑实际库存变化；不假定收得=1。砂分新增再生循环最终处置。水供循环排放蒸发须实际记录，无自动资源废水等价。石英空气须实际晶态石英 CAS14808-60-7 释放分数介质；无定形硅总尘捕集残渣不替代。其他金属氧化物燃烧排放须独立化学实际证据后加身份。 | 实际炉材料砂水物种平衡转移 |
| `quality_coverage` | 实际数据集上游链接 | 区分实测计算缺失有证据不适用。审计候选卡外实际全过程图配方机加检验耗材供应边界外包资本排除分配不确定性。完整从摇篮到厂门须核验匹配上游链接。契约检查不建立工厂数据完成性能验证科学批准。 | 实际完整炉操作记录透明缺口 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考及 finished_plate | 精确参考产品名等于 finished_plate 输出。用实际正 M kg 及 cp_mass、normalize_mass。空候选参考 UUID 在 unresolved_flow_identities 登记该精确行。核验一件完整验收颚板实际牌号型炉未涂漆门点，排除其他件保护。 |  |
| `validate_basis` | 所有行协议 | 核验双语有序合法小写行规则协议标识实际投影引用、按件 q_item、M kg 同配置数量。完整计量对象始终为一件颚板。保留真实公开数量面积能量属性；匹配换算须原计量，不改名质量。 |  |
| `validate_route` | 炉型精整记录 | 须实际所选电砂铸固溶水淬路线炉化学型配方件炉追溯实际成品冶金适配实体质量原件。内部返回非外采购；废砂捕尘非空气排放。缺记录未鉴定焊修受热须审查。 |  |
| `validate_use` | 数据集用途 | 披露精确件牌号炉型门点称重热冶金原件缺交换未决身份上游缺口。等 kg 不能证明等耐磨寿命冲击韧性破碎吞吐。候选未发表科学待审。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 实际数据完成审查后为 secondary_dataset 和 background_dataset |
| downstream_use | 指定新破碎机颚板投入独立边界设备装配替换生命周期 |
| allowed_use | 制造比较匹配牌号型热处理状态供应门点，披露实际质量上游链接 |
| excluded_use | 排除完整破碎机颚架机框圆锥动定衬板筛一般铸坯高铬白口铸铁马氏体淬回火钢陶瓷碳化物镶嵌其他复合件涂漆涂覆供应状态翻新修理旧衬板独立模样工装制造现场安装矿物吞吐使用加工硬化磨耗替换报废。燃气未声明熔热路线须独立评估。 |
| required_metadata | 生产者铸造厂场址时期；件号图纸修订齿型安装适配几何单件序列批炉；实际钢牌号碳锰铬残余分析；炉型外部炉料内部浇冒口返料、实际型砂粘结配方再生；记录铸造固溶淬火周期冶金；实际精整未涂漆完整状态；受控检查取样放行；正实体实测 M kg 校准皮重不确定性包装排除；材料水电废物物种平衡因果分配上游缺口 |
| required_quality_disclosure | 实测计算缺失记录实际净称炉冶金适配原件身份上游缺口资本排除分配不确定性；候选科学待审 |
| update_trigger | 件图齿适配型牌号炉料粘结炉铸固溶淬路线焊修精整涂覆状态实体质量验收场址上游变化 |


## 11. 数据源

| 来源标识 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `metso` | literature | [Metso Crushing and Screening Handbook, edition7](https://www.metso.com/globalassets/insights/ebooks/metso-crushing-and-screening-handbook-edition7-en-web.pdf) | Wear parts–crushers，印刷168–169：砂型铸造热控制最终机加背景。厂商说明非当前工厂配方必需电炉粘结选择。一般材料加工硬化说明不建立本板牌号净重寿命。不采用数值制造因子普遍热限。 |
| `amsted` | extension_guidance | [Amsted: manganese-steel wear parts selection](https://www.amstedglobal.com/what-to-consider-when-buying-your-manganese-steel-wear-parts-for-your-crusher/) | 2021年10月1日文章，试验证书热处理段：追溯化学尺寸、热日志不能独立建立性能的提醒。仅历史厂商指导；圆锥衬几何合金比例温度硬度磁取样检查寿命非普遍颚板要求。须实际生产者规格冶金验收。 |
