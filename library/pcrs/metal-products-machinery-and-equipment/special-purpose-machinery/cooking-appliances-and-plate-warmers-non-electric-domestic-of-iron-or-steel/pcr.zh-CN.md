---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.cooking-appliances-and-plate-warmers-non-electric-domestic-of-iron-or-steel
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 家用非电热铁或钢制烹饪器具及暖盘器

## 1. 范围与适用性
本候选规则规定完整家用铁或钢制器具的前景制造：实际主要热功能为烹饪食品或暖盘，主要热源不采用电阻或感应加热。保留燃气、固体燃料、液体燃料配置、不锈钢板结构、铸铁灶面炉体及铁钢混合装配。独立家用非电热暖盘器仍在范围内；必须采集其实际设计及热源，不能从炉具样册推断。单一型号不定义整个类别。
ESSE燃木烹饪兼附带室内供暖反证了自动排除供暖产品的做法。AGA Rayburn烹饪热水中央供暖组合配置需要审查实际主要功能及分类依据。辅助电点火、泵或控制不自动使主要烹饪热源变成电热。歧义混合产品须有功能分类审查记录；不能默默缩小类别或从燃料标签指定精确映射。排除仅供暖炉具、主要电热烹饪器具、非家用热处理机械及独立出售的零件。来源：esse-cookers；aga-rayburn；rangemaster-gas；un-cpc-3-0。

## 2. 产品类别识别
| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.cooking-appliances-and-plate-warmers-non-electric-domestic-of-iron-or-steel |
| classification_refs | CPC 3.0 44821；父类4482为非电热 |
| covered_products | 主要非电热的实际家用铁钢制烹饪器具及暖盘器 |
| excluded_products | 仅供暖44822；主要电热44817；非家用44515；零件；未经审查的歧义混合产品 |
| representative_product | 声明实际燃气灶、燃木炉、燃油炉或暖盘器配置；无通用代表型号 |
| production_route | 实际铸造板材加工表面处理装配及工厂试验制造购买组合 |
| market_state | 验收完整厂门产品；声明热源燃料接口及辅助电力 |

## 3. 参考流
| 字段 | 值 |
| --- | --- |
| What | 供应一个声明的烹饪暖盘设备配置以供下游数据生产 |
| How much | 1 kg验收完整产品净质量 |
| How well | 满足实际声明的烹饪暖盘验收规格燃料接口及安全试验 |
| How long or cycle | 一次工厂供应事件；使用寿命及烹饪服务属于另行定义的下游比较 |
| reference_flow_link | reference_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 家用非电热铁或钢制烹饪器具及暖盘器 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；配置；家用烹饪暖盘功能；主要热源；实际燃料及喷嘴；辅助电气功能；材料牌号；表面处理；制造购买矩阵；地理；工厂；期间；净BOM；验收 |

D为同一期间配置经校准的验收净质量总和；N为这些验收台数；M = D/N。Q为包括废品返工负荷的各项可归属期间交换。保留q_item = Q/N及q_ref = Q/D。D排除废品包装游离试验水及试验食品；不得跨配置平均。不规定固定M燃料用量或使用寿命。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference_product | Mass | kg | cp_mass计量正D及验收N；保持同期间配置BOM及校准净范围。 |
| physical_species | physical material and species records | Mass | kg | 区分湿质量干固体与所含元素；包括产品废料炉渣污泥废水排放，每股物流有其自身匹配分析。 |
| fuel_energy | test_gas, test_propane, test_oil, test_wood, firing_gas | Energy | MJ | 保留实际燃料组成水分及净热值；体积转换要求实际压力温度密度。样册功率或用户消耗不是工厂能量。 |

## 5. 系统边界

### 边界概化
| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际收到的具体牌号金属完整铸件炉体或部件及供应商完成状态 |
| starting_condition_role | foreground_start |
| product_classification_scope | 家用非电热烹饪暖盘；接受分类关系须经语义审查 |
| recursive_input_rule | 外购同类完整器具为一个带上游产品数据集的投入，不重复隐含制造 |
| upstream_dataset_requirement | 实际牌号成分供应商技术地理处理完成状态及交付接口；不用通用材料篮替代 |
| disclosure | 声明制造购买路线不存在及未知；工厂试验与后续烹饪暖盘燃料分开 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| gate | 纳入实际工厂操作供应商投入清洗表面处理验收重复试验废品返工残余及包装。排除安装用户烹饪燃料顾客食品及寿命供热服务；附带热不未经审查改变产品身份。 | esse-cookers; aga-rayburn |
| make_buy | 每个炉体灶面锅架燃烧器阀控制件记录厂内制造还是按实际完成状态购买。外购搪瓷炉体计铸造搪瓷一次；外购燃烧器计电机泵金属一次；外购阀计其合金一次。不将完成品购买与其隐含厂内配方并计。外购半成品仅计剩余工序。 | rangemaster-manufacture; aga-sustainability |
| conditional_routes | 不对每件产品强加铸造搪瓷溶剂电热器或单一燃料。对实际未列交换增添原子牌号化学部件燃料废物排放卡并重检；有证据的不存在为not_applicable，未知不是零。 | esse-cookers; rangemaster-gas; aga-rayburn |

## 6. 过程清单结构

### 过程图
| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| casting | 厂内铸铁件制造 | conditional | 仅实际熔炼、制模、浇铸、落砂与精整；外购铸件绕过此路线 | foreground | 1 kg |
| fabrication | 板材和框架加工 | conditional | 仅实际切割、冲压成形、焊接和机械加工 | foreground | 1 kg |
| finish | 清洗和表面处理 | conditional | 仅实际清洗、抛光、搪瓷或已指定的替代表面涂层；外购已处理炉体绕过此路线 | foreground | 1 kg |
| assembly | 配置装配 | required | 装配实际烹饪或暖盘结构与外购部件 | foreground | 1 kg |
| test | 工厂验收 | required | 实际气密性、点火、控制、燃烧功能或暖盘检查；仅已执行的试验消耗燃料 | foreground | 1 kg |
| dispatch | 包装及剩余公用服务 | required | 实际出厂包装及尚未分配的公用负荷 | foreground | 1 kg |

以下卡片为原子条件交换，不是强制配方。牌号配方试验物种及供应接口须匹配实际供应商场址记录；文献不确立通用化学组成。过程行及公用服务核对同一场址期间。退料及内部中间物流配对并在总厂门抵消；不把内部炉体再次作为外购。

### 过程：厂内铸铁件制造（`casting`）

#### 输入

##### 产品流

###### 铸造生铁，声明牌号（`iron_charge`）

仅实际外购铸造炉料；记录其自身成分分析。
- 选定流: 铸造生铁，声明牌号
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_iron_charge采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_iron_charge`
- 来源: `jrc-foundry-2024`

###### 分选铁废料炉料，声明成分（`iron_scrap`）

仅外部废铁；配对内部浇冒口不是第二次上游购买。
- 选定流: 分选铁废料炉料，声明成分
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_iron_scrap采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_iron_scrap`
- 来源: `jrc-foundry-2024`

###### 硅质造型砂（`silica_sand`）

仅实际砂型路线，计量补充量及再生库存。
- 选定流: 硅质造型砂
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_silica_sand采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_silica_sand`
- 来源: `jrc-foundry-2024`

###### 膨润土型砂粘结剂（`bentonite`）

仅实际湿型砂粘结剂；其他实际粘结剂另立卡片，不假定本配方。
- 选定流: 膨润土型砂粘结剂
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_bentonite采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_bentonite`
- 来源: `jrc-foundry-2024`

###### 铸造焦炭（`coke`）

仅实际焦炭炉；感应炉不分配焦炭。
- 选定流: 铸造焦炭
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_coke采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_coke`
- 来源: `jrc-foundry-2024`

###### 工厂交付接口外购电力（`casting_power`）

实际熔炼和精整分表负荷；自发电另记。
- 选定流: 工厂交付接口外购电力
- 流属性/单位: 能量 / kWh
- 数量规则: 采用cp_casting_power采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_casting_power`
- 来源: `jrc-foundry-2024`

###### 工业过程水（`casting_water`）

实际冷却补水；内部循环不是重复供水。
- 选定流: 工业过程水
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_casting_water采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_casting_water`
- 来源: `jrc-foundry-2024`

#### 输出

##### 废物流

###### 铸铁炉渣（`slag`）

仅实际出厂物流，记录自身成分及去向。
- 选定流: 铸铁炉渣
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_slag采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_slag`
- 来源: `jrc-foundry-2024`

###### 废硅质型砂（`spent_sand`）

仅实际出厂物流，记录自身成分及去向。
- 选定流: 废硅质型砂
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_spent_sand采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_spent_sand`
- 来源: `jrc-foundry-2024`

###### 捕集铸铁过滤粉尘（`foundry_dust`）

仅实际出厂物流，记录自身成分及去向。
- 选定流: 捕集铸铁过滤粉尘
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_foundry_dust采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_foundry_dust`
- 来源: `jrc-foundry-2024`

### 过程：板材和框架加工（`fabrication`）

#### 输入

##### 产品流

###### 冷轧低碳钢板，声明供应商牌号（`carbon_sheet`）

仅实际加工外壳框架或搪瓷基材；不指定通用牌号。
- 选定流: 冷轧低碳钢板，声明供应商牌号
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_carbon_sheet采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_carbon_sheet`
- 来源: `rangemaster-manufacture`

###### 不锈钢板，声明供应商牌号（`stainless_sheet`）

实际不锈钢灶面炉体路线；声明铬镍分析及表面状态。
- 选定流: 不锈钢板，声明供应商牌号
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_stainless_sheet采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_stainless_sheet`
- 来源: `rangemaster-manufacture`

###### 钢焊丝，声明合金牌号（`weld_wire`）

仅实际焊接接头；其他填充合金另行指定。
- 选定流: 钢焊丝，声明合金牌号
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_weld_wire采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_weld_wire`
- 来源: `rangemaster-manufacture`

###### 氩气保护气体（`argon`）

仅实际氩气保护焊；其他保护气组分另立行。
- 选定流: 氩气保护气体
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_argon采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_argon`
- 来源: `rangemaster-manufacture`

###### 矿物基纯切削油，声明配方（`cutting_oil`）

仅实际纯油切削；水乳化液浓缩物为独立供应配方。
- 选定流: 矿物基纯切削油，声明配方
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_cutting_oil采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_cutting_oil`
- 来源: `rangemaster-manufacture`

###### 工厂交付接口外购电力（`fabrication_power`）

实际切割成形焊接分表负荷。
- 选定流: 工厂交付接口外购电力
- 流属性/单位: 能量 / kWh
- 数量规则: 采用cp_fabrication_power采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_fabrication_power`
- 来源: `rangemaster-manufacture`

#### 输出

##### 废物流

###### 低碳钢边角料（`carbon_offcut`）

实际分类物流；记录湿干基准、油污染及自身分析。
- 选定流: 低碳钢边角料
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_carbon_offcut采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_carbon_offcut`
- 来源: `rangemaster-manufacture`

###### 不锈钢边角料（`stainless_offcut`）

实际分类物流；记录湿干基准、油污染及自身分析。
- 选定流: 不锈钢边角料
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_stainless_offcut采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_stainless_offcut`
- 来源: `rangemaster-manufacture`

###### 废矿物切削油（`spent_oil`）

实际分类物流；记录湿干基准、油污染及自身分析。
- 选定流: 废矿物切削油
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_spent_oil采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_spent_oil`
- 来源: `rangemaster-manufacture`

### 过程：清洗和表面处理（`finish`）

#### 输入

##### 产品流

###### 工业过程水（`wash_water`）

实际清洗及搪瓷浆补充水；循环另记。
- 选定流: 工业过程水
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_wash_water采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_wash_water`
- 来源: `rangemaster-manufacture`

###### 氢氧化钠，声明浓度（`sodium_hydroxide`）

仅场址确认的碱槽化学品；不是默认清洗配方。
- 选定流: 氢氧化钠，声明浓度
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_sodium_hydroxide采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_sodium_hydroxide`
- 来源: `rangemaster-manufacture`

###### 硅酸盐搪瓷熔块，声明供应商配方（`enamel_frit`）

仅实际搪瓷配方；要求供应商氧化物组成及保留涂层质量。
- 选定流: 硅酸盐搪瓷熔块，声明供应商配方
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_enamel_frit采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_enamel_frit`
- 来源: `rangemaster-manufacture`

###### 聚酯粉末涂料，声明供应商配方（`polyester_powder`）

仅实际替代粉末涂层；不自动叠加搪瓷。
- 选定流: 聚酯粉末涂料，声明供应商配方
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_polyester_powder采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_polyester_powder`
- 来源: `rangemaster-manufacture`

###### 二甲苯，声明异构体组成（`xylene`）

仅实际含溶剂配方；水性搪瓷或粉末不假定溶剂。
- 选定流: 二甲苯，声明异构体组成
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_xylene采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_xylene`
- 来源: `rangemaster-manufacture`

###### 工厂交付接口外购电力（`finish_power`）

实际抛光、水泵或电烧成负荷。
- 选定流: 工厂交付接口外购电力
- 流属性/单位: 能量 / kWh
- 数量规则: 采用cp_finish_power采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_finish_power`
- 来源: `rangemaster-manufacture`

###### 工厂交付接口天然气（`firing_gas`）

仅实际燃气搪瓷烧成或固化；计量组分及净热值。
- 选定流: 工厂交付接口天然气
- 流属性/单位: 能量 / MJ
- 数量规则: 采用cp_firing_gas采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_firing_gas`
- 来源: `rangemaster-manufacture`

#### 输出

##### 废物流

###### 搪瓷废水处理污泥（`enamel_sludge`）

仅实际外出物流；自身水分固体组分分析及处理接口。
- 选定流: 搪瓷废水处理污泥
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_enamel_sludge采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_enamel_sludge`
- 来源: `rangemaster-manufacture`

###### 金属表面处理废水，送处理（`finish_wastewater`）

仅实际外出物流；自身水分固体组分分析及处理接口。
- 选定流: 金属表面处理废水，送处理
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_finish_wastewater采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_finish_wastewater`
- 来源: `rangemaster-manufacture`

###### 含二甲苯废捕集介质（`solvent_media`）

仅实际外出物流；自身水分固体组分分析及处理接口。
- 选定流: 含二甲苯废捕集介质
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_solvent_media采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_solvent_media`
- 来源: `rangemaster-manufacture`

##### 基本流

###### 二甲苯，排向空气并声明区室（`xylene_air`）

仅实际计量或有物种证据的排放；捕集不等于破坏。
- 选定流: 二甲苯，排向空气并声明区室
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_xylene_air采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_xylene_air`
- 来源: `rangemaster-manufacture`

### 过程：配置装配（`assembly`）

#### 输入

##### 产品流

###### 外购已搪瓷铁质炉体（`bought_body`）

仅外购完整炉体；排除其重复铸造表面处理材料投入。
- 选定流: 外购已搪瓷铁质炉体
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_bought_body采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_bought_body`
- 来源: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### 外购铸铁锅架（`cast_support`）

仅实际外购锅架；内含铁和铸造仅计一次。
- 选定流: 外购铸铁锅架
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_cast_support采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_cast_support`
- 来源: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### 外购燃气烹饪燃烧器总成（`gas_burner`）

实际燃气配置，燃料喷嘴功率限定；内含金属仅计一次。
- 选定流: 外购燃气烹饪燃烧器总成
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_gas_burner采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_gas_burner`
- 来源: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### 外购燃油烹饪燃烧器总成（`oil_burner`）

实际液体燃料配置；内含电机泵及金属仅计一次。
- 选定流: 外购燃油烹饪燃烧器总成
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_oil_burner采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_oil_burner`
- 来源: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### 外购燃气安全阀（`gas_valve`）

仅实际燃气安全器件；不重复黄铜或钢负荷。
- 选定流: 外购燃气安全阀
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_gas_valve采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_gas_valve`
- 来源: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### 外购火花点火模块（`igniter`）

辅助点火不证明主要烹饪热源为电力。
- 选定流: 外购火花点火模块
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_igniter采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_igniter`
- 来源: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### 外购炉具控制板（`control`）

仅实际控制板；内含电子器件仅计一次。
- 选定流: 外购炉具控制板
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_control采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_control`
- 来源: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### 铝硅质耐火砖，声明牌号（`firebrick`）

仅实际燃烧室衬里，要求供应商化学组成。
- 选定流: 铝硅质耐火砖，声明牌号
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_firebrick采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_firebrick`
- 来源: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### 硼硅酸盐观察玻璃，声明牌号（`glass`）

仅实际确认玻璃化学组成；其他玻璃陶瓷另立卡片。
- 选定流: 硼硅酸盐观察玻璃，声明牌号
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_glass采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_glass`
- 来源: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### 玻璃纤维绳门封，声明配方（`seal`）

仅确认的实际门封配方；陶瓷纤维另需身份。
- 选定流: 玻璃纤维绳门封，声明配方
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_seal采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_seal`
- 来源: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### 钢紧固件，声明牌号（`fastener`）

实际供应紧固件及镀层；存在黄铜铜件时另立行。
- 选定流: 钢紧固件，声明牌号
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_fastener采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_fastener`
- 来源: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

###### 工厂交付接口外购电力（`assembly_power`）

仅实际可归属装配负荷。
- 选定流: 工厂交付接口外购电力
- 流属性/单位: 能量 / kWh
- 数量规则: 采用cp_assembly_power采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_assembly_power`
- 来源: `esse-cookers`; `rangemaster-gas`; `aga-rayburn`

#### 输出

### 过程：工厂验收（`test`）

#### 输入

##### 产品流

###### 工厂交付接口天然气（`test_gas`）

仅实际工厂天然气燃烧试验，不是全寿命烹饪燃料。
- 选定流: 工厂交付接口天然气
- 流属性/单位: 能量 / MJ
- 数量规则: 采用cp_test_gas采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_test_gas`
- 来源: `rangemaster-manufacture`

###### 丙烷试验燃料（`test_propane`）

仅实际丙烷试验；混合液化气要求独立实际混合物身份。
- 选定流: 丙烷试验燃料
- 流属性/单位: 能量 / MJ
- 数量规则: 采用cp_test_propane采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_test_propane`
- 来源: `rangemaster-manufacture`

###### 煤油试验燃料，声明规格（`test_oil`）

仅实际煤油试验；HVO或其他实际油品另行识别。
- 选定流: 煤油试验燃料，声明规格
- 流属性/单位: 能量 / MJ
- 数量规则: 采用cp_test_oil采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_test_oil`
- 来源: `rangemaster-manufacture`

###### 木段试验燃料，声明树种和含水率（`test_wood`）

仅实际木材试验；实际其他固体燃料另立行。
- 选定流: 木段试验燃料，声明树种和含水率
- 流属性/单位: 能量 / MJ
- 数量规则: 采用cp_test_wood采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_test_wood`
- 来源: `rangemaster-manufacture`

###### 工厂交付接口外购电力（`test_power`）

实际试验仪器及辅助点火控制。
- 选定流: 工厂交付接口外购电力
- 流属性/单位: 能量 / kWh
- 数量规则: 采用cp_test_power采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_test_power`
- 来源: `rangemaster-manufacture`

###### 工业过程水（`test_water`）

仅实际工厂试验用水；参考净质量排除烹饪试验食品。
- 选定流: 工业过程水
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_test_water采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_test_water`
- 来源: `rangemaster-manufacture`

#### 输出

##### 废物流

###### 木燃烧试验灰（`wood_ash`）

仅实际试验灰；自身未燃碳及水分析。
- 选定流: 木燃烧试验灰
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_wood_ash采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_wood_ash`
- 来源: `rangemaster-manufacture`

###### 工厂试验废水，送处理（`test_drain`）

实际排水及处理接口；回流单独配对。
- 选定流: 工厂试验废水，送处理
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_test_drain采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_test_drain`
- 来源: `rangemaster-manufacture`

##### 基本流

###### 化石二氧化碳，排向空气（`fossil_co2`）

仅实际按物种粒径区分的工厂排放；不用全寿命排放或仅碳平衡推断CO及NOx。
- 选定流: 化石二氧化碳，排向空气
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_fossil_co2采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_fossil_co2`
- 来源: `rangemaster-manufacture`

###### 生物源二氧化碳，排向空气（`biogenic_co2`）

仅实际按物种粒径区分的工厂排放；不用全寿命排放或仅碳平衡推断CO及NOx。
- 选定流: 生物源二氧化碳，排向空气
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_biogenic_co2采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_biogenic_co2`
- 来源: `rangemaster-manufacture`

###### 一氧化碳，排向空气（`carbon_monoxide`）

仅实际按物种粒径区分的工厂排放；不用全寿命排放或仅碳平衡推断CO及NOx。
- 选定流: 一氧化碳，排向空气
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_carbon_monoxide采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_carbon_monoxide`
- 来源: `rangemaster-manufacture`

###### 一氧化氮，排向空气（`nitric_oxide`）

仅实际按物种粒径区分的工厂排放；不用全寿命排放或仅碳平衡推断CO及NOx。
- 选定流: 一氧化氮，排向空气
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_nitric_oxide采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_nitric_oxide`
- 来源: `rangemaster-manufacture`

###### 二氧化氮，排向空气（`nitrogen_dioxide`）

仅实际按物种粒径区分的工厂排放；不用全寿命排放或仅碳平衡推断CO及NOx。
- 选定流: 二氧化氮，排向空气
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_nitrogen_dioxide采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_nitrogen_dioxide`
- 来源: `rangemaster-manufacture`

###### PM10颗粒物，排向空气（`pm10`）

仅实际按物种粒径区分的工厂排放；不用全寿命排放或仅碳平衡推断CO及NOx。
- 选定流: PM10颗粒物，排向空气
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_pm10采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_pm10`
- 来源: `rangemaster-manufacture`

### 过程：包装及剩余公用服务（`dispatch`）

#### 输入

##### 产品流

###### 瓦楞纸板运输包装（`corrugated`）

仅实际包装，排除产品净质量；按退回记录分配实际复用次数。
- 选定流: 瓦楞纸板运输包装
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_corrugated采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_corrugated`
- 来源: `aga-sustainability`

###### 木质运输托盘（`wood_pallet`）

仅实际包装，排除产品净质量；按退回记录分配实际复用次数。
- 选定流: 木质运输托盘
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_wood_pallet采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_wood_pallet`
- 来源: `aga-sustainability`

###### 聚乙烯保护泡沫（`pe_foam`）

仅实际包装，排除产品净质量；按退回记录分配实际复用次数。
- 选定流: 聚乙烯保护泡沫
- 流属性/单位: 质量 / kg
- 数量规则: 采用cp_pe_foam采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_pe_foam`
- 来源: `aga-sustainability`

###### 工厂交付接口外购电力（`residual_power`）

仅铸造加工表面处理装配试验包装之后未分配的场址剩余；核对同期间单位。
- 选定流: 工厂交付接口外购电力
- 流属性/单位: 能量 / kWh
- 数量规则: 采用cp_residual_power采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_residual_power`
- 来源: `aga-sustainability`

###### 工厂交付接口外购蒸汽热（`purchased_heat`）

仅实际外购热；同一焓基准计量供给及凝结水返回；不重复供应商燃料。
- 选定流: 工厂交付接口外购蒸汽热
- 流属性/单位: 能量 / MJ
- 数量规则: 采用cp_purchased_heat采集实际可归属期间交换，归一化为每 1 kg 参考流。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_purchased_heat`
- 来源: `aga-sustainability`

#### 输出

##### 产品流

###### 家用非电热铁或钢制烹饪器具及暖盘器（`reference_product`）

出厂实际验收完整声明配置，未充装用户燃料；排除包装试验食品及游离试验水。
- 选定流: 家用非电热铁或钢制烹饪器具及暖盘器
- 流属性/单位: 质量 / kg
- 数量规则: 1 千克
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_mass`
- 来源: `aga-sustainability`

## 7. 分配与共产品处理
| rule_id | 规则 | source_ids |
| --- | --- | --- |
| allocation | 分开型号配置及燃料材料路线；优先细分计量工序。剩余共享工作按有记录的因果机器时表面积计量热或试验次数分配。验收D保留废品返工Q。记录实际废料废物共产品状态及一致上游循环分配；配对内部回流不自动赋予避免负荷或信用。 | jrc-foundry-2024; aga-sustainability |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference_product | measurement | 型号；配置；期间；序列号；验收校准净质量；N；D；BOM；废品 | 经校准秤称量每台验收完整声明器具；排除运输包装废品游离试验水及试验食品；核对验收序列号与BOM；D合计同配置验收净质量。 | kg | 每台验收品 | 匹配报告期间 | 同配置场址 | 每 1 kg 参考流 | 校准；验收；净BOM |
| cp_iron_charge | casting | iron_charge | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_iron_scrap | casting | iron_scrap | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_silica_sand | casting | silica_sand | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_bentonite | casting | bentonite | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_coke | casting | coke | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_casting_power | casting | casting_power | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kWh | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_casting_water | casting | casting_water | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_slag | casting | slag | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_spent_sand | casting | spent_sand | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_foundry_dust | casting | foundry_dust | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_carbon_sheet | fabrication | carbon_sheet | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_stainless_sheet | fabrication | stainless_sheet | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_weld_wire | fabrication | weld_wire | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_argon | fabrication | argon | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_cutting_oil | fabrication | cutting_oil | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_fabrication_power | fabrication | fabrication_power | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kWh | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_carbon_offcut | fabrication | carbon_offcut | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_stainless_offcut | fabrication | stainless_offcut | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_spent_oil | fabrication | spent_oil | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_wash_water | finish | wash_water | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_sodium_hydroxide | finish | sodium_hydroxide | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_enamel_frit | finish | enamel_frit | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_polyester_powder | finish | polyester_powder | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_xylene | finish | xylene | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_finish_power | finish | finish_power | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kWh | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_firing_gas | finish | firing_gas | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 燃料质量或表计体积采用实际组成压力温度水分及净热值；记录实际重复试验及燃料库存，不用用户燃料。 | MJ | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_enamel_sludge | finish | enamel_sludge | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_finish_wastewater | finish | finish_wastewater | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_solvent_media | finish | solvent_media | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_xylene_air | finish | xylene_air | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 以匹配浓度累计烟气排放流量采样时长湿干及氧基准计量实际物种与接受区室；有记录物种因子仅在实际燃料工艺条件下替代。不得仅碳平衡推断CO及NOx；保留实测颗粒粒径定义。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_bought_body | assembly | bought_body | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_cast_support | assembly | cast_support | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_gas_burner | assembly | gas_burner | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_oil_burner | assembly | oil_burner | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_gas_valve | assembly | gas_valve | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_igniter | assembly | igniter | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_control | assembly | control | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_firebrick | assembly | firebrick | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_glass | assembly | glass | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_seal | assembly | seal | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_fastener | assembly | fastener | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_assembly_power | assembly | assembly_power | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kWh | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_test_gas | test | test_gas | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 燃料质量或表计体积采用实际组成压力温度水分及净热值；记录实际重复试验及燃料库存，不用用户燃料。 | MJ | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_test_propane | test | test_propane | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 燃料质量或表计体积采用实际组成压力温度水分及净热值；记录实际重复试验及燃料库存，不用用户燃料。 | MJ | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_test_oil | test | test_oil | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 燃料质量或表计体积采用实际组成压力温度水分及净热值；记录实际重复试验及燃料库存，不用用户燃料。 | MJ | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_test_wood | test | test_wood | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 燃料质量或表计体积采用实际组成压力温度水分及净热值；记录实际重复试验及燃料库存，不用用户燃料。 | MJ | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_test_power | test | test_power | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kWh | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_test_water | test | test_water | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_wood_ash | test | wood_ash | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_test_drain | test | test_drain | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_fossil_co2 | test | fossil_co2 | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 以匹配浓度累计烟气排放流量采样时长湿干及氧基准计量实际物种与接受区室；有记录物种因子仅在实际燃料工艺条件下替代。不得仅碳平衡推断CO及NOx；保留实测颗粒粒径定义。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_biogenic_co2 | test | biogenic_co2 | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 以匹配浓度累计烟气排放流量采样时长湿干及氧基准计量实际物种与接受区室；有记录物种因子仅在实际燃料工艺条件下替代。不得仅碳平衡推断CO及NOx；保留实测颗粒粒径定义。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_carbon_monoxide | test | carbon_monoxide | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 以匹配浓度累计烟气排放流量采样时长湿干及氧基准计量实际物种与接受区室；有记录物种因子仅在实际燃料工艺条件下替代。不得仅碳平衡推断CO及NOx；保留实测颗粒粒径定义。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_nitric_oxide | test | nitric_oxide | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 以匹配浓度累计烟气排放流量采样时长湿干及氧基准计量实际物种与接受区室；有记录物种因子仅在实际燃料工艺条件下替代。不得仅碳平衡推断CO及NOx；保留实测颗粒粒径定义。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_nitrogen_dioxide | test | nitrogen_dioxide | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 以匹配浓度累计烟气排放流量采样时长湿干及氧基准计量实际物种与接受区室；有记录物种因子仅在实际燃料工艺条件下替代。不得仅碳平衡推断CO及NOx；保留实测颗粒粒径定义。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_pm10 | test | pm10 | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 以匹配浓度累计烟气排放流量采样时长湿干及氧基准计量实际物种与接受区室；有记录物种因子仅在实际燃料工艺条件下替代。不得仅碳平衡推断CO及NOx；保留实测颗粒粒径定义。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_corrugated | dispatch | corrugated | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_wood_pallet | dispatch | wood_pallet | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_pe_foam | dispatch | pe_foam | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 经校准计量称重采集实际可归属期间Q，核对收据期初期末库存内部配对转移及废品返工分配。实体材料记录自身牌号浓度水分干湿分析；交付部件确认完成状态及一次上游覆盖。 | kg | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_residual_power | dispatch | residual_power | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 同期间场址电力平衡核对购入加实际自发减出口及储存变化；扣除全部已分配铸造加工表面处理装配试验包装负荷，仅按实测因果服务分配未分配剩余。按测量期间单位分配不确定性调查负剩余，不截零或将全场址总量叠加分表。 | kWh | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |
| cp_purchased_heat | dispatch | purchased_heat | measurement | 期间；配置；Q；原单位；供应接口或区室；表计；库存；分配；实体自身分析；不确定性 | 同一参考下计量交付蒸汽质量和供给焓，并单独计量实际凝结水返回质量焓；kg乘MJ/kg得净MJ。核对已分配工序及剩余；上游供应燃料计一次，厂内发热单独记实际燃料排放。 | MJ | 每批试验或表计期间 | 匹配报告期间 | 声明工序配置 | 每 1 kg 参考流 | 校准记录；分析；收据；供应；不确定性预算 |

### 计算规则
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | 每项可归属期间交换Q / D；保留原分子单位；reference_product = 1 kg。 | Q; D; cp_mass | q_ref | rangemaster-manufacture |

### 数据质量要求
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all applicable rows | 确认实际UUID属性单位牌号配方燃料供应状态地理及下游废物处理接口；明确未解决，不用通用替代。 | 实际供应商场址记录及身份直读 |
| coverage | all exchanges | 同配置BOM期间试验；记录实际路线不存在。缺实际数量范围配方保留未知不是零；不从样册使用规格推工厂默认值。 | 实测原记录路线矩阵及不确定性 |

## 9. 校验规则
| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| reference_check | reference_product | 要求正D及N、校准同配置验收净质量及包含废品返工的同期间Q；1 kg输出与Q/D须核对。烹饪供暖混合需主要功能分类依据证据。 | esse-cookers; aga-rayburn |
| water_closure | physical water and moisture records | 每股湿物流使用自身实测水分和干湿基准，包括产品污泥废水及残余。外部水加投入水分加期初库存及反应生成水等于产品保留水分加期末库存蒸发排水及反应耗水。内部回流配对；不重复计循环。按实际表计采样分配联合不确定性调查残差，不用通用容差。 | rangemaster-manufacture; jrc-foundry-2024 |
| metal_species_closure | physical material and species records | 每个实际元素物种的每项投入产品废料炉渣污泥废水排放用其自身匹配分析及干湿基准。纳入期初期末库存反应转化保留及配对内部回流抵消。总材料质量不是所含铁铬镍；按实际测量采样分配联合不确定性调查闭合。 | jrc-foundry-2024 |
| solvent_closure | physical solvent records | 每种实际溶剂将新投入期初库存与期末库存产品保留回收溶剂捕集介质所含溶剂已核实破坏空气排放及非空气残余核对。未知溶剂残差不自动归为空气排放。回收捕集不是破坏；配对返溶剂抵消一次。按实际联合不确定性调查残差；无路线不假定溶剂。 | rangemaster-manufacture |
| utility_closure | utility records | 工序及公用服务行核对同一实测场址期间单位；公用服务仅未分配剩余。不将全厂表总量叠加已分配分表。核对购入实际自发出口储存变化及蒸汽凝结水返回；按匹配表计采样期间库存及分配不确定性调查负剩余，不截零。外购电力不是特定焚烧发电输出；发电燃料不是外购电力。 | rangemaster-manufacture |
| emission_evidence | elementary emissions and fuel records | 工厂燃烧烧成排放保留在制造；顾客使用分开。燃料碳可闭合总碳但不能证明CO、NO或NO2数量。要求物种实测因子证据实际区室及化石生物源划分。NOx按NO2当量是约定不是纯NO2；实测粒径PM10及PM2.5不同，不从未分粒径粉尘推断。捕集介质处理残余需自身分析。 | jrc-foundry-2024; esse-cookers |

## 10. 发布数据集画像
| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明配置制造供应；独立定义烹饪服务的下游process/lifecyclemodel投影 |
| excluded_use | 通用炉具燃料寿命或等效默认；未解决混合分类；从工厂质量提出使用阶段结论 |
| required_metadata | 限定D/N/M及原Q期间制造购买实际路线供应链接验收及下游服务边界 |
| required_quality_disclosure | 未解决UUID配方数量独立暖盘器证据及混合分类；测量分配不确定性完整性 |
| update_trigger | 型号BOM燃料表面供应商试验路线变更或证据身份缺口解决 |

## 11. 数据源
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0 | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, p.240, 4482/44821/44822 https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅类别及相邻分类边界 |
| esse-cookers | handbook | ESSE Range Cookers, COOK1023 ©2023, pp.9,23–27 https://www.esse.com/wp-content/themes/esse/media-library/brochures/esse-cooker-brochure.pdf | 实际燃木烹饪结构手工装配及烹饪供暖反例；排除电热页面；无工厂数量 |
| rangemaster-gas | handbook | Rangemaster Built-In Appliances, undated inspected original, p.9 https://www.rangemaster.co.uk/sites/default/files/2019-05/RM_Built-In_Brochure_Sept2018_V1.pdf | 不锈钢燃气灶铸铁锅架LPG套件；相邻电热型号为反证 |
| rangemaster-manufacture | handbook | Rangemaster Quick Guide, undated inspected original, pp.2–3 https://www.rangemaster.co.uk/sites/default/files/2021-02/Rangemaster%20Quick%20Guide.pdf | 实际炉具钢压制切割清洗抛光搪瓷折叠框架及试验；仅条件路线，无通用配方数量 |
| aga-sustainability | handbook | AGA Sustainability, publisher HTML https://old.agaliving.com/buying/sustainability | 实际铸铁炉具熔炼包装；不采用环境宣传及比例作因子 |
| aga-rayburn | handbook | AGA Rayburn, publisher HTML https://www.agaliving.com/products/aga-rayburn/ | 燃油燃气铸铁烹饪暖炉搪瓷；组合供暖需实际主要功能审查 |
| jrc-foundry-2024 | official_guidance | JRC Smitheries and Foundries BREF, EUR 40127, 2024, section 2.2.1.1, pp.67–68, DOI 10.2760/4805267 https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2024-12/SF_BREF_2024-bref.pdf | 仅条件实际铸造工艺分解；不是家用炉具配方排放因子或通用工序要求 |
